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
