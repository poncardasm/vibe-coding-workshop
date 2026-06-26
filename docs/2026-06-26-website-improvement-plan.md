**Date:** 2026-06-26

# Website Improvement Plan

A prioritized plan of refinements for the Vibe Coding Workshop guide site. The
site builds clean across all four languages (en, fi, sv, ar) and already has
strong polish: skip links, `focus-visible` outlines, RTL support,
reduced-motion handling, print styles, a scroll progress bar, copy buttons, and
lazy-loaded images with PhotoSwipe. Everything below is a refinement, not a fix
for anything broken.

## Priority 1 — Add social/SEO meta tags (biggest gap)

The page tells people to "Bookmark this page" and share it, but
`src/layouts/GuideLayout.astro` has no `<meta name="description">`, no Open
Graph tags, no Twitter card, and no favicon. Pasting the link into
Slack/WhatsApp/LinkedIn renders a bare URL with no title preview or image.

- Add a per-language `description` and pass it through `GuideLayout`.
- Add Open Graph (`og:title`, `og:description`, `og:image`, `og:url`,
  `og:locale`) and Twitter card tags.
- Add a favicon and a small OG share image in `public/assets/`.

Highest-leverage change for a handout meant to be shared.

## Priority 2 — Remove dead Neuralwatt assets

`public/assets/opencode-connect-neuralwatt-api-key.png` and
`opencode-connect-provider-neuralwatt.png` are no longer referenced anywhere in
the guide (the recent rework dropped Neuralwatt) but still ship in the build.

- Delete both unused PNGs.
- Remove the remaining Neuralwatt mention in `docs/handout-improvements.md`.
- Update `CLAUDE.md` (see Priority 5).

## Priority 3 — Fix inconsistent external-link behavior in the footer

Every external link in the body uses `target="_blank" rel="noopener noreferrer"`,
but the footer "Quick links" (`opencode.ai/download`, `github.com/signup`, etc.)
do not, so they navigate away from the guide mid-workshop.

- Add `target="_blank" rel="noopener noreferrer"` to the footer Quick links in
  each `src/content/<lang>.html`.

## Priority 4 — Tighten TOC ↔ heading label consistency

The TOC reads "3 GitHub" / "4 Vercel" but the section headings are "Create a
GitHub account" / "Create a Vercel account." Not wrong, just slightly
disorienting when scanning.

- Align the TOC labels and headings in each `src/content/<lang>.html`.

## Priority 5 — Update CLAUDE.md to match reality

The agent guide is stale:

- Lists only en/fi/sv; Arabic `/ar/` now exists.
- Still says "OpenCode + Neuralwatt."
- Does not mention the PhotoSwipe galleries, collapsible section accordions, or
  scroll progress bar that the layout now ships.

Sync it so future edits don't fight outdated docs.

## Nice-to-haves (not urgent)

- `prefers-color-scheme` dark mode (the palette is light-only today).
- Active-section highlighting in the TOC as you scroll.

## Suggested first step

Start with **Priority 1 (meta tags)** and **Priority 2 (dead assets)** as one
focused change — the most concrete wins.
