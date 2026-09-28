# Claude AI Assistant Guidelines

## Project Context

This repository contains a desktop-focused, high-fidelity recreation of an Airbnb property listing page created as a software engineering take-home assignment.

The application focuses on reproducing the reference page's visual structure, content presentation, and interactive behavior, including the property gallery, Photo Tour, Lightbox, booking UI, property details, reviews, and other listing sections.

The application is frontend-only and uses local/static data and assets.

## Current Stack

- **Core:** React + Vite
- **Language:** JavaScript / JSX
- **Routing:** React Router DOM is available as a project dependency for future extensibility; the current application renders a single listing page without configured application routes
- **Styling:** CSS Modules + global CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React and project/local SVG assets where appropriate
- **Data:** Static/local JavaScript data
- **Backend:** None

## Key Project Paths

Always inspect the repository before assuming a path or structure.

The currently important areas include:

- **Application Shell:** `src/App.jsx`
- **Main Page:** `src/pages/ListingPage/ListingPage.jsx`
- **Gallery:** `src/components/gallery/`
- **Listing Features:** `src/components/listing/`
- **Booking UI:** `src/components/booking/`
- **Shared UI:** `src/components/ui/`
- **Local Data:** `src/data/`
- **Custom Hooks:** `src/hooks/`
- **Global Styles:** `src/index.css`
- **Component Styles:** colocated `.module.css` files
- **Static Assets:** `public/images/`

Do not assume additional directories or files without checking the repository.

## How to Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

Always verify available scripts against `package.json` before suggesting commands.

## Interaction Behaviors

### Gallery

The hero section contains the primary property image gallery.

* Clicking a hero image opens the Lightbox at the corresponding image.
* The **Show all photos** control opens the Photo Tour.

### Photo Tour

The Photo Tour is a full-screen, scrollable gallery organized around the available room/image groups.

* It can be opened from the listing gallery.
* Images can be selected from the Photo Tour.
* Selecting an image opens the corresponding Lightbox state.
* Background page scrolling is disabled while the overlay is active.

### Lightbox

The Lightbox is a single-image viewer.

Supported interactions include:

* Previous image
* Next image
* `ArrowLeft`
* `ArrowRight`
* `Escape`
* Close control
* Image counter/current room information where implemented
* Returning to the Photo Tour where supported

### Hooks

Important interaction logic is handled through focused custom hooks:

* `useLightbox`
* `useKeyboardNavigation`
* `useBodyScrollLock`

Preserve these responsibilities when modifying the interaction model.

## Critical Rules for Claude

### 1. Frontend-Only

This project is intentionally frontend-only.

Do NOT add:

* Node.js/Express backend
* database
* REST API
* GraphQL
* authentication backend
* payment backend
* Docker infrastructure
* unnecessary server infrastructure

Only introduce backend or infrastructure code when explicitly requested.

### 2. Preserve the Existing Implementation

The frontend implementation is already complete.

Do NOT:

* rebuild the application unnecessarily
* replace working components
* migrate frameworks
* switch to TypeScript
* replace CSS Modules with Tailwind
* introduce Redux or another global state library without a clear requirement
* change the overall architecture without justification
* modify working visual behavior unnecessarily

Prefer small, targeted changes over large refactors.

### 3. Repository First

Before making architectural, styling, or documentation changes:

1. Inspect the existing repository.
2. Read the relevant source files.
3. Understand the current component/data structure.
4. Verify dependencies in `package.json`.
5. Reuse existing patterns where appropriate.

Never assume a file or folder exists.

### 4. Visual Fidelity

This project is a high-fidelity recreation.

When modifying UI, pay close attention to:

* layout
* spacing
* typography
* font weight
* image dimensions
* image cropping
* alignment
* colors
* borders
* border radius
* shadows
* icon size
* SVG alignment
* hover states
* transitions
* modal geometry

Avoid introducing visual changes that are unrelated to the requested task.

### 5. Accessibility

Preserve and improve accessibility.

Pay particular attention to:

* semantic HTML
* `aria-label`
* meaningful `alt` text
* keyboard focus
* `focus-visible` states
* dialog semantics
* Escape handling
* ArrowLeft / ArrowRight navigation
* logical tab order
* focus management
* body scroll locking
* avoiding keyboard traps

Do not remove existing accessibility behavior unless there is a clear technical reason.

### 6. Reference and Originality

The supplied Airbnb page is the visual and behavioral reference.

The reference may be inspected to understand:

* layout
* content
* assets
* typography
* image arrangement
* interactions
* visual behavior

However, do NOT:

* copy the reference HTML directly into React
* copy the original CSS wholesale
* copy the original JavaScript
* embed or iframe the reference website
* execute the reference site's application code
* preserve the original implementation merely by renaming classes/components

The project should remain an independently structured React implementation.

### 7. Asset Usage

Use the project's existing local assets where appropriate.

Before adding a new asset:

* check whether an equivalent local asset already exists
* preserve the existing asset organization
* avoid unnecessary duplication
* use the correct image/font/icon where available

Do not replace existing reference images with arbitrary placeholders unless explicitly requested.

### 8. State Management

Prefer local React state and focused custom hooks.

Keep state close to the component or page that owns it.

Avoid introducing global state management for simple interactions such as:

* gallery state
* Lightbox index
* modal visibility
* selected dates
* guest selection

### 9. Styling

The project uses:

* global CSS in `src/index.css`
* component-scoped CSS Modules

Preserve this styling architecture.

Do not introduce Tailwind or another styling framework unless explicitly requested.

When adjusting styles, prefer the existing design tokens, CSS variables, and component patterns where available.

### 10. Performance and Code Quality

Keep the code:

* readable
* modular
* maintainable
* appropriately componentized
* free from unnecessary duplication

Avoid premature abstraction.

Do not create components purely for the sake of splitting files.

At the same time, avoid turning major page sections into one unnecessarily large component when a meaningful component boundary already exists.

### 11. Validation

After meaningful code changes:

1. Run the application.
2. Check the affected interactions.
3. Check the browser console for errors.
4. Run the linter where applicable.
5. Run the production build when appropriate.

At minimum, verify:

```bash
npm run lint
npm run build
```

Do not claim that a build or test passed unless it was actually run.

## AI-Assisted Workflow

When using Claude for this repository, prefer a structured workflow:

1. Inspect the repository.
2. Identify the relevant files.
3. Explain the intended change briefly.
4. Make the smallest appropriate change.
5. Verify the result.
6. Review for visual/accessibility regressions.

For visual tasks, prioritize screenshot/reference comparison and targeted refinement rather than broad rewrites.

For documentation tasks, derive information from the actual repository rather than assumptions.

## Documentation

The repository may contain:

* `README.md`
* `AI_PROMPTS.md`
* `AGENTS.md`
* `CLAUDE.md`
* `.claude/`
* architecture documentation

Keep these files consistent with the actual implementation.

Do not document technologies, features, commands, agents, or infrastructure that do not exist.

## Final Principle

**Analyze first. Modify second. Verify third.**

Preserve the completed frontend, maintain high visual fidelity, keep the architecture simple and appropriate for the assignment, and make only changes that are necessary for the requested task.
