// The reader's locale on pages that have none of their own.
//
// The reference pages (glossary, subject index, style guide, spec) are not
// translated, so their URLs carry no locale and every locale shares one route.
// Their *chrome* (navigation, breadcrumb, picker, strings) should still speak
// the reader's language, so the last locale the reader visited is remembered:
// in memory for client-side navigation, and in localStorage across visits.
//
// Prerendered HTML cannot know the reader, so the stored value is only read
// after hydration (restoreReaderLocale, from onMount); until then the default
// locale renders, and the chrome switches once on first load of such a page.

import { DEFAULT_LOCALE, LOCALE_SLUGS } from './locales.js';

const KEY = 'digital-health-guide-locale';

/** @type {string | null} */
let remembered = $state(null);

/** True when `doc` is one of a locale's own pages, not a shared reference page. */
export function isLocalized(doc) {
	return Boolean(doc) && LOCALE_SLUGS.has(doc.file.split('/')[0]);
}

/** Remember `locale` as the reader's, in memory and in localStorage. */
export function rememberReaderLocale(locale) {
	if (!LOCALE_SLUGS.has(locale) || locale === remembered) return;
	remembered = locale;
	try {
		localStorage.setItem(KEY, locale);
	} catch {
		// private mode or storage disabled: the in-memory value still works
	}
}

/** Load the stored locale. Call once after hydration. */
export function restoreReaderLocale() {
	if (remembered) return;
	try {
		const stored = localStorage.getItem(KEY);
		if (stored && LOCALE_SLUGS.has(stored)) remembered = stored;
	} catch {
		// ignore
	}
}

/** The locale the chrome should use for a page: its own, else the reader's, else the default. */
export function uiLocale(doc) {
	if (isLocalized(doc)) return doc.locale;
	return remembered ?? doc?.locale ?? DEFAULT_LOCALE;
}

/** The remembered locale, for pages without a document (404). */
export function readerLocale() {
	return remembered;
}
