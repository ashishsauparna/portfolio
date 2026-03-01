# Phase 5: Footer Integration Implementation Plan

## Goal
Update the footer to match the Figma design exactly in terms of typography, layout, and content.

## Tasks

### 1. Typography & Content Refinement
- [x] Update heading to "Interested in working together?".
- [x] Set heading font to `font-recklessneue` (Reckless Neue Book) at `text-[24px]`.
- [x] Update copyright text to "© Assembled with pixels by Ashish. Last updated Jan 2026".
- [x] Ensure email address is visible and linked.

### 2. Layout Refactor
- [x] Remove the ticker/marquee.
- [x] Align heading/email to the left.
- [x] Align social links (Figma, LinkedIn, Medium) to the right.
- [x] Match the `border-t` color and spacing.

### 3. Verification
- [x] Visual check against `Home.png`.
- [x] Verify all links are functional.
- [x] Ensure production build passes.

## Technical Details
- **Heading**: `font-recklessneue text-[24px] font-light`.
- **Links**: `font-alegreya-sans text-[16px]` or similar.
- **Width**: Should match the 1176px content area or remain consistent with the container flow.
