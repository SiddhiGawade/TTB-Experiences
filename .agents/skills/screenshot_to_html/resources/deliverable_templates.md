# Deliverable Templates

Use these templates when producing the deliverables for each phase.

---

## Template: Visual Design Specification (Phase 1)

```markdown
# Visual Design Specification
> **Version:** v1.0
> **Created by:** Phase 1 — UI Engineer
> **Screenshot:** [filename]

## Changelog
| Version | Date | Changed By | Description |
|---------|------|------------|-------------|
| v1.0    | [date] | UI Engineer | Initial release |

---

## 1. Color Palette

| Token Name | Hex | RGB | HSL | Role |
|:-----------|:----|:----|:----|:-----|
| `--color-primary` | #XXXXXX | rgb(X, X, X) | hsl(X, X%, X%) | Primary brand color |
| `--color-secondary` | #XXXXXX | rgb(X, X, X) | hsl(X, X%, X%) | Secondary brand color |
| ... | ... | ... | ... | ... |

### Gradients
| Name | Direction | Stops |
|:-----|:----------|:------|
| gradient-hero | 135deg | #XXXXXX 0%, #XXXXXX 100% |

---

## 2. Typography Scale

| Element | Font Family | Size | Weight | Line Height | Letter Spacing | Transform | Color Token |
|:--------|:-----------|:-----|:-------|:------------|:---------------|:----------|:------------|
| H1 | 'Inter', sans-serif | 48px | 700 | 1.2 | -0.02em | none | --color-text |
| H2 | 'Inter', sans-serif | 36px | 600 | 1.3 | -0.01em | none | --color-text |
| Body | 'Inter', sans-serif | 16px | 400 | 1.6 | normal | none | --color-text |
| ... | ... | ... | ... | ... | ... | ... | ... |

---

## 3. Spacing System

| Token | Value | Usage |
|:------|:------|:------|
| `--spacing-xs` | 4px | Tight element gaps |
| `--spacing-sm` | 8px | Small internal padding |
| `--spacing-md` | 16px | Standard padding |
| `--spacing-lg` | 24px | Section padding |
| `--spacing-xl` | 48px | Section margins |
| `--spacing-xxl` | 80px | Major section gaps |

---

## 4. Layout Grid

| Property | Value |
|:---------|:------|
| Content max-width | XXXXpx |
| Columns | XX |
| Gutter | XXpx |
| Container padding | XXpx |

### Section Stacking Order
1. Header (fixed/static)
2. Hero
3. [Section name]
4. ...
5. Footer

---

## 5. Image & Icon Inventory

### Images
| ID | Description | Dimensions | Aspect Ratio | Object-Fit | Type |
|:---|:-----------|:-----------|:-------------|:-----------|:-----|
| img-01 | Hero background | 1440x600 | 2.4:1 | cover | Content |
| ... | ... | ... | ... | ... | ... |

### Icons
| ID | Description | Size | Color | Type |
|:---|:-----------|:-----|:------|:-----|
| icon-01 | Menu hamburger | 24x24 | --color-text | SVG |
| ... | ... | ... | ... | ... |

---

## 6. Borders, Shadows & Radii

### Borders
| Component | Width | Style | Color |
|:----------|:------|:------|:------|
| Card | 1px | solid | --color-border |

### Shadows
| Token | offset-x | offset-y | blur | spread | color |
|:------|:---------|:---------|:-----|:-------|:------|
| `--shadow-sm` | 0 | 1px | 3px | 0 | rgba(0,0,0,0.1) |
| `--shadow-md` | 0 | 4px | 12px | 0 | rgba(0,0,0,0.15) |

### Radii
| Token | Value |
|:------|:------|
| `--radius-sm` | 4px |
| `--radius-md` | 8px |
| `--radius-lg` | 16px |
| `--radius-full` | 9999px |

---

## 7. Component Visual Inventory

### [Component Name] (e.g., "Primary Button")
| Property | Value |
|:---------|:------|
| Background | --color-primary |
| Text color | --color-white |
| Font | --font-size-base, --font-weight-600 |
| Padding | 12px 24px |
| Border radius | --radius-md |
| Box shadow | --shadow-sm |

[Repeat for each component]
```

---

## Template: UX Specification (Phase 2)

```markdown
# UX Specification Document
> **Version:** v1.0
> **Created by:** Phase 2 — UX Engineer
> **Based on:** Visual Design Spec v[X.X]

## Changelog
| Version | Date | Changed By | Description |
|---------|------|------------|-------------|
| v1.0    | [date] | UX Engineer | Initial release |

---

## 1. Interaction State Matrix

### [Component Name] (e.g., "Primary Button")
| State | Background | Text | Border | Shadow | Transform | Cursor | Transition |
|:------|:-----------|:-----|:-------|:-------|:----------|:-------|:-----------|
| Default | --color-primary | --color-white | none | --shadow-sm | none | pointer | — |
| Hover | --color-primary-dark | --color-white | none | --shadow-md | translateY(-1px) | pointer | all 200ms ease |
| Active | --color-primary-darker | --color-white | none | none | translateY(0) | pointer | all 100ms ease |
| Focus | --color-primary | --color-white | 2px --color-focus | --shadow-sm | none | pointer | outline 150ms ease |
| Disabled | --color-muted | --color-text-muted | none | none | none | not-allowed | opacity 200ms ease |

[Repeat for each interactive component]

---

## 2. Responsive Breakpoint Behavior

### Mobile (< 576px)
| Component | Change |
|:----------|:-------|
| Navigation | Collapse to hamburger menu |
| Grid columns | Stack to single column |
| Font sizes | Reduce by ~15% |
| ... | ... |

### Tablet (576px – 768px)
[Same table format]

### Tablet Landscape (768px – 992px)
[Same table format]

### Desktop (992px – 1200px)
[Same table format — usually the reference layout]

### Wide Desktop (> 1200px)
[Same table format]

---

## 3. Navigation & Tab Order
[Numbered list of focusable elements in order]

## 4. Accessibility Compliance
### 4a. Contrast Audit
| Text | Background | Ratio | Pass/Fail | Size Category |
|:-----|:-----------|:------|:----------|:--------------|

### 4b. ARIA Label Map
| Element | Attribute | Value |
|:--------|:----------|:------|

### 4c. Keyboard Map
| Key | Action | Context |
|:----|:-------|:--------|

### 4d. Screen Reader Annotations
| Element | Semantic Tag | Role | Hidden Text |
|:--------|:-------------|:-----|:------------|

---

## 5. Loading & Error States
[Table of states and behaviors]
```

---

## Template: Technical Architecture Document (Phase 3)

```markdown
# Technical Architecture Document
> **Version:** v1.0
> **Created by:** Phase 3 — Architect
> **Based on:** Visual Design Spec v[X.X], UX Spec v[X.X]

## Changelog
| Version | Date | Changed By | Description |
|---------|------|------------|-------------|
| v1.0    | [date] | Architect | Initial release |

---

## 1. HTML Component Hierarchy

[DOM tree outline with BEM classes]

---

## 2. CSS Methodology

**Methodology:** BEM (Block__Element--Modifier)

### Naming Rules
| Category | Convention | Example |
|:---------|:-----------|:--------|
| Block | lowercase-hyphenated | `.feature-card` |
| Element | block__element | `.feature-card__title` |
| Modifier | block--modifier or block__element--modifier | `.feature-card--highlighted` |
| Custom Property | --category-property-variant | `--color-primary-dark` |
| JS Hook | data-attribute | `data-action="toggle"` |
| Utility | u-name | `.u-sr-only` |

---

## 3. Design Tokens (CSS Custom Properties)

```css
:root {
  /* Colors */
  
  /* Typography */
  
  /* Spacing */
  
  /* Shadows */
  
  /* Radii */
  
  /* Transitions */
  
  /* Z-Index */
}
```

---

## 4. File Structure

[Complete folder tree]

### CSS Load Order
1. reset.css
2. tokens.css
3. base.css
4. layout.css
5. components/*.css
6. utilities.css
7. responsive.css

---

## 5. Asset Management
[Format preferences, optimization rules, font loading]

---

## 6. Browser Compatibility
[Support matrix table]

---

## 7. Performance Budget
[Metrics and targets table]
```

---

## Template: Revision Request

```markdown
## REVISION REQUEST

| Field | Value |
|:------|:------|
| **Request ID** | RR-[Phase#]-[Sequential#] |
| **Requesting Phase** | Phase [#] — [Role] |
| **Target Phase** | Phase [#] — [Role] |
| **Severity** | 🔴 Blocker / 🟡 Major / 🟢 Minor |
| **Category** | Visual / Interaction / Structural / Accessibility |

### Issue Description
[What is wrong or missing]

### Evidence
[Screenshot, spec excerpt, or code showing the discrepancy]

### Suggested Resolution
[Proposed fix]

### Impact on Current Phase
[What is blocked or affected]
```
