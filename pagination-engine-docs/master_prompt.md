# Master Context Prompt: A4 HTML Pagination Engine

**Project Overview:**
We are building an intelligent layout and pagination calculation engine for a Thailand Itinerary web application (`thailand-itinerary/index.html`). The application consumes JSON data (representing days, text, and images) and renders it into a printable A4-sized HTML template.

**The Core Problem:**
Currently, when the JSON contains large volumes of data, the rendered content overflows. This causes the fixed footer to be pushed out of bounds, cropped, or misplaced. The length of the input data is highly variable.

**Strict Constraints:**
1. **Locked Structure:** The Header, Footer, and Logo positions are strictly fixed. Their layout and placement must absolutely not change, regardless of data volume.
2. **A4 Dimensions:** The target rendering space is strictly A4 size. The usable content area is the A4 height minus the locked Header and Footer heights.

**The Required Solution:**
A robust JavaScript calculation utility that acts as a pagination engine. It must:
1. **Pre-measure content:** Calculate the required space for dynamic text (based on length/font) and images before rendering.
2. **Intelligently Paginate:** If a block of data (e.g., a specific Day's itinerary) cannot fit within the remaining space of the current A4 page, it must dynamically carry the data forward to a new A4 page.
3. **Dynamically Resize Images:** Expand images to fill excessive white space, or shrink them to squeeze into tight spaces, strictly bound by pre-defined minimum and maximum scaling thresholds.

**Workflow Context:**
This project is orchestrated across multiple AI agents. You are receiving this master context to understand the broader goal. You will be assigned specific implementation phases and will use `tracker.md` to record your progress and hand over state to the next agent.
