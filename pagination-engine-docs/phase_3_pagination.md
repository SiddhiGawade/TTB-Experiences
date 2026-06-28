# Phase 3: Core Pagination Engine

**Objective:** The heart of the calculator. Distribute the pre-measured blocks into discrete A4 pages without exceeding the Usable Content Height calculated in Phase 1.

## Steps for the Agent

1. **Initialize State:** Create an array to hold the final `Pages`. A `Page` object should have a `remainingSpace` property initialized to the `Usable Content Height`.
2. **Iterate Blocks:** Loop through the array of tokens generated in Phase 2.
3. **Fit Check Algorithm:** For each block, check if `block.height <= current_page.remainingSpace`.
4. **Placement & Subtraction:** 
   - **If it fits:** Push the block into the `current_page.blocks` array and subtract `block.height` from `current_page.remainingSpace`.
   - **If it does NOT fit (Carry Forward logic):** Create a new `Page` object in the state array. Add the current block to this new page's block array, and subtract its height from the new page's initialized `remainingSpace`.
5. **Orphan Control (Optional Enhancement):** Add logic to ensure that titles (like 'Day 1') are not placed alone at the very bottom of a page without at least one line of accompanying text block beneath them. If they are, push the title to the next page instead.
