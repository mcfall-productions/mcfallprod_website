# Project log

## 2026-10-14 · Preview links for pull requests (branch `pr-previews`, not pushed)
- **Done:** Fixed a LOG.md merge conflict after pulling (kept Lauren's "pushed live" entry and Scott's minimal-site entries).
- **Done:** On branch `pr-previews`: new `.github/workflows/pr-preview.yml` builds every pull request to https://mcfallprod.com/pr-preview/pr-<number>/ (noindex), posts the link on the PR, and removes it when the PR closes. `deploy.yml` now deploys with a step that leaves `pr-preview/` alone. `src/App.tsx` image paths follow the build's base path (live output unchanged). Typecheck, lint and both builds pass. Explainer: https://claude.ai/artifact/Vb9Zas9gdFbevBiH9Rkc5r
- **Done:** Pushed and opened [PR #8](https://github.com/mcfall-productions/mcfallprod_website/pull/8) into `GH`. Its preview https://mcfallprod.com/pr-preview/pr-8/ loads with all images.
- **Done:** CLAUDE.md now says feedback on a PR preview is posted as a PR comment, and Claude edits only when told "fix it" or "fix the PR comments".
- **Done:** Review SOP for Lauren written as a doc: https://claude.ai/code/artifact/59794d38-383a-4d11-9210-218af8011207. Lauren added as reviewer on PR #8; test comments deleted.
- **Waiting on:** Scott and Lauren: merge PR #8 into `GH` (turns on the deploy step that keeps previews).
- **Next:** After merging, a push to `main` still runs the old deploy from `main`'s own workflow, which would overwrite the live site and wipe previews. Decide whether to retire `main` or point it at `GH`.

## 2026-10-14 · Homepage rebuild pushed live
- **Done:** Lauren said to commit and push. The homepage rebuild (5–9 Oct entries below) is committed and pushed to `GH`, which deploys mcfallprod.com. Build passes.
- **Next:** Send a test email to team@mcfallprod.com. Close the Asana reminder task about pushing after Scott's review. Decide what to do with `main` and the Meta Pixel.

## 2026-10-14 · Minimal site: title fix section
- **Done:** On Scott's comment, replaced the "one title rewritten" section of the minimal version with a scroll sequence: an Outdated title (7 SECRETS To Start Long-Term WEALTH! EP 1194) gets red strike lines and three notes saying what changes and why (no all caps, remove the episode number, add the guest's name), then the Updated title appears (7 Secrets to Building Long Term Wealth | Lewis Howes). Added "using best practices" to that section and the Goldmine intro. Republished to https://claude.ai/artifact/54grxFFPugQwNP1QGanWd3.
- **Done (later):** "The School of Greatness" in the closing audit paragraph is now bold, italic and white, per Scott's comment. Title fix now uses hand-drawn red pen strokes, handwritten notes beside the words they mark (stacked under the title on phones), and a gold glint with sparks as the updated title fades in. "13-year back catalog" in the proof section is now white. Removed a stray red dot (pen-stroke cap) that showed before the strikes drew. Moved the "Add the guest's name" note above EP 1194. Sparkle on the updated title is smaller and lasts longer. Footer credit now reads "The School of Greatness with Lewis Howes and The Daily Motivation".
- **Waiting on:** Scott: which direction to carry forward (original or minimal), from 2026-10-13.
- **Next:** Nothing committed yet; `mcfall-website/` and `scrollcraft/` are still untracked on the `GH` branch.

## 2026-10-13 · Minimal, Apple-inspired site variant
- **Done:** Built a second review version of the site in `mcfall-website/minimal/`: white, grey and black tiles, system sans, one gold accent, details tucked into expanders, and a scroll moment where 1,950 dots turn gold. Published privately at https://claude.ai/artifact/54grxFFPugQwNP1QGanWd3. The original review page and its link are untouched. Checked by screenshot at desktop, phone width and reduced motion; not checked on a real phone.
- **Done (later, same day):** On Scott's comment, replaced the hero dot field with the bar graph from the original page, restyled grey, gold and black, growing as you scroll. Republished to the same link.
- **Done (later, same day):** Audit pop-up opens on load again in the minimal version, at Scott's request.
- **Waiting on:** Scott: which direction to carry forward (original scroll version or minimal).
- **Next:** Nothing is committed. `mcfall-website/` and `scrollcraft/` are untracked on the old `GH` branch; commit and push when ready.
- **Ideas:** A real phone pass; hooking the audit email box to a mail service (still unsent in both versions).

## 2026-10-09 · Referral partner page live at mcfallprod.com/referral
- **Done:** `public/referral/index.html` committed on its own and pushed to `GH` (commit 56e255b). It is a standalone copy of `mcfallProdBiz/sales-kit/referral-partner-page.html` wrapped in a full HTML document, marked noindex so search engines skip it. The homepage rebuild was not pushed: the live homepage is unchanged and those files are still uncommitted.
- **Next:** When the referral page changes, edit the sales-kit file, republish the artifact, copy it here again and push.

## 2026-10-09 · Back catalog copy brought in line with the 8 Oct offer (not live, not committed)
- **Done:** Three fixes in `src/App.tsx`. The website is no longer described as optional ("if you want it included" and "where you want updates made" are gone). Transcripts are named as published on the host and on each episode page. A new "The full suite" block in the Goldmine band lists the three free bonuses: three months of monthly tune-ups, the written style guide, the 60-day comparison. No prices. Typecheck, lint and build pass.
- **Done:** Review copy republished with these changes (Version 4): https://claude.ai/artifact/PuLBdxkkW7mANR1bdeTEvG. It was rebuilt by rendering `src/App.tsx` to static HTML with the built CSS inlined, image paths renamed to the lower-case hyphenated names already in the review copy, and the navy review bar kept.
- **Decided (Lauren, 2026-10-09):** Do not push yet. Push after Scott completes his Asana task "New McFallProd.com Website >> Review and lmk your feedback" (gid 1219235479029675).
- **Decided (Lauren, 2026-10-09):** Wayne stays on the site: a team makes us look more professional. Scott's trending guest idea goes on every relevant asset.
- **Done:** New block "When an old guest is suddenly everywhere" under the intro of the "why old episodes disappear" section in `src/App.tsx`. Review copy republished (Version 5). Lauren's reply posted as a comment on Scott's Asana task.
- **Waiting on:** Scott: finish the website review and mark the task complete. Since 2026-10-07.
- **Next:** A local scheduled task ("Remind Lauren to push the website once Scott's review is done", weekdays 9 AM and 2 PM) checks the Asana task and reminds Lauren. Then commit, push `GH` (this deploys), and send a test email to team@mcfallprod.com.

- 2026-10-08 · Buried Gold Report copy now says the report arrives within 48 hours (two sentences in `src/App.tsx`, from the sales-kit session). Needs rebuild and deploy. Not committed.

## 2026-10-05 · Homepage rebuilt: back catalog and production, new brand colors (not live yet)
- **Decided (Lauren, 2026-10-05):** The site leads with the back catalog work but stays about 60% back catalog, 40% podcast production. The School of Greatness catalog project can be named; Kat does not need to OK it. Contact address is team@mcfallprod.com.
- **Done:** Rewrote `src/App.tsx`. Back catalog (first five sections): headline with the SOG project numbers, why old episodes disappear, a Back Catalog Goldmine band (coal and gold), "Already have a team?", the free Buried Gold Report. Production (next three): "A complete podcast partner" with the four results numbers, the four services with pricing, and the nine shows. Then testimonials, the team and a final call to action. Back catalog copy comes from the approved sales page; no prices and no link to the sales page. Colors and fonts follow `mcfallProdBiz/brand/brand-colors.md` and are named in `tailwind.config.js`.
- **Done:** `index.html`: new title and description, link-preview image (`public/og.png`), tab icon (`public/favicon.svg`), Google Analytics tag `G-RJE415F7JT` (copied from `main`), fonts, and a duplicated root div and script removed. Company name is "McFall Productions" throughout. Typecheck, lint and build pass; checked at desktop and 390px width.
- **Done (later the same day):** The back catalog sections now say two things plainly: our own automation cleans up a big catalog in days or weeks depending on episode count, and we make the new titles, descriptions and show notes live ourselves on the client's podcast host and website. It is in the headline paragraph and in two new blocks inside the Goldmine band.
- **Done (later still):** New top of page: a one-line pitch for the whole company, "We make every episode earn.", with two blocks under it that jump to the back catalog half and the production half. The old headline, "Your next untapped revenue stream is already recorded.", now opens the back catalog half. Link-preview image updated to match. Lauren is reviewing in a local preview (`npx vite preview --port 4173`).
- **Done (review round, Lauren):** Headline is now "We make every podcast episode earn." A bar picture sits at the top, one bar per episode: old episodes, old episodes found again (teal) and new episodes (navy), standing on the two blocks they belong to and labelled as an illustration. The two block links read "See how we can transform your back catalog into a money-making machine" and "See how we can transform your raw recordings into a world-class show". Heading changed to "Already have a production team? Great. We work on different episodes." A review copy for comments is published at https://claude.ai/artifact/PuLBdxkkW7mANR1bdeTEvG (regenerate it from the built page after each change).
- **Removed from the page:** dark-mode toggle, "What sets us apart", the turnaround section (its "deliver early" line moved into pricing), the audio and video platform lists, and the long team bios (Wayne keeps a short credit). All of it is in git history.
- **Correction to the 30 Sep and 1 Oct entries:** the live site is built from the `GH` branch, not `main`. The last deploy (1 Jun 2026) is `GH` commit 038fdf8. `main` is older, still lists The Surgeon's Lounge, has uncompressed images, and has a Meta Pixel tag the live site never had. This work is on `GH`. Pushing either branch deploys.
- **Waiting on:** Lauren: OK to push `GH`, which puts this live. Since 2026-10-05.
- **Next:** Send a test email to team@mcfallprod.com before or right after going live. Decide what to do with `main`. Decide on the Meta Pixel.

## 2026-10-01 · Local copy caught up with GitHub
- **Done:** Fast-forwarded local `main` (21 commits) and `gh-pages` (11 commits) to match GitHub. Nothing was pushed and no site files were edited. Closes the 30 Sep "pull before the next site edit" item.
- **Next:** The checked-out branch is still the old `GH` branch. Switch to `main` before the next site edit. This LOG.md exists only on `GH`, so commit it there first or carry it over to `main`.

## 2026-09-30 · Old "Gh" pull request closed
- **Done:** Closed [PR #6](https://github.com/scottmcfalldev-bot/mcfallprod_website/pull/6) without merging. main already has the newer site (16 commits past the GH branch), and the PR would have brought back former-client images. The GH branch is kept on GitHub.
- **Next:** Local `main` is 21 commits behind GitHub and `gh-pages` 11 behind. Pull before the next site edit.
