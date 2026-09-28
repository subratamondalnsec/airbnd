---
name: Pixel-Perfect UI Review
description: Guidelines for conducting high-fidelity visual reviews and corrections.
---

# Pixel-Perfect UI Skill

Use this skill to perform high-fidelity visual reviews of the application against the reference design.

## Core QA Approach
- Compare the implemented component against the reference screenshot/design.
- Use DevTools (or simulate mental DOM measurement) to verify actual computed styles.
- Look for sub-pixel misalignments, incorrect border radii, wrong font weights, or improper SVG scaling.

## Key Inspection Areas
- **Typography:** Font family, weight, size, line-height, letter-spacing, and color.
- **Spacing:** Margins, padding, gap, and overall content width.
- **Imagery:** Image proportions, object-fit cropping, and border radius.
- **SVGs/Icons:** Stroke width, fill, alignment with adjacent text, and sizing.
- **Shadows & Borders:** Box-shadow depth, border color, and thickness.
- **States:** Hover, active, and focus styles.

## Correction Rules
- Prefer the smallest targeted change.
- Do not refactor component structure unless the visual issue is caused by the existing structure.
- Fix the root cause rather than changing unrelated code.
- Avoid changing JavaScript logic when a CSS-only solution is sufficient.
- When making significant visual corrections, briefly record what was changed and why.
