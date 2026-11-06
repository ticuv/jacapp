# JAC platform mapping

The live `:root` block is the head of `assets/css/main.css`. The core roles, with the standard Hue names as aliases:

```css
:root {
  --bg: #0a0f1c;
  --background: var(--bg);
  --bg-2: #0e1526;
  --raised: #0f1830;
  --raised-2: #142038;
  --screen: #111823;
  --screen-2: #192533;
  --surface1: var(--raised);
  --surface2: var(--raised-2);
  --surface3: var(--screen-2);
  --line: rgba(160, 185, 235, .12);
  --line-2: rgba(160, 185, 235, .24);
  --border: var(--line);
  --border-visible: var(--line-2);
  --text: #eef2fa;
  --text-2: #b9c4d8;
  --muted: #9aa6bd;
  --text1: var(--text);
  --text2: var(--text-2);
  --text3: var(--muted);
  --blue: #4c8dff;
  --blue-soft: #9cc2ff;
  --btn-bot: #2259e0;
  --btn-hover: #1b4ec9;
  --on-accent: #f7f9ff;
  --accent: var(--blue);
  --accent-subtle: rgba(76, 141, 255, .1);
  --penalty: #f2777a;
  --error: var(--penalty);
  --warn: #ff8a4c;
  --warning: var(--warn);
  --ok: #9fe3c2;
  --success: var(--ok);
  --pro: #ffd27a;
  --on-pro: #3a2600;
  --paper: #f6f8fc;
  --paper-ink: #13203a;
  --stamp: #c42b20;
  color-scheme: dark;
}
```

## Tailwind

```js
module.exports = { theme: { extend: {
  colors: {
    bg: 'var(--bg)', raised: 'var(--raised)', screen: 'var(--screen)',
    ink: { DEFAULT: 'var(--text)', 2: 'var(--text-2)', muted: 'var(--muted)' },
    blue: { DEFAULT: 'var(--blue)', soft: 'var(--blue-soft)', strong: 'var(--btn-bot)' },
    penalty: 'var(--penalty)', pro: 'var(--pro)', paper: 'var(--paper)',
  },
  fontFamily: { sans: ['Manrope', 'system-ui', 'sans-serif'] },
  borderRadius: { chip: '10px', control: '14px', step: '20px', card: '24px' },
} } };
```

## SwiftUI

Not applicable: JAC ships on Android only.
