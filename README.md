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

The application build writes to `dist-openrouter/`, including the linked essay at `/perspective/`. That folder is suitable for a separate static hosting project with `openrouter.trey.work` as its custom domain after the page is approved. No DNS or live hosting change is part of this draft.

The OpenRouter page links to a one-page Enterprise AE résumé at `public/resume/Trey-Harnden-OpenRouter-Enterprise-AE.pdf`. Its editable source is `applications/openrouter/build_resume.py`; regenerate it with a Python environment that has ReportLab installed:

```bash
python3 applications/openrouter/build_resume.py
```

The earlier June 2026 PDF remains available for the root site. Confirm the exact current Folloze title and all résumé claims with Trey before using the OpenRouter PDF in a submitted application.

The public design reference is captured in `research/brand-harvest/openrouter-home/` and `research/brand-harvest/openrouter-careers/`. The page translates OpenRouter's dark, lime-accented visual language into an independent candidate site. It uses OpenRouter's published wordmark with attribution in the footer.

Content sources: OpenRouter's current [Enterprise Account Executive](https://jobs.ashbyhq.com/openrouter/34db850d-579f-4b4c-9827-76bc712b1a41) and [Account Executive](https://jobs.ashbyhq.com/openrouter/22d85a56-5500-40a5-9913-c98558d77f41) postings; the existing public résumé content in this repository; the public project links on the page; and Trey's application brief. The timeline uses [OpenAI's November 30, 2022 ChatGPT announcement](https://openai.com/index/chatgpt/) and [Replit's September 2024 Agent announcement](https://replit.com/blog/introducing-replit-agent) for launch timing. Trey's same-day signup and Agent use, the 2020 and 2023 milestones, and the March 2026 routing milestone are his account and should be confirmed before publication. The Trade Ledger entry reflects the fall 2024 prototype described in his Replit application materials. The private LLM gateway's first local commit was February 12, 2026.

The timeline groups related events into seven stages. Its 2025 stage uses first local commits in Trey's fasting tracker (January 22) and PNW Snow Tracker (February 8), plus [Anthropic's February 24, 2025 introduction of Claude Code](https://www.anthropic.com/news/claude-3-7-sonnet). Trey's launch-week Claude Code use, Gauntlet AI acceptance in June, early company-brain work with custom GPTs and ChatGPT Projects, and December Clawdbot use are his account and should be confirmed before publication. The early company-brain milestone does not claim that the later formal pilot existed in 2025.

The `/perspective/` essay is a sourced, locally reviewable rewrite of Trey's private Notion draft, "AI in the Enterprise." It presents company-controlled harnesses as Trey's thesis and compares external APIs, rented capacity, and owned inference hardware by workload. Product capabilities and the Optimizely case are linked to primary sources in the essay. Optimizely's figures are vendor-reported, its two published benchmark score sets differ, and a public Mark-Bench repository or independent replication was not located on September 22, 2026. The Notion draft has not been changed.

GitHub blocks third-party iframes. The application uses GitHub's public repository API to show an up-to-date repository list, falls back to a small curated list if the API is unavailable, and links to the full profile. The contribution screenshot is a dated user-provided capture.
