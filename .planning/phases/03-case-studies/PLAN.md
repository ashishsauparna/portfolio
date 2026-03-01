# Phase 3: Case Studies Grid Implementation Plan

## Goal
Implement a 3+2 grid layout for case studies that matches Figma's alignment and spacing exactly.

## Tasks

### 1. Grid Layout Refactor
- [x] Use CSS Grid for the case studies section to ensure perfect alignment.
- [x] Implement `grid-cols-6` to handle the 3+2 layout (3 items span 2 cols each, 2 items span 3 cols each).
- [x] Set exact gap of 32px (`gap-8`).
- [x] Ensure the container matches the content width (1176px).

### 2. Project Card Refinement
- [x] Set fixed image height of 320px for all project cards.
- [x] Apply `rounded-lg` corners to images.
- [x] Title font: `font-alegreya` (Alegreya Medium) at `text-[24px]` with `leading-tight`.
- [x] Description font: `font-alegreya` (Alegreya Regular) at `text-[18px]` with `leading-relaxed`.
- [x] Spacing: 8px gap between image, title, and description.

### 3. Verification
- [x] Check alignment of the 2-item row against the 3-item row.
- [x] Verify hover states (scale effect).
- [x] Ensure mobile responsiveness (stack to 1 column).

## Technical Details
- **Grid Config**: 
  - `grid grid-cols-1 md:grid-cols-6 gap-8`
  - Row 1 items: `md:col-span-2`
  - Row 2 items: `md:col-span-3`
- **Typography**:
  - Titles: `font-medium` (500)
  - Descriptions: `font-normal` (400)
