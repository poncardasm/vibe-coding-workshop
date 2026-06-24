# Phase 3 — Component polish

Date: 2026-06-23
Branch: `feat/guide-ui-polish`

## Summary
CSS-only refinements to cards, screenshots, the prompt copy button, notes, buttons, the prompt-track accordion, and code-block scrollbars. Adds depth, scannable icons, and tasteful micro-interactions.

## Changed files
- `src/styles/guide.css`
- `src/layouts/GuideLayout.astro` (copy-button icon markup only)

## Details
### Cards
- `.card` is now `position: relative; overflow: hidden` with a subtle resting shadow and a `transform`/`box-shadow`/`border-color` transition. On hover it lifts 2px with a softer, larger shadow.
- `.card.highlight` gains a 3px accent bar on the inline-start edge via a `::before` pseudo (clipped to the rounded corners by `overflow: hidden`), so callout cards are instantly recognizable without layout shift.

### Screenshots
- `.screenshots img` gets a soft resting shadow + transition. Hovering the figure scales the image to 1.01 and deepens the shadow. `figcaption` margin/size nudged. Disabled under reduced-motion.

### Prompt copy button
- The copy button is now an inline-flex row with a clipboard SVG icon (two rounded rects) + a `<span class="copy-label">` label, built in the layout script via `innerHTML`. A `setLabel()` helper updates only the label span on copy/copied/failed states so the icon persists. `.copy-icon` sized 0.85rem. The existing green `.copied` state and focus ring are preserved.

### Notes
- `.note` and `.warn` get a leading icon via a masked `::before` (info circle for notes, warning triangle for `.warn`), colored with `--blue`/`--accent` respectively. Note padding-left increased to 1.9rem to fit the icon. RTL swaps the icon to the right and uses padding-right; the existing `.warn` border-side override is preserved.

### Buttons
- Added `.btn:active { transform: translateY(0) }` so a press settles back. Hover lift and global focus ring already in place from Phase 1.

### Accordion
- Opening a track now fades/slides the panel in via a `track-open` keyframe animation (0.25s) on `.track-accordion[open] .track-panel`. Close still snaps (no content-file edits were allowed to restructure the panel for full height animation). The chevron rotation is unchanged. Animation is neutralized by the reduced-motion block.

### Code blocks
- `pre` gets `scrollbar-width: thin` + `scrollbar-color` (Firefox) and custom `::-webkit-scrollbar` thumb styling (light translucent on the dark code background) for a less jarring horizontal scrollbar on long prompts.

## Notes
- No content files, `package.json`, or `astro.config.mjs` modified.
- All hover/animation effects are reduced-motion safe (Phase 1 block + the updated `.screenshots figure:hover img` rule).
- RTL and print rules preserved.
