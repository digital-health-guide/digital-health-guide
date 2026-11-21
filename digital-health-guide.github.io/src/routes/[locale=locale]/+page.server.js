import { error } from '@sveltejs/kit';
import { loadDoc } from '#lib/pageData.js';
import { topicRoute } from '#lib/book.js';
import { TILE_TOPICS } from '#lib/tiles.js';
import { PREFIXED_LOCALE_SLUGS } from '#lib/locales.js';

export function entries() {
	return [...PREFIXED_LOCALE_SLUGS].map((locale) => ({ locale }));
}

export function load({ params }) {
	const data = loadDoc(`/${params.locale}/`);
	if (!data) error(404, `The ${params.locale} book index is missing from content/.`);
	const tileHrefs = TILE_TOPICS.map((n) => topicRoute(params.locale, n) ?? `/${params.locale}/`);
	return { ...data, tileHrefs };
}
