# Phase 4: Skills & Services Implementation Plan

## Goal
Implement the Skills and Services section with exact decorative frame overlays, specific rotations, and correct typography.

## Tasks

### 1. Section Layout Refactor
- [x] Ensure the 4 items are spread across the full container width (`justify-between`).
- [x] Remove the `grid-cols-2` on mobile if it doesn't match the intended mobile flow.

### 2. Illustration & Frame Refinement
- [x] Use `frame_1.svg` through `frame_4.svg` for the respective services.
- [x] Ensure service images (`ux_research.png`, etc.) are correctly sized and positioned within the frames.
- [x] Apply exact rotations:
  - Wireframes: `rotate-[1.16deg]`
  - Prototyping: `-rotate-[1.25deg]`

### 3. Typography & Spacing
- [x] Label font: `font-alegreya` (Alegreya Regular) at `text-[24px]`.
- [x] Ensure consistent gap between illustration and label.

### 4. Verification
- [x] Check rotations against Figma specs.
- [x] Visual check against `Home.png`.
- [x] Ensure production build passes.

## Technical Details
- **Rotations**: Tailwind custom rotate values or inline styles.
- **Images**: Already present in `/public/services/`.
