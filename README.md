This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This is a portfolio template rebuilt from the JT Portfolio 2026 Figma design (file key `FhZ25uVaHVNlxALp6Hq16o`, nodes Desktop 1:84, Tablet 1:134, Mobile 1:184). Design tokens (colors, typography) come from Figma MCP `get_variable_defs`; fonts are Staatliches and Jaro (Google Fonts).

**Assets:** Place hero and section images in `public/images/`. Decap CMS uploads go to `public/images/uploads/`.

## Content (Decap CMS)

Content is edited with [Decap CMS](https://decapcms.org/) (git-based). All content lives in this repo under `content/` (Markdown + frontmatter and `global.json`).

- **Admin UI:** Open `https://your-site.com/admin` (or `http://localhost:3000/admin` in dev). You’ll log in with GitHub (or GitLab).
- **Setup:** In `public/admin/config.yml`, set `backend.repo` to your Git repo (e.g. `owner/repo`) and `backend.branch` to your default branch (e.g. `main`). For GitHub auth in production, use [Decap’s GitHub backend](https://decapcms.org/docs/github-backend/) (OAuth app or Netlify Identity / Git Gateway). For local-only editing, you can use the [Proxy backend](https://decapcms.org/docs/proxy-backend/) with a small local server.
- **What’s editable:** Global (site name, nav, meta), Home, About, Contact, and Projects. Projects use a markdown body for the case study description. Saving in Decap creates a commit in the repo; your host (Vercel/Netlify) rebuilds on push so changes go live.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
