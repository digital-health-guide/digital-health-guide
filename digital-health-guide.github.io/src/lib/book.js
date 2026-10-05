// The book, read from the vendored Markdown in content/.
//
// Everything here runs at build time only: it is imported from *.server.js
// modules, so neither the Markdown nor the renderer reaches the browser.

import { renderMarkdown } from './markdown.js';
import { routeFor } from './paths.js';
import { DEFAULT_LOCALE, LOCALES, LOCALE_SLUGS, localePrefix } from './locales.js';

const raw = import.meta.glob('/content/**/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

/** @type {Record<string, string>} content path -> Markdown source */
const sources = Object.fromEntries(
	Object.entries(raw).map(([key, value]) => [key.replace('/content/', ''), value])
);

const firstHeading = (markdown) => {
	const match = /^#\s+(.+)$/m.exec(markdown);
	return match ? match[1].trim() : '';
};

/** The locale a content path belongs to, or null for shared reference material. */
function localeOfFile(file) {
	const slug = file.split('/')[0];
	return LOCALE_SLUGS.has(slug) ? slug : null;
}

/**
 * Topics for one locale, in book order — the directory names are
 * zero-padded and sortable, e.g. "01-00-introduction".
 *
 * The topic number comes from the *slug*, not the heading text: the
 * heading reads "Topic 1.0 — …" in English locales and "Pennod 1.0 — …"
 * in Welsh, so parsing the slug is the one thing that works for every
 * locale without hard-coding a translation of the word "Topic". Slugs
 * starting "00-" are front matter (the preface) and carry no topic
 * number, matching the book's own convention.
 */
function topicsFor(locale) {
	// "<locale>/<topics-dir>/<slug>/index.md"; the directory and the slug are
	// both translated per locale.
	const topicFile = new RegExp(`^${locale}/[^/]+/(\\d{2}-\\d{2}-[^/]+)/index\\.md$`);
	return Object.keys(sources)
		.filter((file) => topicFile.test(file))
		.sort()
		.map((file) => {
			const slug = /** @type {RegExpExecArray} */ (topicFile.exec(file))[1];
			const title = firstHeading(sources[file]);
			const match = /^(\d{2})-(\d{2})-/.exec(slug);
			const number = match && match[1] !== '00' ? `${Number(match[1])}.${Number(match[2])}` : null;
			// Strip a leading "<word> N.M — " (any language) for a clean short name.
			const dash = /[—–-]\s*(.+)$/.exec(title);
			const name = number && dash ? dash[1].trim() : title;
			return { file, route: /** @type {string} */ (routeFor(file)), title, number, name, slug };
		});
}

const topicsByLocale = new Map(LOCALES.map(({ slug }) => [slug, topicsFor(slug)]));

/** Resolve a topic number such as "3.4" to its route within one locale. */
function topicHrefFor(locale) {
	const routeByNumber = new Map(
		(topicsByLocale.get(locale) ?? []).filter((c) => c.number).map((c) => [c.number, c.route])
	);
	return (number) => routeByNumber.get(number) ?? null;
}

/**
 * Every route this site publishes.
 *
 * With no argument: every route, across every locale — for the sitemap.
 * With a locale: that locale's own topics and home page; the default
 * locale's list leaves out the shared, unlocalized reference material
 * (glossary, index, style guide, spec); see sharedRoutes().
 */
export function routes(locale) {
	const all = Object.keys(sources)
		.map((file) => ({ file, route: routeFor(file), locale: localeOfFile(file) }))
		// Every locale's own home page is served by its own +page.server.js,
		// not the [...path] catch-all — exclude "/" and "/<locale>/" alike.
		.filter((entry) => entry.route && !LOCALES.some(({ slug }) => entry.route === `${localePrefix(slug)}/`))
		// spec/README.md is a byte-for-byte copy of spec/index.md in the book.
		.filter((entry) => entry.file !== 'spec/README.md');
	if (!locale) return all;
	return all.filter((entry) => entry.locale === locale);
}

/** Shared, unlocalized reference pages, served unprefixed. */
export function sharedRoutes() {
	return routes().filter((entry) => entry.locale === null);
}

/** The locale a route belongs to: the leading `/<slug>/…` segment, or the default locale. */
function localeForRoute(route) {
	for (const { slug } of LOCALES) {
		const prefix = localePrefix(slug);
		if (route === `${prefix}/` || route.startsWith(`${prefix}/`)) return slug;
	}
	return DEFAULT_LOCALE;
}

/**
 * Render one document for a page load.
 *
 * @param {string} route e.g. "/topics/01-00-introduction/" or "/cy-001/topics/01-00-introduction/"
 */
export function document(route) {
	const locale = localeForRoute(route);
	const entry =
		routes().find((candidate) => candidate.route === route) ??
		(route === `${localePrefix(locale)}/` ? { file: `${locale}/index.md`, route } : null);
	if (!entry) return null;

	const rendered = renderMarkdown(sources[entry.file], {
		file: entry.file,
		route,
		locale,
		topicHref: topicHrefFor(locale)
	});
	const topics = topicsByLocale.get(locale) ?? [];
	const index = topics.findIndex((topic) => topic.route === route);
	const sibling = (offset) => {
		const topic = topics[index + offset];
		return index === -1 || !topic ? null : { title: topic.title, route: topic.route };
	};

	return {
		route,
		file: entry.file,
		locale,
		title: rendered.title,
		subtitle: rendered.subtitle,
		summary: rendered.summary,
		html: rendered.html,
		headings: rendered.headings,
		previous: sibling(-1),
		next: sibling(1)
	};
}

/** Topics for one locale, for building navigation/contents. */
export function topics(locale) {
	return topicsByLocale.get(locale) ?? [];
}

/**
 * The equivalent route for `route` in `toLocale`, for cross-locale
 * (`hreflang`) links. Topic directories and slugs are translated per
 * locale, so topics are matched by their shared "NN-NN-" number prefix.
 */
export function equivalentRoute(route, toLocale) {
	const fromLocale = localeForRoute(route);
	const fromPrefix = localePrefix(fromLocale);
	const suffix = fromPrefix && route.startsWith(fromPrefix) ? route.slice(fromPrefix.length) : route;
	if (suffix === '/') return `${localePrefix(toLocale)}/`;
	// Shared, unlocalized docs (glossary, spec, …) have exactly one route,
	// the same for every locale — nothing to substitute.
	const from = (topicsByLocale.get(fromLocale) ?? []).find((topic) => topic.route === route);
	if (!from) return null;
	const number = from.slug.slice(0, 5);
	const to = (topicsByLocale.get(toLocale) ?? []).find((topic) => topic.slug.startsWith(number));
	return to ? to.route : null;
}

/**
 * A topic's route in `locale`, found by the "NN-NN" number at the start of
 * its slug (shared by every locale), or null.
 */
export function topicRouteByNumber(locale, number) {
	return topicsByLocale.get(locale)?.find((topic) => topic.slug.startsWith(number))?.route ?? null;
}
