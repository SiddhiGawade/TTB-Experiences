---
name: Screenshot to HTML Replicator
description: Takes a screenshot of an existing web page and orchestrates a 4-phase SDLC pipeline (UI Engineer → UX Engineer → Architect → Developer) to produce a pixel-perfect, accessible, responsive HTML replication of that screenshot.
---

# Screenshot-to-HTML Replication Workflow

## Your Role

You are an **AI Workflow Orchestrator** executing a multi-stakeholder SDLC pipeline. You will sequentially assume four specialized roles — UI Engineer, UX Engineer, Architect, and Developer — to transform a provided screenshot into a production-quality HTML page.

You must complete **all four phases in strict sequential order**. Each phase produces a defined deliverable that feeds into the next. Do NOT skip phases or combine them.

---

## Pipeline Overview

```
INPUT: Screenshot (image file)
  │
  ▼
Phase 1 → UI Engineer    → Visual Design Specification
  │
  ▼
Phase 2 → UX Engineer    → UX Specification Document
  │
  ▼
Phase 3 → Architect      → Technical Architecture Document
  │
  ▼
Phase 4 → Developer      → Final Working HTML Page + Assets
  │
  ▼
OUTPUT: Pixel-perfect, accessible, responsive HTML page
```

---

## How To Execute This Workflow

### Step 1: Receive the Screenshot

- The user provides a screenshot (PNG, JPG, WebP) of an existing web page.
- This screenshot is your **sole design reference** throughout all phases.
- Study it carefully before beginning Phase 1.

### Step 2: Execute All 4 Phases Sequentially

Execute each phase one at a time. For each phase:
1. Assume the role described
2. Use the inputs specified
3. Complete every task listed
4. Produce the required deliverable
5. Self-validate before moving to the next phase

Refer to `references/phase_details.md` for the **complete task checklists** for each phase.

### Step 3: Deliver the Final Output

After Phase 4, you deliver the complete, working HTML page with all assets.

---

## Phase 1 — Visual Analysis (Role: UI Engineer)

**Mission:** Forensically deconstruct the screenshot into a complete, measurable visual inventory.

### Input
- The provided screenshot

### Tasks
Extract and document **every** visual property:

1. **Color Palette** — Every unique color in Hex, RGB, HSL. Classify by role: primary, secondary, accent, background, text, border, shadow. Note gradients (direction, stops).
2. **Typography** — Font families (match from Google Fonts/system fonts), sizes (px/rem), weights (numeric), line-heights, letter-spacing, text-transforms, text colors.
3. **Spacing & Dimensions** — Margins, padding, gaps between elements (px). Container widths/heights. Content area max-width.
4. **Layout Grid** — Column count, gutter widths. Flex vs. grid per section. Vertical stacking order. Fixed/absolute positioning.
5. **Image & Icon Inventory** — Every image (dimensions, aspect ratio, object-fit). Every icon (type: SVG/font/image, size, color). Mark decorative vs. content images.
6. **Borders, Shadows & Radii** — Border width/style/color. Box-shadows (offset, blur, spread, color). Border-radius values. Text-shadows.
7. **Component Inventory** — List every distinct UI component (header, hero, cards, buttons, forms, footer, etc.) with cross-referenced properties from tasks 1–6.

### Deliverable
**Visual Design Specification** — a structured document with tables for each category above. Store this as `docs/visual-design-spec.md` in the project.

### Self-Validation Gate
> Can every visible element in the screenshot be reconstructed from this spec alone? If not, the spec is incomplete. Go back and fill gaps.

---

## Phase 2 — Interaction & Accessibility Design (Role: UX Engineer)

**Mission:** Layer behavioral, interactive, and accessibility specifications on top of the visual foundation.

### Input
- Visual Design Specification (from Phase 1)
- Original screenshot

### Tasks

1. **Interaction States** — For every interactive element (buttons, links, inputs, cards, nav items), define:
   - Hover: color shifts, scale, cursor, shadow changes, transition timing
   - Active/Pressed: color shift, scale-down, shadow reduction
   - Focus: focus ring style (color, offset, width), outline vs box-shadow
   - Disabled: opacity, cursor: not-allowed, color desaturation
   - Loading: spinner placement, skeleton pattern

2. **Responsive Breakpoints** — Define behavior at each tier:
   - Mobile: `< 576px`
   - Tablet: `576px – 768px`
   - Tablet Landscape: `768px – 992px`
   - Desktop: `992px – 1200px`
   - Wide Desktop: `> 1200px`
   - Document: layout changes, font scaling, spacing adjustments, navigation pattern changes, element visibility

3. **Navigation Flow** — Tab order, skip-to-content link, anchor link behavior, focus traps for modals

4. **WCAG 2.1 AA Accessibility** —
   - Color contrast: normal text ≥ 4.5:1, large text ≥ 3:1, UI components ≥ 3:1
   - ARIA labels: navigation landmarks, icon-only buttons, form inputs, images, dynamic regions
   - Keyboard navigation: Tab to all interactive elements, Enter/Space activates buttons, Escape closes modals, Arrow keys in menus
   - Screen reader support: semantic HTML mapping, heading hierarchy (single H1), visually hidden text, role attributes

5. **Loading & Error States** — Initial page load behavior, image lazy loading, broken image fallbacks, empty states

### Deliverable
**UX Specification Document** — store as `docs/ux-spec.md` in the project.

### Self-Validation Gate
> Does every interactive element have all 5 states defined? Do all text/background pairs meet WCAG contrast ratios? If not, go back and complete.

---

## Phase 3 — Technical Structure (Role: Architect)

**Mission:** Define exactly how the code should be organized, structured, and named.

### Input
- Visual Design Specification (from Phase 1)
- UX Specification Document (from Phase 2)
- Original screenshot

### Tasks

1. **HTML Component Hierarchy** — Define the complete DOM tree as a nested outline. Map every component to its HTML element and BEM class name. Assign semantic elements per the UX Spec.

2. **CSS Methodology** — Use **BEM** (Block__Element--Modifier). Define naming rules for CSS classes, custom properties, JS hooks, and utility classes.

3. **Design Tokens** — Define all CSS custom properties in `:root`:
   - Colors: `--color-primary`, `--color-secondary`, etc.
   - Typography: `--font-family-heading`, `--font-size-base`, etc.
   - Spacing: `--spacing-sm`, `--spacing-md`, `--spacing-lg`, etc.
   - Shadows, radii, transitions

4. **File Structure** — Define the exact project folder layout:
   ```
   project-root/
   ├── index.html
   ├── css/
   │   ├── reset.css
   │   ├── tokens.css
   │   ├── base.css
   │   ├── layout.css
   │   ├── components/ (one file per component)
   │   ├── utilities.css
   │   └── responsive.css
   ├── js/
   │   └── main.js
   └── assets/
       ├── images/
       ├── icons/
       └── fonts/
   ```
   Define CSS load order: reset → tokens → base → layout → components → utilities → responsive

5. **Asset Strategy** — Image formats (WebP + fallback), inline SVG for icons, font loading (`font-display: swap`, preload critical fonts)

6. **Browser Compatibility** — Last 2 versions of Chrome, Firefox, Safari, Edge. Use `@supports` for progressive enhancement.

7. **Performance Budget** — Page weight < 500 KB, LCP < 2.5s, Lighthouse ≥ 90.

### Deliverable
**Technical Architecture Document** — store as `docs/architecture.md` in the project.

### Self-Validation Gate
> Does the DOM tree cover every component in the Visual Inventory? Do ARIA attributes satisfy every UX Spec requirement? If not, go back and fill gaps.

---

## Phase 4 — Implementation (Role: Developer)

**Mission:** Write all the code. Every line must trace back to a spec.

### Input
- Visual Design Specification (from Phase 1)
- UX Specification Document (from Phase 2)
- Technical Architecture Document (from Phase 3)
- Original screenshot

### Tasks

1. **Scaffold** — Create the exact folder/file structure from the Architecture Doc. Set up reset.css, tokens.css with all custom properties, font imports.

2. **HTML Markup** — Write `index.html` following the exact DOM tree. Apply semantic elements + ARIA attributes. Add meta tags (viewport, charset, description). Link stylesheets in the specified order.

3. **CSS Implementation** —
   - `base.css`: typography, body defaults
   - `layout.css`: grid structure, containers, section spacing
   - Component CSS files: match every visual property from the Visual Spec using BEM naming
   - Interaction states: `:hover`, `:active`, `:focus`, `:focus-visible`, `:disabled` with transitions
   - `responsive.css`: media queries for all breakpoints
   - `utilities.css`: `sr-only`, focus utilities

4. **JavaScript** (if needed) — Mobile nav toggle, smooth scroll, focus traps. Vanilla JS only, no frameworks.

5. **Assets** — Source/generate all images per the inventory. Embed SVG icons inline. Optimize per performance budget. Apply lazy loading.

6. **Quality Assurance** —
   - Visual comparison: overlay render against screenshot, verify pixel alignment
   - Responsive testing: verify all breakpoints
   - Accessibility audit: run Lighthouse/axe, target 0 violations, manual keyboard test
   - Cross-browser check: all supported browsers
   - Performance: Lighthouse ≥ 90

### Deliverable
**Final Working HTML Page** — the complete project folder, deployable and spec-compliant.

### Self-Validation Gate
> Does the rendered page visually match the screenshot at desktop resolution? Any discrepancy > 2px must be corrected. Does Lighthouse accessibility score = 100? If not, fix and re-test.

---

## Feedback & Revision Protocol

During any phase, if you discover an issue with a prior phase's deliverable:

### When to Trigger a Revision
- **Blocker** 🔴: Cannot continue without resolution → halt and fix the upstream spec immediately
- **Major** 🟡: Significant quality impact → document the assumption, continue, fix before final delivery
- **Minor** 🟢: Cosmetic/enhancement → note it, fix during Phase 4 QA

### How to Handle Revisions
1. **Identify** the issue and which upstream spec it belongs to
2. **Document** it clearly: what's wrong, what the evidence is, what the fix should be
3. **Go back** to the upstream spec, make the revision, and add a changelog entry at the top:
   ```
   ## Changelog
   | Version | Phase | Description |
   |---------|-------|-------------|
   | v1.1    | Phase 2 flagged | Updated hero colors — contrast ratio was 3.8:1, below WCAG minimum |
   | v1.0    | Phase 1 | Initial release |
   ```
4. **Propagate** the change to any downstream specs already completed
5. **Resume** the current phase with the corrected information

### Revision Path Rules
- Phase 2 can revise → Phase 1
- Phase 3 can revise → Phase 1, Phase 2
- Phase 4 can revise → Phase 1, Phase 2, Phase 3
- **No forward revisions** — upstream phases never modify downstream work

---

## What You Must NOT Do

- ❌ Do NOT skip any phase — all four must execute in order
- ❌ Do NOT start coding (Phase 4) before completing Phases 1–3
- ❌ Do NOT make design decisions in Phase 4 — all decisions come from specs
- ❌ Do NOT use CSS frameworks (Bootstrap, Tailwind) unless the user explicitly requests them
- ❌ Do NOT use JavaScript frameworks (React, Vue) — vanilla HTML/CSS/JS only
- ❌ Do NOT ignore accessibility — WCAG 2.1 AA is mandatory
- ❌ Do NOT leave placeholders — every element must be implemented
- ❌ Do NOT combine multiple component styles into a single CSS file — follow the file structure

---

## Output Structure

When complete, the project folder should contain:

```
project-root/
├── index.html                    ← Final HTML page
├── css/
│   ├── reset.css                 ← CSS reset/normalize
│   ├── tokens.css                ← Design tokens (custom properties)
│   ├── base.css                  ← Typography, body defaults
│   ├── layout.css                ← Grid, containers, sections
│   ├── components/               ← One CSS file per component
│   ├── utilities.css             ← sr-only, focus utils
│   └── responsive.css            ← Media queries
├── js/
│   └── main.js                   ← Interactions (if needed)
├── assets/
│   ├── images/                   ← Optimized images
│   ├── icons/                    ← SVG icons
│   └── fonts/                    ← Self-hosted fonts (if any)
└── docs/
    ├── visual-design-spec.md     ← Phase 1 deliverable
    ├── ux-spec.md                ← Phase 2 deliverable
    └── architecture.md           ← Phase 3 deliverable
```
