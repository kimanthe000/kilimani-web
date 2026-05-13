# Kilimani Site Build Log

Date: May 12, 2026

## Current Preview

- Local dev server: http://127.0.0.1:5174/
- App stack: React, Vite, GSAP, Tailwind CSS
- Verified build command: `vite build --base ./`

## Completed Work

### Local Preview Setup

- Installed local project dependencies.
- Resolved the Rollup native loader issue by using the Rollup WASM package locally.
- Started the Vite dev server on port `5174` to avoid conflicting with the existing site on `5173`.

### Landing Hero

- Built a cinematic full-screen hero using `/assets/savannah.png` as the initial atmosphere.
- Added a standalone CSS sun with radial gradient, glow, bloom, and GSAP animation.
- Added a masked foreground layer from `/assets/masked-savanna.png` above the sun so the sun appears to rise from behind the horizon.
- Animated the sequence from photographic savanna into an abstract final scene.
- Final state contains only:
  - red/orange gradient background
  - oversized glowing sun, 50% visible
  - minimal nav
  - two floating jacket items
- Added reduced-motion support to skip the cinematic animation and show the final state immediately.

### Hero Jacket Items

- Added `/assets/oil.png` and `/assets/ash.png` as clickable jacket items.
- Positioned both jackets symmetrically around the top center of the final sun.
- Increased jacket size by 50%.
- Brought jackets 15% closer together.
- Lowered jackets so their gap from the sun is about `10px`.
- Added subtle floating animation and tasteful hover/focus highlight states.

### Product Page

- Clicking a jacket opens an in-app product page.
- Product page includes:
  - large jacket image on the left
  - color selector
  - size selector
  - quantity stepper
  - add-to-cart feedback
  - buy-now button
  - product details
- Returning from product page now shows the landing page directly in its final state instead of replaying the intro animation.

### Product Page Visual Direction

- Changed product page background to white.
- Removed stroke and shadow from the right purchase panel.
- Simplified controls and buttons for a more minimalist commerce design.
- Kept the hero page visually cinematic while making the product page quieter and cleaner.

## Key Files

- `src/App.jsx`
- `src/styles.css`
- `package.json`
- `public/assets/savannah.png`
- `public/assets/masked-savanna.png`
- `public/assets/oil.png`
- `public/assets/ash.png`

## Notes

- The original savanna imagery is only used during the intro sequence.
- In the final hero state, all photographic layers fade out completely.
- The final landing state is preserved when navigating back from the product page.

## Conversation History

This section records the design and implementation conversation in chronological order. Terminal/tool output is omitted except where it affected a decision.

### 1. Preview The Site

**User:** Preview this site.

**Codex:** Inspected the Vite React project, installed local dependencies, worked around the Rollup native loader issue with the Rollup WASM package, and started the local dev server at `http://127.0.0.1:5174/` because port `5173` was already in use by another site.

### 2. Remove Initial Floating Elements

**User:** Remove the floating components for the jackets, the black shape in the middle, and the yellow circle.

**Codex:** Removed the floating jacket elements, center silhouette, and yellow globe from `src/App.jsx`. Replaced the broken missing background image layer with a dark atmospheric gradient so the page no longer showed fallback image text.

### 3. Build Cinematic Hero Animation

**User:** Build a cinematic full-screen landing hero animation using `/assets/savanna.png`, where the original savanna image is only the initial atmosphere and all photographic details disappear by the final state.

**Codex:** Added GSAP, served the savanna image from `public/assets`, created a standalone CSS sun, and built a GSAP timeline that fades the photographic background away into a clean red/orange abstract final state with an oversized glowing sun and minimal foreground content. Added `prefers-reduced-motion` support.

### 4. Add Horizon Mask Layering

**User:** Update the hero layering so the sun appears to rise from behind the horizon/ground using background `/assets/savannah` and foreground mask `/assets/masked-savanna`.

**Codex:** Added the requested layer order: background, gradient, sun, masked foreground, content. Copied `masked-savanna.png` and `savannah.png` into `public/assets`. Positioned the foreground mask above the sun so it naturally covers the lower half without clipping the sun itself. Removed final hero copy so only minimal nav remained.

### 5. Preserve Foreground Color And Center Sun

**User:** Right before the transition, the foreground turns gray. It should retain the original color. Also center align the sun horizontally.

**Codex:** Split the background and foreground fade tweens so the foreground mask no longer receives blur/saturate/contrast filters. Made the sun's `left: 50%` and `xPercent: -50` centering explicit in CSS and GSAP states.

### 6. Add Final Jacket Items

**User:** Once in the final state, have `oil.png` and `ash.png` fade in, one on the top left of the sun and the other on the top right. They should hover with a highlighted hover state, be equidistant from the top center of the sun, and have about `60px` bottom padding from the sun.

**Codex:** Added `oil.png` and `ash.png` to `public/assets`, rendered them as final-state product buttons, faded them in after the sun reaches the final state, mirrored them around the sun, and added subtle floating plus hover/focus highlight treatment.

### 7. Raise Final Sun

**User:** In the final state, shift the sun up so that it is 50% visible and move the jackets correspondingly.

**Codex:** Changed the final sun position from the original small top sliver to a half-visible sun by setting the final bottom position to `-35vw`. Moved the jacket baseline to stay aligned with the sun's new top edge.

### 8. Build Product Page

**User:** Make a product page for the jackets. Upon click on a jacket, show the image on the left and a typical Shopify size, color, add-to-cart experience.

**Codex:** Split the app into a Hero view and ProductPage view. Clicking either jacket opens an in-app product detail page with a left image panel and commerce controls: color swatches, size selector, quantity stepper, add-to-cart feedback, buy-now button, and product details.

### 9. Return To Final Landing State

**User:** When the user returns to the landing page from the product page, just show the landing page in its final state.

**Codex:** Added a `showFinalLanding` state so returning from the product page skips the cinematic intro and shows the completed hero state immediately.

### 10. Adjust Hero Jacket Placement

**User:** On the hero page, lower the jackets so bottom padding is `32px`, increase their size by 50%, and bring them closer together by 15%.

**Codex:** Increased the hero jacket item widths by 50%, reduced their mirrored offset by 15%, and changed the gap above the sun to `32px`.

**User:** Bring the jackets closer to the sun by 70%.

**Codex:** Reduced the jacket-to-sun gap from `32px` to about `10px` on desktop and mobile.

### 11. Product Page Visual Refinement

**User:** Make the product page background white.

**Codex:** Converted the product page to a white commerce layout with dark text, neutral image panel, and readable controls while leaving the cinematic hero unchanged.

**User:** Remove the stroke and shadow of the right panel on the product page. Make the buttons more minimal as well, tastefully.

**Codex:** Removed the right purchase panel's border and shadow, made it a flat white minimalist surface, and simplified the option controls and purchase buttons with sharper edges, lighter borders, and quieter hover states.

### 12. Save Project Log

**User:** Save this log in a markdown file.

**Codex:** Created `PROJECT_LOG.md` with the current preview, completed work, key files, and notes.

**User:** Add the conversation history into it.

**Codex:** Added this conversation history section to `PROJECT_LOG.md`.
