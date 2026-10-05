import { error, redirect } from '@sveltejs/kit';
import { routes, topicRouteByNumber } from '#lib/book.js';
import { loadDoc } from '#lib/pageData.js';
import { DEFAULT_LOCALE, PREFIXED_LOCALE_SLUGS, localePrefix } from '#lib/locales.js';

/** Prerender every document this locale publishes, without relying on crawling. */
export function entries() {
	// Old URLs were "/<locale>/chapters/<english-slug>/", before the book's
	// directory became topics/ with per-locale translated names; they redirect.
	const legacy = routes(DEFAULT_LOCALE).map(({ route }) =>
		route.slice(`${localePrefix(DEFAULT_LOCALE)}/`.length).replace('topics/', 'chapters/').replace(/\/+$/, '')
	);
	return [...PREFIXED_LOCALE_SLUGS].flatMap((locale) => [
		...routes(locale).map(({ route }) => ({
			locale,
			// route is "/<locale>/<topics-dir>/<slug>/"; strip both the locale prefix
			// and the trailing slash to get the [...path] rest-parameter value.
			path: route.slice(`/${locale}/`.length).replace(/\/+$/, '')
		})),
		...legacy.map((path) => ({ locale, path }))
	]);
}

export function load({ params }) {
	// A rest parameter keeps the trailing slash that trailingSlash: 'always' adds.
	const route = `/${params.locale}/${params.path.replace(/\/+$/, '')}/`;
	const data = loadDoc(route);
	if (!data) {
		const [first, slug] = params.path.split('/');
		const number = first === 'chapters' ? /^\d{2}-\d{2}/.exec(slug ?? '')?.[0] : null;
		const target = number && topicRouteByNumber(params.locale, number);
		if (target) redirect(308, encodeURI(target));
	}
	if (!data) error(404, `No page at ${route}`);
	return data;
}
