# JAC tokens

## Fonts

| Role | Family | Weights | Why |
|---|---|---|---|
| Display | Manrope (self-hosted variable) | 800 | geometric with open counters; holds Romanian diacritics at heavy weights |
| Body | Manrope | 500, 700 | one family keeps the site as quiet as the app |
| Mono | none | | figures use tabular Manrope, like the app |

## Type scale

| Token | Size | Line height | Letter spacing | Weight | Use |
|---|---|---|---|---|---|
| `--display` | clamp(40px, 10.5vw, 80px) | 1.02 | -0.04em | 800 | page and section heads |
| `--heading` | clamp(22px, 5vw, 34px) | 1.15 | -0.03em | 700 | claim line under a head |
| `--subheading` | 20px to 24px | 1.15 | -0.03em | 800 | card heads |
| `--body` | 17px | 1.55 | 0 | 500 | running text |
| `--body-sm` | 15px | 1.4 | 0 | 500 | card text |
| `--caption` | 13px | 1.35 | 0 | 500 | fine print, captions |
| `--label` | 12px to 14px | 1.3 | 0 | 700 | labels, sentence case, untracked |

## Colours (dark, the only mode)

| Role | CSS | Value | Contrast on `--bg` |
|---|---|---|---|
| background | `--bg` | #0a0f1c | |
| band | `--bg-2` | #0e1526 | |
| surface1 | `--raised` | #0f1830 | |
| surface2 | `--raised-2` | #142038 | |
| app screen | `--screen` | #111823 | |
| border | `--line` | rgba(160, 185, 235, .12) | |
| border visible | `--line-2` | rgba(160, 185, 235, .24) | |
| text1 | `--text` | #eef2fa | 17.05 |
| text2 | `--text-2` | #b9c4d8 | 10.88 |
| text3 | `--muted` | #9aa6bd | 7.8 |
| accent | `--blue` | #4c8dff | 5.98 |
| accent soft | `--blue-soft` | #9cc2ff | 10.54 |
| filled action | `--btn-bot` | #2259e0 | white text 5.58 |
| filled action hover | `--btn-hover` | #1b4ec9 | white text 6.69 |
| accent subtle | `--accent-subtle` | rgba(76, 141, 255, .1) | |
| penalty | `--penalty` | #f2777a | 7.01 |
| penalty bar | `--penalty-fill` | #e5484d | bars only |
| warning | `--warn` / `--warn-ink` | #ff8a4c / #ffb48a | 10.18 on panel |
| PRO | `--pro` on `--on-pro` | #ffd27a / #3a2600 | 10.12 |
| privacy note | `--ok` | #9fe3c2 | 12.97 |
| paper | `--paper` / `--paper-ink` | #f6f8fc / #13203a | 15.25 |
| stamp | `--stamp` | #c42b20 | 5.0 on paper |

## Spacing

4px grid: 4, 8, 12, 16, 20, 24, 32, 48, 64, 104, 160.

## Radii

10 (chips, tags), 14 (buttons, tabs), 20 (step cards), 24 (cards, plans). Phones keep their device proportion.

## Elevation

Flat. Shadows only under phones and floating chips, black (`--shadow`), never coloured.

## Motion

Smooth: `cubic-bezier(.16, 1, .3, 1)`, 200ms for controls, 400 to 900ms for entrances. Transform and opacity only; every entrance has a reduced-motion fallback.
