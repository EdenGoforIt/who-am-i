# Portfolio Site — Implementation Plan

Reference: https://shreyas-viswanathan-portfolio.vercel.app/

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (with CSS variables for design tokens)
- **Animations**: Framer Motion
- **Hosting**: Vercel (free tier)
- **No database** — all content is static data in the codebase

---

## Theme — Dark Navy + Mint Green

Replicating the visual language of the reference site.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--navy` | `#0a192f` | Main background |
| `--navy-dark` | `#020c1b` | Darkest elements |
| `--navy-light` | `#112240` | Card / secondary backgrounds |
| `--navy-lightest` | `#233554` | Borders, accents |
| `--green` | `#64ffda` | Primary accent (links, CTA, highlights) |
| `--green-tint` | `rgba(100,255,218,0.1)` | Hover backgrounds |
| `--slate` | `#8892b0` | Body text |
| `--slate-light` | `#a8b2d1` | Secondary text |
| `--slate-lighter` | `#ccd6f6` | Headings |
| `--white` | `#e6f1ff` | Bright text |

### Typography

- **Sans-serif**: Calibre → Inter → SF Pro Text → system-ui
- **Monospace**: SF Mono → Fira Code → Roboto Mono (numbered labels, code snippets)
- **Body**: 20px desktop / 18px mobile
- **Headings**: `clamp()` scaling from 26px → 80px
- **Weights**: 400 / 500 / 600

### Layout & Spacing

- Container max-width: `1600px`
- Horizontal padding: `150px` (desktop) → `25px` (mobile)
- Section vertical padding: `100px` → `60px` (mobile)

### Navigation

- Fixed top bar, height `100px` → shrinks to `70px` on scroll
- Logo in `--green`, links in `--slate-lighter` with green hover underline

### Cards & Elements

- Border radius: `4px`
- Card background: `--navy-light` (`#112240`)
- Featured items: green left-border accent
- Focus ring: dashed `--green`, `3px` offset

### Animations

- Easing: `cubic-bezier(0.645, 0.045, 0.355, 1)`
- Duration: `0.25s` standard / `0.3s` fades
- Entrance pattern: `translateY(20px) → 0` + `opacity: 0 → 1`
- Scroll: smooth scrolling enabled

---

## Project Structure

> Config files (`package.json`, `next.config.ts`, etc.) and `public/` must live at the repo root
> — this is a Next.js/Node hard requirement.

```
who-am-i/
├── app/                        # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── nav.tsx
│   ├── hero.tsx
│   ├── about.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   ├── experience.tsx
│   └── contact.tsx
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
├── public/                     # Next.js requirement: must be at root
│   ├── photo.jpg
│   └── projects/
├── docs/
│   ├── requirements.md
│   └── plan.md
├── README.md
├── .gitignore
├── package.json
├── next.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

---

## Practices & Conventions

### File Naming — Kebab Case (enforced)

All files use **kebab-case**. No exceptions.

| Type | Example |
|---|---|
| Components | `hero.tsx`, `project-card.tsx`, `section-heading.tsx` |
| Data files | `projects.ts`, `work-experience.ts`, `tech-skills.ts` |
| Utilities | `smooth-scroll.ts`, `use-scroll-spy.ts` |
| CSS | `globals.css` |

> Next.js reserved files (`page.tsx`, `layout.tsx`, `error.tsx`, `loading.tsx`) are already lowercase by convention.

### React Best Practices

- **Server components by default** — only add `'use client'` when you need interactivity (hooks, event handlers, browser APIs)
- **Small, focused components** — if a component is doing too much, split it
- **No inline styles** — use Tailwind classes or CSS variables only
- **No magic numbers** — use CSS vars (`--green`, `--navy-light`) for all theme values
- **TypeScript everywhere** — always type props with an `interface`, never use `any`
- **Explicit return types** — all components return `JSX.Element` or `React.ReactNode`
- **Props interface at top of file** — define before the component, e.g. `interface HeroProps { ... }`

### Next.js Best Practices

- **`next/image`** for every image — never use a raw `<img>` tag
- **`next/link`** for all internal navigation
- **Metadata API** in `layout.tsx` for SEO (`title`, `description`, `og:image`)
- **`next/font`** to load fonts — no external font `<link>` tags in HTML
- **Static data in `data/`** — import into page/components at build time (no `fetch` calls needed)
- **No `useEffect` for data** — all content is static, no client-side fetching

### CSS / Tailwind Practices

- **CSS variables for theme tokens** — defined in `globals.css` under `@theme`, used everywhere
- **Tailwind utility classes** for layout and spacing
- **No `style` prop** on JSX elements
- **Responsive with Tailwind breakpoints**: `md:`, `lg:` (mobile-first)

### TypeScript Practices

- Use `interface` for props and data shapes (not `type`)
- Use `const` over `let` everywhere possible
- Export types from `data/` files so components can import them

---

## Phases

### Phase 1 — Scaffold
- [ ] Create `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`
- [ ] Create `app/globals.css` with CSS variables (theme tokens)
- [ ] Create `app/layout.tsx` with Inter + Fira Code fonts and metadata
- [ ] Create `app/page.tsx` placeholder

### Phase 2 — Static Data
- [ ] Create `data/projects.ts`
- [ ] Create `data/skills.ts`
- [ ] Create `data/experience.ts`

### Phase 3 — Sections (in order)
- [ ] `components/nav.tsx` — fixed top bar, shrinks on scroll, smooth-scroll links
- [ ] `components/hero.tsx` — name, role, tagline, photo, CTA buttons
- [ ] `components/about.tsx` — bio, values, personal story
- [ ] `components/projects.tsx` — cards with screenshot, description, tech chips, links
- [ ] `components/skills.tsx` — grouped by technical / tools / soft skills
- [ ] `components/experience.tsx` — timeline of work history and education
- [ ] `components/contact.tsx` — email link + social icons (LinkedIn, GitHub)

### Phase 4 — Polish
- [ ] Framer Motion entrance animations on all sections
- [ ] Responsive layout (mobile-first Tailwind breakpoints)
- [ ] Active nav link highlighting on scroll
- [ ] Optimized images via `next/image`
- [ ] Accessibility: alt text, contrast, keyboard nav, focus rings

### Phase 5 — Deploy
- [ ] Push to GitHub
- [ ] Connect repo to Vercel
- [ ] Set custom domain (optional)

---

## Optional Enhancements (post-launch)
- Dark/light mode toggle
- Downloadable CV (PDF link)
- Blog section
- Testimonials

---

## Key Decisions

| Decision | Choice | Reason |
|---|---|---|
| Single page vs multi-page | Single page | Simpler, faster, suits portfolios |
| CMS vs static data | Static `.ts` files | No DB needed, easy to edit |
| CSS approach | Tailwind v4 + CSS vars | Utility-first + theme tokens |
| File naming | kebab-case | Consistent, cross-OS safe |
| Animation library | Framer Motion | Simple API, lightweight |
| Deployment | Vercel | Native Next.js support, free |
