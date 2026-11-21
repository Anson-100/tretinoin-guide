# Tretinoin Guide

A simple, informational landing page about tretinoin as the base of a skincare routine: benefits, drawbacks, a simple routine, and doctor videos.

**For informational purposes only. Not medical advice.**

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Motion (formerly Framer Motion) for scroll-in animations
- Native CSS smooth scrolling for in-page links

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
src/
├── app/
│   ├── layout.tsx        # root layout, font, metadata
│   ├── page.tsx          # composes the scenes
│   └── globals.css       # Tailwind import, theme, smooth scroll
├── components/
│   ├── Button.tsx        # shared button / link button
│   ├── FadeIn.tsx        # Motion wrapper for scroll-in animations
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── scenes/           # one component per landing-page scene
│       ├── Hero.tsx
│       ├── Information.tsx
│       ├── Videos.tsx
│       └── Conclusion.tsx
└── data/
    └── videos.ts         # doctor videos (add YouTube IDs here)
```

## Adding videos

Edit `src/data/videos.ts`. Each entry takes a YouTube video ID (the part after `v=` in the URL). Entries without an ID render as placeholders.

## Deploy

Import the repo in Vercel. It auto-detects Next.js — no config needed.
