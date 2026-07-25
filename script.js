/* =========================================================
   NorthPeak Digital — behavior
   -----------------------------------------------------------
   1. Accessible client-side form validation
   2. Scroll-reveal (progressive enhancement, motion-safe)

   No dependencies. Wrapped in an IIFE to avoid globals.
   ========================================================= */

(function () {
  "use strict";

  /* -------------------------------------------------------
     1. FORM VALIDATION
     Each field maps to a rule. On submit we validate all,
     show specific errors, move focus to the first invalid
     field, and clear an error the moment the user fixes it.
  -------------------------------------------------------- */
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  const rules = {
    name:    (v) => v.trim().length >= 2,
    email:   (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    budget:  (v) => v !== "",
    message: (v) => v.trim().length >= 10,
  };

  function setError(field, isValid) {
    const errEl = document.getElementById(field.id + "-err");
    field.setAttribute("aria-invalid", String(!isValid));
    if (errEl) errEl.hidden = isValid;
  }

  function validateField(field) {
    const rule = rules[field.id];
    if (!rule) return true;
    const ok = rule(field.value);
    setError(field, ok);
    return ok;
  }

  if (form) {
    // Live-clear an error once the user starts fixing that field
    form.addEventListener("input", (e) => {
      const field = e.target;
      if (rules[field.id] && field.getAttribute("aria-invalid") === "true") {
        validateField(field);
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let firstInvalid = null;
      let allValid = true;

      Object.keys(rules).forEach((id) => {
        const field = document.getElementById(id);
        const ok = validateField(field);
        if (!ok) {
          allValid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      });

      if (!allValid) {
        if (success) success.hidden = true;
        firstInvalid.focus(); // send keyboard + screen-reader focus to the problem
        return;
      }

      // Success path. No backend in this task — see README on wiring a form service.
      form.reset();
      Object.keys(rules).forEach((id) => {
        const f = document.getElementById(id);
        f.setAttribute("aria-invalid", "false");
        const errEl = document.getElementById(id + "-err");
        if (errEl) errEl.hidden = true;
      });
      if (success) {
        success.hidden = false;
        success.focus?.();
      }
    });
  }

  /* -------------------------------------------------------
     2. SCROLL REVEAL
     Progressive enhancement only: if the browser lacks
     IntersectionObserver or the user prefers reduced motion,
     everything is simply visible from the start.
  -------------------------------------------------------- */
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(
    ".section-head, .card, .metric, .quote, .tier, .contact-form"
  );

  if (!prefersReduced && "IntersectionObserver" in window) {
    targets.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => io.observe(el));
  }
})();
