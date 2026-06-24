# Phase 2 — Wayfinding

Date: 2026-06-23
Branch: `feat/guide-ui-polish`

## Summary
Added long-page navigation aids: a top reading-progress bar, scrollspy highlighting in the table of contents, and a floating back-to-top button.

## Changed files
- `src/styles/guide.css`
- `src/layouts/GuideLayout.astro`

## Details
### Reading progress bar
- New fixed, full-width 3px bar at the very top (`.progress-bar`, `aria-hidden`). Its fill is a `::after` pseudo scaled via a `--progress` CSS variable (0–1), accent colored, RTL-aware (`transform-origin` flips to right).
- The inline script updates `--progress` on scroll using `requestAnimationFrame` throttling and also on resize. Math is clamped to [0,1].

### Scrollspy
- `IntersectionObserver` watches every `section[id]` with a `-20% 0px -70% 0px` root margin band so the section near the top of the viewport is considered active.
- The matching `nav.toc a[href="#id"]` gets an `is-active` class (accent-soft fill, stronger border, bold). Only one link is active at a time. Gracefully no-ops if `IntersectionObserver` is unavailable.

### Back-to-top button
- New floating round button bottom-inline-end (`.to-top`) with an inline up-arrow SVG, localized `aria-label` (en/fi/sv/ar).
- Hidden by default; gains `is-visible` after `scrollY > 400`. Click scrolls to top, using `smooth` behavior unless `prefers-reduced-motion: reduce` matches (then `auto`).
- Hover flips to accent fill. Respects the global focus-visible ring.

### Print
- `.to-top`, `.progress-bar`, and `.skip-link` are hidden in `@media print` (added to the existing `.btn-row, .copy-btn` display:none rule).

## Notes
- No content files, `package.json`, or `astro.config.mjs` modified.
- Scroll/resize listeners are passive; rAF-throttled to avoid jank.
