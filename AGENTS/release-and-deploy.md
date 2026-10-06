# Release and deploy

## Commits

- Commit only when asked. Keep each commit to one concern; end messages with the attribution line the session specifies.
- Commit signing is on. If a commit hangs on a signing prompt, stop and ask the user to run it (`! git commit …`). Never disable signing or skip hooks.
- Use `git mv` for renames. Do not discard staged or untracked work without looking at it.

## Pushing

`git push` sends `main` to both GitHub and GitLab. Push only when asked.

## Deploy pipeline

`.github/workflows/deploy-site.yml` runs on pushes to `main` that touch `locales/`, `assets/`, the shared docs, the site or the workflow itself: it installs with pnpm, runs `pnpm run sync` with `BOOK` set to the checkout, builds, and publishes `build/` to the `gh-pages` branch of `digital-health-guide/digital-health-guide.github.io`, which serves <https://digital-health-guide.github.io/>.

One-time setup (done by a human): a write-enabled deploy key on the site repository, its private half as the `SITE_DEPLOY_KEY` secret here, and that repository's Pages source set to `gh-pages`.

## After a deploy

`GET /search-index.json`, `/llms.txt`, `/sitemap.xml` and a topic page in two locales return 200, and `/?<term>` returns search results.
