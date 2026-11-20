// The book's locales — the source of truth for both the content sync script
// (bin/sync-content.mjs) and the site's routing/UI. Keep in sync with
// ../digital-health-guide/locales/*.
//
// `en-gb` is the default locale: it is the book's source of truth. Every
// locale, the default included, is served under `/<slug>/`. The old unprefixed
// URLs (`/`, `/topics/…`) redirect to the `/en-gb/` equivalents.

/** @type {{ slug: string, label: string, hreflang: string }[]} */
// Sorted alphabetically by slug (ar-001, ar-dz, ar-eg, bn-001, bn-bd, bn-in, cy-001, cy-gb, da-001, de-001, en-001, en-gb,
// en-gb-oxendict, en-us, es-001, es-es, es-mx, fr-001, fr-ca, fr-fr, hi-001, id-001, id-my, is-001, it-001, it-it, ja-001, ko-001, nl-001, pt-001, pt-br, pt-pt, ru-001, ru-by, ru-ru, sv-001, sw-001, th-001, th-th, tr-001, tr-tr, ur-001, vi-001, zh-001) — not by label, so
// "English - Great Britain" sorts before "English - Great Britain - Oxford"
// rather than by the language name.
export const LOCALES = [
	{ slug: 'ar-001', label: 'العربية', hreflang: 'ar-001' },
	{ slug: 'ar-eg', label: 'العربية - مصر', hreflang: 'ar-eg' },
	{ slug: 'ar-dz', label: 'العربية - الجزائر', hreflang: 'ar-dz' },
	{ slug: 'bn-001', label: 'বাংলা', hreflang: 'bn-001' },
	{ slug: 'bn-bd', label: 'বাংলা - বাংলাদেশ', hreflang: 'bn-bd' },
	{ slug: 'bn-in', label: 'বাংলা - ভারত', hreflang: 'bn-in' },
	{ slug: 'cy-001', label: 'Cymraeg', hreflang: 'cy-001' },
	{ slug: 'cy-gb', label: 'Cymraeg - Prydain Fawr', hreflang: 'cy-GB' },
	{ slug: 'da-001', label: 'Dansk', hreflang: 'da-001' },
	{ slug: 'de-001', label: 'Deutsch', hreflang: 'de-001' },
	{ slug: 'en-001', label: 'English', hreflang: 'en-001' },
	{ slug: 'en-gb', label: 'English - Great Britain', hreflang: 'en-GB' },
	{ slug: 'en-gb-oxendict', label: 'English - Great Britain - Oxford', hreflang: 'en-GB-oxendict' },
	{ slug: 'en-us', label: 'English - United States', hreflang: 'en-US' },
	{ slug: 'es-001', label: 'Español', hreflang: 'es-001' },
	{ slug: 'es-es', label: 'Español - España', hreflang: 'es-ES' },
	{ slug: 'es-mx', label: 'Español - México', hreflang: 'es-MX' },
	{ slug: 'fr-001', label: 'Français', hreflang: 'fr-001' },
	{ slug: 'fr-ca', label: 'Français - Canada', hreflang: 'fr-CA' },
	{ slug: 'fr-fr', label: 'Français - France', hreflang: 'fr-FR' },
	{ slug: 'hi-001', label: 'हिन्दी', hreflang: 'hi-001' },
	{ slug: 'id-001', label: 'Bahasa Indonesia', hreflang: 'id-001' },
	{ slug: 'id-my', label: 'Bahasa Indonesia - Malaysia', hreflang: 'id-my' },
	{ slug: 'is-001', label: 'Íslenska', hreflang: 'is-001' },
	{ slug: 'it-001', label: 'Italiano', hreflang: 'it-001' },
	{ slug: 'it-it', label: 'Italiano - Italia', hreflang: 'it-IT' },
	{ slug: 'ja-001', label: '日本語', hreflang: 'ja-001' },
	{ slug: 'ko-001', label: '한국어', hreflang: 'ko-001' },
	{ slug: 'nl-001', label: 'Nederlands', hreflang: 'nl-001' },
	{ slug: 'pt-001', label: 'Português', hreflang: 'pt-001' },
	{ slug: 'pt-br', label: 'Português - Brasil', hreflang: 'pt-BR' },
	{ slug: 'pt-pt', label: 'Português - Portugal', hreflang: 'pt-PT' },
	{ slug: 'ru-001', label: 'Русский', hreflang: 'ru-001' },
	{ slug: 'ru-ru', label: 'Русский - Россия', hreflang: 'ru-ru' },
	{ slug: 'ru-by', label: 'Русский - Беларусь', hreflang: 'ru-by' },
	{ slug: 'sv-001', label: 'Svenska', hreflang: 'sv-001' },
	{ slug: 'sw-001', label: 'Kiswahili', hreflang: 'sw-001' },
	{ slug: 'th-001', label: 'ไทย', hreflang: 'th-001' },
	{ slug: 'th-th', label: 'ไทย - ประเทศไทย', hreflang: 'th-TH' },
	{ slug: 'tr-001', label: 'Türkçe', hreflang: 'tr-001' },
	{ slug: 'tr-tr', label: 'Türkçe - Türkiye', hreflang: 'tr-TR' },
	{ slug: 'ur-001', label: 'اردو', hreflang: 'ur-001' },
	{ slug: 'vi-001', label: 'Tiếng Việt', hreflang: 'vi-001' },
	{ slug: 'zh-001', label: '中文', hreflang: 'zh-001' }
];

export const DEFAULT_LOCALE = 'en-gb';

/** @type {Record<string, string>} Retired locale slugs -> the slug that replaced them; their URLs redirect. */
export const RETIRED_LOCALES = {
	'de-de': 'de-001',
	'hi-in': 'hi-001',
	'id-id': 'id-001',
	'is-is': 'is-001',
	'ja-jp': 'ja-001',
	'ko-kr': 'ko-001',
	'nl-nl': 'nl-001',
	'sv-se': 'sv-001',
	'sw-tz': 'sw-001',
	'vi-vn': 'vi-001',
	'zh-cn': 'zh-001'
};

/** @type {Set<string>} */
export const LOCALE_SLUGS = new Set(LOCALES.map((l) => l.slug));

/**
 * @type {Record<string, string>} A language's international locale (`en` ->
 * `en-001`). Used only to pick a locale from the browser's language on `/`;
 * there are no two-letter routes (`/en/` is a 404).
 */
export const WORLD_LOCALES = Object.fromEntries(
	LOCALES.filter((l) => l.slug.endsWith('-001')).map((l) => [l.slug.slice(0, 2), l.slug])
);

/** @type {Set<string>} Locales served under a `/<slug>/` prefix (all of them). */
export const PREFIXED_LOCALE_SLUGS = LOCALE_SLUGS;

/** @type {Record<string, string>} slug -> display label, for LocalePicker's `localeLabels`. */
export const LOCALE_LABELS = Object.fromEntries(LOCALES.map((l) => [l.slug, l.label]));

/** @type {Record<string, string>} slug -> BCP 47 tag, for `hreflang` alternate links. */
export const HREFLANG_BY_SLUG = Object.fromEntries(LOCALES.map((l) => [l.slug, l.hreflang]));

/** Site path prefix for a locale: '/<slug>'. */
export function localePrefix(slug) {
	return `/${slug}`;
}

/**
 * The book repository's own path for a content/ path, for "edit this page"
 * links. Locale content is vendored from `locales/<slug>/…`; the shared
 * reference material (glossary, index, style guide, spec) is vendored from
 * the book repo's root and keeps the same path.
 */
export function bookFilePath(file) {
	const slug = file.split('/')[0];
	return LOCALE_SLUGS.has(slug) ? `locales/${file}` : file;
}
