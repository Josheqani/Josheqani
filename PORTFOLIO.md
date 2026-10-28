# Personal Portfolio

A fast, semantic, and pixel-perfect personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

Featuring smooth animations, responsive typography, custom design tokens, and a clean data-driven architecture.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router, Server Components by default)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS (configured with CSS variables and semantic design tokens)
- **Typography:** Bricolage Grotesque (display headings) & Newsreader (body text) loaded via `next/font/google`
- **Smooth Scroll:** Lenis (`ReactLenis`) with `lerp: 0.1`, anchor navigation support, and `prefers-reduced-motion` detection

---

## 📁 Project Architecture (`src/`)

All source code is structured with separation of concerns and kebab-case file naming:

```
src/
├── app/                  # Next.js App Router & core styling
│   ├── globals.css       # Design tokens, theme variables, and global resets
│   ├── layout.tsx        # Root HTML shell, Google Fonts, and SEO metadata
│   └── page.tsx          # Main page assembling all sections inside Container
├── components/
│   ├── layout/           # Structural layout wrappers
│   │   ├── container.tsx              # Max width (1100px) and fluid padding clamp(20px, 5vw, 64px)
│   │   ├── section.tsx                # Standard section wrapper with border-top & fluid padding
│   │   ├── site-header.tsx            # Top header, site title, and navigation links
│   │   ├── site-footer.tsx            # Bottom footer with dynamic copyright
│   │   └── smooth-scroll-provider.tsx # Client-side Lenis smooth scroll provider
│   ├── ui/               # Reusable presentation primitives
│   │   ├── fact-item.tsx         # Single label/value item
│   │   ├── fact-list.tsx         # List container for facts
│   │   ├── photo-placeholder.tsx # Dashed box placeholder with responsive aspect ratio
│   │   ├── project-row.tsx       # Project row (year, title, description, hover states)
│   │   ├── section-heading.tsx   # Section h2 with optional subtitle
│   │   ├── status-badge.tsx      # Live pulsing dot status badge
│   │   └── text-link.tsx         # Underlined and bordered link variants
│   └── sections/         # Full-width page sections
│       ├── hero-section.tsx      # Main headline, lede paragraph, and status badge
│       ├── work-section.tsx      # Selected work list
│       ├── about-section.tsx     # Bio paragraphs, photo placeholder, and facts
│       └── contact-section.tsx   # Contact heading, email link, and social links
├── data/                 # Typed content objects (zero hardcoded copy in components)
│   ├── about.ts          # About paragraphs, facts, and photo label
│   ├── contact.ts        # Email and social media links
│   ├── footer.ts         # Footer copyright configuration
│   ├── hero.ts           # Headline lines, lede copy, and status
│   ├── projects.ts       # Array of selected projects
│   └── site-config.ts    # Site name, metadata, and navigation items
├── lib/
│   └── cn.ts             # Lightweight zero-dependency className helper
└── types/                # TypeScript type definitions
```

---

## 📝 Content Management

All copy and content is decoupled from UI components:

### 1. Adding a Project (`src/data/projects.ts`)
Add a new object to the `workData.projects` array:

```ts
{
  year: "2026",
  title: "Project Title",
  description: "Brief summary of what was designed, built, and shipped.",
  href: "https://...",
}
```

### 2. Editing Bio & Facts (`src/data/about.ts`)
Update paragraphs and personal facts (tools, languages, availability, location) directly in this file.

### 3. Environment Variables (`.env.local`)
Configure site identity, headings, and contact links via `.env.local`:

```env
# Site Identity
NEXT_PUBLIC_SITE_NAME="Ali Josheqani"
NEXT_PUBLIC_SITE_TITLE="Ali Josheqani"
NEXT_PUBLIC_SITE_DESCRIPTION="Product designer and front-end developer portfolio."

# Hero Section
NEXT_PUBLIC_HERO_FIRST_NAME="Ali"
NEXT_PUBLIC_HERO_LAST_NAME="Josheqani"
NEXT_PUBLIC_HERO_STATUS="Building a budgeting app for freelancers"

# Contact Info
NEXT_PUBLIC_CONTACT_EMAIL="hello@example.com"
NEXT_PUBLIC_GITHUB_URL="https://github.com/ali-Josheqani"
NEXT_PUBLIC_INSTAGRAM_URL="#"
NEXT_PUBLIC_LINKEDIN_URL="#"

# Footer
NEXT_PUBLIC_FOOTER_COPYRIGHT="© 2026 Ali Josheqani"
```

---

## 🎨 Design Tokens (`src/app/globals.css`)

Colors, spacing, and typography are defined as semantic tokens:
- **Background:** `--background: #0E0F12`
- **Text:** `--text: #F2F0EA`
- **Accent (Lime):** `--accent: #C8F135`
- **Soft Text:** `--text-soft: #C9C7C0`
- **Muted Text:** `--text-muted: #8A8D93`
- **Border:** `--border: #2A2D33`
- **Row Hover:** `--row-hover: #171A1F`

---

## 💻 Development & Build

```bash
# Start local development server
npm run dev

# Type check & lint
npm run lint
npx tsc --noEmit

# Production build
npm run build

# Start production server
npm start
```
