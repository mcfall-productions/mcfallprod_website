# McFall Productions website, minimal direction (review copy)

A separate, Apple-inspired variant of the review page one folder up. The original is untouched.

Published artifact (update this same link, don't create a new one):
https://claude.ai/artifact/54grxFFPugQwNP1QGanWd3

## Notes for Claude Code
- Load `/nateherk-design:scroll-craft` before making design changes. Read `BRIEF.md` first.
- Edit `src/page.html`, then run `node build.mjs`. It inlines the scroll-craft engine CSS and writes `index.html` (page body only, what gets published) and `lab/preview.html` (wrapped copy for local viewing).
- `images` and `scrollcraft.js` here are symlinks to the parent folder.
- Publish with the Artifact tool: `file_path: minimal/index.html`, `url:` the link above, `root:` the parent folder, `files` mapping `scrollcraft.js` and every file in `images/`. Keep the `sample` capability.
- The free audit only runs when the page is opened in Claude. The email box only collects the address; nothing sends it yet.
- Difference from the original on purpose: the shows are a grid, not a sideways rail. The audit sheet opens itself on load, same as the original.
