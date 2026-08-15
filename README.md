# Handoff: Good Life Appraisal — Marketing Site (Home / About / Services / Contact)

## Overview
Four-page marketing site for Good Life Appraisal, a real estate appraisal company (agricultural, recreational, residential, commercial). Built as a single-page-app-style prototype with client-side page switching (Home, About, Services, Contact) and a client-only contact form.

## About the Design Files
The bundled file (`Good Life Appraisal.dc.html`) is a **design reference built in a prototyping tool** (custom HTML template syntax + a small JS runtime, `support.js`) — it is NOT production code and should not be copied as-is. Recreate this design in the target codebase's existing framework (React, Vue, etc.) using its established component patterns, routing, and styling approach. If no framework exists yet, plain semantic HTML/CSS/JS is fine — just drop the templating syntax (`{{ }}`, `<sc-for>`, `<sc-if>`) and reimplement equivalent logic natively.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final. Recreate pixel-for-pixel using the values below.

## Pages / Views

### Global: Header (all pages)
- Sticky, `background:#F7F6F2`, `border-bottom: 2px solid #C9A15A`, padding `16px 48px`, flex row, `justify-content: space-between`.
- Left: logo image (`assets/glp-logo-only.png`), height 64px, links to Home.
- Right: nav — HOME / ABOUT / SERVICES / CONTACT, each `font-weight:600, font-size:13px, letter-spacing:0.08em`, uppercase, color `#0B1D33` (navy) default, `#4A5A2A` (olive) when active, with a 2px bottom border in `#C9A15A` (gold) under the active item only.
- No CTA button in header (removed per feedback — nav is text links only).

### Global: Footer (all pages)
- `background:#0B1D33` (navy), padding `56px 40px 28px`.
- 3-column grid (1.4fr / 1fr / 1fr): brand blurb (script wordmark "Good Life Appraisal" in Great Vibes, 28px, `#F7F6F2`, plus tagline row and one-line description), Quick Links (Home/About/Services/Contact), Contact (email, phone, service-area states).
- Divider `1px solid #24304a` above copyright line.
- Copyright: centered, `12.5px`, `#6b7592`.

### Home
1. **Principals strip** (top of hero, `background:#0B1D33`): two cards side by side, each: circular headshot 64px, name (16px bold, white), title (12px, gold, uppercase), email as `mailto:` link (13px).
   - Emma Loseke — Co-Founder · Certified General Appraiser — emma@goodlifeappraisal.com — photo `assets/emma-headshot.png`
   - Chase Nelms — Co-Founder · Certified General Appraiser — chase@goodlifeappraisal.com — photo `assets/chase-headshot.jpeg`
2. **Hero** (`background:#0B1D33`, same section flow): centered column, max-width 720px.
   - Eyebrow: gold line — "APPRAISAL SERVICES" — gold line (13px, letter-spacing 0.12em, `#C9A15A`).
   - H1: "Real estate valuations rooted in trust." (52px/1.1, weight 700, white).
   - Script line: "Where Legacy Matters" (Great Vibes, 34px, `#C9A15A`).
   - Body paragraph (17px/1.7, `#cfd4de`, max-width 560px, centered).
   - Two buttons: "Request an Appraisal" (solid `#4A5A2A`, white text) → Contact; "Our Services" (outline white) → Services.
3. **Services overview** (white/tan bg `#F7F6F2`): centered eyebrow "WHAT WE APPRAISE" + H2 "Four specialties, one standard of care". 4-column grid of cards (white bg, 3px gold top border): script numeral (01–04, Great Vibes, olive), title (19px bold), 1-line description. Link below grid: "See full service details →" → Services page.
4. **Quote band** (`background:#0B1D33`): centered script quote "Your property represents more than value." + small caps line `IT'S "WHERE LEGACY MATTERS"` in gold.

### About
1. Header band (`background:#E7DCC1` tan): eyebrow "ABOUT US", H1 "Every Property Has a Story".
2. Story copy: 3 paragraphs (see source docx `Insert 1 Good Life Appraisal.docx` for verbatim text), max-width 760px, 17px/1.8.
3. Mission / Promise: 2-column grid, white cards, green top border (mission) / gold top border (promise).
4. Founders grid: 2 cards, each — circular photo 96px, name (19px bold), title (13px gold caps), email (mailto link, olive), 1-line teaser bio, and (togglable) a Great Vibes pull-quote from each founder.

### Services
1. Header band (`background:#0B1D33` navy): eyebrow "WHAT WE DO", H1 "Appraisal Services", intro sentence.
2. 4 stacked detail rows (white bg, left border 4px `#6E8B3D`): large script numeral + title (22px) + longer paragraph description for Agricultural, Recreational, Residential, Commercial.
3. CTA band (`background:#E7DCC1`): "SERVING NEBRASKA, KANSAS, IOWA & SOUTH DAKOTA" + "Request an Appraisal" button.

### Contact
1. Header band (tan): eyebrow "GET IN TOUCH", H1 "Request an Appraisal".
2. Two-column layout (1.3fr/1fr): left = form (Name, Email, Phone, Property Type select, Message, Submit button); right = contact info list (Email, Phone, Service Area).
3. Form submit is client-side only — on submit, swap form for a "Thank you" confirmation card. No backend call exists in the prototype; wire to real form handling (API route, email service, etc.) in production.

## Interactions & Behavior
- Nav clicks swap the visible page (client-side state, no real routing in the prototype) — implement as real routes (`/`, `/about`, `/services`, `/contact`) in production.
- Active nav item gets navy/olive text color + gold underline.
- Contact form: `preventDefault` + local "submitted" state flips the right panel to a thank-you message. No validation beyond native `required` on Name/Email.
- All buttons/links are plain hover-color changes; no other motion.

## State Management
- `page`: which of home/about/services/contact is shown.
- `formSubmitted`: boolean, contact form success state.
- Two content-driven toggles in the prototype (not needed in production unless useful): show/hide founder pull-quotes, services grid vs. stacked layout, hero background navy vs. tan.

## Design Tokens

**Colors**
- Navy Blue `#0B1D33` — primary text / dark sections
- Olive Green `#4A5A2A` — buttons, links, active nav
- Leaf Green `#6E8B3D` — accents (card borders, numerals)
- Wheat Gold `#C9A15A` — accents, eyebrows, dividers, active underline
- Field Tan `#E7DCC1` — section backgrounds
- Soft White `#F7F6F2` — page background

**Typography**
- Script/display accent: **Great Vibes** (Google Fonts), regular — used sparingly for "Where Legacy Matters" style lines and numerals. Never for body copy.
- Everything else: **Montserrat** (Google Fonts) — Regular for body, SemiBold/Bold (600/700) for headings and labels.
- Minimum body size 14px; nav/labels 12–13px with letter-spacing 0.03–0.12em uppercase.

**Spacing / Shape**
- Section padding: ~64–96px vertical, 40px horizontal (48px on header).
- Border radius: small/sharp — 2–3px on cards and buttons (not pill-shaped).
- Card borders: 3px solid top-border accent (gold or leaf green) is the recurring card treatment; one services page variant uses a 4px left border instead.

## Assets
- `assets/glp-logo-only.png` — header logo (illustration + wordmark, transparent background), supplied by client (cropped from their AI-generated brand mark).
- `assets/glp-illustration-transparent.png` — farmhouse/windmill/cornfield illustration, cut from the same brand mark (currently unused after hero redesign — kept in case it's wanted elsewhere).
- `assets/emma-headshot.png`, `assets/chase-headshot.jpeg` — real founder headshots, extracted from client-provided bio documents.
- Full brand kit (colors/fonts source of truth) is in the client's uploaded reference image; tokens above are transcribed from it.

## Files
- `Good Life Appraisal.dc.html` — the full prototype (all 4 pages, nav, footer, logic).
- `assets/` — all images referenced above.
