# Emmanuel Chiefson: portfolio

Personal portfolio for digital delivery and business analysis roles. Every claim on the site carries an evidence status (Verified, Built, In progress) and, where one exists, a link to the proof.

## Stack

React 18, Vite, TypeScript, Tailwind CSS, React Router. Deployed on Vercel as a static single-page app (`vercel.json` rewrites routes to `index.html`).

## Where things live

- `DESIGN.md`: the design system. Read it before changing anything visual.
- `src/data/site.ts`: all content and evidence statuses. Edit copy here, not in components.
- `src/index.css`: design tokens (light and dark) as CSS variables.
- `src/components/site/`: page sections.
- `src/pages/`: home, case study and 404 pages.

## Run it

```bash
npm install
npm run dev       # http://localhost:8080
npm run build     # production build in dist/
```

## Before each deploy

Run the acceptance checklist in `DESIGN.md` section 15: fact-check every claim against the current master CV, check contrast and keyboard focus, check a 360px-wide screen for sideways scrolling, and update `LAST_UPDATED` in `src/data/site.ts`.
