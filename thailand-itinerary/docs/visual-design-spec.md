# Visual Design Specification — Thailand Itinerary Page

## Changelog
| Version | Phase | Description |
|---------|-------|-------------|
| v1.0    | Phase 1 | Initial release |

---

## A. Color Palette

| Role        | Color Name         | Hex       | RGB              | HSL                  |
|-------------|--------------------|-----------|------------------|----------------------|
| Primary     | Chocolate Brown    | `#6B3A2A` | rgb(107, 58, 42)  | hsl(15, 44%, 29%)   |
| Secondary   | Dark Brown         | `#5C3324` | rgb(92, 51, 36)   | hsl(16, 44%, 25%)   |
| Accent      | Warm Brown         | `#8B5E3C` | rgb(139, 94, 60)  | hsl(26, 40%, 39%)   |
| Background  | White              | `#FFFFFF` | rgb(255, 255, 255)| hsl(0, 0%, 100%)    |
| Background  | Off-White/Cream    | `#FAF8F5` | rgb(250, 248, 245)| hsl(36, 33%, 97%)   |
| Text Primary| Dark Brown Text    | `#4A2C1A` | rgb(74, 44, 26)   | hsl(22, 48%, 20%)   |
| Text Body   | Medium Brown       | `#5C3D2E` | rgb(92, 61, 46)   | hsl(20, 33%, 27%)   |
| Border      | Brown Rule         | `#6B3A2A` | rgb(107, 58, 42)  | hsl(15, 44%, 29%)   |
| Footer BG   | Deep Brown         | `#4A2C1A` | rgb(74, 44, 26)   | hsl(22, 48%, 20%)   |
| Footer Text | Gold/Cream         | `#D4A96A` | rgb(212, 169, 106)| hsl(36, 55%, 62%)   |
| Logo Circle | Brown Circle       | `#6B3A2A` | rgb(107, 58, 42)  | hsl(15, 44%, 29%)   |
| Logo Text   | White on Brown     | `#FFFFFF` | rgb(255, 255, 255)| hsl(0, 0%, 100%)    |

**Gradients:** None observed. Solid flat colors throughout.

**Opacity/Transparency:** No opacity variations visible.

---

## B. Typography Catalog

| Element               | Font Family                | Size    | Weight | Line Height | Letter Spacing | Transform   | Color       |
|-----------------------|---------------------------|---------|--------|-------------|----------------|-------------|-------------|
| Header Title          | Serif (Playfair Display)   | 14px    | 700    | 1.3         | 2px            | uppercase   | `#6B3A2A`   |
| Main Heading (Day)    | Serif (Playfair Display)   | 48px    | 400    | 1.1         | 0              | none        | `#6B3A2A`   |
| Day Sub-heading       | Sans-serif (Lato/Open Sans)| 16px    | 700    | 1.4         | 0              | none        | `#4A2C1A`   |
| Body Text             | Sans-serif (Lato/Open Sans)| 14px    | 400    | 1.6         | 0              | none        | `#5C3D2E`   |
| Bold Callout Text     | Sans-serif (Lato/Open Sans)| 14px    | 700    | 1.6         | 0              | none        | `#4A2C1A`   |
| Footer Text           | Sans-serif (Lato/Open Sans)| 12px    | 700    | 1.3         | 3px            | uppercase   | `#D4A96A`   |
| Logo "TTB"            | Sans-serif (Montserrat)    | 14px    | 700    | 1.2         | 1px            | uppercase   | `#FFFFFF`   |
| Logo "EXPERIENCES"    | Sans-serif (Montserrat)    | 8px     | 400    | 1.2         | 2px            | uppercase   | `#FFFFFF`   |

**Font Families to Load:**
- Playfair Display (400, 700) — headings and header title
- Lato (400, 700) — body text and subheadings
- Montserrat (400, 700) — logo text

---

## C. Spacing & Dimensions

| Property                      | Value     |
|-------------------------------|-----------|
| Page max-width                | 720px     |
| Page padding (left/right)     | 40px      |
| Page padding (top)            | 30px      |
| Header margin-bottom          | 5px       |
| Horizontal rule thickness     | 2px       |
| Horizontal rule margin-bottom | 30px      |
| Main heading margin-bottom    | 25px      |
| Day section gap (col gap)     | 30px      |
| Day section margin-bottom     | 40px      |
| Paragraph spacing             | 15px      |
| Bold callout margin-top       | 20px      |
| Footer height                 | 40px      |
| Footer padding                | 10px 0    |
| Logo circle diameter          | 80px      |
| Logo position from top-right  | ~30px top, ~30px right |

---

## D. Layout Grid Analysis

| Section              | Layout Type        | Details                                                  |
|----------------------|--------------------|---------------------------------------------------------|
| Page Container       | Single column      | Centered, max-width ~720px, white background             |
| Header               | Flex row           | Title left-aligned, logo absolute top-right              |
| Day 01 Section       | 2-column flex/grid | Left: text (~55%), Right: image (~45%), gap 30px         |
| Day 02 Section       | 2-column flex/grid | Left: image (~45%), Right: text (~55%), gap 30px         |
| Footer               | Flex center        | Full-width dark bar, text centered                       |

**Vertical Stacking Order:**
1. Header (title + logo)
2. Horizontal divider
3. "Day 01 & 02" main heading
4. Day 01 section (text + image side by side)
5. Day 02 section (image + text side by side)
6. Footer bar

**Positioning:**
- Logo circle: `position: absolute` in top-right corner of page
- Footer: Full-width at bottom

---

## E. Image & Icon Inventory

| # | Description                     | Dimensions (approx) | Aspect Ratio | Object-Fit | Type      |
|---|--------------------------------|---------------------|--------------|------------|-----------|
| 1 | Chiang Mai temple (night)      | 300px × 220px       | ~1.36:1      | cover      | Content   |
| 2 | Royal Flora garden/pavilion    | 300px × 370px       | ~0.81:1      | cover      | Content   |
| 3 | TTB Logo (suitcase icon)       | 80px × 80px circle  | 1:1          | contain    | Content   |

**Icon Inventory:**
| Icon        | Type | Description                              |
|-------------|------|------------------------------------------|
| Suitcase    | SVG  | Yellow/gold suitcase icon in logo circle |

---

## F. Borders, Shadows & Radii

| Element         | Property      | Value                           |
|-----------------|---------------|---------------------------------|
| Horizontal Rule | border-top    | 2px solid `#6B3A2A`             |
| Logo Circle     | border-radius | 50% (full circle)               |
| Logo Circle     | border        | 3px solid `#6B3A2A`             |
| Images          | border-radius | 0 (square corners)              |
| Images          | box-shadow    | none                            |
| Page            | box-shadow    | none (or subtle page shadow)    |
| Footer          | border-top    | none                            |

**Text Shadows:** None observed.
**Box Shadows:** None observed on content elements.

---

## G. Component Inventory

### 1. Page Header
- **Elements:** Title text "THAILAND ITINERARY", horizontal rule below
- **Typography:** 14px, 700, uppercase, letter-spacing 2px, Playfair Display, color `#6B3A2A`
- **Border:** 2px solid `#6B3A2A` below header text

### 2. TTB Logo (Circular Badge)
- **Elements:** Circle with suitcase icon, "TTB" text, "EXPERIENCES" text
- **Shape:** 80px diameter circle, border 3px solid `#6B3A2A`, background `#6B3A2A`
- **Position:** Absolute, top-right corner of the page (~30px from top, ~30px from right)
- **Inner Content:** Gold suitcase icon, white "TTB" text, white "EXPERIENCES" text arranged in a circular badge

### 3. Main Day Heading
- **Elements:** "Day 01 & 02" large serif heading
- **Typography:** Playfair Display, ~48px, weight 400, color `#6B3A2A`

### 4. Day Content Section (Day 01)
- **Layout:** 2-column, text left (55%), image right (45%)
- **Sub-heading:** Bold 16px, "Day 01: Arrive at Chiang Mai & Drop to Hotel"
- **Body:** 14px, justified text, medium brown color
- **Callout:** Bold "Overnight stay in Chiang Mai." in italic bold
- **Image:** Temple at night, rectangular, no border-radius

### 5. Day Content Section (Day 02)
- **Layout:** 2-column, image left (45%), text right (55%)
- **Sub-heading:** Bold 16px, "Day 2: City Temple Tour of Chiang Mai"
- **Body:** 14px, justified text, medium brown color
- **Callout:** Bold "Overnight stay in Chiang Mai." in italic bold
- **Image:** Royal Flora garden/pavilion, taller rectangular image

### 6. Footer Bar
- **Elements:** Full-width dark brown bar with "TTB EXPERIENCES" text
- **Background:** `#4A2C1A` deep brown
- **Text:** "TTB EXPERIENCES", 12px, 700, uppercase, letter-spacing 3px, color `#D4A96A`
- **Height:** ~40px
- **Alignment:** Center horizontally

---

## Self-Validation Gate

✅ Every visible element in the screenshot can be reconstructed from this spec:
- ✅ All colors documented with roles
- ✅ All typography variants cataloged
- ✅ All spacing and dimensions measured
- ✅ Layout structure fully mapped
- ✅ All images inventoried
- ✅ All borders, shadows, radii documented
- ✅ All components listed with cross-references
