// Six plain-language tile cards on each locale landing page. The topic each
// tile links to is fixed by number (TILE_TOPICS); its route varies by locale and
// is looked up from that locale's own topics. Tile text lives in
// tiles/<locale>.json or tiles/<language>.json; a locale without its own file
// falls back to its language, and a language without a file shows the English tiles.

/** Topic numbers the six tiles link to, in order. */
export const TILE_TOPICS = ['1.2', '1.6', '1.9', '3.3', '6.2', '8.1'];

const files = import.meta.glob('./tiles/*.json', { eager: true, import: 'default' });

/**
 * The tiles for a locale such as `de-at`.
 * @param {string} locale
 * @returns {{title: string, text: string, link: string}[] | undefined}
 */
export function tilesFor(locale) {
	return (
		files[`./tiles/${locale}.json`] ?? files[`./tiles/${locale.split('-')[0]}.json`] ?? files['./tiles/en.json']
	);
}
