# Varick application verification

Observed October 9, 2026, on Trey's Mac. Local review build only.

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

No application submission, outreach, remote push, or live deployment occurred.
