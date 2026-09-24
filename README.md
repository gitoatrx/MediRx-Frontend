# MediRx Web

The public website for the MediRx platform.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind 4 — the same React and
Tailwind versions the Cloud panel and the Driver app are built on.

Static export. `npm run build` produces an `out/` folder of plain HTML that any
web server can hand out, including the XAMPP install this sits under. Every page
is pre-rendered, so search engines and link previews get real markup rather than
an empty div.

## Running it

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build
```

Writes `out/`. Copy it anywhere, or point a host at it.

## Where things are

| Path | What it holds |
|---|---|
| `lib/landing.ts` | **All landing page copy.** The problem, the four parts, every flow, the rules, the FAQ. Edit wording here, not in the pages. |
| `lib/content.ts` | Copy for the deeper pages (platform, how-it-works, security). |
| `app/page.tsx` | The landing page — ten sections, one component each. |
| `app/platform/`, `app/how-it-works/`, `app/security/`, `app/contact/` | The deeper pages, kept for readers who want more. |
| `components/Icons.tsx` | The whole line-icon set, hand-drawn. |
| `components/Illustrations.tsx` | Phone and desktop frames, and the illustrated app screens. |
| `components/SystemBand.tsx` | "One system, four parts" — the friendly diagram. |
| `components/ArchitectureDiagram.tsx` | The technical diagram, for the deeper pages. |
| `components/Reveal.tsx` | Fade-up on scroll. Starts visible, so nothing is hidden from crawlers or from a visitor without JavaScript. |
| `app/globals.css` | Colour tokens and section tints, light and dark. |

Keeping the copy in `lib/` is what makes this site reviewable: someone can read
one file and check every claim, without reading any JSX.

## Landing page sections

1. Hero — headline, illustrated phones, trust strip
2. The problem — three things pharmacies put up with today
3. One system, four parts — the band diagram, then four cards
4. How it works — four steps
5. Patient refill flow — phones beside numbered steps
6. Delivery safety — the two-scan guard
7. Driver app flow — screens and four steps
8. Rules and security — the "0 ports" block, then six rules
9. FAQ
10. Contact

## What this site says, and does not say

The wording is **public-facing**. It describes what the platform does and why
that matters to a pharmacy, without naming the dispensing system's internal
tables, fields, or the platform's API routes. That detail belongs in an internal
overview, not on a page anyone can read.

If an internal version is wanted later, it is the same site with a fuller
`lib/content.ts`.

## Still to fill in

These are placeholders, deliberately left visible rather than invented:

- **Screenshots.** The site currently carries none. Real screens of the Console,
  the two apps and the admin panel would do more for it than any other change.
- **Contact address.** `components/ContactForm.tsx` composes a mail message to
  `hello@medirx.app`. Change that constant, or replace the handler with a real
  endpoint — only that one component needs to change.
- **Company details.** Address, phone, support hours, legal pages.
- **Pricing.** No pricing is stated anywhere.
