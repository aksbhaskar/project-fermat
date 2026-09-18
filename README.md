# Project Fermat

Landing site for **Project Fermat** — a student-led initiative making mathematics
more accessible, engaging and rigorous for students from underserved communities.

## Stack

Static HTML/CSS — no build step, no framework. Everything lives in `index.html`
(styles inline in a single `<style>` block, ~30 lines of vanilla JS at the bottom).

Type: Fraunces (display) · Space Grotesk (text) · IBM Plex Mono (labels), via Google Fonts.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Before this goes live

Two placeholders need real values — both marked with `TODO` comments in `index.html`:

- `[data-apply]` — the volunteer application form URL (currently `#`)
- `[data-contact]` — the contact address (currently `hello@projectfermat.org`)

## Deploy

Pushing to `main` auto-deploys via the Vercel GitHub integration →
[projectfermat.vercel.app](https://projectfermat.vercel.app)
