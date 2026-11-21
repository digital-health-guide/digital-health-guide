<script>
	import ArticleLayout from '#lib/lily/components/ArticleLayout.svelte';
	import AlternateLinks from '#lib/components/AlternateLinks.svelte';
	import { SITE_URL } from '#lib/site.js';
	import { stringsFor } from '#lib/strings.js';
	import { LOCALE_SLUGS } from '#lib/locales.js';
	import { HERO, ENDONYMS } from '#lib/hero.js';
	import { tilesFor } from '#lib/tiles.js';

	/** @type {{ doc: import('#lib/book.js').document, alternates: { locale: string, route: string }[], tileHrefs?: string[] }} */
	let { doc, alternates, tileHrefs = [] } = $props();

	const tiles = $derived(tilesFor(doc.locale) ?? []);

	const url = $derived(`${SITE_URL}${encodeURI(doc.route)}`);
	const t = $derived(stringsFor(doc.locale));

	/** @param {string} text */
	const esc = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

	// The hero is the page's H1, the H3 subheadline, and the first paragraph; the
	// "Translations:" sentence and a link to the contents follow that paragraph, and
	// the six tile cards come right after the hero.
	const parts = $derived.by(() => {
		const label = HERO[doc.locale]?.translations ?? HERO['en-001'].translations;
		const links = [...LOCALE_SLUGS]
			.filter((slug) => slug.endsWith('-001') && slug in ENDONYMS)
			.map(
				(slug) =>
					`<a href="/${slug}/"${slug === doc.locale ? ' aria-current="page"' : ''}>${esc(ENDONYMS[slug])}</a>`
			)
			.join(', ');
		// The contents heading is the second H2 of the home page (after "How to use").
		const h2s = [...doc.html.matchAll(/<h2 id="([^"]+)"/g)];
		const contents = h2s[1] ? `<p class="home-contents"><a href="#${h2s[1][1]}">${esc(t.navContents)}</a></p>` : '';
		const sentence = `<p class="home-translations">${esc(label)}${links}</p>${contents}`;
		const subheading = doc.html.indexOf('</h3>');
		const end = doc.html.indexOf('</p>', Math.max(subheading, 0));
		if (end === -1) return [doc.html, ''];
		return [doc.html.slice(0, end + 4) + sentence, doc.html.slice(end + 4)];
	});
</script>

<svelte:head>
	<title>{t.siteBrand}{doc.subtitle ? ` — ${doc.subtitle}` : ''}</title>
	<meta name="description" content={doc.summary} />
	<link rel="canonical" href={url} />
	<AlternateLinks {alternates} />
	<meta property="og:title" content={t.siteBrand} />
	<meta property="og:description" content={doc.summary} />
	<meta property="og:type" content="book" />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={`${SITE_URL}/icon-1200.png`} />
</svelte:head>

<ArticleLayout label={doc.title} class="prose">
	{@html parts[0]}
	{#if tiles.length}
		<ul class="page-tiles">
			{#each tiles as tile, i (i)}
				<li class="page-tile">
					<h2>{tile.title}</h2>
					<p>{tile.text}</p>
					<p class="page-tile-link"><a href={tileHrefs[i]}>{tile.link}</a></p>
				</li>
			{/each}
		</ul>
	{/if}
	{@html parts[1]}
</ArticleLayout>
