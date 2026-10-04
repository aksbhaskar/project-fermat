# Project Fermat

A volunteer initiative helping middle-school students (Classes 6–8) in underserved
schools across Delhi NCR build a foundation in **olympiad mathematics**, from NMTC
toward IOQM and RMO. Less about solving a particular problem, more about learning how
to look at one.

**Live site:** [projectfermat.vercel.app](https://projectfermat.vercel.app)
· **Get involved:** [theprojectfermat@gmail.com](mailto:theprojectfermat@gmail.com)

This repository holds the source for the website.

## At a glance

- **Static HTML + CSS.** No build step, no framework, no dependencies.
- **No client-side JavaScript.** The only `<script>` is the JSON-LD structured data
  on the home page.
- **One stylesheet** (`styles.css`) shared by every page.
- **Hosted on Vercel.** Every push to `main` deploys automatically.

## Quick start

```bash
git clone https://github.com/aksbhaskar/project-fermat.git
cd project-fermat
npx serve .        # or: python3 -m http.server
```

Then open the URL it prints (usually <http://localhost:3000>).

> Use a local server rather than opening the files directly. Pages use root-absolute
> paths (`/styles.css`, `/logos/…`, `/mission`), and these break under `file://`.
> `npx serve` also handles clean URLs, so `/mission` serves `mission.html`, the same
> as on Vercel.

## Structure

```
index.html            Home: intro, "Who teaches with us", logo wall, volunteer call
mission.html          Mission
founders.html         Founders
privacy.html          Privacy Policy
terms.html            Terms & Conditions
404.html              Not found (served by Vercel for unknown routes)
styles.css            All styles, shared by every page
robots.txt            Crawling rules
sitemap.xml           Sitemap for search engines
vercel.json           Clean URLs (/mission, not /mission.html), no trailing slash
logos/                Affiliation logos for the logo wall
photos/               Founder portraits
logo-256.png          Brand mark used in the lockup
favicon.ico, favicon-32.png, apple-touch-icon.png, icon-512.png
                      Favicons, touch icon and Open Graph image
```

## Design

A quiet, dark, editorial layout.

- **Type:** everything is set in [Fraunces](https://fonts.google.com/specimen/Fraunces)
  at weight 400, loaded from Google Fonts. One family and one weight; the
  optical-size axis separates headings from body text.
- **Colour:** a warm **gold** is the only accent. All colours are CSS variables at the
  top of `styles.css`:

  | Token       | Value     | Use                       |
  | ----------- | --------- | ------------------------- |
  | `--bg`      | `#0a0a0f` | Page background           |
  | `--ink`     | `#f4f1ea` | Body text                 |
  | `--muted`   | `#8a8778` | Secondary text            |
  | `--accent`  | `#e8c547` | Links, buttons, highlights |
  | `--measure` | `40rem`   | Max width of the text column |

- **Layout:** a fixed **left sidebar** (navigation, a Volunteer button, contact and
  copyright) sits beside a left-aligned **content column** that opens with the brand
  lockup. On narrow screens the sidebar collapses to a top bar.
- **Restraint:** no boxes, cards or panels, just type, generous spacing and hairline
  rules. The affiliations logo wall is the only bright element.

## Editing

There is no template engine, so **shared markup is copied onto every page**: the
`<head>` (fonts, favicons), the `<aside class="sidebar">` and the lockup. When you
change one of these, change it on all pages. Mark the current page's nav link with
`aria-current="page"`.

### Adding a page

1. Copy an existing page (for example `mission.html`) to `new-page.html`.
2. Update `<title>`, the meta description, `<link rel="canonical">` and `og:url`.
3. Move `aria-current="page"` to the new nav link.
4. If it belongs in the nav, add the link to the sidebar on **every** page.
5. Add a `<url>` entry to `sitemap.xml`.

Thanks to `cleanUrls`, the page is served at `/new-page`. Link to it that way, without
the `.html` extension.

### Adding an affiliation logo

Put the file in `logos/` (PNG with a transparent background, or SVG). Then add an
`<img>` with descriptive `alt` text to the logo wall in `index.html`.

### Before you push

- Click through every page in the local preview, at desktop width and at phone width.
- If you changed a page's content, update its `<lastmod>` in `sitemap.xml`.
- Check that all internal links use clean paths (`/founders`, not `founders.html`).

## Deploy

The Vercel GitHub integration deploys every push to `main` to
[projectfermat.vercel.app](https://projectfermat.vercel.app). For larger changes,
open a pull request from a branch. Vercel normally builds a preview deployment for
each PR, which you can review before merging.

---

An initiative by [Akshat Bhaskar](https://akshatb.com) and
[Ishaan Harish](https://ishaanharish.me).
