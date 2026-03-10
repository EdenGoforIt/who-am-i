# Portfolio Site — Implementation Plan

Reference: https://shreyas-viswanathan-portfolio.vercel.app/

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (with CSS variables for the design tokens)
- **Animations**: Framer Motion (lightweight)
- **Hosting**: Vercel (free tier)
- **No database** — all content is static data in the codebase

---

## Theme — Shreyas Viswanathan Style (Dark Navy + Mint Green)

Replicating the exact visual language of the reference site.

### Colors
| Token | Value | Usage |
|---|---|---|
| \ | \ | Main background |
| \ | \ | Darkest elements |
| \ | \ | Card / secondary backgrounds |
| \ | \ | Borders, accents |
| \ | \ | Primary accent (links, highlights, CTA) |
| \ | \ | Hover backgrounds |
| \ | \ | Body text |
| \ | \ | Secondary text |
| \ | \ | Headings |
| \ | \ | Bright text |

### Typography
- **Sans-serif**: Calibre -> Inter -> SF Pro Text -> system-ui
- **Monospace**: SF Mono -> Fira Code -> Roboto Mono (used for numbered labels, code)
- **Body size**: 20px desktop / 18px mobile
- **Heading size**: clamp scaling (26px -> 80px)
- **Weights**: 400 / 500 / 600

### Layout
- Max width: \, horizontal padding \ -> \ (mobile)
- Section padding: \ vertical -> \ (mobile)

### Animation
- Easing: - Duration: \ standard, \ fades
- Pattern: \ + \ on enter

### Navigation
- Fixed top bar, height \ -> shrinks to \ on scroll
- Logo in \, nav links in \ with green hover

### Cards / Elements
- Border radius: - Card background: \ (\)
- Green left-border accent on featured items
- Focus ring: dashed green, \ offset

---

## Project Structure

```
who-am-i/
├── app/
│   ├── layout.tsx          # Root layout (font, metadata)
│   ├── page.tsx            # Single-page shell (renders all sections)
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
├── data/
│   ├── projects.ts         # Project list (title, desc, tech, links)
│   ├── skills.ts           # Skills + tools
│   └── experience.ts       # Work history / education
├── public/
│   ├── photo.jpg           # Profile photo
│   └── projects/           # Project screenshots
└── docs/
    ├── requirements.md
    └── plan.md
```

---

## Phases

### Phase 1 — Scaffold
- [ ] `npx create-next-app@latest` with TypeScript + Tailwind
- [ ] Clean out boilerplate
- [ ] Set up root layout with font and basic metadata

### Phase 2 — Static Data
- [ ] Populate `data/projects.ts`
- [ ] Populate `data/skills.ts`
- [ ] Populate `data/experience.ts`

### Phase 3 — Sections (in order)
- [ ] `Hero` — name, role, tagline, photo, CTA buttons
- [ ] `About` — bio, values, personal story
- [ ] `Projects` — cards with screenshot, description, tech chips, links
- [ ] `Skills` — grouped by technical / tools / soft skills
- [ ] `Experience` — timeline of work history and education
- [ ] `Contact` — email link + social icons (LinkedIn, GitHub)

### Phase 4 — Polish
- [ ] Responsive layout (mobile-first with Tailwind breakpoints)
- [ ] Smooth scroll navigation with active link highlighting
- [ ] Subtle Framer Motion entrance animations
- [ ] Optimized images via `next/image`
- [ ] Accessibility: alt text, contrast, keyboard nav

### Phase 5 — Deploy
- [ ] Push to GitHub
- [ ] Connect repo to Vercel
- [ ] Set custom domain (optional)

---

## Optional Enhancements (post-launch)
- Dark mode toggle
- Downloadable CV (PDF link)
- Blog section
- Testimonials

---

## Key Decisions

| Decision | Choice | Reason |
|---|---|---|
| Single page vs multi-page | Single page | Simpler, faster, suits portfolios |
| CMS vs static data | Static `.ts` files | No DB needed, easy to edit |
| CSS approach | Tailwind | Utility-first, no extra config |
| Animation library | Framer Motion | Simple API, lightweight |
| Deployment | Vercel | Native Next.js support, free |
