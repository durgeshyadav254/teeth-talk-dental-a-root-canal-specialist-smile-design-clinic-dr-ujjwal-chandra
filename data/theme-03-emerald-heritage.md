# Theme 03 — Emerald Heritage Dental
## Old-Money Botanical Luxury Website · Cursor Design Prompt

> **Identity:** Private garden club meets heritage medical practice.  
> **Feel:** Established wealth, brass & emerald, library calm, timeless trust.  
> **Not like:** Black fashion noir, cool Nordic white product UI, or soft blush feminine shops.

---

## 1. Creative North Star

> A practice that feels inherited — like a townhouse clinic with a walled garden. Deep green lacquer, cream paper, brass nameplates. Authority without coldness.

**Emotional targets:** legacy, craftsmanship, discretion, rooted confidence.  
**User thought on land:** *“They’ve been perfecting this forever. I’m in safe, refined hands.”*

---

## 2. Brand Personality

| Trait | Expression |
|--------|------------|
| Heritage | Crest-like monogram, serif wordmark, “Est.” year |
| Botanical | Sage washes, leaf motifs (abstract, never clipart), garden light photos |
| Scholarly | Long-form elegance, pull quotes, credential ribbons |
| Warm-rich | Cream paper backgrounds, brass — not chrome |
| Ceremonial | Section openings like chapters; “Consultation by appointment” |

**Voice:** Gracious, assured, slightly formal British/Atlantic elegance. Complete sentences. No startup slang. No street fashion edge.

---

## 3. Color System

```css
:root {
  /* Paper & panel */
  --paper: #F4F0E6;           /* warm cream paper */
  --paper-deep: #E8E0D0;      /* aged parchment band */
  --ivory: #FBF8F1;
  --white: #FFFEFB;

  /* Emerald family */
  --emerald: #1B3D2F;         /* deep heritage green — primary */
  --emerald-mid: #2F5C45;     /* hover / secondary */
  --emerald-rich: #0F2920;    /* footer / dark bands */
  --sage: #8FA892;            /* soft botanical accent */
  --sage-wash: #DDE6DC;       /* tint backgrounds */

  /* Metals & ink */
  --brass: #B08D57;           /* warm brass (NOT bright gold chrome) */
  --brass-soft: #D4C0A0;
  --ink: #1C1915;             /* warm black-brown */
  --ink-muted: #5E584F;
  --ink-faint: #8A8278;

  /* Lines */
  --border: #D9D0C0;
  --border-brass: rgba(176, 141, 87, 0.45);
  --focus: #2F5C45;
  --error: #8F4A42;
  --success: #2F5C45;
}
```

**Rules:**
- Cream/paper is the default canvas — **not** pure cool gray, **not** pure black site-wide.
- Emerald is the “navy” of this brand — headers, footer, primary buttons.
- Brass is for thin ornaments, icons, monogram strokes — never neon gold.
- Dark emerald sections replace black cinematic bands.
- No blush pink dominance, no icy teal fjord, no pure monochrome noir.

---

## 4. Typography

```css
--font-display: "Freight Display", "Canela", "Libre Baskerville", "Source Serif 4", serif;
--font-body: "Freight Text", "Source Serif 4", "Lora", serif; /* readable serif body OR */
--font-ui: "Maison Neue", "Nunito Sans", "Source Sans 3", sans-serif; /* UI only */
```

**Recommended pair:**  
- Headings: **Libre Baskerville** or **Fraunces**  
- Body/UI: **Source Sans 3**  
(Keep body sans for web clarity; use serif for H1–H3 and pull quotes.)

| Role | Spec |
|------|------|
| Hero H1 | Serif, 52–80px, weight 400–500, slight old-style elegance |
| H2 | Serif, 36–48px |
| Chapter label | Sans small caps / uppercase tracking 0.2em, brass or sage |
| Body | Sans 17px or serif 18px, line-height 1.75, max-width 62ch |
| Buttons | Sans 13px, tracked lightly, title case: “Request a Consultation” |

**Type mood:** Heritage magazine / private club prospectus.  
**Not:** Bodoni fashion poster. **Not:** geometric startup grotesk only.

---

## 5. Imagery Direction

- **Hero:** Townhouse façade, garden courtyard, or doctor in tailored earth tones by greenery
- **Interiors:** Wood paneling, brass lamps, linen chairs, botanical art — “club library” dental lounge
- **Details:** Porcelain, brass instruments abstract, cream marble with green stone
- **Patients:** Timeless wardrobe (cashmere, linen), natural window light
- **Texture:** Subtle paper grain or laid paper feel on cream sections (CSS noise 2%)

**Avoid:** Neon clinic LEDs, black leather fetish noir, pure white Apple-lab emptiness, pink glam.

---

## 6. Layout Language (Unique to This Theme)

1. **Chapter structure** — each section opens with a centered ornamental brass divider + small “Chapter” label  
2. **Centered ceremonial heroes** (unlike Nordic split or Noir asymmetry)  
3. **Double-border cards** — outer cream, inner brass hairline frame  
4. **Ribbon / crest moments** — monogram mark above H1  
5. **Two-column “ledger” layouts** for credentials (left titles, right details like a program)  
6. **Pull quotes** in large serif italic with emerald quotation  
7. **Footer** like a club stationery colophon  

Ornament SVG: simple laurel, thin diamond rule, or botanical line — **abstract one-weight strokes only**.

---

## 7. Motion

- Slow, dignified: 500–800ms ease
- Section titles fade with slight letter-spacing settle
- Ornament lines draw left→right (SVG stroke-dashoffset) once per section
- Hover: brass border brightens; image gentle desaturate→full color
- No aggressive parallax; optional slow ken-burns on hero only

---

## 8. UI Components

### Buttons
```
Primary:   bg-emerald, text-ivory, px-8 py-4, radius 4px (slightly squared — heritage, not pill candy)
           hover: bg-emerald-mid
Secondary: transparent, border 1px brass, text-emerald
Text link: ink with brass underline offset
```

### Cards
```
bg-ivory
border: 1px solid var(--border)
box-shadow: none OR very soft warm shadow
Optional: outline offset 6px solid brass at 30% (double frame on feature cards)
radius: 4–8px (NOT 24px blob)
```

### Labels
Brass small caps above serif titles; short horizontal brass rule (40px) under H2 optional.

### Inputs
Cream fields, emerald focus ring, brass bottom border option; labels in muted ink.

### Before/After
Paper mat frame; brass circular handle; captions in serif italic “Before” / “After”.

---

## 9. Site Map & Naming

```
/                     Home
/philosophy           About / approach
/the-practice         Clinic story
/dr-[name]            Doctor
/care                 Services index
/care/[slug]
/transformations      Gallery
/consultation         Book
/correspondence       Contact (heritage wording optional; can stay Contact)
/assessment           Smile analysis
/journal              Articles
```

CTAs:
- **Request a Consultation**
- **Begin Your Assessment**
- **View Transformations**
- **Meet the Doctor**

---

## 10. Homepage Structure

```
[HEADER cream/emerald — monogram + wordmark + nav + Request Consultation]
[HERO centered ceremonial — monogram, H1, short prospectus line, dual CTAs]
[EST. STRIP — year · neighborhood · “By appointment”]
[PHILOSOPHY — wide serif paragraph + botanical image side]
[CARE OFFERINGS — 2x3 framed cards with brass corners]
[DOCTOR — oil-portrait feel photo + ledger credentials]
[TRANSFORMATIONS — 3 framed cases]
[LETTERS FROM PATIENTS — pull-quote heavy testimonials]
[RECOGNITION — awards in crest row]
[CONSULTATION BAND — deep emerald]
[FOOTER emerald-rich colophon]
[MOBILE: Consult | Call | Assessment]
```

### Hero copy
- Monogram: `[P]` or full crest  
- Label: `Est. [Year] · [Neighborhood], [City]`  
- H1: `Dentistry with  
the patience  
of craft.`  
- Sub: `A private practice devoted to enduring aesthetic dentistry — veneers, alignment, and restorative care in a calm, heritage setting.`  
- CTAs: `Request a Consultation` · `Begin Your Assessment`

### Philosophy excerpt
> We believe a smile should look inevitable — as though it had always belonged to your face. Our work is quiet, exacting, and meant to last.

### Care cards (titles)
1. Porcelain Veneers — *Architecture in porcelain*  
2. Clear Aligners — *Correction without spectacle*  
3. Dental Implants — *Restoration with permanence*  
4. Comprehensive Makeovers — *A composed whole*  
5. General & Preventive Care — *The foundation*  
6. Urgent Care — *Same-day composure when possible*

---

## 11. Assessment Funnel

Cream wizard with chapter steps:

**I. Introduction** — goals in gracious checkbox language  
**II. Portraiture** — photo upload (“Kindly provide natural-light portraits”)  
**III. Correspondence** — contact details  
**IV. Confirmation** — “Our concierge will write within two business days.”

Progress: brass step dots connected by a thin line (like a map of estate stops).

---

## 12. Content Voice Samples

| Context | Copy |
|---------|------|
| Veneers | Hand-finished porcelain, shaded to your complexion and the light you live in. |
| Whitening | Brightening with restraint — luminous, never theatrical. |
| CTA | Request a Consultation |
| Hours | Consultations Tuesday through Saturday, by appointment. |
| Footer | Craft. Discretion. Continuity. |

**Avoid:** “Couture”, “Atelier” overuse from Theme 01, “Clear care. Calm results.” product tone from Theme 02, cute pink language from Theme 04.

---

## 13. Tech Implementation

- Next.js + Tailwind  
- Fonts: `Fraunces` or `Libre_Baskerville` + `Source_Sans_3`  
- Optional ornamental SVG components  
- Warm shadow tokens only  

```js
colors: {
  paper: { DEFAULT: '#F4F0E6', deep: '#E8E0D0', ivory: '#FBF8F1' },
  emerald: { DEFAULT: '#1B3D2F', mid: '#2F5C45', rich: '#0F2920' },
  sage: { DEFAULT: '#8FA892', wash: '#DDE6DC' },
  brass: { DEFAULT: '#B08D57', soft: '#D4C0A0' },
  ink: { DEFAULT: '#1C1915', muted: '#5E584F' },
}
```

---

## 14. Component Checklist

- [ ] HeritageHeader (monogram)
- [ ] CeremonialHero
- [ ] BrassDivider / ChapterLabel
- [ ] PhilosophyBlock
- [ ] FramedCareCard (double border)
- [ ] CredentialLedger
- [ ] FramedBeforeAfter
- [ ] PullQuoteTestimonial
- [ ] CrestAwardsRow
- [ ] EmeraldCtaBand
- [ ] AssessmentChapters wizard
- [ ] ColophonFooter
- [ ] MobileHeritageDock

---

## 15. Do / Don’t

**Do:** cream paper, deep emerald, brass (not chrome gold), serif headlines, centered ceremony, framed cards, gracious copy  
**Don’t:** black full-bleed fashion site, huge whitespace product bento only, pink/copper glam, rounded-full candy UI everywhere, mono cold grays as base

---

## 16. Cursor Build Order

1. Paper/emerald/brass tokens + serif fonts  
2. Monogram header + colophon footer  
3. Ceremonial home  
4. Care pages with framed template  
5. Transformations + Assessment chapters  
6. Philosophy / Doctor ledger  
7. Ornament SVG + motion draw lines  

---

## 17. Differentiation Reminder

- vs Obsidian: light paper + green, not black gold fashion  
- vs Nordic: warm heritage serif & brass, not cool fjord minimal  
- vs Blush Atelier: grounded emerald masculinity/femininity balance, not pink boutique  

*Theme 03 complete · Emerald Heritage*
