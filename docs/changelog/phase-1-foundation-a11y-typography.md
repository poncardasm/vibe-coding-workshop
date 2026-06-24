# Phase 1 — Foundation, accessibility, typography

Date: 2026-06-23
Branch: `feat/guide-ui-polish`

## Summary
Baseline improvements that harden the guide's typography, keyboard accessibility, and motion safety without changing layout or content.

## Changed files
- `src/styles/guide.css`
- `src/layouts/GuideLayout.astro`

## Details
### Typography
- `body` now uses `var(--font-ui)` instead of a hardcoded `"Rubik"` string for consistency with the design tokens.
- Added `text-rendering: optimizeLegibility` to `body`.
- `h1` and `h2` use `text-wrap: balance`; paragraphs use `text-wrap: pretty` for better line breaks (progressive enhancement; ignored where unsupported).
- Slight rhythm tweak: paragraph bottom margin `0.85rem → 0.9rem`; list item margin `0.4rem → 0.45rem`.

### Accessibility
- Added a visually-hidden **skip-to-content** link in `GuideLayout.astro` (localized per language: en/fi/sv/ar). The inline script points its `href` at the first `<section>`'s existing id (setting `id="main-content"` only if the first section has none), so no content files needed editing and TOC anchors are preserved.
- Added a consistent `:focus-visible` ring (2px accent, 2px offset) covering links, buttons, `.btn`, `summary`, `.skip-link`, and `.to-top`. Existing more-specific focus rules (`.copy-btn`, accordion `summary`) still win.
- Added `::selection` styling using a soft accent tint.

### Motion safety
- Added a `@media (prefers-reduced-motion: reduce)` block that disables smooth scroll, shortens all transitions/animations to ~0ms, and removes hover lifts on buttons, cards, and screenshot images.

## Notes
- No content files (`src/content/*.html`), `package.json`, or `astro.config.mjs` were modified.
- RTL and print rules remain intact.
