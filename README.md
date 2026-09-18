# Project Fermat

Site for **Project Fermat** — a volunteer initiative helping middle school students
(Classes 6–8) build a foundation in olympiad mathematics, from SOF IMO and NMTC
toward IOQM and RMO.

## Stack

Static HTML/CSS — no build step, no framework, no dependencies.

| File | |
|---|---|
| `index.html` | Home — hero, what we do, volunteer roles and contact |
| `mission.html` | Mission |
| `founders.html` | Founders |
| `404.html` | Not found |
| `styles.css` | All styles, shared by every page |
| `site.js` | Progressive enhancement only — scroll reveal and the footer year |

Set entirely in **Fraunces**, loaded from Google Fonts. Its optical-size axis does the
work a second typeface would normally do: high contrast at display sizes, sturdier at
body sizes. Labels are the same face, letterspaced and uppercased.

The ruled-grid backdrop and the faint equations in the margins are pure CSS — a fixed
layer of two `linear-gradient` repeats under a radial mask, plus four absolutely
positioned spans.

## Editing

There is no template engine, so the top bar and footer are repeated in each page.
If you change one, change it in all four. The active tab is marked with
`aria-current="page"`, which is what draws the underline.

Every page renders fully without JavaScript; `site.js` only adds the reveal
animation, and only when the viewer has not asked for reduced motion.

## Local preview

```bash
npx serve .
```

## Deploy

Pushing to `main` auto-deploys via the Vercel GitHub integration →
[projectfermat.vercel.app](https://projectfermat.vercel.app)
