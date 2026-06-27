# Phase Details — Complete Task Checklists

This reference document contains exhaustive checklists for each phase. The executing agent should use these to ensure no task is missed.

---

## Phase 1 — UI Engineer: Visual Analysis Checklist

### A. Color Extraction
- [ ] Identify every unique color visible in the screenshot
- [ ] Document each color in Hex, RGB, and HSL formats
- [ ] Classify colors: `primary`, `secondary`, `accent`, `background`, `text`, `border`, `shadow`
- [ ] Document gradients: direction, color stops with positions
- [ ] Document opacity/transparency values

### B. Typography Catalog
- [ ] Identify all font families (match to Google Fonts or system fonts)
- [ ] For each text element, record:
  - Font size (px / rem)
  - Font weight (numeric: 300, 400, 500, 600, 700, 800, 900)
  - Line height (px or unitless ratio)
  - Letter spacing (px or em)
  - Text transform (uppercase, capitalize, none)
  - Text color (reference color token name)

### C. Spacing & Dimensions
- [ ] Measure margins between all sections and elements (px)
- [ ] Measure padding within all containers and components (px)
- [ ] Document gaps between flex/grid children
- [ ] Record widths and heights of key containers
- [ ] Identify max-width of content area

### D. Layout Grid Analysis
- [ ] Determine overall layout: single column, multi-column, or grid
- [ ] Document column count, gutter widths, container margins
- [ ] Identify flex vs. grid usage per section
- [ ] Map vertical stacking order of all major sections
- [ ] Note absolute/fixed positioning instances

### E. Image & Icon Inventory
- [ ] Catalogue every image: dimensions, aspect ratio, object-fit
- [ ] Catalogue every icon: type (SVG/font/image), size, color, stroke width
- [ ] Mark each as decorative or content (affects alt text in Phase 2)

### F. Borders, Shadows & Radii
- [ ] Document all borders: width, style, color
- [ ] Document all box-shadows: offset-x, offset-y, blur, spread, color
- [ ] Document all border-radius values
- [ ] Document any text-shadows

### G. Component Inventory
- [ ] List every distinct UI component:
  - Header / Navbar
  - Hero section
  - Cards / Tiles
  - Buttons (all visual variants)
  - Forms / Inputs
  - Lists
  - Footer
  - Modals / Overlays (if visible)
  - Badges / Tags
  - Dividers / Separators
- [ ] For each component, cross-reference properties from A–F

---

## Phase 2 — UX Engineer: Interaction & Accessibility Checklist

### A. Interaction States
For **every** interactive element, define all states:
- [ ] Default (cross-reference Visual Spec)
- [ ] Hover — color shifts, scale transforms, cursor type, shadow changes
- [ ] Active/Pressed — color shift, scale-down effect, shadow reduction
- [ ] Focus — focus ring color, offset, width; outline vs. box-shadow
- [ ] Disabled — opacity value, cursor, color desaturation
- [ ] Loading — spinner type, skeleton pattern, disabled during load
- [ ] Define transition properties: property, duration (ms), easing function

### B. Responsive Breakpoints
For each breakpoint tier (`xs`, `sm`, `md`, `lg`, `xl`):
- [ ] Layout changes (column collapse, stacking order reversal)
- [ ] Font size scaling rules
- [ ] Spacing adjustments (tighter on mobile)
- [ ] Navigation pattern (inline → hamburger → drawer)
- [ ] Image behavior (srcset, art direction, hiding)
- [ ] Element visibility (show/hide specific elements)
- [ ] Touch target sizes on mobile (minimum 44x44px)

### C. Navigation Flow
- [ ] Define logical tab order (top-to-bottom, left-to-right)
- [ ] Define skip-to-content link (first focusable element)
- [ ] Document anchor link behavior (smooth scroll, header offset)
- [ ] Define focus trap behavior for modals/overlays
- [ ] Define Escape key behavior for dismissible elements

### D. WCAG 2.1 AA Compliance
- [ ] **Contrast Audit:**
  - Normal text (< 18px): contrast ratio ≥ 4.5:1
  - Large text (≥ 18px or ≥ 14px bold): ≥ 3:1
  - UI components and graphical objects: ≥ 3:1
  - Test every text/background combination
- [ ] **ARIA Labels:**
  - `<nav>` → `aria-label="Main navigation"` (or appropriate label)
  - Icon-only buttons → `aria-label` describing the action
  - Form inputs → `aria-label` or `<label>` association
  - Images → descriptive `alt` text (empty for decorative)
  - Dynamic content → `aria-live="polite"` or `"assertive"`
  - Sections → `aria-labelledby` linked to section headings
- [ ] **Keyboard Navigation:**
  - All interactive elements reachable via Tab
  - Enter and Space activate buttons and links
  - Escape closes modals, dropdowns, popovers
  - Arrow keys navigate within menu bars, tab lists, radio groups
- [ ] **Screen Reader:**
  - Map components to semantic elements: `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
  - Single `<h1>` per page, logical `<h2>`–`<h6>` hierarchy
  - `sr-only` class for visually hidden descriptive text
  - `role` attributes only where semantic HTML is insufficient

### E. Loading & Error States
- [ ] Page load: progressive render strategy or skeleton
- [ ] Images: `loading="lazy"`, blur-up or placeholder
- [ ] Broken images: fallback alt text display, placeholder graphic
- [ ] Failed assets: graceful degradation (page remains functional)
- [ ] Empty states: "no content" messaging (if applicable)

---

## Phase 3 — Architect: Technical Structure Checklist

### A. HTML Component Hierarchy
- [ ] Define complete DOM tree as nested outline with BEM class names
- [ ] Map every Visual Inventory component → HTML element + class
- [ ] Assign semantic HTML5 elements per UX Spec screen reader guide
- [ ] Add ARIA attributes per UX Spec accessibility map
- [ ] Verify: DOM tree covers every component in Visual Inventory

### B. CSS Methodology
- [ ] Document BEM naming convention with examples
- [ ] Define CSS custom property naming: `--category-property-variant`
- [ ] Define JS hook convention: `data-` attributes or `js-` prefix
- [ ] Define utility class naming (if used): `.u-sr-only`, `.u-clearfix`
- [ ] Document prohibited patterns (e.g., no IDs for styling, no `!important`)

### C. Design Tokens
- [ ] Define all color tokens from Visual Spec as `--color-*`
- [ ] Define all typography tokens: `--font-family-*`, `--font-size-*`, `--font-weight-*`
- [ ] Define spacing scale: `--spacing-xs` through `--spacing-xxl`
- [ ] Define shadow tokens: `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- [ ] Define radius tokens: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`
- [ ] Define transition tokens: `--transition-fast`, `--transition-normal`
- [ ] Define z-index scale: `--z-dropdown`, `--z-sticky`, `--z-modal`, `--z-overlay`

### D. File Structure
- [ ] Define exact folder tree with every file named
- [ ] Define CSS load order in `<head>`
- [ ] One component = one CSS file rule
- [ ] Define where JS files are loaded (`defer` in `<head>` or before `</body>`)

### E. Asset Strategy
- [ ] Image formats: WebP preferred, JPEG/PNG fallback via `<picture>`
- [ ] Icons: inline SVG (accessible, styleable)
- [ ] Logos: SVG format
- [ ] Background images: CSS `background-image`
- [ ] Image optimization: max file sizes, compression targets
- [ ] Font loading: `font-display: swap`, `<link rel="preload">` for critical fonts

### F. Compatibility
- [ ] Browser support: last 2 versions of Chrome, Firefox, Safari, Edge
- [ ] CSS features requiring `@supports` fallbacks
- [ ] Device targets aligned with UX breakpoints

### G. Performance
- [ ] Total page weight target: < 500 KB
- [ ] LCP target: < 2.5s
- [ ] Max CSS file count in dev
- [ ] JavaScript: minimal, only for interaction logic

---

## Phase 4 — Developer: Implementation Checklist

### A. Scaffolding
- [ ] Create exact folder/file structure from Architecture Doc
- [ ] Implement `reset.css` (or normalize.css)
- [ ] Implement `tokens.css` with all CSS custom properties
- [ ] Add font imports per font loading strategy
- [ ] Verify file structure matches Architecture Doc exactly

### B. HTML Markup
- [ ] Write `index.html` following exact DOM tree from Architecture Doc
- [ ] Apply semantic HTML5 elements as specified
- [ ] Add all ARIA attributes from UX Spec
- [ ] Add `alt` text for every image per UX Spec
- [ ] Add `<meta>` tags: viewport, charset, description
- [ ] Link all stylesheets in Architecture Doc's specified order
- [ ] Add `<link rel="preload">` for fonts
- [ ] Add skip-to-content link as first focusable element

### C. CSS
- [ ] `base.css`: body defaults, typography scale, link styles
- [ ] `layout.css`: grid/flex structure, containers, section spacing
- [ ] Each component CSS file: match every visual property from Visual Spec
- [ ] All BEM naming matches Architecture Doc
- [ ] All interaction states from UX Spec: `:hover`, `:active`, `:focus`, `:focus-visible`, `:disabled`
- [ ] Transitions with specified durations and easing functions
- [ ] `responsive.css`: media queries for every breakpoint with all documented changes
- [ ] `utilities.css`: `.sr-only`, focus ring utilities, clearfix

### D. JavaScript
- [ ] Mobile navigation toggle (hamburger → drawer)
- [ ] Smooth scroll for anchor links (with header offset)
- [ ] Focus trap for modals (if applicable)
- [ ] No frameworks — vanilla JS only
- [ ] `defer` or end-of-body loading

### E. Assets
- [ ] All images sourced/generated per Image Inventory
- [ ] SVG icons embedded inline
- [ ] All assets optimized per performance budget
- [ ] Lazy loading applied: `loading="lazy"` on below-fold images

### F. Quality Assurance
- [ ] **Visual comparison**: rendered page vs. screenshot at desktop resolution — no discrepancy > 2px
- [ ] **Responsive testing**: verify every breakpoint
- [ ] **Accessibility**: Lighthouse accessibility score = 100, 0 axe violations, keyboard navigation test, screen reader test
- [ ] **Cross-browser**: tested in Chrome, Firefox, Safari, Edge
- [ ] **Performance**: Lighthouse performance score ≥ 90, page weight < 500 KB
