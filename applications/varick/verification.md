# Varick application verification

Initial checks observed October 9, 2026, on Trey's Mac. The October 11 public release is recorded below.

| Check | Receipt |
| --- | --- |
| Application build | `npm run build:varick` passed. 227.66 KB JS, 71.89 KB gzip; 25.17 KB CSS, 6.23 KB gzip. |
| Parent site | `npm run build` passed. Other application files were not edited. |
| Desktop | Real Chrome, 1485 × 1150. Client and scroll widths both 1485. Hero, work panel, and interactive decision sample visually inspected. |
| Phone | Real Chrome at 390 × 844 and 360 × 800. Client and scroll widths matched viewport. Navigation opened, followed an anchor, and closed. |
| Liquid field | Canvas visible. Pointer drag increased wake count from 1 to 9. Pause switched to Resume with `aria-pressed=true`; Resume restored motion. |
| Project evidence | All three tabs selected. ArrowDown advanced the active tab. Ownership disclosure opened. Source link changed with the selected project. |
| Work sample | Each scenario displayed its corresponding action and discovery notes. Mobile expanded notes remained readable. Accounts are explicitly fictional. |
| Production console | New production-preview tab had no error or warning entries. A development hot-reload root warning was fixed before final review. |
| Local assets | Homepage, résumé, portrait, Switzer, Fragment Mono, social PNG, favicon, and explicit 404 document returned 200 with expected MIME types. |
| Public evidence destinations | Three GitHub repositories, Replit architecture walkthrough, Folloze blog, and personal v2 returned 200. A Folloze launch URL returned 403 and was removed. |
| Résumé | ReportLab 5.0.1 generated one page; extracted text and rendered PNG inspected. No clipping or overlap observed. |
| Reproducible fonts | Removed one generated Switzer file, ran preparation, and compared the downloaded bytes with the reviewed copy. Identical. Switzer binaries are not staged for the public repo. |
| Source checks | JavaScript syntax checks and `git diff --check` passed. No em dashes or sensitive file names in authored module files. |

Reduced-motion startup, visibility suspension, and WebGL fallback were inspected in source; browser preference emulation and a forced context-loss test were not performed. Local preview uses Vite. Public HTTPS, DNS, social unfurl, and unknown-path HTTP 404 require deployment verification and are not claimed here.

Preview: `http://127.0.0.1:5199/`. Resume: `/resume/Trey-Harnden-Varick-GTM-Engineer.pdf`.

## Artifact hashes

```text
1825f69675c5148ae309aa7412cbe3c0c56b990cf153e29b11a5c932b08573e9  src/main.jsx
5986ddb44c8d06e2f0c9441baac2b9914368d8ba8812c62e6fe90625fcdffad5  src/styles.css
c89ae31bdf93459db2456d81d031430d85f549f530c788e38873606b12131497  src/liquid-field.js
dc8ab1f0b7c737968356a525d032e1eee5748832f532af8f954da4647104c62a  public/resume/Trey-Harnden-Varick-GTM-Engineer.pdf
088ca9294447153af413fc737698bf8df3cf00728e4551a8bb08328d618172a0  ../../dist-varick/index.html
```

No application submission, outreach, remote push, or live deployment occurred during the October 9 initial build.

## Public release, October 11, 2026

Trey authorized publication to `varick.trey.work` for review. Cloudflare Worker `trey-varick-application` now serves source commit `87aeb3d` at [the public HTTPS page](https://varick.trey.work/), deployment version `686dd578-4464-44f8-8dde-1c0acf33f8a3` at 100% traffic. Local preview was restarted on port 5199.

- Anonymous curl requests: homepage, résumé, all four fonts, portrait, social image, favicon, JavaScript, and CSS returned 200 with expected types and byte-for-byte build matches. Unknown path returned 404. See `release-20261011.json`.
- Real in-app browser: page rendered at 1280 × 720; client and scroll widths matched at 1265. The liquid canvas was visible. Pause/Resume changed state correctly; project selection changed the evidence links; the stalled-deal scenario opened its matching discovery notes. No console errors or warnings.
- Phone at 390 × 844: client and scroll widths matched at 375. Navigation opened, followed the work anchor, and closed. Viewport was restored after testing.
- Screenshots: `review/20261011-live-desktop.jpg` and `review/20261011-live-mobile.jpg`.

Initial Python urllib requests returned 403; ordinary curl requests and the public browser subsequently loaded without authentication. No access policy or security setting was changed. The earlier local-tab automation request was rejected by browser policy, so local UI automation was not retried. Verification used the requested public HTTPS site.

The public page is a review draft. No job application or outreach was submitted. Social-image delivery passed; third-party social unfurl behavior was not tested.

## Fit link removal, October 12, 2026

Removed the user-selected "Built around your actual role" link from the fit section. Build and deployment passed; Cloudflare version `d0c37a94-02c1-41f8-ba15-cc22e01ad857` serves the update. Public HTML and JavaScript match the build, the removed text is absent from the bundle, and the reloaded browser reports zero matching links. The fit heading and paragraph remain visible in the DOM.

## Fit evidence links, October 12, 2026

Added [Thursday's webinar registration page](https://engage.folloze.com/ai-live-build) to row 1 and the [public outbound-engine repository](https://github.com/0xTrey/folloze-outbound-engine-public) to row 2. The webinar's live page names Trey as presenter, states October 15, 2026 at 12 p.m. Eastern, and renders a registration form. No form was submitted and provider enrollment was not tested. The repository returned HTTP 200.

Build and deployment passed; Cloudflare version `ef20a3ca-8c46-46c8-8fa5-3918afa2a571` serves both links. Public browser readback confirms the exact destinations, new-tab behavior, and `noopener noreferrer`. At 390px, client and scroll widths both equal 375; both links have 44px click-target height. The previously removed heading link still has zero matches. Screenshot: `review/20261012-fit-evidence-links.jpg`.

## Real deals and builds, October 12, 2026

Replaced the fictional opportunity sample with real Folloze commercial history, the Trade Ledger research prototype, and Try Me Now. Each case gives ownership, results or outputs, a relevant next step, and expandable details. The navigation now calls this section "The results"; `#approach` still works. Sources and claim limits are in [case-evidence.md](case-evidence.md).

- Build and diff checks passed. Cloudflare version `73a4967f-c68e-476a-a3e9-36373a176094` serves the update.
- Anonymous homepage, résumé, JS and CSS requests returned 200 and matched the build bytes. The old company names and fictional-sample labels are absent from the live bundle. Receipt: `release-20261012-real-results.json`.
- Browser: all three cases selected and displayed their matching content; each details button opened the correct list. Switching cases reset the disclosure. Home returned keyboard focus and selection to the first case; ArrowDown selected the next case on phone.
- Desktop client and scroll widths both equal 1265. At 390 × 844, both equal 375; case buttons are at least 57px tall. Phone navigation opened, followed the results link, and closed. No console warning or error entries. Viewport restored after testing.
- Existing webinar and public outbound links retain their exact destinations. The removed "Built around your actual role" link has zero matches.
- Public Try Me Now entry rendered; no generation or publication was initiated. Commercial numbers remain résumé-backed. Trade Ledger remains a private customer prototype, with no measured lift or production claim.

Screenshots: `review/20261012-real-results-desktop.jpg`, `review/20261012-trade-ledger-desktop.jpg`, and `review/20261012-real-results-mobile.jpg`. No job application or outreach was submitted.

## First 30 days, October 12, 2026

Changed the heading to "My first 30 days" and the three phases to days 1–7, 8–14, and 15–30. Updated the strategy note and added the `#plan` review anchor. Build and diff checks passed; Cloudflare version `9b070dae-ad84-46b0-a9f3-75a1dd1aa47f` serves the change. Anonymous HTML and JavaScript match the build; the old heading and date ranges are absent from the bundle. The public browser shows the new heading and all three ranges. Screenshot: `review/20261012-first-30-days.jpg`.
