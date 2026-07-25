<div align="center">

# NorthPeak Digital

**Digital products, built to summit.**

A responsive, hand-built one-page website for a fictional product studio.
Built for the Digital Heroes Web Development qualification task (Role 05).

`Live:` **‹paste your deployed URL here after deploying›**
`Repo:` **‹paste your GitHub repo URL here›**

</div>

---

## Table of contents

- [Overview](#overview)
- [What's included](#whats-included)
- [Design direction](#design-direction)
- [Tech & approach](#tech--approach)
- [Project structure](#project-structure)
- [Run locally](#run-locally)
- [Deploy](#deploy) — the easy way
- [Form validation contract](#form-validation-contract)
- [Three design decisions](#three-design-decisions--reasoning)
- [Accessibility & performance](#accessibility--performance)
- [Where I used AI](#where-i-used-ai)
- [Assumptions](#assumptions)
- [License](#license)

---

## Overview

NorthPeak Digital is a single-page marketing site for a fictional agency. It is
built **without any page builder** — no WordPress, Webflow, or Wix — using only
hand-written HTML, CSS, and vanilla JavaScript. No framework, no build step, no
dependencies. Open the file and it runs.

The brief asked for a site that looks *intentional* at **360px, 768px, and 1440px**,
with a specific set of sections and a working, validated contact form. All of that
is here, plus a small amount of extra polish (a trust strip, a scroll reveal, an
SVG favicon) kept deliberately restrained.

## What's included

| Section | Details |
|---|---|
| **Hero** | Headline, sub-headline, two CTAs, and a live studio-stats row. Signature SVG contour backdrop. |
| **Trust strip** | Five client wordmarks — a light credibility band under the hero. |
| **Services grid of 6** | Strategy, UX/UI, Engineering, E-commerce, Brand, Growth. |
| **Results / testimonials** | Three headline metrics + two client quotes. |
| **Pricing** | Three tiers — Base Camp / Ascent / Summit — with a featured tier. |
| **Contact form** | Name, email, budget, message — full client-side validation. |
| **Footer** | Nav + required *Built for Digital Heroes Training Task* credit. |

## Design direction

The name **NorthPeak** drove an **altitude / ascent** concept:

- **Palette** — a cold, precise base of deep summit slate and glacier ice, with
  **one** warm signal accent (`#E8562A`) used sparingly for CTAs and highlights.
  Restraint is the point: the accent means *"act here."*
- **Type** — display face **Fraunces** paired with **Inter** for body and
  **JetBrains Mono** for labels and data. Deliberately not the default
  serif-on-cream look.
- **Signature element** — an inline-SVG **contour-line topography** behind the hero,
  echoing an elevation map. The pricing tiers ("routes up") and the summit
  coordinates in the eyebrow carry the theme without over-decorating.

## Tech & approach

- **HTML5**, semantic landmarks (`header` / `main` / `section` / `footer`), one `h1`.
- **CSS** with custom properties (design tokens), `clamp()`-based fluid type and
  spacing, CSS grid, and mobile-first media queries. No preprocessor.
- **Vanilla JS** (one small IIFE): accessible form validation + a motion-safe
  scroll reveal via `IntersectionObserver`.
- **Zero dependencies, zero build step.** Fonts load non-render-blocking.

## Project structure

```
northpeak-digital/
├── index.html                 Semantic markup — every section
├── styles.css                 Design tokens + responsive layout (commented, sectioned)
├── script.js                  Form validation + scroll reveal
├── netlify.toml               Zero-config deploy + security/caching headers
├── README.md                  This file
├── OPTIMIZATION-CHANGELOG.md  Task B — Lighthouse notes
├── .gitignore
└── LICENSE                    MIT
```

## Run locally

No build step. Open `index.html` directly, or serve it:

```bash
# Python (any OS with Python installed)
python3 -m http.server 8000
# → http://localhost:8000

# or Node
npx serve
```

## Deploy

**Easiest — Netlify drag-and-drop (no GitHub, no terminal, ~1 minute):**

1. Go to **app.netlify.com** and sign in (free).
2. On the dashboard, drag the **whole `northpeak-digital` folder** onto the
   *"drag and drop your site output folder here"* zone.
3. Netlify uploads and gives you a live URL like `your-site.netlify.app`.
4. Rename it under **Site configuration → Change site name** if you like.

That's it — `netlify.toml` means there are no settings to configure.

<details>
<summary>Alternative — deploy from GitHub (auto-redeploys on every push)</summary>

1. Push this folder to a **public** GitHub repo.
2. Netlify → **Add new site → Import an existing project → GitHub** → pick the repo.
3. Leave build settings blank (the `netlify.toml` handles it) → **Deploy**.
</details>

<details>
<summary>Alternative — GitHub Pages</summary>

Push to a public repo → **Settings → Pages → Deploy from branch → `main` / root**.
</details>

**After deploying, verify:** the footer *Built for Digital Heroes Training Task*
link opens digitalheroesco.com, and submitting the empty contact form shows errors.

## Form validation contract

All validation is client-side (no backend in this task).

| Field | Rule | Error shown |
|---|---|---|
| Name | ≥ 2 non-space characters | "Please enter your name." |
| Email | matches `local@domain.tld` | "Enter a valid email so we can reply." |
| Budget | a range is selected | "Pick a range so we can scope it." |
| Message | ≥ 10 characters | "Tell us a little about the project (10+ characters)." |

Behaviour: on submit, every field is checked; invalid fields get `aria-invalid="true"`
and a visible message tied via `aria-describedby`; focus jumps to the **first** invalid
field; an error clears the instant the user corrects that field; a fully valid submit
resets the form and shows a success message via a `role="status"` live region.

To make it actually send mail, point the form at a service like Formspree or enable
Netlify Forms — a small change in `index.html` / `script.js`.

## Three design decisions & reasoning

1. **One accent colour, held in reserve.** Everything structural is slate and ice;
   the warm signal appears only on CTAs, active states, and one word of the hero.
   Restraint makes the accent read as an instruction, not decoration.
2. **Pricing reorders on mobile.** The featured "Ascent" tier is centred on desktop
   but jumps to the **top** on narrow screens, so the recommended option is the first
   thing a thumb reaches.
3. **Validation guides, never scolds.** Errors are specific, focus moves to the
   problem, and messages clear as soon as the user fixes the field — the same
   accessibility care the brand itself sells.

## Accessibility & performance

- Semantic landmarks, one ordered heading outline, a skip link, and visible
  `:focus-visible` styles on every interactive element.
- Form controls fully labelled; `aria-invalid` / `aria-describedby` / `role="status"`
  wired in.
- Colour pairings chosen to meet WCAG AA contrast.
- `prefers-reduced-motion` disables all transitions and the scroll reveal.
- Fonts preconnected and loaded non-render-blocking; the only graphic is inline SVG,
  so there are effectively no image downloads → fast LCP.

See **OPTIMIZATION-CHANGELOG.md** for the Task B Lighthouse notes.

## Where I used AI

> Fill this in honestly before you submit — the brief explicitly asks for it, and
> the interview is built around the parts that are distinctly yours.

I used AI to scaffold the initial HTML structure and the CSS token system, and to
pressure-test the responsive breakpoints. After that I **‹describe what you changed:
reworded service copy, adjusted the accent colour / spacing, swapped a testimonial,
etc.›** so the final result reflects my own judgment and voice.

## Assumptions

- The agency is fictional; all copy, metrics, testimonials, and client names are
  invented and labelled as fictional in the footer.
- The contact form has no backend (front-end task), so a valid submit shows a
  success state rather than sending email. Wiring it to a form service is noted above.
- Client logos in the trust strip are set as styled wordmarks rather than image
  files, to keep the build image-free and fast.

## License

MIT — see [LICENSE](LICENSE).
