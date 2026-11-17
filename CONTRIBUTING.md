# Contributing to Digital Health Guide

Thanks for helping improve this project.

## Ways to contribute

- **Report a problem:** open an issue describing what is wrong, unclear, or missing.
- **Fix or improve something:** open a pull request. Small fixes can go straight to a pull request; for larger changes, please open an issue first so we can agree on the approach.

## Layout

- `locales/<locale>/<topics-dir>/PP-CC-slug/index.md`: one topic in one locale; the `PP-CC-` number is shared by every locale. `locales/<locale>/index.md` is the locale's contents page.
- `spec/`: the governing specification. Read `spec/index.md` before editing a topic.
- `GLOSSARY.md`, `INDEX.md`, `STYLE_GUIDE.md`: shared English reference matter.
- `digital-health-guide.github.io/`: the SvelteKit reading site.

## Checks

There is no repo-level test script; verification is described in [AGENTS/verification.md](AGENTS/verification.md). To build the site:

```sh
cd digital-health-guide.github.io
BOOK=.. pnpm run sync && pnpm run build
```

AI agents should also read [AGENTS.md](AGENTS.md).

## Code of conduct

Participation is governed by our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contribution is offered under the terms in [LICENSE.md](LICENSE.md).
