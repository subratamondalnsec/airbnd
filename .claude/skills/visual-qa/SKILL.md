---
name: Visual QA Review
description: Comprehensive visual quality assurance for the listing page sections.
---

# Visual QA Skill

Use this skill to perform a comprehensive visual check of the entire application layout and its interactive states.

## General Guidelines
- Compare against the current reference at the intended desktop viewport.
- Verify dimensions from the current implementation rather than assuming fixed values.

## Areas to Inspect
1. **Header & Navigation:** Sticky behavior, scroll spy highlighting, logo alignment, and search bar appearance.
2. **Hero Gallery:** Grid layout, gaps, image proportions, and "Show all photos" button placement.
3. **Main Content Sections:** Title, property highlights, description expansion, and amenities grid.
4. **Booking Card:** Sticky positioning, price layout, date/guest selectors, and visual hierarchy.
5. **Photo Tour:** Full-screen overlay behavior, room categorization, scrolling layout, and close button positioning.
6. **Lightbox:** Image centering, counter display, Arrow navigation visibility, and transition smoothness.
7. **Lower Sections:** Reviews (rating bars, chips, cards), Map/Location placeholder, Host details, and Nearby listings carousel.

## Audit Workflow
- Start from the top of the viewport and scroll down.
- Trigger all modals (Photo Tour, Lightbox) and verify their layout.
- Check responsive constraints (e.g., max-width of the main container).
- Verify that no content overflows or clips unexpectedly.
