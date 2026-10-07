import { error, redirect } from '@sveltejs/kit';
import { topicRouteByNumber, routes, sharedRoutes } from '#lib/book.js';
import { loadDoc } from '#lib/pageData.js';
import { DEFAULT_LOCALE, RETIRED_LOCALES, localePrefix } from '#lib/locales.js';

const strip = (route) => route.replace(/^\/|\/$/g, '');

/**
 * Prerender the shared reference pages and the
 * old unprefixed and retired-slug URLs (which redirect), without relying on crawling.
 */
export function entries() {
	const prefix = localePrefix(DEFAULT_LOCALE);
	return [
		...sharedRoutes().map(({ route }) => ({ path: strip(route) })),
		...routes(DEFAULT_LOCALE).map(({ route }) => ({ path: strip(route.slice(prefix.length)) })),
		// Old unprefixed URLs, "/chapters/<slug>/" (the book's directory became topics/).
		...routes(DEFAULT_LOCALE).map(({ route }) => ({
			path: strip(route.slice(prefix.length).replace('/topics/', '/chapters/'))
		})),
		// Retired locale slugs: the home page and every topic, at the old URLs,
		// which carried the English "chapters/<slug>" path.
		...Object.keys(RETIRED_LOCALES).flatMap((from) =>
			[`/`, ...routes(DEFAULT_LOCALE).map(({ route }) => route.slice(prefix.length).replace('/topics/', '/chapters/'))].map((route) => ({
				path: strip(`/${from}${route}`)
			}))
		)
	];
}

export function load({ params }) {
	// A rest parameter keeps the trailing slash that trailingSlash: 'always' adds.
	const route = `/${params.path.replace(/\/+$/, '')}/`;
	const [first, ...rest] = params.path.split('/');
	if (first in RETIRED_LOCALES) {
		const to = RETIRED_LOCALES[first];
		// Old topic URLs were "/<locale>/chapters/<english-slug>/"; the topic
		// number leads the slug in every locale.
		const number = rest[0] === 'chapters' ? /^\d{2}-\d{2}/.exec(rest[1] ?? '')?.[0] : null;
		const target = number
			? topicRouteByNumber(to, number)
			: `/${to}/${rest.join('/')}`.replace(/\/+$/, '') + '/';
		// Redirect locations must be ASCII, so percent-encode translated slugs.
		if (target && loadDoc(target)) redirect(308, encodeURI(target));
	}
	const data = loadDoc(route);
	if (data) return data;
	// Old "/chapters/<slug>/" URLs of the default locale (unprefixed, and before the rename).
	const legacy = first === 'chapters' ? /^\d{2}-\d{2}/.exec(rest[0] ?? '')?.[0] : null;
	const legacyTarget = legacy && topicRouteByNumber(DEFAULT_LOCALE, legacy);
	if (legacyTarget) redirect(308, encodeURI(legacyTarget));
	// Old URLs of the default locale were unprefixed.
	const prefixed = `${localePrefix(DEFAULT_LOCALE)}${route}`;
	if (loadDoc(prefixed)) redirect(308, encodeURI(prefixed));
	error(404, `No page at ${route}`);
}
