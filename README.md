# trey.work website repo

Root resume website and application-site index for `trey.work`.

This repo is intended to hold the baseline public resume site for Trey Harnden and act as the parent site for role-specific subdomains such as:

- `zapier.trey.work`
- `replit.trey.work`
- `anthropic.trey.work`
- `openrouter.trey.work`

## Current content model

- Resume homepage for AI-native customer-facing GTM roles.
- Downloadable current resume: `public/resume/Trey-Harnden-Resume-June-2026.pdf`.
- Headshot assets in `public/images`.
- GTM engineering portfolio section.
- Application-site network section.
- Links section for LinkedIn, GitHub, public journal, X, and `treyharnden.com`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## OpenRouter application draft

The Enterprise Account Executive application lives in `applications/openrouter/`. It has its own Vite entry point, so the root résumé site and the application can be built separately.

```bash
npm run dev:openrouter
npm run build:openrouter
npm run preview:openrouter
```

The application build writes to `dist-openrouter/`. That folder is suitable for a separate static hosting project with `openrouter.trey.work` as its custom domain after the page is approved. No DNS or live hosting change is part of this draft.

The public design reference is captured in `research/brand-harvest/openrouter-home/` and `research/brand-harvest/openrouter-careers/`. The page translates OpenRouter's dark, lime-accented visual language into an independent candidate site. It uses OpenRouter's published wordmark with attribution in the footer.

Content sources: OpenRouter's current [Enterprise Account Executive](https://jobs.ashbyhq.com/openrouter/34db850d-579f-4b4c-9827-76bc712b1a41) and [Account Executive](https://jobs.ashbyhq.com/openrouter/22d85a56-5500-40a5-9913-c98558d77f41) postings; the existing public résumé content in this repository; the public project links on the page; and Trey's application brief. The private LLM gateway's first local commit was February 12, 2026. The June and November 2020 milestones came from Trey's brief and should be confirmed before publication.

GitHub blocks third-party iframes. The application uses GitHub's public repository API to show an up-to-date repository list, falls back to a small curated list if the API is unavailable, and links to the full profile. The contribution screenshot is a dated user-provided capture.
