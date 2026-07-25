# Task B — Optimization changelog

**Goal:** Lighthouse **90+** on both **Performance** and **Accessibility** (mobile and desktop).

Run Lighthouse against your **deployed** URL (not the local file — scores differ):
Chrome → right-click → **Inspect** → **Lighthouse** tab → tick *Performance* +
*Accessibility* → **Analyze page load**. Screenshot the result for Mobile and again
for Desktop, and put the screenshots in your submission folder.

This build ships optimized out of the box. Below is what's already done and why it
helps, then the short list to verify after you deploy.

---

## Already in the build — and what each change buys

| Change | Why it helps the score |
|---|---|
| Hero uses **inline SVG**, not an image | No large image download → fast Largest Contentful Paint, no layout shift. |
| Fonts **preconnected** + loaded non-render-blocking (`media="print"` → `all` on load) | Text paints immediately; fonts never block first render. |
| **Zero images, zero libraries, one small JS file** (`defer`) | Tiny transfer size and near-zero main-thread blocking → strong Performance / low Total Blocking Time. |
| **Semantic landmarks** + single ordered heading outline | Accessibility structure audits pass; screen-reader navigation works. |
| **Skip link** + visible `:focus-visible` on all interactive elements | Keyboard-accessibility audits pass. |
| Form: `label[for]`, `aria-invalid`, `aria-describedby`, `role="status"` | Form-accessibility audits pass. |
| Palette chosen for **WCAG AA contrast** | Contrast audit passes. |
| `meta viewport`, `theme-color`, `lang="en"`, SVG favicon | Best-practices / baseline points. |
| `prefers-reduced-motion` respected | No motion penalty; better UX. |
| `netlify.toml` sets long-cache headers on CSS/JS + `nosniff` etc. | Caching + best-practices/security points on the live host. |

## Verify / tune after deploying

1. **Re-run on the live URL** — local-file scores are not representative.
2. If Performance dips below 90, confirm the **font swap fired** (the `print → all`
   onload trick removes render-blocking). A hard refresh with cache disabled helps.
3. Netlify/Vercel serve gzip/brotli automatically — no action needed.
4. If you later add any `<img>`, give it explicit `width`/`height` (or `aspect-ratio`)
   to avoid Cumulative Layout Shift. The current build has none.

## How to write this up for submission

For each item you personally verified or changed, add one line in this format:

> **Change:** deferred the script and removed render-blocking fonts.
> **Bought:** Total Blocking Time dropped from ‹A› ms to ‹B› ms; First Contentful Paint improved by ‹X› ms.

**Attach:** `lighthouse-mobile.png` and `lighthouse-desktop.png` (each showing both
Performance and Accessibility at 90+).
