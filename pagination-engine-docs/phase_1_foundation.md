# Phase 1: Foundation & Measurement Core

**Objective:** Establish the physical constraints of the A4 page and build utilities to pre-calculate DOM dimensions without rendering to the screen.

## Steps for the Agent

1. **Define Constants:** Establish the exact pixel dimensions of an A4 page. (e.g., at 96 DPI: 794px width x 1123px height). Document these in a configuration object.
2. **Isolate Fixed Elements:** Write a function to query the existing HTML template for the Header, Footer, and Logo. Extract their computed vertical heights and vertical margins using JavaScript `getComputedStyle`.
3. **Calculate Usable Content Area:** Create a utility that dynamically returns the usable content height using the formula: 
   `A4 Height - (Header Height + Footer Height + Fixed Margins) = Usable Content Height`.
4. **Create Off-Screen Measurement Utility:** Design a function that temporarily renders a block of text or an image in an invisible DOM element (using `visibility: hidden; position: absolute;` with the exact font styles, paddings, and widths of the actual template). It should measure and extract the precise bounding box height (`offsetHeight`), then immediately remove the element from the DOM.
