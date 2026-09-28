# Airbnb Listing Page Clone 
## Overview 
A desktop-focused, high-fidelity recreation of an Airbnb property listing page, built as a software engineering take-home assignment. The implementation closely matches the supplied reference in visual appearance, layout, content structure, and interactive behavior. The listing recreated is **"Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"** — an entire serviced apartment in Candolim, Goa, India. 
## Features 
- **Full listing page** — title, location metadata, property type, guest/bedroom/bed/bath counts 
- **Hero image gallery** — 5-image grid with click-to-open behavior 
- **Photo Tour** — full-screen overlay organized by room, with category sidebar navigation, wide/pair image layouts, and smooth-scroll room selection 
- **Lightbox** — single-image viewer with previous/next navigation, image counter, room labels, and "Show all photos" grid toggle 
- **Keyboard navigation** — ArrowLeft/ArrowRight for Lightbox image cycling, Escape to close modals 
- **Body scroll locking** — prevents background scrolling when Photo Tour or Lightbox is open 
- **Booking card** — sticky price display, check-in/checkout dates, guest selector, reserve button, cancellation notice, discount banner, and "Report this listing" link 
- **Guest Favourite badge** — rating, star display, review count with decorative leaf SVGs 
- **Property highlights** — outdoor entertainment, staying cool, self check-in with matching icons 
- **Description** — expandable/collapsible text with "Show more" toggle 
- **Sleeping arrangements** — visual room cards with bed type labels 
- **Amenities** — icon grid with "Show all 50 amenities" modal and categorized full list 
- **Calendar** — dual-month October/November 2026 view with selected date range, disabled dates, and navigation controls 
- **Reviews** — overall rating display with laurel wreath, 5-star distribution bars, category scores (Cleanliness, Accuracy, Check-in, Communication, Location, Value), review topic chips with images, individual review cards with expandable text 
- **Location** — map placeholder with pin, zoom controls, search button, and neighbourhood highlights 
- **Host section** — host card with avatar, stats, co-hosts, response information, message button, and payment safety notice 
- **Things to know** — cancellation policy, house rules, and safety/property information 
- **More stays nearby** — paginated carousel of similar listings with ratings and prices 
- **Sticky navigation bar** — appears on scroll past the gallery, with section anchors (Photos, Amenities, Reviews, Location), price summary, and Reserve button 
- **Skip to content** — keyboard-accessible link for improved navigation 
- **Animated transitions** — Framer Motion for Photo Tour/Lightbox enter/exit and image transitions 
- **Scroll spy** — active section highlighting in the sticky navigation 
- **Header** — Airbnb logo, search bar (Anywhere/Anytime/Add guests), Become a host link, globe icon, and hamburger menu 

## Tech Stack 

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.2.8 | UI framework |
| **JavaScript (JSX)** | ES2022+ | Programming language |
| **Vite** | 8.3.0 | Build tool and development server |
| **Framer Motion** | 13.4.4 | Animations and transitions |
| **Lucide React** | 1.48.0 | Icon library, selectively used |
| **React Router DOM** | 7.18.4 | Routing dependency available for extensibility |
| **CSS Modules** | — | Scoped component styling |
| **OxLint** | 1.81.0 | Linting | 

> **Note:** React Router DOM is included as a project dependency, but the current implementation renders a single listing page directly without route configuration. It is available for future multi-page extension. 

## Project Structure 
```text 
├── index.html # Entry HTML, meta tags, favicon 
├── package.json # Dependencies and scripts 
├── vite.config.js # Vite + React plugin configuration 
├── .oxlintrc.json # OxLint rules 
├── .gitignore 
├── public/ 
│ ├── favicon.svg # Site favicon 
│ ├── icons.svg # SVG sprite sheet 
│ └── images/ 
│ ├── *.jpeg # Property photos 
│ ├── avatars/ # Host, co-host, reviewer avatars 
│ │ └── avatars/ # Nested duplicate 
│ ├── chips/ # Review topic chip images 
│ │ └── chips/ # Nested duplicate 
│ ├── similar/ # Nearby listing thumbnails 
│ └── ui/ # UI assets such as discount SVGs and laurel graphics 
│ └── ui/ # Nested duplicate 
└── src/ 
├── main.jsx # React entry point 
├── App.jsx # App shell: skip-to-content + Header + ListingPage 
├── App.css # Legacy template styles 
├── index.css # Global CSS: variables, resets, typography, scrollbar 
├── data/ 
│ ├── listing.js # Listing metadata, host, highlights, sleeping, hero images 
│ ├── gallery.js # Gallery images with room assignments and layout configuration 
│ ├── amenities.js # Amenity list and categorized amenities 
│ ├── reviews.js # Review data, rating breakdown, category scores, chips 
│ └── nearbyListings.js # Similar listing cards 
├── hooks/ 
│ ├── useBodyScrollLock.js # Locks document.body overflow while overlays are open 
│ ├── useKeyboardNavigation.js # ArrowLeft/ArrowRight/Escape handling 
│ └── useLightbox.js # Lightbox open/close and image navigation state 
├── components/ 
│ ├── ui/ 
│ │ └── StarIcon.jsx # Reusable star-rating primitives 
│ │ 
│ ├── layout/ 
│ │ └── Header/ 
│ │ ├── Header.jsx 
│ │ └── Header.module.css 
│ │ 
│ ├── booking/ 
│ │ └── BookingCard/ 
│ │ ├── BookingCard.jsx 
│ │ └── BookingCard.module.css 
│ │ 
│ ├── gallery/ 
│ │ ├── PhotoTour/ 
│ │ │ ├── PhotoTour.jsx 
│ │ │ └── PhotoTour.module.css 
│ │ └── Lightbox/ 
│ │ ├── Lightbox.jsx 
│ │ └── Lightbox.module.css 
│ │ 
│ └── listing/ 
│ ├── ListingGallery/ 
│ │ ├── ListingGallery.jsx 
│ │ └── ListingGallery.module.css 
│ ├── Amenities/ 
│ │ ├── Amenities.jsx 
│ │ └── Amenities.module.css 
│ ├── Reviews/ 
│ │ ├── Reviews.jsx 
│ │ └── Reviews.module.css 
│ └── NearbyListings/ 
│ ├── NearbyListings.jsx 
│ └── NearbyListings.module.css 
├── pages/ 
│ └── ListingPage/ 
│ ├── ListingPage.jsx 
│ └── ListingPage.module.css 
└── assets/ 
├── hero.png 
├── react.svg 
└── vite.svg
```
The structure above reflects the current project organization. Keep this section synchronized with the repository if files are added, removed, or renamed. 

## Architecture 
 
### Current Architecture
 
See:
`docs/current-architecture.md`
 
Architecture diagram:
`docs/current-architecture-diagram.pdf`
 
### Production-Scale Architecture
 
The assignment also requires a high-level production-scale architecture diagram for a vacation-rental marketplace.
 
See:
`docs/production-architecture.md`
 
Architecture diagram:
`docs/production-architecture-diagram.pdf`
 
## Interaction Model 

### Gallery → Photo Tour → Lightbox 
- **Hero Gallery**: clicking a hero image opens the Lightbox at the corresponding gallery image. Selecting "Show all photos" opens the Photo Tour. 
- **Photo Tour**: a full-screen scrollable gallery organized by room. Room navigation allows quick movement between gallery sections, and selecting an image opens the Lightbox for that image. 
- **Lightbox**: displays a single image with previous/next controls, an image counter, and the current room label. ArrowLeft/ArrowRight cycle through images, while Escape closes the Lightbox. The gallery control can return to the Photo Tour where implemented. 

### Keyboard Support 

| Key | Action |
|---|---|
| ArrowRight | Next image in Lightbox |
| ArrowLeft | Previous image in Lightbox |
| Escape | Close the active Lightbox or Photo Tour |
| Tab | Navigate through keyboard-focusable controls |

### Scroll Behavior 
- **Body scroll lock**: background page scrolling is disabled while Photo Tour or Lightbox overlays are open and restored when they close. 
- **Sticky navigation**: a scroll-spy-driven navigation bar appears after the gallery and highlights the currently visible section. 
- **Sticky booking card**: the booking card remains positioned within the right-side listing layout while the page content scrolls. 

### Focus Management 
- Photo Tour focuses the close control when opened. 
- Lightbox focuses the close control when opened. 
- Photo Tour and Lightbox use dialog semantics with `role="dialog"` and `aria-modal="true"`. 

## Accessibility 
The implementation includes accessibility-focused behavior such as: 
- Skip-to-content link that becomes visible when focused 
- Semantic landmarks including main, section, header, nav, and aside 
- Heading hierarchy using h1–h3 
- Dialog semantics for Photo Tour and Lightbox 
- Accessible labels on icon-only interactive controls 
- Appropriate treatment of decorative SVGs and images 
- Alternative text for meaningful images 
- Visible focus styling for keyboard users 
- Keyboard-navigable Lightbox using ArrowLeft, ArrowRight, and Escape 

## Local Development 

### Prerequisites 
- Node.js (LTS recommended) 
- npm 

### Install & Run 
```bash
# Install dependencies 
npm install 

# Start development server 
npm run dev 

# Run lint 
npm run lint 

# Create production build 
npm run build 

# Preview production build locally 
npm run preview
```

### Available Scripts 

| Script | Command | Purpose |
|---|---|---|
| `dev` | `vite` | Development server with HMR |
| `build` | `vite build` | Production build |
| `lint` | `oxlint` | Run OxLint |
| `preview` | `vite preview` | Preview the production build locally |

## Deployment 
This is a static Vite/React application. The production output generated by `npm run build` can be deployed to a static hosting platform. 

### Vercel 
The application can be deployed to Vercel using the standard Vite configuration. 
Recommended settings: 
- **Build Command:** `npm run build` 
- **Output Directory:** `dist` 

No application backend is required for the core take-home implementation. 

### Other Static Hosting 
The generated `dist/` directory can also be served through other static hosting providers that support Vite-generated applications. 

## AI-Assisted Development 
This project was developed using AI-assisted engineering throughout the implementation and refinement process. 
- **Reference and resource analysis** — direct automated access to the reference page was restricted, so the required page resources were saved locally, including images, fonts, icons, and other assets. The saved HTML/CSS/JavaScript were then inspected to understand the page structure, content, and visual behavior. 
- **Component planning** — AI assistance was used to reason about the React component hierarchy, data organization, styling approach, and interaction model. 
- **Base implementation** — the core frontend structure and major listing sections were implemented with AI-assisted development. 
- **Section-by-section refinement** — targeted prompts were used to refine individual areas, with particular attention to icons, SVG recreation, typography, image cropping, spacing, alignment, borders, shadows, and overall layout proportions. 
- **Interaction refinement** — Photo Tour behavior, Lightbox navigation, keyboard controls, body scroll locking, sticky navigation, and animation transitions were refined iteratively. 
- **QA and review** — the final stage included visual QA, accessibility checks, interaction testing, and code-quality review to identify and correct remaining inconsistencies. 

See `AI_PROMPTS.md` for the documented prompt sequence. 

## AI Configuration 
The submission package includes project-level AI guidance and configuration files used to support AI-assisted development and future maintenance: 
- `AGENTS.md` — repository-wide instructions for AI coding agents 
- `CLAUDE.md` — project-specific guidance for Claude 
- `.claude/` — Claude-related project configuration, agents, and/or skills 

These files are documentation/development aids and are not part of the runtime application. 

## Originality & Reference Usage 
- The supplied Airbnb listing page was used as the visual and behavioral reference for the assignment. 
- Required page resources were saved locally because direct automated access to the reference was restricted. 
- The saved HTML/CSS/JavaScript were inspected to understand the reference structure, content, and behavior. 
- The final application was independently structured in React, with its own component organization, data modules, styling system, and interaction logic. 
- The reference implementation was not embedded, iframed, or executed as the submitted application. 
- Icons and SVG visuals were implemented using a combination of local assets, recreated SVGs, and icon-library components where appropriate. 
- Property images from the reference listing are used as local static assets to reproduce the required visual output. 

## Assignment Scope 
- **Desktop-focused:** the implementation targets desktop viewport sizes, with primary attention to widths around 1280px and above. Mobile and tablet-specific layouts were outside the assignment scope. 
- **Frontend-only:** the application uses static/local data and assets. A real backend, database, authentication system, payment processing, or persistent booking system was not required for this take-home. 
- **Single listing:** the implementation focuses on one property listing and the required gallery, Photo Tour, Lightbox, and supporting sections rather than a complete marketplace. 
- **Visual and behavioral fidelity:** the primary objective was to closely reproduce the reference page's visual appearance, interaction behavior, transitions, and accessibility characteristics.
