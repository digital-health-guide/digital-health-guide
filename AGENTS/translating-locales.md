# Translating locales

Source of truth: `spec/locales-for-global-sharing-with-svelte/index.md` and `locales.tsv`.

## Layout per locale

```
locales/<locale>/
  index.md  README.md (symlink)  .locale-peer-id
  <topics-dir>/PP-CC-<slug>/index.md  (+ README.md symlink)
```

- English locales (en-001, en-gb, en-gb-oxendict, en-us) use `topics/` and English slugs. Other locales translate both the directory and each slug (native script and accents are allowed; lowercase, hyphens, no spaces or punctuation).
- The leading `PP-CC-` prefix is identical in every locale. The site matches translations, language-switcher targets and old-URL redirects by this prefix, so never change it.
- `.locale-peer-id` is byte-identical across locales for the same page.

## Rules

- Keep structure, headings, numbering and link targets identical to en-gb; translate prose only. Keep proper names, external titles (for example HFMA "Chapter 7.0: Capital funding"), Spotify's "squads/tribes/chapters/guilds" and URLs unchanged.
- The unit is **topic**: use the locale's word for topic ("Tema", "Thema", "Sujet", …) in `Topic N.M — Title` headings and cross-references, with correct grammar.
- Contents in `index.md`: parts `N Title`, topics `N.M Title`, nested list (spec: `contents-for-global-sharing-with-svelte`).
- Dialects: en-gb British, en-gb-oxendict Oxford `-ize`, en-us American (`spec/oxford-spelling.md`).

## Adding a locale

1. Add it to `spec/.../locales.tsv`, `digital-health-guide.github.io/src/lib/locales.js` and `src/lib/strings.js` (UI strings, including the picker, search and breadcrumb labels).
2. Scaffold `index.md`, the `README.md` symlink, `.locale-peer-id` and every topic folder.
3. `BOOK=.. pnpm run build` in the site directory must pass with every internal link resolving.

## Renaming a slug or topics directory

Use `git mv` so history follows. Then update that locale's `index.md` links, run the site sync, and rebuild. Do not touch other locales.
