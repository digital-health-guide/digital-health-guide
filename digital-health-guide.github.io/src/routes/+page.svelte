<script>
	import { DEFAULT_LOCALE, LOCALES, WORLD_LOCALES, RETIRED_LOCALES, localePrefix } from '#lib/locales.js';

	const home = `${localePrefix(DEFAULT_LOCALE)}/`;
	// `/?<target>` is a search (see SearchGate), so only a bare `/` redirects.
	// Runs before hydration, on the client: a server-side redirect would drop the query.
	// A reader whose browser language (navigator.languages) matches a locale goes there. No exact locale (en-AU)
	// falls back to the language's international locale (/en-001/); no match at all goes to the default.
	const data = JSON.stringify({ home, locales: LOCALES.map((l) => [l.slug, l.hreflang]), aliases: WORLD_LOCALES, retired: RETIRED_LOCALES });
	const redirect = `<script>(function(){if(location.search)return;var d=${data},t=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||''],to=d.home;for(var i=0;i<t.length;i++){var g=String(t[i]).toLowerCase().replace(/_/g,'-'),l=g.split('-')[0],m=null;for(var j=0;j<d.locales.length;j++){var c=d.locales[j];if(c[0]===g||c[1].toLowerCase()===g){m=c[0];break}}if(!m&&d.retired[g])m=d.retired[g];if(!m&&d.aliases[l])m=d.aliases[l];if(m){to='/'+m+'/';break}}location.replace(to+location.hash)})();<\/script>`;
</script>

<svelte:head>
	<link rel="canonical" href="https://digital-health-guide.github.io{home}" />
	{@html redirect}
	<noscript><meta http-equiv="refresh" content="0;url={home}" /></noscript>
</svelte:head>

<p><a href={home}>Continue to the book</a></p>
