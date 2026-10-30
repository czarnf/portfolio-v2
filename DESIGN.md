# Emmanuel Chiefson Portfolio: Design System (DESIGN.md)

Version 1, 30 Oct 2026. Written with the design-pack skill.
Copy this file to the root of the canonical portfolio repo as `DESIGN.md` before any build work, and tell the agent to follow it.

**Separate from Talos.** Nothing here reuses Talos tokens, fonts or voice. Talos owns ink, warm paper, amber and a serif display. This site owns cool paper, deep teal and one sans family. Link to Talos; do not restyle it here.

---

## 1. Brief

- **Purpose:** in about 90 seconds, show a hiring panel or assessor three things: credibility, depth, and proof. Then make contact effortless.
- **Audience:** hiring managers and panels for NHS digital, health tech, GovTech and SaaS delivery or business analysis roles; Global Talent assessors; recruiters arriving from a CV or LinkedIn link. Mostly laptop in office hours, sometimes phone.
- **Positioning the design serves:** "I translate between frontline operations and the teams who build the systems." Pi-shaped: operational depth plus digital and data build skill, bridged by systems thinking.
- **Platform:** web, mobile first.
- **Recommended stack:** the `portfolio-v2` repo (React, Vite, Tailwind, shadcn/ui, already a Vercel project). Map every token below to a CSS variable on `:root` and consume it through Tailwind. No hard-coded colours anywhere else.

## 2. Direction

**"Evidence file."** A calm, light-first professional record where every claim carries its proof. Public-service clarity in the layout, an engineer's precision in the labels. Restraint does the premium work. The evidence system (section 3) is the signature, not decoration.

Reference patterns (borrow structure only, never a site's layout, copy or branding):
1. **Editorial rule hero** (component taxonomy: Hero): left-aligned, oversized sentence-case headline, a thin rule, a short proof strip under it.
2. **Alternating showcase rows plus case study layout** (Features, Content): work shown as rows with a meta column and a narrative column, each opening into a full case study page with sticky contents.
3. **Data table with toolbar and status chips** (Application UI): the evidence register reads like a well-kept project log.

## 3. Signature: the evidence system

Every claim on the site carries exactly one status chip and, where one exists, a proof link. This is the fact-gate made visible, and it is what makes the site different from a template.

| Status | Glyph | Meaning | Proof expected |
|---|---|---|---|
| Verified | ● | Measured result or independent attestation (audit scores, recognition by a named function, a recommendation letter, a certificate) | Case study page, certificate, or "letter available on request" |
| Built | ■ | A working artefact exists | Public repo, live demo, or an anonymised screenshot |
| In progress | ◐ | Course, certification or project under way | Start date |
| Concept | ○ | Designed or planned, not built | None. Use sparingly; never in the hero or Selected work |

Rules:
- Chip = glyph + text label. Colour is never the only cue; the four glyph shapes differ, so the system works in greyscale.
- A claim that cannot take one of these statuses does not go on the site.
- Use "designed" in the copy when a tool is built but adoption is not confirmed.

## 4. Colours (roles)

Light is the primary theme. Dark is designed, not inverted. Define both on `:root` with a `prefers-color-scheme` override and a `[data-theme]` override.

| Token | Light | Dark | Usage |
|---|---|---|---|
| `canvas` | #F6F7F4 | #0C1016 | Page background |
| `surface` | #FFFFFF | #131920 | Evidence panels, case study artefact frames, table body |
| `surface-sunken` | #ECEEEA | #090C11 | Contact band, table header, code and label blocks |
| `border` | #DCE0DB | #232B35 | Hairlines, panel edges, table rows (decorative only) |
| `border-strong` | #7A827C | #677180 | Input and control borders, focus-adjacent edges (3:1 or better) |
| `text` | #11171F | #E8EDF2 | Headings and body |
| `text-2` | #454E5A | #AAB4C0 | Secondary copy, meta descriptions |
| `text-3` | #5A6370 | #8B96A3 | Dates, captions, mono labels (still 4.5:1) |
| `accent` | #0B6656 | #5ED1B8 | The one action colour: primary button, links, focus ring, scroll-spy marker |
| `accent-hover` | #08503F | #86E0CC | Hover and pressed for accent |
| `on-accent` | #FFFFFF | #0C1016 | Text on accent fills |
| `status-verified` | #0B6656 on #E1F0EC | #5ED1B8 on #12302B | Verified chip (shares the accent hue on purpose: verified is what we want the eye to find) |
| `status-built` | #1C4E9C on #E4ECF8 | #8FB5F2 on #17253D | Built chip |
| `status-progress` | #875000 on #F6ECDB | #E3B266 on #34280F | In progress chip |
| `status-concept` | #5A6370 on #ECEEEA | #9AA4B0 on #1C232C | Concept chip |

Surface changes: the page stays on `canvas`. Case study artefacts and the evidence table sit on `surface` with a 1px `border`. The contact band and footer sit on `surface-sunken`. No full-bleed dark bands in light mode.

Accent discipline: accent appears on actions, links, the focus ring and Verified chips only. Never on headings, icons or backgrounds.

**Contrast, checked by script on 30 Oct 2026 (WCAG 2.x formula):**
- Light: text 16.8:1 on canvas; text-2 7.8:1; text-3 5.7:1; accent 6.4:1; white on accent 6.9:1; border-strong 3.7:1 on canvas, 3.4:1 on sunken.
- Dark: text 16.2:1 on canvas; text-2 9.1:1; text-3 5.9:1 on surface; accent 10.3:1; canvas text on accent 10.3:1; border-strong 3.6:1 on surface.
- Chips: every status pair is 5.2:1 or better in light and 6.3:1 or better in dark.
Any new colour pair must be checked before use.

## 5. Typography

- **Display and text:** Public Sans (Google Fonts, OFL; designed for public-service websites, which suits the audience). Weights 400, 600, 700. Fallback: `"Public Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.
- **Mono (labels, chips, dates, figures, step numbers):** JetBrains Mono 400 and 500. Fallback: `ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace`.
- **No serif.** Instrument Serif belongs to the old site and to Talos.

| Style | Size / line height / weight | Notes |
|---|---|---|
| Display (hero H1) | clamp(40px, 6vw, 64px) / 1.05 / 700 | Tracking -0.025em, sentence case, max 16 words |
| H2 (section) | 32px / 1.15 / 700 | Tracking -0.015em; 26px on mobile |
| H3 (case study, article title) | 20px / 1.3 / 600 | |
| Body | 17px / 1.6 / 400 | 16px on mobile |
| Small | 14px / 1.5 / 400 | Captions, meta |
| Label (mono) | 12px / 1.4 / 500 | Uppercase, tracking 0.08em; section eyebrows, chip text, dates |

Paragraph width max 68ch; case study reading column 680px. All numbers in metrics, tables and dates use `font-variant-numeric: tabular-nums`. Three sizes carry most of the page: Display, H2, Body.

## 6. Spacing and layout

- Base unit 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Gutter: 16px mobile, 24px tablet, 32px desktop. Content max width 1120px.
- Section spacing varies on purpose: hero 128px top / 96px bottom; Selected work 96px; evidence register 64px (it is dense by design); writing 64px; contact 96px. Mobile roughly two thirds of these.
- Grid: 12 columns desktop. Work rows split 5 / 7 (meta / narrative), alternating sides. The one deliberate break: the hero headline overhangs the content column by one column on desktop.
- No horizontal page scroll at 360px. The evidence table becomes stacked rows below 720px.

## 7. Radius, borders, elevation

- `radius-sm` 4px (chips), `radius-md` 8px (buttons, inputs), `radius-lg` 12px (panels, screenshot frames). No pills.
- Border width 1px. Prefer borders to shadows.
- Elevation: level 0 flat everywhere. Sticky nav after scroll: a 1px `border` bottom edge, no blur, no glass. Mobile menu sheet (the only overlay): `0 12px 32px rgba(17,23,31,0.16)` light, `0 12px 32px rgba(0,0,0,0.5)` dark.

## 8. Components (every state designed)

- **Primary button:** 44px high, 0 20px padding, `radius-md`, `accent` fill, `on-accent` text 600. Hover `accent-hover`. Focus: 2px `accent` ring, 2px offset. Active: translateY(1px). Disabled: 40% opacity, cursor not-allowed. Loading: spinner replaces label, width locked.
- **Secondary button:** same size, 1px `border-strong`, `text` colour, transparent. Hover `surface-sunken`.
- **Text link:** `accent`, underline offset 3px, 1px thickness; hover 2px thickness. External links get a small arrow glyph and open in the same tab unless a PDF.
- **Status chip:** mono 12px, padding 4px 8px, `radius-sm`, status tint background and status foreground, glyph then label. Not interactive unless it is a filter.
- **Work row:** meta column (role, dates, context line, status chips, stack as a plain mono list) and narrative column (problem, what I did, result in three short paragraphs, then one artefact: anonymised screenshot, diagram or small table). Whole row links to its case study page; hover lifts the artefact border to `border-strong`, nothing moves.
- **Case study page:** article layout with sticky contents on desktop. Fixed section order: Context, Problem, Constraints, What I did, Result, Evidence, What I would do next. Every figure in Result links to its line in Evidence.
- **Evidence register:** table with a toolbar filter (All, Verified, Built, In progress). Columns: Item, Type (Credential, Project, Writing), Status, Date, Proof. 48px rows, hairline dividers, header on `surface-sunken`. Empty filter state: "Nothing in this category yet."
- **Writing list:** a list, not a card grid. Title (H3), platform and date in mono, one-line takeaway.
- **Navigation:** sticky top bar. Left: name as wordmark in Public Sans 700. Right: anchor links with scroll spy (Work, Evidence, Writing, About, Contact) and a secondary "CV" button. Mobile: 44px menu button opening a full-width sheet.
- **Process strip (How I work):** one horizontal sequence with mono step numbers: 01 Map the system, 02 Fix the data, 03 Ship the smallest useful change, 04 Measure and hand over. Not three identical cards.
- **Footer:** name, email, LinkedIn, GitHub, and "Last updated" with a date. The date is an honesty signal; keep it current.

## 9. Page structure

1. **Hero:** mono eyebrow ("Digital delivery · Business analysis · Bristol"), H1 positioning line, two-line subhead, primary "See the work" and secondary "Download CV", then a proof strip of three Verified or Built items with chips.
2. **Selected work:** four or five work rows (see the content audit for the list and statuses).
3. **How I work:** the process strip.
4. **Evidence register.**
5. **Writing.**
6. **About:** short, pi-shaped story in plain words; optional headshot.
7. **Contact:** email first, then LinkedIn and GitHub.

## 10. Imagery and icons

- Icons: Lucide (ships with shadcn), 1.5px stroke, 20px. Used for function only (external link, download, menu, filter), never as bullet decoration.
- Imagery: real artefacts only. Anonymised screenshots of dashboards, workbooks and audit tools with Trust, ward, system and patient detail removed. Diagrams drawn in-house: 1px lines, mono labels, `accent` for the one path that matters.
- Screenshot frame: 1px `border`, `radius-lg`, `surface` background, no device mockups, no fake browser chrome.
- No stock photos, no AI-generated people or scenes, no vendor logo walls (they imply endorsement and certifications not held).
- Headshot (optional): natural light, plain background, 1:1, about 160px in About only.

## 11. Motion

One approach: CSS only, no animation library.
- Curves: glide `cubic-bezier(0.16, 1, 0.3, 1)`; in-out `cubic-bezier(0.65, 0, 0.35, 1)`.
- Section reveal: opacity 0 to 1 and translateY(12px) to 0, 450ms glide, once, IntersectionObserver, stagger 60ms, max four items.
- Press: 80ms. Scroll-spy marker slide: 300ms in-out. Mobile sheet: 300ms glide.
- Animate transform and opacity only. Nothing loops. No parallax, no cursor-reactive type, no scroll-jacking, no counters that tick up.
- `prefers-reduced-motion: reduce`: no transforms, content visible immediately.

## 12. Voice

- Plain British English, first person, outcomes first. Sentence case headings.
- No em dashes: use commas, colons or parentheses.
- Verbs must be true: "led", "built", "designed" (when adoption is unconfirmed), "contributed to" (when part of a group).
- Numbers only with a source in the evidence register. No percentages that are not in the master CV.
- Do: say what changed and how we know.
- Do not: "passionate", "seamless", "leveraging", "revolutionise", "10x", "AI-powered" as decoration, or any claim of funding or clients that does not exist.

## 13. Content guardrails (standing rules)

- Never state the NHS band. Never name the hospital, Trust, ward, bed counts or unit-specific metric names in description text. Say "a large acute NHS hospital in Bristol".
- DCB 0129 / 0160: "digital clinical safety training (DCB 0129 / DCB 0160)". The three certificates are held: Verified.
- Credentials: only held items are credentials. Training without an exam reads "training completed, exam not sat".
- Talos: "data and software venture", never "AI consultancy". Show only public artefacts (margin-variance-kit); never pipeline internals.
- FlowCast is a concept: leave it off, or show it once in the register as Concept.
- Run the fact-gate on every page before each deploy.

## 14. Remove from the current sites

Chatbot with canned answers, dark neumorphism, ambient blur blobs, purple theme (Lovable default), cursor-reactive headlines, skill bars and vendor logo walls, inline PDF accordions on the homepage (move BCS and PRINCE2 documents to Proof links in the register).

## 15. Acceptance checklist (run before every deploy)

1. Every claim has a status chip and, where possible, a proof link.
2. Fact-gate passed against the current master CV; no band, no Trust or ward names, no em dashes.
3. Tokens only: no one-off colours, radii or shadows.
4. Contrast AA in both themes, including chips and control borders.
5. Keyboard: visible focus on every interactive element; skip link present; logical tab order.
6. Touch targets 44px or larger.
7. 360px width: no horizontal scroll; table stacks.
8. Reduced-motion path checked.
9. Every external link resolves (GitHub `czarnf`, the confirmed LinkedIn handle, live demos).
10. Footer "Last updated" date is today's.
