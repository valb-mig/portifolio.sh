# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install      # Install dependencies
pnpm dev          # Start dev server at http://localhost:3000
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # ESLint via next/core-web-vitals
```

No test framework is configured.

## Environment

Requires a `.env.local` file:

```
WAKATIME_API_KEY=<base64-encoded key>
NEXT_PUBLIC_WPP=<whatsapp number, e.g. 5581999999999>
```

## Architecture

Single-page bilingual (PT/EN) portfolio built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**. Deployed to Vercel.

### Key files

- `src/app/page.tsx` — Heart of the app (~740 lines). Contains all section content, PT/EN translation strings, and the top-level page structure. All content changes happen here.
- `src/app/layout.tsx` — Root layout: fonts (JetBrains Mono + Inter), global metadata.
- `src/app/api/wakatime/route.ts` — Server-side proxy for WakaTime API (Basic Auth + 1-hour cache header).
- `src/components/ui/GitActivity.tsx` — Client component that fetches GitHub activity (repos, latest commits, today's commit count) and WakaTime stats via the internal API route.
- `public/css/globals.css` — Terminal aesthetic: custom scrollbar, keyframe animations.

### Component structure

```
components/
├── layout/
│   ├── Header.tsx       Navigation + social links
│   ├── Footer.tsx
│   ├── Section.tsx      Section wrapper with animated decorations
│   └── TechIcon.tsx     Maps tech name → SVG icon
└── ui/
    ├── GitActivity.tsx  GitHub + WakaTime live stats
    ├── Badge.tsx
    ├── Button.tsx
    ├── CardLink.tsx
    ├── LanguageCard.tsx
    ├── LanguageTag.tsx
    ├── Title.tsx
    └── Subtitle.tsx
```

### Path aliases (tsconfig)

| Alias | Resolves to |
|-------|------------|
| `@/*` | `src/*` |
| `#/*` | `public/*` |
| `layout/*` | `src/components/layout/*` |
| `ui/*` | `src/components/ui/*` |

### Data flow

1. **GitHub activity**: `GitActivity.tsx` calls the GitHub REST API directly from the client — fetches user repos, latest commit per repo, and filters commits by `author.date` for today's count.
2. **WakaTime stats**: `GitActivity.tsx` calls `/api/wakatime`, which proxies the WakaTime API with Basic Auth credentials from `WAKATIME_API_KEY`.

### Styling conventions

- Tailwind dark mode is enabled by default (no toggle).
- `sm:hidden` / `hidden sm:block` patterns are used throughout for mobile responsiveness.
- Tech icons are SVGs stored in `public/assets/tech/` and mapped by name in `TechIcon.tsx`.
