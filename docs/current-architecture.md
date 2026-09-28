# Current Architecture

## 1. Overview

This document describes the architecture of the submitted take-home implementation.

This is a frontend-only implementation. No production backend, database, search infrastructure, payment system, or persistent booking service is implemented.

## 2. Technology Stack

- **Framework:** React 19.2.8
- **Build Tool:** Vite 8.3.0
- **Language:** JavaScript (JSX)
- **Styling:** CSS Modules + global CSS variables
- **Animations:** Framer Motion
- **Icons:** Lucide React and local SVG assets
- **Routing:** React Router DOM (installed, but currently rendering a single listing page)
- **Data:** Local static JavaScript objects (`src/data/`)

## 3. Application Flow

The frontend renders purely on the client side:
Browser
  ↓
Vite / React Application
  ↓
App (`App.jsx`)
  ↓
ListingPage (`ListingPage.jsx`)
  ↓
Feature Components
  ↓
Local JavaScript Data + Local Static Assets

## 4. Component Organization

The application is modularized by feature domain:
- `src/components/layout/` - Site-wide elements like Header and Footer.
- `src/components/listing/` - Core listing metadata, reviews, host info, and amenities.
- `src/components/gallery/` - The hero gallery, Photo Tour overlay, and Lightbox.
- `src/components/booking/` - The booking card and reservation UI.
- `src/components/ui/` - Reusable primitives (buttons, modals).

## 5. Data Flow

Data flows unidirectionally down the component tree. The initial data is loaded statically from `src/data/` (e.g., property details, mock reviews) and passed as props to layout and feature components. There are no asynchronous API fetches.

## 6. Gallery / Photo Tour / Lightbox Flow

The application implements a high-fidelity image browsing experience:
- **Listing Gallery:** Renders a responsive CSS Grid of the primary property images.
- **Photo Tour:** A full-screen scrollable overlay that categorizes all property images. Opened via "Show all photos".
- **Lightbox:** A focused single-image carousel with keyboard navigation and transitions. Can be triggered from the main gallery or the Photo Tour.

## 7. State and Hooks

Local React state manages all interactive UI changes. Complex logic is abstracted into focused custom hooks:
- `useLightbox` - Manages active image index, open/closed state, and modal transitions.
- `useKeyboardNavigation` - Maps `Escape`, `ArrowLeft`, and `ArrowRight` to appropriate modal actions.
- `useBodyScrollLock` - Prevents the background page from scrolling when the Photo Tour or Lightbox is open.

## 8. Styling Architecture

- `src/index.css` acts as the global stylesheet, defining CSS variables (colors, typography, spacing) and basic resets.
- `.module.css` files are colocated with their respective components, ensuring styles are strictly scoped to prevent cascading conflicts.

## 9. Deployment

The application compiles down to static HTML, CSS, and JS using `npm run build`. It can be deployed out-of-the-box to any static hosting provider (e.g., Vercel, Netlify, GitHub Pages, or S3).

## 10. Scope

The following architectural components are strictly **outside the implementation scope** of this frontend-focused take-home:
- Backend servers (Node.js, Express, etc.)
- Databases (PostgreSQL, MongoDB, etc.)
- Authentication backend
- Real payment processing
- Persistent booking system
- Production search infrastructure
- Asynchronous backend processing
