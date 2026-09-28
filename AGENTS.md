# Agents Guide

## Project Purpose

This repository contains a desktop-focused, high-fidelity frontend recreation of an Airbnb property listing page created as a software engineering take-home assignment.

The project demonstrates:

- visual precision
- detailed layout implementation
- reusable React component architecture
- client-side interaction handling
- accessibility-focused implementation
- AI-assisted development and refinement

The current application is intentionally frontend-only.

## Technology Stack

- **Framework:** React 19.2.8
- **Build Tool:** Vite 8.3.0
- **Language:** JavaScript / JSX
- **Styling:** CSS Modules + global CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React and local/recreated SVG assets where appropriate
- **Routing:** React Router DOM is installed for extensibility; the current application renders a single listing page without configured application routes
- **Data:** Local static JavaScript data
- **Backend:** None

Do not introduce technologies that are not required by the current project.

## Repository Structure

Before modifying the project, inspect the current repository instead of assuming a folder or file exists.

The main application areas are:

```text
src/
├── components/        # Reusable UI components organized by feature
│   ├── booking/       # Booking/reservation UI
│   ├── gallery/       # Photo Tour and Lightbox
│   ├── layout/        # Site-wide layout components such as Header
│   ├── listing/       # Listing-specific feature components
│   └── ui/            # Small reusable UI primitives
│
├── data/              # Static listing, gallery, review, and related data
├── hooks/             # Reusable React hooks
├── pages/             # Top-level page components
│   └── ListingPage/   # Main listing page
│
├── assets/            # Application/source assets
├── App.jsx            # Application shell
├── main.jsx           # React entry point
└── index.css          # Global styles
```

Static public assets are located under:

```text
public/
├── images/
└── ...
```

Always inspect the actual repository before relying on this structure because files may evolve over time.

## Core Engineering Principles

### 1. Frontend Only

This project is intentionally a frontend-only take-home implementation.

Do NOT introduce:

* Express or another backend server
* databases
* REST APIs
* GraphQL
* authentication backends
* payment backends
* Docker infrastructure
* unnecessary cloud/server infrastructure

Only introduce backend infrastructure when explicitly requested.

### 2. Current Implementation Is the Source of Truth

The existing frontend implementation is considered complete.

Do NOT:

* rebuild the application
* migrate frameworks
* migrate to Next.js
* migrate to TypeScript
* redesign the UI
* replace the existing styling architecture
* replace CSS Modules with Tailwind
* introduce Redux, Zustand, or another global state library without a specific requirement
* rewrite working components unnecessarily

Prefer small, targeted changes over large refactors.

### 3. Analyze Before Editing

Before making a change:

1. Inspect the relevant source files.
2. Understand the existing implementation.
3. Check existing dependencies in `package.json`.
4. Follow the existing component and styling patterns.
5. Make the smallest appropriate change.
6. Verify the result.

Never assume that a file, folder, dependency, hook, or feature exists without checking.

## Styling Guidelines

The application uses:

* CSS Modules for component-scoped styling
* global CSS for global resets, variables, typography, and other truly global concerns

Do NOT introduce Tailwind or styled-components.

When modifying styles, preserve the existing visual system and pay attention to:

* spacing
* typography
* font weight
* line height
* alignment
* image cropping
* border radius
* borders
* shadows
* colors
* icon sizing
* hover states
* transitions

Avoid unnecessary changes to unrelated components.

## State Management

Use React's local state and existing custom hooks.

Relevant interaction logic includes:

* `useLightbox`
* `useKeyboardNavigation`
* `useBodyScrollLock`

Keep state close to the component or page that owns it.

Do NOT introduce a global state-management solution for simple UI state.

## Asset Guidelines

Use the existing local assets where appropriate.

Before adding or downloading a new asset:

1. Check whether the required asset already exists.
2. Reuse the existing asset when suitable.
3. Avoid unnecessary duplication.
4. Preserve meaningful asset organization and filenames.

Pay attention to:

* property images
* reviewer/host avatars
* SVGs
* icons
* fonts
* decorative assets

Where a matching icon is not available, use the project's established icon/SVG approach rather than introducing an unrelated visual style.

## Accessibility Guidelines

Accessibility is part of the assignment and must be preserved.

Maintain:

* semantic HTML
* meaningful heading hierarchy
* accessible button elements
* `aria-label` values for icon-only controls
* appropriate `alt` text
* `aria-hidden` for decorative elements where appropriate
* visible keyboard focus states
* keyboard navigation
* modal/dialog semantics
* focus management
* body scroll locking
* logical tab order

Pay particular attention to:

* Photo Tour
* Lightbox
* keyboard navigation
* Escape handling
* ArrowLeft / ArrowRight
* modal open/close behavior

Do not remove existing accessibility behavior without a clear reason.

## Visual Fidelity

The application is a high-fidelity recreation of the supplied reference.

When making UI changes, prioritize the reference appearance and existing implementation.

Check carefully:

* overall layout
* content width
* section spacing
* typography
* image dimensions and cropping
* icons
* SVG alignment
* borders
* shadows
* button sizing
* hover states
* modal dimensions
* transitions
* sticky elements

Do not introduce design changes simply because they seem visually preferable.

## Reference and Originality

The reference website and its locally saved resources are used as visual and behavioral references.

The existing project may contain locally saved reference assets and inspected reference material.

When making future changes:

* use the reference to understand the intended appearance and behavior
* use existing local assets where appropriate
* preserve the independent React implementation
* do not embed or iframe the reference website
* do not execute the original site's application code
* do not copy the original HTML/CSS/JavaScript implementation into the project
* do not mechanically reproduce the original DOM structure merely for convenience

Maintain the project's independent component architecture and implementation.

## Code Quality

Keep changes:

* readable
* modular
* maintainable
* focused
* consistent with the existing project

Avoid:

* unnecessary abstractions
* duplicated logic
* oversized components when a meaningful existing boundary is available
* unused dependencies
* unrelated refactoring

Do not refactor working code solely for stylistic preference.

## Validation

After meaningful changes, verify the affected behavior.

Where appropriate, run:

```bash
npm run lint
npm run build
```

Also check:

* browser console
* broken imports
* missing assets
* gallery interactions
* Photo Tour
* Lightbox
* keyboard navigation
* modal behavior
* accessibility regressions

Do not claim that a command passed unless it was actually run.

## What MUST NOT Be Changed Without Explicit Instruction

Do not change the following merely for cleanup or preference:

* framework or build tool
* JavaScript → TypeScript migration
* CSS Modules → Tailwind migration
* current UI design
* major component architecture
* working gallery behavior
* Photo Tour behavior
* Lightbox behavior
* existing accessibility behavior
* existing local asset organization
* frontend-only architecture

## Final Rule

**Analyze first. Modify second. Verify third.**

Preserve the completed implementation, maintain high visual fidelity, keep the project frontend-only, and make only targeted changes that are required by the requested task.
