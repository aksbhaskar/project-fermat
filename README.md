# Project Fermat

Site for **Project Fermat** — a volunteer initiative helping middle school students
(Classes 6–8) build a foundation in olympiad mathematics, from SOF IMO and NMTC
toward IOQM and RMO.

## Stack

Static HTML/CSS — no build step, no framework, no dependencies.

- `index.html` — the site (styles in one `<style>` block, ~25 lines of vanilla JS)
- `404.html` — not-found page

Set entirely in **Fraunces**, loaded from Google Fonts. Its optical-size axis does the
work a second typeface would normally do: high contrast at display sizes, sturdier at
body sizes. Labels are the same face, letterspaced and uppercased.

The ruled-grid backdrop and the faint equations in the margins are pure CSS —
a fixed layer of two `linear-gradient` repeats under a radial mask, plus four
absolutely positioned spans.

## Structure

`01 Mission` · `02 What we do` · `03 Founders` · `04 Volunteer`, with a sticky
masthead and anchor navigation.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

Pushing to `main` auto-deploys via the Vercel GitHub integration →
[projectfermat.vercel.app](https://projectfermat.vercel.app)
