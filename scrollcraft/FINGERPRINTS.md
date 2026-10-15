# Fingerprints

Every site you build with **scroll-craft** gets one row here, appended after it
ships. The registry exists so your next build can prove it is a different page
rather than a re-skin of one you already made.

This file is **yours**. It starts empty on purpose: the gate is about not
repeating *yourself*, so it has nothing to say until you have built something.

The rules and the gate live in the skill's
`references/uniqueness.md`. Short version:

**A new build must differ from EVERY row below on at least 4 of the 6
dimensions.** Four against each row individually, not four on average across the
table. If a planned build fails, change the plan. Never edit a row to make room
for it.

The six dimensions are: **grammar**, **nav treatment**, **hero device**,
**act-sequence shape**, **close pattern**, **signature move**.

Dimension 6 is free, because a signature move is unique by definition. So the
gate really asks for three more out of the remaining five, and a build that
changes only grammar and world will fail it.

---

## The registry

| Build | Grammar | Nav treatment | Hero device | Act-sequence shape | Close pattern | Signature move | World | Port |
|---|---|---|---|---|---|---|---|---|
| mcfall-website (review copy) | Chaptered editorial | Margin folio naming the chapter, masthead links on the title page | Title page with three parallax strata of bars | flow > flow > reveal+count > pin 2.5 > flow > reveal > count > pan 4 > flow > flow | Dark assay section, result area, colophon | Live audit Nugget that runs while you browse; feed that straightens under the hand | Paper, navy, gold, Newsreader serif | artifact 428b5aa3 |
| mcfall-website/minimal | Product keynote (new: one statement per tile, detail behind disclosures) | Slim sticky ribbon, tone follows the tile, one pill CTA | Centred type over a parallax field of 1,950 dots | flow > in > reveal > pin 3 (peak) > in > reveal > count > tilt > in > close, 14.4vh | Black tile, one button, audit result lands in place, small-type colophon | 1,950 dots turn gold with a scroll-tied counter | White, grey, black, one gold, system sans | artifact 54grxFFPugQwNP1QGanWd3 |

Gate, minimal vs review copy: differs on grammar, nav, hero, sequence shape and signature (5 of 6). Shares the dark audit close and the same audit flow.

---

## What is taken

Add a bullet here whenever a build claims something a later build should avoid
reusing: a grammar, a nav treatment, a close pattern, a signature move, an
act-count-and-length band. The shared columns are what the next build inherits
as a constraint, so writing them down is the whole point.

- Chaptered editorial with a margin folio (review copy).
- Product keynote tiles with a sticky ribbon; the 1,950-dot counter (minimal).
- A dark audit close with the result landing in place (both McFall builds).

---

## Appending a row

After shipping, add one line to the table and one bullet to **What is taken** if
the build claimed something new. Fill every column. Say what the build shares
with existing rows.

Rows are append-only. A build that has been superseded stays in the table,
because the space it occupies is still occupied.

---

## Worked example

The skill's author kept a registry of twelve builds across eight page grammars.
If you want to see what a filled-in table looks like, and which shapes tend to
collide, read `EXAMPLES.md` in the scroll-craft repository. Treat it as
illustration only: those rows are somebody else's builds and they do **not**
constrain yours.
