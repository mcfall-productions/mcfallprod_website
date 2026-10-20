# mcfallprod_website

Marketing website for McFall Productions.

## Stack

- **Vite + React 18 + TypeScript**, styled with **Tailwind CSS**.
- Icons via `lucide-react`. ESLint configured (`eslint.config.js`).
- Entry `index.html` → `src/main.tsx` → `src/App.tsx`; UI in `src/components/`,
  helpers in `src/utils/`, global styles in `src/index.css`.

## Commands

```bash
npm install
npm run dev         # local dev server
npm run build       # production build -> dist/
npm run preview     # preview the build
npm run lint        # eslint .
npm run typecheck   # tsc --noEmit -p tsconfig.app.json
```

Run `npm run typecheck` and `npm run lint` before considering a change done.

## Notes

- Tailwind config in `tailwind.config.js`; PostCSS in `postcss.config.js`.
- TS is split across `tsconfig.app.json` (app) and `tsconfig.node.json` (tooling).

## Reviewing changes (pull requests and previews)

- Site changes go on a branch with a pull request into `GH`. Pushing to `GH` deploys the live site.
- Each PR gets a preview at `https://mcfallprod.com/pr-preview/pr-<number>/`; the link is posted on the PR about 2 minutes after each push.
- **While Scott or Lauren is reviewing a PR preview, their feedback is a PR comment, not an edit.** Post it with `gh pr comment <number>` in plain words, naming the element (for a selected element or a drawing, describe what it points at). Do not change files.
- Edit only when told to act ("fix it", "fix the PR comments on #N"). Then read all PR comments, make the changes on that PR's branch, push, and reply on the PR with what changed.

## Homepage drafts (not live)

- `mcfall-website/` (scroll version) and `mcfall-website/minimal/` (minimal, Apple-style, with the red-pen title fix) are review drafts. They are not part of the Vite build and pushing them does not change mcfallprod.com.
- Read the `README.md` in each folder before editing. The minimal review page is https://claude.ai/artifact/54grxFFPugQwNP1QGanWd3 (owned by Scott's Claude account; anyone with the link can view it).
- `node build.mjs` in `minimal/` needs the `nateherk-design` plugin (scroll-craft) installed, or `SCROLLCRAFT_CSS` pointing at its `scrollcraft.css`.
- Every PR preview also carries the minimal draft at `https://mcfallprod.com/pr-preview/pr-<number>/drafts/minimal/`, so it is reviewed like any PR: feedback is a PR comment (rules above). To fix it, edit `mcfall-website/minimal/src/page.html`, run `node build.mjs`, and push to the PR branch. The free audit does not run on the preview, only inside Claude.
- Pushes do not update the claude.ai review link; only Scott's account can republish it.
