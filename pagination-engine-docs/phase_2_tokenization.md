# Phase 2: Content Tokenization

**Objective:** Transform the raw JSON itinerary data into a manageable, measurable list of structural blocks.

## Steps for the Agent

1. **Parse JSON:** Create a function to iterate through the main JSON input structure (Days, Activities, Images).
2. **Generate Tokens (Blocks):** Convert the raw data into an array of object "tokens". A token represents a distinct, atomic UI element. For example, create token types like `TitleBlock`, `TextBlock`, and `ImageBlock`.
3. **Pre-measure Tokens:** Pass each generated token's content through the Off-Screen Measurement Utility created in Phase 1.
4. **Final Output Form:** Ensure the function outputs an ordered array of token objects, where each object contains:
   - Its content type (e.g., 'image', 'paragraph', 'header')
   - The raw data to be rendered
   - The pre-calculated `height` in pixels.
