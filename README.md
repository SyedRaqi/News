# DAILY VIEW

A cinematic editorial news experience built with React, Vite, React Router, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/data/news.js`: local story and live-update data
- `src/services/newsService.js`: API-ready data access helpers
- `src/App.jsx`: routing, shared shell, pages, and reusable story primitives
- `src/App.css`: responsive editorial design system
- `src/index.css`: fonts, theme tokens, and base styles

## Live news connection

Copy `.env.example` to `.env` and set `VITE_NEWS_API_URL` to a backend or news proxy endpoint. The endpoint may return an array of articles or an object containing `articles` or `data`. Without the variable, or if the request fails, the app uses the local stories automatically.

## Deployment

Deploy the `dist` directory to Netlify or Vercel, or use GitHub Pages with a Vite-compatible static hosting workflow. Configure SPA rewrites so routes fall back to `index.html`.
