# Authoring topics

Source of truth: spec §3 (template), §5 (voice, length), §6 (citations), §8 (definition of done), §9 (workflow). Prose rules: `STYLE_GUIDE.md`.

## Workflow

1. Read the topic's manifest entry (spec §4) and its neighbours so you know the boundaries; cross-reference rather than repeat.
2. Research and **verify every source first**. Check that each Wikipedia article exists before linking it. Never link a guessed slug; if no good article exists, name the concept without a link.
3. Draft in `locales/en-gb/topics/PP-CC-slug/index.md` to the 13-section template, in order, starting `# Topic N.M — Title` with a bold one-sentence thesis.
4. Reach the length target (about 2,500–3,500 words) with substance, never filler.
5. Update `GLOSSARY.md` and `INDEX.md` for any new terms or structure, then propagate to the other locales (see [translating-locales.md](translating-locales.md)).

## Hard rules

- Exactly six discussion questions; four sector lenses in the order Startup, Small business, Enterprise, Government; a five-level maturity table (Initiate, Develop, Standardize, Manage, Orchestrate).
- 5–12 verified Wikipedia links, each also listed in `## References`.
- No invented citations, URLs, statistics or quotations. Describe a figure qualitatively if you cannot verify it.
- The book says **topic**, never chapter. Cross-references read `Topic N.M — Title` (the site links the number).
- British spelling in en-gb, acronyms expanded on first use.

## Concurrency

One writer per file. Never let two agents edit the same topic at once.
