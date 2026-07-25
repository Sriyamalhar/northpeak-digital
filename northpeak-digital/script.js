/* =========================================================
   NorthPeak Digital — behavior
   1. Accessible client-side form validation
   2. Scroll-reveal (progressive enhancement, motion-safe)
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Form validation ---------- */
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  // Each field: id -> validation rule + error message element
  const rules = {
    name: (v) => v.trim().length >= 2,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    budget: (v) => v !== "",
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
    // Live-clear an error once the user fixes a field
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
        firstInvalid.focus();
        return;
      }

      // Success path (no backend — front-end demo)
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

  /* ---------- Scroll reveal ---------- */
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".section-head, .card, .metric, .quote, .tier, .contact-form");

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
