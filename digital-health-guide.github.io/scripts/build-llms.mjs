// Builds build/llms.txt and build/llms.json for AI agents from the vendored
// content (content/<locale>/index.md), so they can never drift from the book.
// Usage: node scripts/build-llms.mjs [build-dir]
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { LOCALES, DEFAULT_LOCALE } from '../src/lib/locales.js';
import { SITE_URL, SITE_NAME, REPOSITORY } from '../src/lib/site.js';

const BUILD = process.argv[2] ?? 'build';
const SUMMARY =
	'A practical handbook of best practices for delivering digital services in health and social care organizations, published in fifteen locales.';

// "- 1 Foundations" is a part; "  - [1.0 Title](dir/slug/)" is a topic.
function contents(locale) {
	const parts = [];
	for (const line of readFileSync(join('content', locale, 'index.md'), 'utf8').split('\n')) {
		const part = /^- (\d+) (.+)$/.exec(line);
		if (part) parts.push({ number: part[1], title: part[2], topics: [] });
		const topic = /^\s+- \[(\d+\.\d+) (.+)\]\(([^)]+)\/\)$/.exec(line);
		if (topic && parts.length) {
			const [, number, title, path] = topic;
			parts.at(-1).topics.push({ number, title, url: `${SITE_URL}/${locale}/${encodeURI(path)}/` });
		}
	}
	return parts;
}

const locales = LOCALES.map(({ slug, label }) => ({
	slug,
	label,
	home: `${SITE_URL}/${slug}/`,
	parts: contents(slug)
}));

const lines = [`# ${SITE_NAME}`, '', `> ${SUMMARY}`, '', 'The book is the source of truth; every page is plain prerendered HTML. Each topic is also Markdown in the repository.', ''];
lines.push('## Site', '', `- [Home](${SITE_URL}/): redirects to the ${DEFAULT_LOCALE} edition`, `- [Sitemap](${SITE_URL}/sitemap.xml)`, `- [Search index](${SITE_URL}/search-index.json)`, `- [Glossary](${SITE_URL}/glossary/)`, `- [Subject index](${SITE_URL}/subject-index/)`, `- [Style guide](${SITE_URL}/style-guide/)`, `- [Specification](${SITE_URL}/spec/)`, `- [Source repository](${REPOSITORY})`, '');
const en = locales.find((l) => l.slug === DEFAULT_LOCALE);
for (const part of en.parts) {
	lines.push(`## ${part.number} ${part.title}`, '');
	for (const t of part.topics) lines.push(`- [${t.number} ${t.title}](${t.url})`);
	lines.push('');
}
lines.push('## Optional: other locales', '');
for (const l of locales.filter((l) => l.slug !== DEFAULT_LOCALE)) lines.push(`- [${l.label} (${l.slug})](${l.home})`);
lines.push('');
writeFileSync(join(BUILD, 'llms.txt'), lines.join('\n'));

writeFileSync(
	join(BUILD, 'llms.json'),
	JSON.stringify({ name: SITE_NAME, description: SUMMARY, url: SITE_URL, repository: REPOSITORY, defaultLocale: DEFAULT_LOCALE, locales }, null, 1) + '\n'
);
console.log(`llms: ${locales.length} locales, ${en.parts.reduce((n, p) => n + p.topics.length, 0)} topics in ${DEFAULT_LOCALE}`);
