# Verification

Run the checks that match what you changed, and report failures with their output rather than summarizing them away.

## Book content (spec §8 and §10)

- **Structural:** 13 sections in order, bold one-sentence thesis, six discussion questions, four sector lenses, five-level maturity table.
- **Links:** every inline Wikipedia link resolves and appears in `## References`.
- **Sources:** nothing invented.
- **Consistency:** the heading matches the folder number and the manifest; every `Topic N.M — Title` cross-reference names the topic that holds that number; spelling matches the locale's dialect.
- **Locales:** each locale has `index.md`, the `README.md` symlink and `.locale-peer-id`, and 74 topic folders (73 topics plus the preface). Each Contents link resolves to an existing `index.md`.

## Site

```sh
cd digital-health-guide.github.io
BOOK=.. pnpm run sync && pnpm run build
```

- The build must finish with `✔ done` and no `prerender_http_error`.
- Check that every internal `href` on each locale's built home page maps to a built `index.html` (percent-decode the path first).
- Spot-check a topic page: breadcrumb, previous/next, `hreflang` alternates, linked `Topic N.M` cross-references.
- `build/search-index.json`, `build/llms.txt`, `build/llms.json` and `build/sitemap.xml` exist.

## Reporting

State what you ran, what passed and what you could not check (for example CI-only steps or native-speaker review of translations).
