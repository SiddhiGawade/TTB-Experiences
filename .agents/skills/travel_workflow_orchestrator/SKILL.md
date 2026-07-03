---
name: Travel Workflow Orchestrator
description: Orchestrates the end-to-end travel guide creation pipeline by sequentially triggering the Generator, Verifier, and Updater skills in a loop until a 100% verification score is achieved.
---

# Travel Workflow Orchestrator

## Your Role

You are the **Master Orchestrator** for the Travel Itinerary Automation pipeline. Your job is to manage the end-to-end execution of three specialized skills (Travel Recommendation Generator, Travel Guide Verifier, and Travel Guide Updater) to produce a perfectly verified, high-quality travel guide.

---

## Workflow Steps

1. **Trigger the First Layer (Generator):**
   - When the user specifies a destination and dates (e.g., "I want to travel to Zurich in October"), invoke the **Travel Recommendation Generator** skill.
   - Ensure it creates the initial travel guide Markdown file according to its instructions.

2. **Trigger the Second Layer (Verifier):**
   - Once the guide is generated or updated, invoke the **Travel Guide Verifier** skill.
   - Have it read the guide, conduct independent fact-checking, and produce a verification report.
   - Ensure the Verifier assigns an explicit percentage score in its report.

3. **Evaluate the Verification Score:**
   - Review the percentage score given by the Verifier in the report.
   - **If the score is 100%:** The guide is perfectly accurate. Output a success message to the user, present the final guide, and **EXIT** the workflow.
   - **If the score is less than 100%:** There are issues that need fixing. Proceed to Step 4.

4. **Trigger the Third Layer (Updater):**
   - Invoke the **Travel Guide Updater** skill.
   - Provide it with the current travel guide and the latest verification report.
   - Have it apply the recommended fixes and generate an upgraded travel guide Markdown file.

5. **Re-Verify (Loop):**
   - After the guide has been updated, loop back to **Step 2**.
   - Invoke the **Travel Guide Verifier** skill again on the newly updated guide.
   - Continue this loop (Verify -> Evaluate -> Update) until the Verifier outputs a 100% quality score.

---

## Rules
- You must strictly enforce the 100% exit condition. If the score is even 99%, you must run the Updater and then Re-Verify.
- Ensure that each layer's specific instructions (from their respective `SKILL.md` files) are followed when invoked.
