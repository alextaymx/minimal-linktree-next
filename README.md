# Minimal Link-in-bio (Next.js + Tailwind)

A minimalist, mobile-friendly profile page (Linktree-style) with:
- Profile + company
- Contact (email/phone/location/website)
- Social links

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Customize

Edit **`lib/profile.ts`**.

## Add Magic UI components (optional)

1. Install shadcn/ui (Magic UI components are compatible with Tailwind + shadcn conventions):

```bash
npx shadcn@latest init
```

2. Add components you want (e.g. button/card):

```bash
npx shadcn@latest add button card avatar
```

3. Copy a component from https://magicui.design and replace the link/button UI in `components/social-link.tsx`.

## Deploy

- Vercel: import the repo and deploy.
- Any Node host: `npm run build` then `npm start`.
