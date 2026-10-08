# Vendored Lily Design System

These files are copied verbatim from the Lily Design System (MIT licence) by
`bin/sync-lily.mjs`. Do not edit them here — change them upstream and re-run
`pnpm run sync:lily`.

- Source: <https://github.com/LilyDesignSystem>
- Commit: `5d0a297844191656a52b606851395a6ed0ac9b2d`
- Components: SkipLink, Header, Footer, ArticleLayout, ContentsNav, ContentsList, ContentsListItem, BreadcrumbNav, BreadcrumbList, BreadcrumbListItem, PaginationNav, PaginationList, PaginationListItem, IconButton, Listbox
- Helper packages (each in its own `helpers/<name>/`, verbatim including its
  real `index.ts` barrel): theme-picker, locale-picker, text-size-picker, search-picker, share-picker, link-picker, picker-bar
- `picker-bar`'s own source imports its wrapped pickers, and each of
  those imports `IconButton`/`Listbox` from `@lilydesignsystem/svelte-headless`,
  as real package specifiers, unmodified — see the matching aliases in
  `vite.config.js`, which point those specifiers at the vendored barrels
  above (including the generated `headless-for-helpers.js`) instead of a
  real npm install.
- Themes: `static/themes/` (9 files)
