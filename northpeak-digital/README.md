# NorthPeak Digital — one-page agency site

A responsive, hand-built one-page website for a fictional product studio, **NorthPeak Digital**.
Built for the Digital Heroes Web Development qualification task (Role 05).

**No page builders** — vanilla HTML, CSS, and JavaScript only. No WordPress, Webflow, or Wix.

---

## Live site
`<paste your deployed URL here after deploying>`

## What's in the build

- **Hero** — headline, sub-headline, primary CTA, and a live studio-stats row.
- **Services grid of 6** — strategy, UX/UI, engineering, e-commerce, brand, growth.
- **Results / testimonials** — three headline metrics plus two client quotes.
- **Pricing** — three tiers (Base Camp / Ascent / Summit) with a featured tier.
- **Contact form** — name, email, budget, message, with client-side validation.
- Fully responsive and intentional at **360px, 768px, and 1440px**.
- Footer credit: *Built for Digital Heroes Training Task* → digitalheroesco.com

## Design direction

The name NorthPeak drove an **altitude / ascent** concept:
- A cold, precise palette (deep summit slate + glacier ice) with **one** warm signal
  accent used sparingly for CTAs and highlights.
- Display face **Fraunces** paired with **Inter** for body and **JetBrains Mono** for
  labels and data — deliberately not the default serif-on-cream look.
- **Signature element:** an SVG contour-line topography behind the hero, echoing an
  elevation map. The pricing tiers ("routes up") and coordinates in the eyebrow carry
  the same theme without over-decorating.

## Files

```
index.html    Semantic markup, all sections, ARIA where it earns its place
styles.css    Design tokens + responsive layout (mobile-first breakpoints)
script.js     Accessible form validation + motion-safe scroll reveal
```

## Run locally

No build step. Either open `index.html` directly, or serve it:

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (pick one)

**Netlify (drag-and-drop):** log in → drag this folder onto the dashboard → done.
**Vercel:** `vercel` in this folder, or import the repo from the dashboard.
**GitHub Pages:** push to a public repo → Settings → Pages → deploy from `main` / root.

## Three design decisions & reasoning

1. **One accent colour, held in reserve.** Everything structural is slate and ice;
   the warm signal only appears on CTAs, active states, and one word of the hero.
   Restraint makes the accent mean "act here" instead of being decoration.
2. **Pricing reorders on mobile.** The featured "Ascent" tier is visually centred on
   desktop but jumps to the top on narrow screens, so the recommended option is the
   first thing a thumb reaches.
3. **Validation guides, never scolds.** Errors are specific ("Enter a valid email so
   we can reply"), focus jumps to the first invalid field, and errors clear the moment
   the user fixes them — matching the accessibility floor the brand itself sells.

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `section`, `footer`), a skip link, visible
  keyboard focus, and `aria-invalid` / `aria-describedby` wired into the form.
- Fonts are preconnected and loaded non-render-blocking.
- `prefers-reduced-motion` disables all transitions and the scroll reveal.
- No framework, no heavy images — the contour graphic is inline SVG.

## Where I used AI

I used Claude to scaffold the initial HTML structure and CSS token system, and to
pressure-test the responsive breakpoints. After that I [describe your own edits here:
adjusted the copy voice, changed accent colour / spacing, rewrote sections, etc.] so
the result reflects my own judgment — which is what the interview will be built around.

## Assumptions made

- The agency is fictional, so all copy, metrics, and testimonials are invented and
  labelled as such in the footer.
- The contact form has no backend (front-end task), so a valid submit shows a success
  state rather than sending mail. Wiring it to a form service (Formspree, Netlify Forms)
  would be a one-line change.
