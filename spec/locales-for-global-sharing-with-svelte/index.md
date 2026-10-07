# Locales for major projects with SvelteKit

Translate content into multiple locales.

How this site supports multiple locales end to end: content, web
routing, UI chrome, and bugs.

Read locales via file `locales.tsv`.

## Locale directory names

Every locale directory uses the format `<language>-<region>`, in lowercase: a language code, a hyphen, then a region or variant code (`en-gb`, `en-us`, `cy-001`; `en-gb-oxendict` adds a further variant subtag). The region may be a UN M.49 code such as `001` (World) for a language's international edition (`en-001`, `es-001`).

- Two-letter language-only directories (`locales/en/`, `locales/cy/`) are not allowed: they would duplicate the international `<language>-001` locale.
- Two-letter language URLs (`/en/`) do not exist on the published site either: they are 404s, never directories or aliases.
- The directory name is the locale's slug in `locales.tsv`, the site's routes and the `hreflang` mapping.

## Locale routing

Every locale is served under `/<slug>/`, where `<slug>` is its directory name (`/en-gb/`, `/cy-001/`). The routing rules:

- **No two-letter routes.** `/en/`, `/cy/…` and the like are not routes and return 404. Every locale, world locales included, is served only at its full `<language>-<region>` slug (`/en-001/`, `/cy-001/`).
- **Retired slugs** (`de-de`, `hi-in`, `ja-jp`, `zh-cn`) redirect to their replacement `-001` locale, mapping topics by their shared `NN-NN-` prefix.
- **Old unprefixed URLs** (`/topics/…`, `/chapters/…`) redirect to the default locale's page.
- **Reader's language on `/`.** A bare `/` (no query string; `/?…` is a search) reads `navigator.languages` (falling back to `navigator.language`) in the browser, before hydration, and redirects, trying each tag in order: (1) the exact locale: the tag, lowercased with `_` read as `-`, equals a locale slug or its `hreflang` (`en-GB` → `/en-gb/`, `cy_GB` has no exact locale and goes to step 3); (2) a retired slug maps to its replacement; (3) the tag's language maps to that language's international `-001` locale (`en-AU` → `/en-001/`, `cy_GB` → `/cy-001/`, `de-AT` → `/de-001/`). With no match the reader goes to the default locale (`/en-gb/`). Without JavaScript, `/` offers a link and a `<noscript>` refresh to the default locale.

## .locale-peer.id file

`.locale-peer-id` file is a byte-identical 32-character hexadecimal lowercase
number then newline, across every locale's version of "the same" topic,
regardless of slug.

`.locale-peer-id` id is how the project resolves "this page, in locale X".

## Guidance

- en-us: consistent American spelling; fix any stray en-gb forms (organisation→organization, licence→license, programme→program, cancelled→canceled, analogue→analog).

- en-gb: the -ize/-ise family (optimise, realise, organise, prioritise, utilise, etc.), -or/-our (colour, behaviour, favour, labour, neighbours), -er/-re (centre, theatre for the metaphorical sense), -ense/-ce (defence, licence), doubled-L forms (modelled, labelled, cancelled, enrol/enrolment), analogue, programme, and math→maths.

- en-gb-oxendict: use en-gb then revert just the -ise family back to Oxford -ize spelling (optimize, realise→realize, organise→organize, etc.), while correctly keeping -yse forms (analyse/analysable) unchanged, since Oxford style never uses -yze, and keeping all other British forms (colour, centre, defence, licence, programme, maths, modelled) intact.

## Reader locale on shared pages

Reference pages that are not translated (glossary, subject index, style guide, spec) have exactly one route and no locale in the URL. Their chrome (navigation, breadcrumb, picker, UI strings, `lang` and `dir`) follows the locale the reader last visited, not the default:

- Visiting any page under a locale remembers that locale in memory (for client-side navigation) and in `localStorage` under `<site>-locale`.
- A shared page uses the remembered locale if there is one, else the default locale. The page body stays in its own language.
- The stored value is read only after hydration, because prerendered HTML cannot know the reader. A reader opening a shared page directly therefore sees the default locale for one frame before the chrome switches. An unknown or unreadable stored value is ignored.
- The picker on a shared page shows the remembered locale; choosing another locale goes to that locale's home page and remembers it.
- A locale's own pages always use the locale in their URL; a stored locale never overrides the URL.

Implementation: `src/lib/readerLocale.svelte.js`, used by `+layout.svelte`, `DocPage.svelte` and `+error.svelte`.

## Guard against corruption

Keep proper nouns unconverted. Example: "Hospital Readmissions Reduction Program" (a real United States federal program name).

## Verify

For each locale subdirectory:

- File exists: `index.md`
- Symlink exists: `README.md`
- Locale peer id tracking file exists: `.locale-peer-id`

Then:

- Fix any broken internal links
- Fix any residual wrong-dialect spellings
- Update `./spec/locales-for-global-sharing-with-svelte/locales.tsv`

## Content structure (book side)

Each locale is `locales/<code>/` in the book repo, containing:

- `locales/<code>/topics/<slug>/index.md` + `.locale-peer-id` — one per topic.
  `README.md` is a symlink to `index.md`.
- `locales/<code>/index.md` + `.locale-peer-id` + `README.md` symlink — the
  locale's own translated README (site home/contents page source). Every
  locale gets this file scaffolded (matching the topic-file pattern) even
  before it has a translation; it starts empty.

## Slugs

Slugs are per-locale, not shared.** Translated locales rename topic directories
to native-script/accented slugs.

Example: `es-001` `año-de-vida-ajustado-por-calidad`, `ur-001` `صحت-ایڈجسٹڈ-متوقع-زندگی`.

Nothing in the site assumes slugs match across locales.

## Locale picker (labels + ordering)

- Labels live in `locales.js`'s `LOCALE_LABELS`, one entry per code, in that
  language (e.g. `'fr-001': 'Français (Monde)'`). Falls back to the raw code
  via `localeLabel()` if a code has no label yet.
- Header `PickerBar` order comes from `content.js`'s `locales()` (sorted by
  code) — the `-001` suffix happens to sort before any letter-starting
  regional suffix, so variants already come first there.
- Home page's locale list (`+page.server.js`) sorts explicitly: default
  locale first, then grouped by language name (label text before the `(`),
  with the `-001`/World variant sorted before its regional siblings within
  each group, then alphabetically by label. This does NOT fall out of
  alphabetical-by-label sort on its own (e.g. "España" < "Mundo") — it needs
  the explicit `-001` check.

## Bug fixes (regression watch-list)

### Bug: ASCII-only `\w` regexes broke every non-Latin/non-accented slug

Bug: matched topic slugs with `[\w.-]+` (ASCII word chars only). Any locale with
an accented or native-script slug (Spanish, French, Russian, Chinese, Arabic,
Welsh, Hindi, Bengali, Portuguese, Indonesian, Urdu) silently failed peer-id
resolution and cross-topic links.

Fix by widening the slug capture group to `[^/]+`.

### Bug: Every locale's home/contents page showed canonical English content

Bug: code and content always read a single top-level `/README.md` for title,
intro, "New here?" picks, part headings, and blurbs — only topic _links_ were
ever localized.

Fix: populate the previously-empty `locales/<code>/index.md` per locale.

## Bug: Link extraction was hardcoded to literal English phrase

Bug: link silently found nothing once the README was translated.

Fix: extract all links from the whole pre-`##` intro block instead of
regex-matching the English sentence.

### Bug: UI chrome was hardcoded English in the `.svelte` templates

Bug: nav labels, subtitles, page titles, intros, breadcrumbs, topic position,
pagination, picker/share labels.

Fix: add `i18n.js` and threading `ui(locale)` through every locale-scoped route
and `+layout.svelte`.

### Bug: header/footer brand wordmark stayed English

Bug: wordmark came only from the root (locale-agnostic) `+layout.server.js`,
which deliberately never picks a locale.

Fix: have `locales/[locale]/+layout.server.js` supply this locale's own title,
which overrides the root layout's canonical one via SvelteKit's merged
`page.data` on any route under `/locales/<locale>/` — the root picker and
`/about/` (no locale in the URL) correctly keep the canonical English title.
