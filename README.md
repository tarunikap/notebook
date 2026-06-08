# Notebooks — Your Personal Writing Website

A minimal, literary personal writing website built with Next.js, TypeScript, and Tailwind CSS. Feels like opening someone's notebook — warm, elegant, distraction-free.

---

## ✦ What's inside

- **Homepage** with a responsive card grid — title + hook only, no dates or social cruft
- **Beautiful reading pages** with serif typography, comfortable line length, dark/light mode
- **Search** (fuzzy, via Fuse.js) and **tag filtering**
- **Previous / Next** navigation between writings
- **Decap CMS** admin panel for writing without touching code
- **404 page** with character
- Statically generated — fast everywhere, deployable to Vercel or Netlify

---

## ✦ Getting started (local development)

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Build for production

```bash
npm run build
```

---

## ✦ Adding a new writing (the easy way)

### Option A: Through the CMS admin panel

1. Deploy to Netlify (see below)
2. Enable **Netlify Identity** in your Netlify dashboard
3. Enable **Git Gateway** under Identity settings
4. Visit `your-site.netlify.app/admin/`
5. Log in → click **New Writing**
6. Fill in: Title, Hook, Tags, Body
7. Click **Publish** — the site rebuilds automatically

### Option B: Manually (just a Markdown file)

Create a new `.md` file in `content/writings/`:

```
content/writings/your-title-here.md
```

Use this frontmatter at the top:

```markdown
---
title: Your Title Here
hook: A short 1–2 line teaser shown on the homepage card.
tags:
  - essays
  - memories
date: 2024-06-15
---

Your writing starts here.

You can use **bold**, *italics*, headings, blockquotes — standard Markdown.

---

A horizontal rule (---) becomes a decorative · · · divider on the page.
```

**Slug rules:**
- The filename becomes the URL: `rainy-day.md` → `/writing/rainy-day/`
- Use lowercase, hyphens instead of spaces, no special characters

**That's it.** When you `git push`, the site rebuilds and your writing appears.

---

## ✦ Frontmatter reference

| Field  | Required | Description |
|--------|----------|-------------|
| `title` | Yes | The title of your writing |
| `hook`  | Yes | 1–2 line teaser shown on the homepage card |
| `tags`  | No  | List of tags for filtering (e.g. `memories`, `essays`) |
| `date`  | No  | Used to sort writings newest-first (format: `YYYY-MM-DD`) |

---

## ✦ Customising the site name

Open `src/app/page.tsx` and `src/components/Header.tsx` and change `"Notebooks"` to whatever you'd like your site to be called.

---

## ✦ Deploying to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Leave all settings as default — Vercel detects Next.js automatically
4. Click Deploy

**Note:** The Decap CMS admin panel requires Netlify Identity, so if you deploy to Vercel, use the manual Markdown workflow for adding writings.

---

## ✦ Deploying to Netlify (recommended for CMS)

1. Push this project to GitHub
2. Go to [netlify.com](https://netlify.com) and import the repo
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy

**To enable the CMS admin panel:**

1. In Netlify dashboard → **Site settings** → **Identity** → Enable
2. Scroll to **Git Gateway** → Enable
3. Under **Registration** → Set to **Invite only**
4. **Identity** → **Invite users** → Invite yourself
5. Check your email and accept the invite
6. Visit `your-site.netlify.app/admin/` and log in

---

## ✦ Project structure

```
writing-site/
├── content/
│   └── writings/          ← All your Markdown files go here
│       └── *.md
├── public/
│   └── admin/
│       ├── index.html     ← Decap CMS admin page
│       └── config.yml     ← CMS configuration
├── src/
│   ├── app/
│   │   ├── layout.tsx     ← Root layout + theme provider
│   │   ├── page.tsx       ← Homepage
│   │   ├── not-found.tsx  ← 404 page
│   │   └── writing/
│   │       └── [slug]/
│   │           └── page.tsx  ← Individual writing page
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── WritingCard.tsx
│   │   ├── WritingContent.tsx
│   │   └── WritingsGrid.tsx
│   ├── lib/
│   │   └── writings.ts    ← Markdown reading utilities
│   └── styles/
│       └── globals.css
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## ✦ Typography & design notes

- **Headings, body text:** Lora (serif) — warm, literary, timeless
- **UI elements, labels:** Jost (sans-serif) — clean and unobtrusive
- **Color palette:** Parchment and ink tones — no pure blacks or whites
- **Dark mode:** Deep warm darks, not cold grey
- **Hover effects:** Subtle lift on cards, no flash or jitter
- All writings render in a `max-w-2xl` reading column — roughly 65 characters per line, optimal for reading

---

## ✦ Dependencies

| Package | Purpose |
|---------|---------|
| `next` | Framework |
| `react-markdown` | Renders Markdown to HTML |
| `gray-matter` | Parses frontmatter from `.md` files |
| `next-themes` | Dark/light mode toggle |
| `fuse.js` | Fuzzy search |
| `remark-gfm` | GitHub Flavored Markdown support |
| `@tailwindcss/typography` | Prose styling |

---

*Built to hold thoughts quietly.*
