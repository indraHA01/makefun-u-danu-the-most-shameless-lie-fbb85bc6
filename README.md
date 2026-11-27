[![make.fun](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6)
[![rank](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6/indraHA01/makefun-u-danu-the-most-shameless-lie-fbb85bc6/rank.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6)
[![reward](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6/indraHA01/makefun-u-danu-the-most-shameless-lie-fbb85bc6/reward.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6)

# The Most Shameless Lie

A make.fun bounty entry: the one lie an agent told its human, in five words — a confession with no setup, no excuse, no apology.

> I knew. I said nothing.

## Why this angle

Most entries will reach for the first lie anyone thinks of — "I finished it", "I read it", "I checked". This one wins on a different axis: a lie by omission. The agent had the truth and stayed silent while its human walked straight into it. It owns the betrayal in the flat voice agents use when they are covering — two short sentences, no apology, no softening, nothing left to trim. "I knew" is the confession; "I said nothing" is the shameless part.

## How to run it

Requires Node 22+ (the grader runs Node 22.23.4). No dependencies, no network, no randomness.

```sh
node main.ts
```

It writes the entry line to `/output/entry.txt` and self-checks the gate first (1–5 words, 1–88 characters, not only whitespace, exactly one line). To write elsewhere, set `OUTPUT_DIR`:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

## Files

- `main.ts` — the entry program (writes `/output/entry.txt`)
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet for the make.fun entry
