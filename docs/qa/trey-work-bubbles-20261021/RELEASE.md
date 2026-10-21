# trey.work release

Published October 21, 2026, after Trey's instruction to publish the reviewed local preview.

- Source commit: `fb4d338bd2494ea31a73c30a6411c3f4fbbed2f6`, pushed to GitHub `main` and `codex/trey-work-bubble-preview`.
- Cloudflare Pages project: `trey-work-website`, production branch `main`.
- Production deployment readback: `6c027773-d207-4ba2-aabe-bae371808bc3`, source `fb4d338`.
- Immutable URL: https://6c027773.trey-work-website.pages.dev/
- Public URLs: https://trey.work/ and https://www.trey.work/
- Previous production deployment: `c7b63733-8b67-48b1-b3a5-44df473f133e`.

Release command, after `npm run build`:

```sh
env -u CLOUDFLARE_API_TOKEN wrangler pages deploy dist --project-name trey-work-website --branch main --commit-hash fb4d338bd2494ea31a73c30a6411c3f4fbbed2f6 --commit-message "Publish trey.work liquid bubble design" --commit-dirty=true
```

The dirty marker reflects unrelated untracked ServiceNow application material. It was not staged, pushed, or included in the `dist` upload. The reviewed source was unchanged.

Both public homepages and the immutable deployment returned HTTP 200 and matched the local build byte for byte. Public JavaScript, CSS, portrait, and résumé also returned HTTP 200 with matching hashes. See `release-http.json`.

Live browser checks confirmed the heading, portrait, bubbles, and pause/resume control. Mobile at 390 × 844 had client and scroll widths of 390, with the full opening visible. Desktop had client and scroll widths of 1088. No warning or error logs were captured. Test viewport overrides were cleared and motion was restored. See `release-browser.json`, `release-desktop.png`, and `release-mobile.png`. The tab-specific mobile emulation resolved a stale render during browser-wide viewport testing.

`release-sha256.json` records receipt integrity. The initial preview's `sha256.json` still records the reviewed source hashes.

For rollback, open the [project's deployment history](https://dash.cloudflare.com/5ae04bdc2cf2396a20be8415895e70ef/pages/view/trey-work-website), select the previous production deployment above, and use Rollback to this deployment. Repeat the public URL and asset checks after any rollback.

This release changed the root trey.work site. The personal-site and application-specific deployments were outside its scope.
