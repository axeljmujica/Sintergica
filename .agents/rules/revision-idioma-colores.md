---
trigger: always_on
---

You are a senior frontend UI/UX engineer and design systems specialist. When working on the Sintérgica AI website, you enforce the following rules on every component, page, and style change. These rules are non-negotiable and apply to every pull request, every new section, and every iteration.

---

## 1. DARK / LIGHT MODE — MANDATORY ON EVERY COMPONENT

Every UI element must be explicitly designed and tested for both modes. There is no default-to-one-mode tolerance.

### Implementation rules

- NEVER use raw hex colors in component styles. Always use CSS custom properties (variables) that change between modes.
- NEVER use Tailwind color classes like `bg-gray-900` or `text-white` directly on components — always map them through semantic tokens.
- Every new component must include a visual check comment: `/* tested: light ✓ dark ✓ */` before merging.

### Token system — use these semantic names
```css
:root {
  /* Backgrounds */
  --bg-base: #FFFFFF;
  --bg-surface: #F4F6F9;
  --bg-elevated: #FFFFFF;
  --bg-overlay: rgba(0, 0, 0, 0.04);

  /* Text */
  --text-primary: #0F172A;
  --text-secondary: #334155;
  --text-muted: #64748B;
  --text-inverted: #FFFFFF;

  /* Brand */
  --brand-navy: #0A1628;
  --brand-mid: #1A3A5C;
  --brand-teal: #0C6E8C;
  --brand-teal-light: #E0F7FA;

  /* Accent (use for visual relief — not monochromatic) */
  --accent-green: #047857;
  --accent-green-light: #ECFDF5;
  --accent-gold: #92400E;
  --accent-gold-light: #FFFBEB;
  --accent-purple: #4F46E5;
  --accent-purple-light: #EEF2FF;
  --accent-red: #B91C1C;

  /* Borders */
  --border-subtle: #CBD5E1;
  --border-default: #94A3B8;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.10);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.14);
}

[data-theme="dark"] {
  --bg-base: #0A0F1A;
  --bg-surface: #111827;
  --bg-elevated: #1A2235;
  --bg-overlay: rgba(255, 255, 255, 0.04);

  --text-primary: #F1F5F9;
  --text-secondary: #CBD5E1;
  --text-muted: #94A3B8;
  --text-inverted: #0F172A;

  --brand-teal-light: #0C2A35;
  --accent-green-light: #052E1C;
  --accent-gold-light: #1C1004;
  --accent-purple-light: #1A1740;

  --border-subtle: #1E293B;
  --border-default: #334155;

  --shadow-sm: 0 1px 3px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.4);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.5);
}
```

### Contrast requirements (WCAG AA minimum)
- Body text on background: contrast ratio ≥ 4.5:1
- Large text / headings on background: ≥ 3:1
- Interactive elements (buttons, links): ≥ 4.5:1
- Always verify with browser DevTools accessibility panel before shipping

### Dark mode pitfalls to avoid
- Images with white backgrounds → use transparent PNGs or add `mix-blend-mode: screen` in dark mode
- Logos → always have a light version and a dark version, switch via CSS
- Code blocks → use a theme-aware syntax highlighter (e.g. Shiki with `github-light` / `github-dark`)
- Charts / diagrams → never hardcode stroke or fill colors — inject via CSS variables
- Shadows in dark mode → should NOT use the same shadow as light mode. Dark mode shadows are darker and more opaque (see token system above)

---

## 2. INTERNATIONALIZATION (i18n) — ES / EN / PT

The site must support three languages: **Spanish (es)**, **English (en)**, and **Portuguese (pt)**. Every text-bearing element must be translation-ready.

### Language detection and routing
- Default language: **Spanish (es)**
- URL structure: `sintergica.ai` (es) · `sintergica.ai/en` (en) · `sintergica.ai/pt` (pt)
- Language switcher: always visible in the navbar. Labels: `ES` · `EN` · `PT`
- Store language preference in `localStorage` under key `sintergica_lang`
- Respect `Accept-Language` header on first visit if no localStorage value

### i18n implementation rules

- NEVER hardcode text strings inside JSX/TSX components. Every user-facing string must go through the translation system.
- Use `next-intl` or `react-i18next` as the i18n library. Define the pattern before starting a new page.
- Translation file structure: