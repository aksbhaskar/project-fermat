# Project Fermat

Site for **Project Fermat** — a volunteer initiative helping middle school students
(Classes 6–8) build a foundation in olympiad mathematics, from NMTC
toward IOQM and RMO.

## Stack

Static HTML/CSS — no build step, no framework, no dependencies, no JavaScript.

| File | |
|---|---|
| `index.html` | Home |
| `mission.html` | Mission |
| `founders.html` | Founders |
| `privacy.html` · `terms.html` | Legal |
| `404.html` | Not found |
| `styles.css` | All styles, shared by every page |

## The look

Everything is set in **Fraunces at weight 400** — one family, one weight. The
optical-size axis handles the difference between a heading and a paragraph, so
nothing needs to get bolder to read as a heading.

Every page is centred on a single 40rem measure and built from three devices:

- a small letterspaced accent line above the title
- muted body copy at a comfortable line-height
- hairline rules to separate blocks

No boxes, no cards, no panels, no fills, no italics, no animation. The accent gold
appears only on the line above the title, on the founder labels, and on hover.

Legal pages are the one exception to centring: their body copy is left-aligned,
because centred text is hard to read at that length.

## Editing

There is no template engine, so the nav and footer are repeated in each page. If
you change one, change it in all six. The current page is marked with
`aria-current="page"`, which is what underlines it.

## Local preview

```bash
npx serve .
```

## Deploy

Pushing to `main` auto-deploys via the Vercel GitHub integration →
[projectfermat.vercel.app](https://projectfermat.vercel.app)
