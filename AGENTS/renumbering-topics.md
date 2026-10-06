# Renumbering topics

Source of truth: spec §11. This is the highest-risk change in the book, because the number appears in folder names, headings, cross-references, `INDEX.md`, `GLOSSARY.md`, every locale's Contents, the site's routes and old-URL redirects.

1. Decide the final manifest (numbers, titles, slugs) before touching any file.
2. Back up first: untracked files are not protected by git.
3. Remap in one pass through a single lookup, so a short label can never match inside a longer one (`Topic 1.1` vs `Topic 1.10`). Rename folders in two phases, via a temporary name, to avoid collisions.
4. Do **every locale** in the same change; the `PP-CC-` prefix must stay identical across locales.
5. Remap `INDEX.md` number lists and `GLOSSARY.md` "See Topic N" pointers through the same lookup.
6. Rebuild each locale's Contents and spec §4, then run the consistency gate in [verification.md](verification.md). Fix mismatches the renumbering exposes, including pre-existing ones.
7. Rebuild the site and confirm links, `hreflang` alternates and redirects still resolve.
