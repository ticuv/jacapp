# JAC components

| Component | Source | Spec |
|---|---|---|
| Button, primary | observed (app's filled chips) | `--btn-bot` fill, `--on-accent` text, 52px high, radius 14, weight 700; hover `--btn-hover`; one per screen |
| Button, ghost | derived | `--s1` fill, 1px `--line-2`, `--text`; hover `--s2` |
| Nav action | derived | outlined, 40px, never filled, so it stays quieter than the hero action |
| Text link | observed | `--blue-soft`, underlined 1px, no arrow glyph |
| Card | observed (app cards) | `--s1` or `--raised`, 1px `--line`, radius 24, no shadow |
| Plan, featured | derived | `--bg-2`, 1px `--blue` border; the word "Cel mai avantajos" in `--blue-soft` under the plan name |
| Switch | observed (app segmented control) | track 1px `--line-2`, thumb `--btn-bot`, labels 700 |
| Tabs | observed | selected `--btn-bot` with `--on-accent`; others `--s1` with `--muted` |
| Chip over art | derived | `--raised-2`, 1px `--line-2`, radius 12, at most one per phone, placed off the app text |
| Penalty figure | observed (INFRACȚIUNE badge) | `--penalty` ink; bars `--penalty-fill` |
| PRO tag | observed | `--pro` fill, `--on-pro` ink |
| Document | derived | `--paper` ground, `--paper-ink` text, `--paper-link` for links, `--stamp` for the MODEL stamp |
| FAQ row | derived | hairline `--line` between rows, plus sign in `--blue` |

## States

| State | Treatment |
|---|---|
| Focus | 3px `--blue-soft` outline, 3px offset, instant |
| Disabled | opacity .55, `cursor: not-allowed`, native attribute |
| Empty | the section is left out; never a placeholder block |
| Loading | captures are lazy images with intrinsic size, so nothing shifts |
