# Technical Architecture Document — Thailand Itinerary Page

## Changelog
| Version | Phase | Description |
|---------|-------|-------------|
| v1.0    | Phase 3 | Initial release |

---

## A. HTML Component Hierarchy (DOM Tree)

```
<html lang="en">
├── <head>
│   ├── <meta charset="UTF-8">
│   ├── <meta name="viewport" content="width=device-width, initial-scale=1.0">
│   ├── <meta name="description" content="Thailand Itinerary...">
│   ├── <title>Thailand Itinerary — Day 01 & 02 | TTB Experiences</title>
│   ├── <link rel="preload" href="fonts..."> (Google Fonts)
│   ├── <link rel="stylesheet" href="css/reset.css">
│   ├── <link rel="stylesheet" href="css/tokens.css">
│   ├── <link rel="stylesheet" href="css/base.css">
│   ├── <link rel="stylesheet" href="css/layout.css">
│   ├── <link rel="stylesheet" href="css/components/page-header.css">
│   ├── <link rel="stylesheet" href="css/components/logo-badge.css">
│   ├── <link rel="stylesheet" href="css/components/day-section.css">
│   ├── <link rel="stylesheet" href="css/components/page-footer.css">
│   ├── <link rel="stylesheet" href="css/utilities.css">
│   └── <link rel="stylesheet" href="css/responsive.css">
│
├── <body class="page">
│   ├── <a class="skip-link" href="#main-content">Skip to main content</a>
│   │
│   ├── <div class="page__wrapper">
│   │   ├── <header class="page-header">
│   │   │   ├── <p class="page-header__title">THAILAND ITINERARY</p>
│   │   │   ├── <div class="page-header__divider"></div>
│   │   │   └── <div class="logo-badge">
│   │   │       ├── <div class="logo-badge__icon"><!-- SVG suitcase --></div>
│   │   │       ├── <span class="logo-badge__name">TTB</span>
│   │   │       └── <span class="logo-badge__tagline">EXPERIENCES</span>
│   │   │   </div>
│   │   │
│   │   ├── <main id="main-content" class="page__content">
│   │   │   ├── <h1 class="day-heading">Day 01 & 02</h1>
│   │   │   │
│   │   │   ├── <section class="day-section day-section--text-left" aria-labelledby="day01-heading">
│   │   │   │   ├── <div class="day-section__text">
│   │   │   │   │   ├── <h2 id="day01-heading" class="day-section__title">Day 01: Arrive at Chiang Mai & Drop to Hotel</h2>
│   │   │   │   │   ├── <p class="day-section__body">Upon your arrival...</p>
│   │   │   │   │   └── <p class="day-section__callout">Overnight stay in Chiang Mai.</p>
│   │   │   │   └── <div class="day-section__image">
│   │   │   │       └── <img class="day-section__img" src="..." alt="..." loading="eager" width="..." height="...">
│   │   │   │
│   │   │   └── <section class="day-section day-section--image-left" aria-labelledby="day02-heading">
│   │   │       ├── <div class="day-section__image">
│   │   │       │   └── <img class="day-section__img" src="..." alt="..." loading="lazy" width="..." height="...">
│   │   │       └── <div class="day-section__text">
│   │   │           ├── <h2 id="day02-heading" class="day-section__title">Day 2: City Temple Tour of Chiang Mai</h2>
│   │   │           ├── <p class="day-section__body">Start your day...</p>
│   │   │           ├── <p class="day-section__body">Drive through...</p>
│   │   │           ├── <p class="day-section__body">Visit some of...</p>
│   │   │           └── <p class="day-section__callout">Overnight stay in Chiang Mai.</p>
│   │   │
│   │   └── <footer class="page-footer">
│   │       └── <p class="page-footer__text">TTB EXPERIENCES</p>
│   │
│   └── </div> <!-- .page__wrapper -->
```

---

## B. CSS Methodology

### BEM Naming Convention
- **Block**: Component name (e.g., `page-header`, `day-section`, `logo-badge`)
- **Element**: `block__element` (e.g., `day-section__title`, `page-header__divider`)
- **Modifier**: `block--modifier` (e.g., `day-section--text-left`, `day-section--image-left`)

### Naming Rules
| Category          | Pattern                           | Example                        |
|-------------------|-----------------------------------|--------------------------------|
| CSS Classes       | `block__element--modifier`        | `day-section__title`           |
| Custom Properties | `--category-property-variant`     | `--color-primary`              |
| JS Hooks          | `data-js="name"`                  | `data-js="mobile-nav"`         |
| Utility Classes   | `.u-name`                         | `.u-sr-only`                   |

### Prohibited Patterns
- ❌ No IDs for styling
- ❌ No `!important` (except `.u-sr-only`)
- ❌ No inline styles
- ❌ No element-only selectors (e.g., `div { }`)
- ❌ No deep nesting beyond 3 levels

---

## C. Design Tokens

```css
:root {
  /* === Colors === */
  --color-primary: #6B3A2A;
  --color-secondary: #5C3324;
  --color-accent: #8B5E3C;
  --color-background: #FFFFFF;
  --color-background-alt: #FAF8F5;
  --color-text-primary: #4A2C1A;
  --color-text-body: #5C3D2E;
  --color-border: #6B3A2A;
  --color-footer-bg: #4A2C1A;
  --color-footer-text: #D4A96A;
  --color-footer-text-hover: #E8C48A;
  --color-white: #FFFFFF;

  /* === Typography === */
  --font-family-heading: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-family-body: 'Lato', 'Helvetica Neue', Arial, sans-serif;
  --font-family-logo: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;

  --font-size-xs: 0.5rem;    /* 8px */
  --font-size-sm: 0.75rem;   /* 12px */
  --font-size-base: 0.875rem;/* 14px */
  --font-size-md: 1rem;      /* 16px */
  --font-size-lg: 1.25rem;   /* 20px */
  --font-size-xl: 2rem;      /* 32px */
  --font-size-2xl: 2.5rem;   /* 40px */
  --font-size-3xl: 3rem;     /* 48px */

  --font-weight-regular: 400;
  --font-weight-bold: 700;

  --line-height-tight: 1.1;
  --line-height-snug: 1.3;
  --line-height-normal: 1.4;
  --line-height-relaxed: 1.6;

  /* === Spacing === */
  --spacing-xs: 5px;
  --spacing-sm: 10px;
  --spacing-md: 15px;
  --spacing-lg: 20px;
  --spacing-xl: 25px;
  --spacing-2xl: 30px;
  --spacing-3xl: 40px;

  /* === Layout === */
  --page-max-width: 720px;
  --page-padding: 40px;
  --page-padding-mobile: 20px;
  --column-gap: 30px;

  /* === Borders === */
  --border-rule: 2px solid var(--color-border);
  --border-logo: 3px solid var(--color-primary);

  /* === Radii === */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-full: 50%;

  /* === Shadows === */
  --shadow-none: none;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);

  /* === Transitions === */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 500ms ease;

  /* === Z-Index === */
  --z-base: 1;
  --z-header: 10;
  --z-logo: 20;
  --z-skip-link: 100;

  /* === Logo === */
  --logo-size: 80px;
  --logo-size-tablet: 70px;
  --logo-size-mobile: 60px;

  /* === Footer === */
  --footer-height: 40px;
  --footer-letter-spacing: 3px;
}
```

---

## D. File Structure

```
thailand-itinerary/
├── index.html
├── css/
│   ├── reset.css                 ← CSS reset (modern)
│   ├── tokens.css                ← Design tokens (custom properties)
│   ├── base.css                  ← Typography, body defaults
│   ├── layout.css                ← Page wrapper, grid, containers
│   ├── components/
│   │   ├── page-header.css       ← Header title + divider
│   │   ├── logo-badge.css        ← Circular TTB logo badge
│   │   ├── day-section.css       ← Day content sections (text + image)
│   │   └── page-footer.css       ← Footer bar
│   ├── utilities.css             ← sr-only, focus ring utilities
│   └── responsive.css            ← Media queries for all breakpoints
├── js/
│   └── main.js                   ← Minimal interactions (if needed)
├── assets/
│   ├── images/
│   │   ├── chiang-mai-temple.jpg ← Temple night photo
│   │   └── royal-flora-garden.jpg← Garden pavilion photo
│   └── icons/
│       └── suitcase.svg          ← Logo suitcase icon
└── docs/
    ├── visual-design-spec.md     ← Phase 1 deliverable
    ├── ux-spec.md                ← Phase 2 deliverable
    └── architecture.md           ← Phase 3 deliverable (this file)
```

### CSS Load Order (in `<head>`)
1. `css/reset.css`
2. `css/tokens.css`
3. `css/base.css`
4. `css/layout.css`
5. `css/components/page-header.css`
6. `css/components/logo-badge.css`
7. `css/components/day-section.css`
8. `css/components/page-footer.css`
9. `css/utilities.css`
10. `css/responsive.css`

### JS Load
- `js/main.js` — loaded with `defer` in `<head>` (only if interactions needed)

---

## E. Asset Strategy

### Images
- **Format**: JPEG for photographs (good compression for photos)
- **Optimization**: compress to <100KB per image
- **Lazy Loading**: `loading="lazy"` on Day 02 image (below fold); `loading="eager"` on Day 01 image
- **Layout Stability**: `width` and `height` attributes on all `<img>` elements to prevent CLS

### Icons
- **Suitcase icon**: Inline SVG in HTML for styling flexibility and accessibility
- **Accessible**: `role="img"` and `aria-label` on SVG

### Logos
- **TTB Logo**: Composed with CSS (circle background) + inline SVG (suitcase) + HTML text
- Not a single image — allows styling and accessibility

### Fonts
- **Google Fonts**: Playfair Display (400, 700), Lato (400, 700), Montserrat (400, 700)
- **Loading**: `<link rel="preconnect" href="https://fonts.googleapis.com">` + standard CSS import
- **Display**: `font-display: swap` on all fonts

---

## F. Browser Compatibility

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | Last 2 versions |
| Firefox | Last 2 versions |
| Safari  | Last 2 versions |
| Edge    | Last 2 versions |

### CSS Features Requiring Fallbacks
- CSS custom properties: supported in all target browsers
- CSS Grid: supported in all target browsers
- `gap` in Flexbox: supported in all target browsers
- No `@supports` queries needed for this design

---

## G. Performance Budget

| Metric          | Target     |
|----------------|-----------|
| Total Page Weight | < 500 KB  |
| LCP             | < 2.5s    |
| CSS files       | 10 files  |
| JS files        | 1 file    |
| Lighthouse Perf | ≥ 90      |
| Lighthouse A11y | 100       |

### Weight Breakdown Estimate
| Asset           | Est. Size |
|----------------|----------|
| HTML            | ~5 KB    |
| CSS (all)       | ~12 KB   |
| JS              | ~2 KB    |
| Fonts (WOFF2)   | ~100 KB  |
| Images (2)      | ~200 KB  |
| **Total**       | **~319 KB** |

---

## Self-Validation Gate

✅ DOM tree covers every component from the Visual Inventory:
- ✅ Page header with title
- ✅ Logo badge
- ✅ Horizontal divider
- ✅ Main day heading
- ✅ Day 01 section (text-left layout)
- ✅ Day 02 section (image-left layout)
- ✅ Page footer
✅ ARIA attributes satisfy every UX Spec requirement
✅ BEM naming applied consistently
✅ Design tokens defined for all visual properties
✅ File structure complete with one CSS file per component
