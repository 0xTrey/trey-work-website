# Trey for Varick

Independent application page for Forward Deployed GTM Engineer at Varick Agents. Source, assets, and the tailored résumé are isolated in this module.

```bash
npm run dev:varick -- --port 5198
npm run build:varick
npm run preview:varick -- --port 5199
```

Build output: `dist-varick/`. Strategy and claim review: [strategy.md](strategy.md). Verification: [verification.md](verification.md).

The page uses Varick's published font families and color, with an original candidate layout and a blue adaptation of Trey's personal-site-v2 liquid field. It supports pause, reduced motion, a static WebGL fallback, keyboard-operated project and case tabs, and phone navigation. The results section covers Folloze's commercial record, the Trade Ledger customer prototype, and Try Me Now. Sources and claim limits are in [case-evidence.md](case-evidence.md). No API keys, tracking, external AI calls, or forms are included.

Fonts were downloaded from the font URLs in Varick's homepage on October 9, 2026. URLs, hashes, and attribution are in `asset-sources.json`; licenses are in `public/fonts/`. Switzer's license allows self-hosting on Trey's site but restricts redistribution. Its three font files are Git-ignored and fetched with hash checks before development or builds. Fragment Mono is included under its SIL license.

The résumé is generated from existing application materials:

```bash
python3 -m venv /tmp/varick-resume-venv
/tmp/varick-resume-venv/bin/pip install -r applications/varick/requirements-resume.txt
/tmp/varick-resume-venv/bin/python applications/varick/build_resume.py
```

Confirm current title, dates, metrics, and logistics before submission. Before submitting, add the verified application URL to the résumé. No relocation pledge is included.

## Release

Published for Trey review at [varick.trey.work](https://varick.trey.work/), Cloudflare Worker `trey-varick-application`. The October 12 first-30-days update is version `9b070dae-ad84-46b0-a9f3-75a1dd1aa47f`. Public files match the build; HTTP and browser receipts are in [verification.md](verification.md). Earlier releases remain in the verification history, including [the real-results receipt](release-20261012-real-results.json). No application or outreach was submitted. `noindex, nofollow` asks search engines not to index the review page.

For an approved update, run `env -u CLOUDFLARE_API_TOKEN npm run deploy:varick`. Verify public HTTPS, homepage, résumé, fonts, portrait, social image, and unknown-path 404. Check desktop and phone interactions against the public route. A successful local build does not establish live publication.

Implementation stayed in Codex: Cursor authentication was available, but fresh included-capacity and disabled-spending evidence was not established, so no Cursor assignment ran.
