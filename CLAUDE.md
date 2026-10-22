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

## Live homepage (minimal design)

- **As of 2026-10-22 the new website is live and final** on mcfallprod.com: the minimal design in `mcfall-website/minimal/` with the discovery copy (hero "We make every **podcast episode** findable.", "podcast episode" in gold #b8892a; the "One episode. One strong title. Everywhere." section), the gold pickaxe favicon, and the free audit popup. This is the version Scott and Lauren chose (PR #21, restored in PR #27). Treat it as the baseline; change it only through a reviewed PR.
- How it's built: `deploy.yml` runs `npm run build` (for CNAME, favicon, og.png, `/referral/`), copies the draft's images and `scrollcraft.js` into `dist/`, and runs `node mcfall-website/minimal/live.mjs dist/index.html`, which wraps the built page in the real head (title "McFall Productions | Podcast discovery and production", share tags, Google Analytics). GitHub Pages serves the `gh-pages` branch ("Deploy from a branch"); keep it that way or PR previews break.
- To change the homepage: edit `mcfall-website/minimal/src/page.html`, run `node build.mjs` in that folder (needs the `nateherk-design` plugin, or `SCROLLCRAFT_CSS`), commit the rebuilt `index.html`, and open a PR into `GH`. **Merging into `GH` puts it live within ~2 minutes, so never merge without Scott's explicit OK.** Before merging, bring the branch up to date with `GH` and check the result: two PRs merged on top of each other duplicated and broke sections on 2026-10-22.
- Free audit popup: posts to FormSubmit (`formsubmit.co/ajax/team@mcfallprod.com`, copy to Lauren). It never opens the visitor's mail app; the thank-you shows when FormSubmit answers or after 4 seconds at most. FormSubmit can be slow; a faster form service would need a free account.
- `src/App.tsx` (the old React homepage) and the `main` branch are no longer what visitors see. `mcfall-website/` (scroll version) is a draft only.
- Every PR preview carries the homepage at `https://mcfallprod.com/pr-preview/pr-<number>/drafts/minimal/`; the preview is removed when the PR closes or merges. Feedback there is a PR comment (rules above). The claude.ai review link (https://claude.ai/artifact/54grxFFPugQwNP1QGanWd3) is only updated from Scott's account.
