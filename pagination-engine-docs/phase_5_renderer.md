# Phase 5: Template Renderer

**Objective:** Take the finalized, optimized, and paginated blocks and inject them into the DOM to render the final printable document.

## Steps for the Agent

1. **Clear Existing Container:** Empty the target `div` in the existing `index.html` where the raw JSON data was originally being dumped.
2. **Iterate Final Pages:** Loop through the finalized `Pages` array.
3. **Clone Base Structure:** For every page in the array, dynamically clone the strict HTML shell: `Wrapper -> Header -> Content Area -> Footer`. This ensures the locked elements are duplicated identically for every printed page.
4. **Inject Blocks:** Loop through the tokens assigned to the specific page. Construct their actual HTML markup (applying the exact optimized heights calculated in Phase 4 for images) and append them into the inner Content Area of that page's cloned shell.
5. **Render to DOM:** Append all constructed A4 pages sequentially into the main document body.
6. **Print Setup:** Apply necessary CSS print media queries (`page-break-after: always;` on the page wrappers) to guarantee the browser prints each section on its own physical A4 page perfectly.
