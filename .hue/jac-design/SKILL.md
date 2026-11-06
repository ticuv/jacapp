---
name: jac-design
description: "This skill should be used when the user explicitly says 'JAC style', 'JAC design', '/jac-design', or directly asks to use/apply the JAC design system. NEVER trigger automatically for generic UI or design tasks."
version: 1.0.0
allowed-tools: [Read, Write, Edit, Glob, Grep]
---

# JAC design language

## 1. Philosophy

JAC is an instrument for people who decide under pressure: a patrol at night, a duty officer between calls. The site behaves like the app it sells: a deep cool navy ground, one blue that means *act* or *linked*, and colour only where the law or the shift calendar gives it meaning. Lineage: the app's own night screens, the Monitorul Oficial page, a police notebook. The tension: a product site that must persuade, written in the restraint of a legal document.

### Principles

1. **The app is the picture.** Every image is a real capture in a phone frame; nothing is drawn to stand in for a screen.
2. **One blue, three jobs.** `--blue` for links and figures, `--btn-bot` for the single filled action, `--accent-subtle` for tints. No other accent hue.
3. **Colour is a fact.** Red means a penalty, an infraction or overtime; amber means PRO; the ten Shiftr colours mean shift types. If the colour carries no fact, it is ink.
4. **Flat by tone.** Surfaces separate by a tone step and a 1px line, never by glow.
5. **Heads are one colour.** A head is one weight and one ink; a second idea is a second line or a claim line below, never an accented word.
6. **Documents sit on paper.** The PV and the case files are paper objects with paper ink, so the reader knows a document from interface.

## 2. Craft rules

| Layer | Token | Use |
|---|---|---|
| Ground | `--bg` #0a0f1c | page |
| Band | `--bg-2` #0e1526 | featured plan, alternate bands |
| Panel | `--raised` / `--raised-2` | cards, floating chips, step cards |
| Screen | `--screen` #111823 | inside every phone, sampled from the app |
| Ink | `--text`, `--text-2`, `--muted` | heads, body, captions |

- **Type budget:** Manrope only; weights 500, 700, 800. Display 800 at -0.04em; claim lines 700; body 500 at 17px.
- **Figures:** tabular numerals for article counts, prices and hours; figures may take `--blue` or `--blue-soft`.
- **Spacing:** 4px grid; sections 104px apart on a phone, 160px on desktop.
- **Squint test:** at arm's length the only colour on a screen should be the app captures and at most one blue action.

## 3. Anti-patterns

- No gradient on text, buttons, chips or panels.
- No coloured glow or blue shadow.
- No violet, cyan or teal on interface surfaces; the law-book spines and law tags carry one hue per act, as objects on a shelf.
- No red outside a penalty, an infraction or overtime.
- No amber outside PRO.
- No Shiftr shift colour outside the Shiftr legend.
- No colour literal outside `:root`.
- No backdrop blur over moving content.
- No eyebrow above a head; no tracked capitals for labels.
- No pill radius on cards; cards stop at 24px.

## 4. Workflow

1. Read `design-model.yaml`; it is the source of truth.
2. Take colours from `references/tokens.md` by role, never by hex.
3. Build components from `references/components.md`.
4. Paste the `:root` block from `references/platform-mapping.md` when starting a new stylesheet.
