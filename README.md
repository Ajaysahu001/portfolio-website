# Ajay Sahu — Portfolio Website

A modern, high-performance personal portfolio built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. Features dark/light mode, glassmorphism UI, scroll-based animations, and a fully functional contact form powered by Nodemailer.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Theme | next-themes |
| Email | Nodemailer + Gmail SMTP |
| Fonts | Inter, JetBrains Mono (Google Fonts) |

---

## Features

- **Animated Hero** — typewriter effect, particle field, 3D mouse-tracking tilt
- **Skills Section** — categorised tech stack with animated progress bars
- **Projects** — glassmorphism cards with individual slug-based pages (`/projects/[slug]`)
- **Experience & Education** — vertical timeline with scroll reveals
- **Contact Form** — sends email directly to your inbox via Gmail SMTP
- **Custom Cursor** — spring-following cursor ring (desktop only)
- **Scroll Progress Bar** — fixed top indicator
- **Dark / Light Mode** — persisted via `next-themes`
- **Full SEO** — metadata API, Open Graph, Twitter Card, JSON-LD structured data, sitemap, robots.txt
- **PWA Manifest** — installable on mobile/desktop
- **Security Headers** — HSTS, X-Frame-Options, CSP, Referrer-Policy

---

## Project Structure

```
├── app/
│   ├── api/contact/        # Contact form API route (Nodemailer)
│   ├── projects/[slug]/    # Dynamic project pages
│   ├── layout.tsx          # Root layout with metadata & providers
│   ├── page.tsx            # Home page (all sections)
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # robots.txt
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Skills, Projects, Experience, Contact
│   ├── seo/                # SchemaMarkup (JSON-LD)
│   └── ui/                 # CustomCursor, ScrollProgress, GlassCard, MagneticButton, SectionReveal, AnimatedText
└── lib/
    ├── data.ts             # All personal data (projects, skills, experience)
    └── seo.ts              # Site config & SEO helpers
```

---

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/Ajaysahu001/portfolio-website.git
cd portfolio-website
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root:

```env
GMAIL_USER=your.email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
GOOGLE_SITE_VERIFICATION=your_google_search_console_code
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

> **How to get a Gmail App Password:**
> 1. Enable **2-Step Verification** on your Google account
> 2. Go to **Google Account → Security → App passwords**
> 3. Generate a password for "Mail" and paste it above

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Customisation

All personal data lives in **`lib/data.ts`** — update your name, bio, skills, projects, and experience there. SEO config (site URL, title, keywords) is in **`lib/seo.ts`**.

---

## Deployment (Vercel)

```bash
npm run build   # verify the build passes locally first
```

Then push to GitHub and import the repo on [vercel.com](https://vercel.com). Add the environment variables from `.env.local` in the Vercel project settings.

---

## License

MIT — free to use and adapt for your own portfolio.
