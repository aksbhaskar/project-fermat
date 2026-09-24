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

The layout is a fixed **left sidebar** (nav, a Volunteer button, contact links and
the copyright) beside a left-aligned **content column**. The content opens with a
brand lockup (the logo mark + "Project Fermat") and is built from muted body copy at
a comfortable line-height with hairline rules between blocks. No boxes, no cards, no
panels, no fills. The accent gold appears only on the active nav underline, the
founder labels, and on hover. On narrow screens the sidebar collapses to a top bar.

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
