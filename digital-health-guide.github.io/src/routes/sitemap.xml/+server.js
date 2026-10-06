import { equivalentRoute, routes } from '#lib/book.js';
import { SITE_URL } from '#lib/site.js';
import { DEFAULT_LOCALE, HREFLANG_BY_SLUG, LOCALES, localePrefix } from '#lib/locales.js';

// See spec/sitemap/index.md.
export const prerender = true;

const loc = (route) => `${SITE_URL}${encodeURI(route)}`;

/** `<xhtml:link rel="alternate">` for every locale that has this page, plus x-default. */
function alternates(route) {
	const links = LOCALES.map(({ slug }) => [slug, equivalentRoute(route, slug)]).filter(([, to]) => to);
	// Shared pages (glossary, spec, …) have a single route and no alternates.
	if (links.length < 2) return '';
	const link = (hreflang, to) =>
		`\n\t\t<xhtml:link rel="alternate" hreflang="${hreflang}" href="${loc(to)}"/>`;
	const fallback = links.find(([slug]) => slug === DEFAULT_LOCALE);
	return (
		links.map(([slug, to]) => link(HREFLANG_BY_SLUG[slug], to)).join('') +
		(fallback ? link('x-default', fallback[1]) : '')
	);
}

export function GET() {
	const homes = LOCALES.map(({ slug }) => `${localePrefix(slug)}/`);
	const urls = [...homes, ...routes().map(({ route }) => route)];
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map((route) => `\t<url>\n\t\t<loc>${loc(route)}</loc>${alternates(route)}\n\t</url>`).join('\n')}
</urlset>
`;
	return new Response(body, { headers: { 'content-type': 'application/xml' } });
}
