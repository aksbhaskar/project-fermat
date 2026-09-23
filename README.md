# Project Fermat

Site for **Project Fermat** — a volunteer initiative helping middle-school students
(Classes 6–8) in underserved schools across Delhi NCR build a foundation in olympiad
mathematics, from NMTC toward IOQM and RMO.

Live at [projectfermat.vercel.app](https://projectfermat.vercel.app).

## Stack

Static HTML/CSS — no build step, no framework, no dependencies, no JavaScript.

| File | |
|---|---|
| `index.html` | Home — a single scrolling landing page |
| `mission.html` | Mission |
| `founders.html` | Founders |
| `privacy.html` · `terms.html` | Legal |
| `404.html` | Not found |
| `styles.css` | All styles, shared by every page |
| `robots.txt` · `sitemap.xml` | SEO |

## The look

A warm nonprofit landing set on **exam-paper cream** with **ink** text and the brand
**gold** (`#e8c547`) as the accent, closing on a warm **chalkboard-black** band for the
call-to-action and footer — the materials of a maths classroom.

- **Type:** the whole site is set in **Space Grotesk** (the `f` logo and the
  `fermat` wordmark are separate brand images).
- **Landing:** a full-screen plain-yellow hero showing only the floating nav pill,
  the `fermat` wordmark and a Volunteer button; everything else appears on scroll.
- **Header:** a floating frosted pill that expands into a preview panel on hover
  (see `header.js`).
- **Signature element:** the olympiad *pathway* on the home page — Foundations →
  NMTC → IOQM → RMO — a genuinely sequential stepped timeline.

All colors are CSS variables on `:root` in `styles.css`. The home page is built from
sections (`.hero`, `.statement`, `.offers`, `.pathway`, `.scholars-grid`, `.cta-band`);
inner pages use `.page-head` + `.prose`.

## Editing

There is no template engine, so the header (`.site-header`) and footer (`.site-footer`)
are repeated in every page. **If you change one, change it in all of them.** The current
page is marked with `aria-current="page"` on its nav link.

Header/footer links to home sections use `/#section-id` so they work from any page.

## Local preview

```bash
npx serve .
```

## Deploy

Pushing to `main` auto-deploys via the Vercel GitHub integration →
[projectfermat.vercel.app](https://projectfermat.vercel.app)
