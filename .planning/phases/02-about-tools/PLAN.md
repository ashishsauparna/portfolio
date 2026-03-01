# Phase 2: About & Tools Implementation Plan

## Goal
Refine the About section and Tools section to match Figma's typography and spacing exactly.

## Tasks

### 1. About Section Refinement
- [x] Update the About paragraph text to match the design's line breaks.
- [x] Ensure font is `font-recklessneue` (Reckless Neue Book) at `text-[24px]`.
- [x] Set exact width to `max-w-[493px]`.
- [x] Verify line-height (likely around 32px or 1.3-1.4).

### 2. Tools Section Refinement
- [x] Match label font: `font-alegreya-sans` (Alegreya Sans Medium) at `text-[16px]`.
- [x] Ensure 40px gap between logos (`md:gap-10`).
- [x] Verify logo sizes and opacity (they look slightly grey/muted in `Home.png`).
- [x] Ensure 72px gap between About text and Tools label.

### 3. Verification
- [ ] Visual check against `Home.png`.
- [ ] Verify responsiveness.
- [ ] Check production build (manual or via CLI).

## Technical Details
- **About Spacing**: The gap between the Hero and About section is already handled by the `Main Content Container` margin/gap.
- **Logo Opacity**: If logos are too stark, apply `opacity-80` or similar.
