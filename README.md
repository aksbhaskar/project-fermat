# Project Fermat

A volunteer initiative helping middle-school students (Classes 6–8) in underserved
schools across Delhi NCR build a foundation in **olympiad mathematics** — from NMTC
toward IOQM and RMO. Less about solving a particular problem, more about learning how
to look at one.

**Live:** [projectfermat.vercel.app](https://projectfermat.vercel.app)
· **Get involved:** [theprojectfermat@gmail.com](mailto:theprojectfermat@gmail.com)

This repository holds the source for the website.

## Stack

Static **HTML + CSS** — no build step, no framework, no dependencies, no JavaScript.
Just open the files, or deploy them anywhere.

## Structure

```
index.html            Home
mission.html          Mission
founders.html         Founders
privacy.html          Privacy Policy
terms.html            Terms & Conditions
404.html              Not found
styles.css            All styles, shared by every page
robots.txt            Crawling rules
sitemap.xml           Sitemap
vercel.json           Clean-URL config for hosting
logos/                Affiliation logos
photos/               Founder portraits
*.png / *.ico         Logo mark and favicons
```

## Design

A quiet, dark, editorial layout. Everything is set in **Fraunces** at weight 400 —
one family, one weight; the optical-size axis handles the difference between a heading
and a paragraph. A warm **gold** is the only accent.

The page is a fixed **left sidebar** (navigation, a Volunteer button, contact and
copyright) beside a left-aligned **content column** that opens with the brand lockup.
No boxes, no cards, no panels — just type, generous spacing and hairline rules. The
one bright moment is the affiliations "logo wall." On narrow screens the sidebar
collapses to a top bar.

## Editing

There is no template engine, so the header and footer are repeated on each page — if
you change one, change it on all of them. The current page is marked with
`aria-current="page"`.

## Local preview

```bash
npx serve .
```

## Deploy

Pushing to `main` auto-deploys via the Vercel GitHub integration →
[projectfermat.vercel.app](https://projectfermat.vercel.app)

---

An initiative by [Akshat Bhaskar](https://akshatb.com) and
[Ishaan Harish](https://ishaanharish.me).
