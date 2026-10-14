# Project log

## 2026-10-14 · Homepage rebuild pushed live
- **Done:** Lauren said to commit and push. The homepage rebuild (5–9 Oct entries below) is committed and pushed to `GH`, which deploys mcfallprod.com. Build passes.
- **Next:** Send a test email to team@mcfallprod.com. Close the Asana reminder task about pushing after Scott's review. Decide what to do with `main` and the Meta Pixel.

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
