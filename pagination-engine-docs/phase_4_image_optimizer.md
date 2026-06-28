# Phase 4: Dynamic Image Optimizer

**Objective:** Intelligently resize image blocks within strict thresholds to improve aesthetic flow, utilize dead space, or squeeze slightly overflowing content onto a single page.

## Steps for the Agent

1. **Define Strict Thresholds:** Establish `MIN_IMAGE_SCALE` (e.g., 70% of original height) and `MAX_IMAGE_SCALE` (e.g., 120% of original height) in a configuration file.
2. **Analyze Page Whitespace:** Once the pagination loop in Phase 3 is complete, iterate through the finalized `Pages` array and evaluate the `remainingSpace` on each page.
3. **Upscale for Empty Space:** If a page contains an `ImageBlock` and has significant `remainingSpace` (leaving ugly gaps), calculate a scale factor to proportionally increase the image's height and width up to `MAX_IMAGE_SCALE` to absorb the dead space.
4. **Downscale for Tight Fits:** If a block in Phase 3 barely missed fitting onto a page (causing an unwanted extra page), and the previous page contains an `ImageBlock`, test if downscaling the image (down to but not below `MIN_IMAGE_SCALE`) would recover enough space to pull the overflowing block back onto that page.
5. **Update Tokens:** Update the `.height` property of the `ImageBlock` token to reflect its newly optimized size.
