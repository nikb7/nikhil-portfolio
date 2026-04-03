# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `pnpm dev` (runs at localhost:4312)
- **Build:** `pnpm build` (output in `dist/`)
- **Preview:** `pnpm preview`
- **Format:** `pnpm format` (Prettier with astro + tailwind plugins)

## Architecture

Astro 4 static portfolio site with React interactive components, Tailwind CSS, and shadcn/ui.

### Content System

Uses Astro Content Collections (`src/content/config.ts`) with four collections:
- **projects** — MDX files in `src/content/projects/`
- **experiences** — MDX files in `src/content/experiences/`
- **posts** — MDX files in `src/content/posts/`
- **books** — MDX files in `src/content/books/`

All profile/personal data lives in `src/content/profileData.ts` (exported as `PROFILE`).

### Component Layers

- **`src/components/sections/`** — Astro page sections (IntroCard, Projects, ExperienceCard, Contact, etc.)
- **`src/components/react/`** — Client-side interactive React components (ThemeToggle, TagsBarChart, WordCloud, NowTime)
- **`src/components/ui/`** — shadcn/ui primitives (button, card, badge, etc.). Add new ones via `npx shadcn-ui@latest add <component>`.
- **`src/components/`** — Shared Astro components (Card, Container, Header, Footer, HeadSEO)

### Layouts

`src/layouts/` — `BaseLayout` is the root. `IndexPageLayout` wraps the homepage. `TopLayout`/`BottomLayout` provide section wrappers. `MDXLayout` wraps content collection pages.

### Pages

`src/pages/` — File-based routing. Index page plus dynamic routes for `/projects/`, `/experiences/`, `/posts/`, `/books/`, and `/tags/`.

### Styling

- Tailwind with CSS variables for theming (dark mode via `class` strategy)
- Global styles in `src/styles/globals.css`
- Path alias: `@/*` maps to `./src/*`

### Deployment

Configured for both Vercel and Netlify (static output to `dist/`).
