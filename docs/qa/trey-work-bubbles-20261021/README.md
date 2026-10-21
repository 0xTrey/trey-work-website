# trey.work bubble preview

October 21, 2026. Local concept for review, not a live release.

Goal: bring the personal v2 liquid-field idea to the professional root site, with a readable banner, mobile layout, and motion controls.

Sources: `src/main.jsx` at base commit `fd6d8c1`; the personal v2 `static/js/liquid-field.js`; the existing Varick `applications/varick/src/liquid-field.js`. Codex implemented this bounded adaptation directly because a separate implementation handoff would add more work than it saved.

Changed: the hero, its opening copy and actions, navigation labels, typography, and mobile metrics layout. Removed heading eyebrows and leading zeros. Added a keyboard skip link. Career and project claims were carried forward. Application-specific source and unrelated ServiceNow files were not edited.

Verified in the Codex in-app browser at `http://127.0.0.1:5186/`:

- Desktop: 1280 × 720, document client width and scroll width both 1265. The hero ends at viewport coordinate 720.
- Phone: 390 × 844, client width and scroll width both 375. Screenshot: `mobile.png`.
- Narrow phone: 320 × 740, client width and scroll width both 305.
- Tablet: 768 × 1024, client width and scroll width both 753.
- Pause changed the control to Resume motion and set `aria-pressed=true`; resume returned it to Pause motion and `aria-pressed=false`.
- Emulated reduced motion produced `fieldState=still`, Resume motion, and `aria-pressed=true`.
- Induced WebGL context loss produced `fieldState=static`, a hidden canvas, and a disabled Static background control. A normal reload restored the moving field.
- No warning or error logs on the final clean reload. Viewport and media overrides were cleared.
- `npm run build` and `git diff --check` passed.

Desktop screenshot: `desktop.png`. Machine-readable browser observations: `browser-checks.json`.

Save state: local Git branch `codex/trey-work-bubble-preview`. No remote push or deployment. Broader career copy, project descriptions, and résumé currency remain available for a later content pass. The personal-site source was read only.
