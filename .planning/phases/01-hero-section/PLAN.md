# Phase 1: Hero Section Implementation Plan

## Goal
Transform the hero section into a pixel-perfect match of the Figma design. This includes refactoring the overall page layout from absolute positioning to a proper flow layout to ensure stability and maintainability.

## Tasks

### 1. Layout Refactor (Absolute to Flow)
- [x] Remove `absolute` positioning from major sections in `src/app/page.tsx`.
- [x] Implement a vertical flow using a centered container with a maximum width of 1440px.
- [x] Ensure the content area matches the Figma spec (1176px width with 132px margins).
- [x] Maintain the background decorative SVG as `absolute` but correctly contained.

### 2. Hero Section Refinement
- [x] Update Hero positioning to match Figma (top 328px from canvas top).
- [x] Match fonts: Reckless Neue Book (300) for "Crafting Digital Solutions".
- [x] Adjust Michelangelo hand image positioning and size.
- [x] Update "Since 2020" text to Alegreya Sans Medium (500) with italic style.

### 3. Verification
- [x] Verify alignment at 1440px viewport.
- [x] Check mobile responsiveness.
- [x] Run production build to ensure no errors.

## Technical Details
- **Container**: `max-w-[1440px] mx-auto`
- **Content Width**: `w-full max-w-[1176px] px-[132px]` or similar.
- **Hero Spacing**: Since Navbar is ~72px, the Hero section should have a top margin/padding to reach the 328px mark from the top of the viewport. 328 - 72 = 256px.

## Constraints
- Keep existing `NavBar` and `Footer`.
- Use `framer-motion` for animations if applicable (though not explicitly requested for Phase 1 yet).
