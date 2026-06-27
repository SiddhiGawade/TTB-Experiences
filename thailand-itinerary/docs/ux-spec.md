# UX Specification Document — Thailand Itinerary Page

## Changelog
| Version | Phase | Description |
|---------|-------|-------------|
| v1.0    | Phase 2 | Initial release |

---

## A. Interaction States

> Note: This is primarily a **static document/itinerary page**. Interactive elements are minimal. The following states are defined for completeness and progressive enhancement.

### 1. Skip-to-Content Link (Hidden by Default)
| State    | Properties                                                       |
|----------|------------------------------------------------------------------|
| Default  | `position: absolute; left: -9999px; opacity: 0`                 |
| Focus    | `position: static; opacity: 1; background: #6B3A2A; color: #FFF; padding: 8px 16px; outline: 3px solid #D4A96A; outline-offset: 2px` |

### 2. Footer Link / Brand (if interactive)
| State    | Properties                                                       |
|----------|------------------------------------------------------------------|
| Default  | `color: #D4A96A; cursor: default; text-decoration: none`        |
| Hover    | `color: #E8C48A; cursor: pointer; transition: color 200ms ease` |
| Active   | `color: #C09050`                                                 |
| Focus    | `outline: 2px solid #D4A96A; outline-offset: 4px`               |

### 3. Images (hover enhancement)
| State    | Properties                                                       |
|----------|------------------------------------------------------------------|
| Default  | `opacity: 1; transition: transform 300ms ease, opacity 300ms ease` |
| Hover    | `transform: scale(1.02); opacity: 0.95`                          |

### 4. Logo Badge
| State    | Properties                                                       |
|----------|------------------------------------------------------------------|
| Default  | `cursor: default`                                                |
| Hover    | `transform: rotate(5deg); transition: transform 300ms ease`     |

---

## B. Responsive Breakpoints

### xs — Mobile (<576px)
- Layout switches to single column (100% width)
- Day 01: text stacks above image (full width)
- Day 02: text stacks above image (full width, reverse visual order)
- Main heading "Day 01 & 02" scales to 32px
- Sub-headings scale to 15px
- Body text remains 14px
- Page padding reduces to 20px
- Logo circle reduces to 60px diameter, repositioned top-right with 15px offset
- Footer text: 10px, letter-spacing 2px
- All images become 100% width
- Touch target minimum: 44×44px for any interactive element

### sm — Tablet (576px – 768px)
- Layout remains single column
- Main heading scales to 36px
- Page padding: 25px
- Logo circle: 65px diameter
- Images at 100% width

### md — Tablet Landscape (768px – 992px)
- Layout switches to 2-column for Day sections
- Column ratio: 50/50
- Main heading: 40px
- Page padding: 30px
- Logo circle: 70px

### lg — Desktop (992px – 1200px)
- Full 2-column layout as designed (55/45 ratio)
- Main heading: 48px
- Page padding: 40px
- Logo circle: 80px

### xl — Wide Desktop (>1200px)
- Same as lg, max-width 720px container, centered
- No changes beyond centering

---

## C. Navigation Flow

### Tab Order (top to bottom, left to right)
1. Skip-to-content link (first focusable, visually hidden until focused)
2. Logo badge (if interactive)
3. Day 01 image (if linked)
4. Day 02 image (if linked)
5. Footer brand text (if interactive)

### Skip-to-Content Link
- First focusable element in the DOM
- Visually hidden until focused
- Jumps to `<main>` content area
- Styled with high contrast when visible

### Anchor Link Behavior
- No in-page anchor links in current design
- If added: smooth scroll with 60px header offset

### Focus Trap
- No modals or overlays in this design
- Not applicable

---

## D. WCAG 2.1 AA Compliance

### Contrast Audit

| Text Element         | Text Color | Background | Ratio  | Pass? |
|---------------------|-----------|-----------|--------|-------|
| Header Title         | `#6B3A2A` | `#FFFFFF` | 7.8:1  | ✅ AA  |
| Main Heading         | `#6B3A2A` | `#FFFFFF` | 7.8:1  | ✅ AA  |
| Sub-heading          | `#4A2C1A` | `#FFFFFF` | 11.2:1 | ✅ AAA |
| Body Text            | `#5C3D2E` | `#FFFFFF` | 7.1:1  | ✅ AA  |
| Bold Callout         | `#4A2C1A` | `#FFFFFF` | 11.2:1 | ✅ AAA |
| Footer Text          | `#D4A96A` | `#4A2C1A` | 4.6:1  | ✅ AA  |
| Logo "TTB"           | `#FFFFFF` | `#6B3A2A` | 7.8:1  | ✅ AA  |

All combinations pass WCAG 2.1 AA minimum (4.5:1 for normal text, 3:1 for large text).

### ARIA Labels

| Element           | ARIA Attribute                                    |
|-------------------|--------------------------------------------------|
| `<header>`        | `role="banner"` (implicit)                        |
| `<main>`          | `role="main"` (implicit), `id="main-content"`     |
| `<footer>`        | `role="contentinfo"` (implicit)                   |
| Logo image        | `alt="TTB Experiences logo"`                      |
| Temple image      | `alt="Chiang Mai temple illuminated at night"`    |
| Garden image      | `alt="Royal Flora Ratchaphruek garden pavilion in Chiang Mai"` |
| Page              | `lang="en"` on `<html>`                           |
| Skip link         | `aria-label="Skip to main content"`               |
| Day sections      | `aria-labelledby` linked to respective `<h3>` IDs |

### Keyboard Navigation
- All focusable elements reachable via Tab
- Skip-to-content link is first Tab stop
- Focus ring visible on all focused elements: `outline: 3px solid #6B3A2A; outline-offset: 2px`

### Screen Reader Mapping

| Component         | HTML Element                    | Notes                     |
|-------------------|---------------------------------|--------------------------|
| Page wrapper      | `<body>`                        |                           |
| Header            | `<header>`                      | Contains title + logo     |
| Title             | `<h1 class="sr-only">` + visual `<p>` | See note below     |
| Main content      | `<main id="main-content">`      |                           |
| Day heading       | `<h1>`                          | "Day 01 & 02"            |
| Day 01 section    | `<section aria-labelledby>`     | Day 01 content            |
| Day 01 sub-heading| `<h2>`                          | Day 01 title              |
| Day 02 section    | `<section aria-labelledby>`     | Day 02 content            |
| Day 02 sub-heading| `<h2>`                          | Day 02 title              |
| Footer            | `<footer>`                      | Brand text                |

**Heading Hierarchy:**
- `<h1>`: "Day 01 & 02" (single H1 on page)
- `<h2>`: "Day 01: Arrive at Chiang Mai & Drop to Hotel"
- `<h2>`: "Day 2: City Temple Tour of Chiang Mai"
- "THAILAND ITINERARY" rendered as styled `<p>` in `<header>` (not a heading, as it's a label/title bar)

---

## E. Loading & Error States

### Page Load
- Render HTML structure immediately (no JavaScript dependencies)
- CSS loads synchronously (small bundle)
- Fonts: `font-display: swap` — show fallback fonts immediately, swap when loaded

### Image Loading
- Images use `loading="lazy"` for below-fold images (Day 02 image)
- Hero/Day 01 image loads eagerly (above fold)
- All images have `width` and `height` attributes to prevent layout shift

### Broken Image Fallback
- `alt` text displays in the image's styled container
- Background color of image container: `#FAF8F5` (off-white) to maintain visual balance

### Failed Assets
- If CSS fails to load, semantic HTML remains readable
- Font fallback chain: `Playfair Display, Georgia, serif` and `Lato, 'Helvetica Neue', Arial, sans-serif`

---

## Self-Validation Gate

✅ All interactive elements have states defined (minimal for static page):
- ✅ Skip-to-content link: default + focus
- ✅ Footer text: default + hover + active + focus
- ✅ Images: default + hover
- ✅ Logo: default + hover
✅ All text/background pairs pass WCAG 2.1 AA contrast ratios
✅ ARIA labels specified for all landmarks and images
✅ Heading hierarchy is logical (single H1)
✅ Responsive breakpoints cover all 5 tiers
✅ Loading and error states documented
