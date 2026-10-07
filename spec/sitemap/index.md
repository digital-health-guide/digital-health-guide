# Sitemap

Every `*.github.io` SvelteKit site in this family publishes `/sitemap.xml`, generated at build time and referenced from `robots.txt`.

## Contents

- One `<url>` per published page: every locale's home page, every topic in every locale, and the shared reference pages (glossary, subject index, style guide, spec). Redirect-only URLs (`/`, `/chapters/…`, retired locale slugs, two-letter aliases) are never listed.
- Locales are served under `/<locale>/`; the default locale (`en-gb`) is not special in URLs. Every locale's URL uses its full `<language>-<region>` slug (`/en-001/`, `/cy-001/`); the two-letter aliases (`/en/`) are not listed (see the locales spec, "Locale routing").
- Each localized page carries one `<xhtml:link rel="alternate" hreflang="…">` per locale that has the equivalent page, plus `hreflang="x-default"` pointing at the default locale. Topics are matched across locales by their shared `NN-NN-` number prefix. Shared reference pages have no alternates.
- `<loc>` and `href` values are absolute and percent-encoded (translated slugs are non-ASCII).
- The alternates match the `<link rel="alternate">` tags in each page's `<head>`.
- Limit: 50,000 URLs and 50 MB per file; split into a sitemap index before reaching either.

## Implementation

`src/routes/sitemap.xml/+server.js`, prerendered. It reuses the site's route table (`routes()`) and `equivalentRoute()`, so the sitemap cannot list a page that is not built.

## Verification

After each build: `build/sitemap.xml` parses as XML; the number of `<url>` entries equals the number of built pages plus locale homes; every `<loc>` maps to a built `index.html`; each alternate group is symmetric (every member lists every member).
