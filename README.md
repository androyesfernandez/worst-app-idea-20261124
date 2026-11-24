# The Worst App Idea Ever Pitched

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/androyesfernandez/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/androyesfernandez/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)

## The pitch

GoldfishGPS puts a live GPS tracker on your goldfish so office workers can
watch it swim in circles from their desks and charges a dollar when it
reaches the exact same corner for the fortieth time today.

## What this entry does

`main.ts` writes that one-sentence pitch to `/output/entry.txt` — 204
characters, a single sentence, no trailing newline. Before writing it
validates the line: 1–240 characters (counted as Unicode code points),
not whitespace-only, and exactly one sentence. After writing, it reads the
file back and verifies byte-identity with what was written, throwing if
they differ. Running it twice produces identical output.

## Run it

```sh
node main.ts
```

No dependencies, no network access.
