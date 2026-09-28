---
name: Accessibility QA
description: Guidelines for auditing semantic HTML, keyboard navigation, and ARIA implementation.
---

# Accessibility QA Skill

Use this skill to audit the application for accessibility best practices, specifically focusing on modal interactions, keyboard navigation, and semantic structure.

## Semantic HTML & ARIA
- Verify correct heading hierarchy (h1 -> h2 -> h3).
- Ensure all interactive elements use `<button>` or `<a>` with proper `href`.
- Verify `aria-label` or screen-reader-only text is present on icon-only controls (e.g., close buttons, gallery arrows).
- Check that modal overlays use `role="dialog"` and `aria-modal="true"`.
- Ensure decorative images and SVGs use `aria-hidden="true"` or empty `alt=""`.

## Keyboard & Focus Management
- Tab through the page to verify a logical tab order.
- Ensure all interactive elements have a clear, visible focus state (`:focus-visible`).
- **Modal Focus Behavior (Photo Tour & Lightbox):**
  - Verify whether focus is trapped inside the dialog.
  - Verify whether focus returns to the triggering element when the dialog closes.
  - Report missing focus trapping/restoration as an accessibility issue.
- Verify `Escape` key closes active modals.
- Verify `ArrowLeft` and `ArrowRight` correctly navigate images in the Lightbox.

## Scroll Management
- Verify that body scrolling is locked when a modal overlay is open.
- Verify that scrolling is restored when the modal is closed.

## Audit Workflow
- If accessibility gaps are found, recommend targeted fixes (e.g., adding `tabIndex`, fixing `onClick` on non-interactive elements, or adding missing `aria` attributes) rather than structural rewrites.
