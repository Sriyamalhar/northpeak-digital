# Task B — Optimization changelog

Target: Lighthouse **90+** on both Performance and Accessibility (mobile + desktop).
Run Lighthouse on your **deployed** URL (Chrome DevTools → Lighthouse), screenshot both
scores, and drop the screenshots in your submission folder.

The build already ships with most of this baked in. Below is what's done, why it helps,
and the few things to verify/tune after you deploy.

---

## Already in the build (and what each buys you)

| Change | What it buys |
|---|---|
| Inline SVG contour instead of a hero image | No large image download; near-zero LCP cost from the graphic. |
| Fonts `preconnect` + non-render-blocking load (`media=print` swap) | Text paints immediately; fonts don't block first render. |
| Semantic landmarks + one `h1`, ordered headings | Accessibility structure score; screen-reader navigation. |
| Skip link + visible `:focus-visible` | Keyboard-accessibility checks pass. |
| Form labels tied to inputs, `aria-invalid` / `aria-describedby` | Form accessibility audit passes. |
| Colour contrast (slate/ice/signal chosen for AA) | Contrast audit passes. |
| `prefers-reduced-motion` respected | No penalty; better UX audit. |
| `meta viewport`, `theme-color`, `lang="en"` | Baseline PWA / best-practices points. |
| Deferred JS (`defer`), no framework | Tiny main-thread cost; fast Time to Interactive. |

## Verify / tune after deploying

1. **Re-run Lighthouse on the live URL**, not the local file — scores differ.
2. If Performance dips below 90, check the **font swap**: confirm the `print`→`all`
   onload swap fired (it removes render-blocking).
3. Add width/height or `aspect-ratio` to any image you introduce later to avoid layout
   shift (CLS). The current build has none.
4. Serve over the host's default gzip/brotli (Netlify/Vercel do this automatically).

## How to fill this out for submission

For each change you personally made or verified, write one line:
> **Change:** deferred the script. **Bought:** ~X ms off Time to Interactive, TBT dropped from A to B.

Attach: `lighthouse-performance.png` and `lighthouse-accessibility.png` (or one combined
screenshot showing both scores 90+).
