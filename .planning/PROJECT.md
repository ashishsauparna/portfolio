# Project: Portfolio Homepage Figma Redesign

## Core Value

Pixel-perfect implementation of the Figma homepage design for Ashish Sharma's UX portfolio, matching exact fonts, spacing, alignment, and layout.

## Problem Statement

The current homepage does not match the Figma design. Previous implementation attempts had issues with:
- Alignment and margins not matching Figma specs
- Font families not correctly applied (missing Alegreya Sans, Alegreya)
- Components not replaced with the actual Figma layout
- Spacing values not pixel-accurate

## Source of Truth

Figma file: `https://www.figma.com/design/QUvnu4XoyWUbfVo1KEWfrJ/Untitled?node-id=1-198&m=dev`

Key Figma specs extracted:
- **Canvas width**: 1440px
- **Content area**: 1176px wide, left margin 132px
- **Hero position**: top 328px, centered at ~33% from left
- **Main content**: starts at top 660px
- **Section gaps**: 144px between major sections
- **Fonts**: Reckless Neue Book (300), Alegreya Sans Medium (500), Alegreya Regular/Medium
- **Font sizes**: Hero 48px, section headings 24px, body 16-18px

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3.3
- **Animations**: Motion (framer-motion)
- **Language**: TypeScript
- **Fonts**: Reckless Neue (local), Albert Sans, Alegreya Sans, Alegreya (Google Fonts)

## Constraints

- Must keep existing navbar component
- Must keep existing footer component
- Must remain responsive (mobile support)
- Must keep existing project page routes working
- Use Figma MCP for extracting exact design values
- Production build must pass with no errors

## Design Sections (from Figma)

1. **Navbar** (existing component, 72px height)
2. **Hero Section**: "Crafting Digital Solutions" + Michelangelo hand image + "Since 2020"
3. **About Section**: Introduction paragraph
4. **Tools Section**: 7 company logos (Figma, Miro, Google, Reddit, Loom, ChatGPT, Adobe)
5. **Case Studies**: 3+2 grid layout with project cards
6. **Skills & Services**: 4 items with decorative frame illustrations
7. **Footer** (existing component)

## Key Decisions

| # | Decision | Rationale | Date |
|---|----------|-----------|------|
| 1 | Use Figma MCP for exact values | Ensures pixel accuracy | 2026-02-23 |
| 2 | Added Alegreya Sans + Alegreya fonts | Required by Figma design | 2026-02-23 |
| 3 | Downloaded images from Figma localhost | Actual design assets | 2026-02-23 |
| 4 | Client component ('use client') for page | Needed for animations | 2026-02-23 |

## Success Criteria

- [ ] Homepage visually matches Figma design at 1440px viewport
- [ ] Correct fonts applied to all text elements
- [ ] Exact margins and spacing from Figma
- [ ] Case studies render in 3+2 grid with correct card layout
- [ ] Skills section shows framed illustrations
- [ ] Hero section with Michelangelo hand positioned correctly
- [ ] Responsive on mobile devices
- [ ] Production build passes
