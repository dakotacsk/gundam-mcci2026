# Gundam Racing Design System

A website design system inspired by vintage Tamiya racing decals: bold geometric panels, oversized condensed type, sponsor-style label blocks, directional striping, and high-contrast utility graphics — translated into a cleaner digital system using **Gundam color blocking**.

---

## 1. Design Direction

### Reference Description

The visual reference looks like a **retro Japanese racing poster / decal sheet** remixed through a mecha lens. It has the energy of vintage Tamiya packaging or sponsor-liveried RC car graphics: large stacked text, bold stripes, dense labels, panel-like segmentation, and a strong sense of motion.

Key visual traits of the reference:

* **High-contrast poster composition** with large blocks of white, black, red, and yellow
* **Oversized headline typography** that feels stamped, condensed, and graphic rather than elegant
* **Sticker-sheet / sponsor-logo density** with many small labels, badges, and utility marks clustered together
* **Angular segmentation** that makes the layout feel cut into mechanical panels instead of soft content boxes
* **Hard outlines and sharp dividers** that give each area a distinct boundary
* **Racing-inspired striping and directional graphics** that imply speed and assembly
* **Industrial caution-label energy** rather than luxury fashion minimalism
* **Layered typography hierarchy** where giant type, small technical labels, and numeric callouts coexist in the same composition

When translating that reference into web:

* preserve the **graphic confidence, panel blocking, and sponsor-style hierarchy**
* reduce the amount of clutter so the interface stays usable
* treat the decorative language like **armor seams, warning decals, and racing livery accents** applied to a modern UI system
* keep the site feeling like a **designed machine surface**, not like a c**Core vibe**
* Mecha + motorsport
* Sponsor-sticker energy
* Sharp panel lines and warning-label details
* Clean white surfaces broken by strong primary color blocks
* Functional, high-contrast, technical UI

**Keywords**

* angular
* fast
* modular
* heroic
* industrial
* collectible
* arcade-technical

**What to preserve from the reference**

* Big decal-like typography
* Hard-edged geometric segmentation
* Repeated labels / badges / number blocks
* Strong black outlines
* Red + yellow accents used as high-energy signals
* Dense visual identity with disciplined layout

**What to change for web**

* Use more whitespace than the sticker sheet
* Keep UI readable first, decorative second
* Reserve the loudest motifs for hero areas, cards, banners, and navigation accents
* Replace sticker clutter with a modular design language

---

## 2. Brand Personality

**Primary feeling**
A futuristic control panel for a premium mecha brand.

**Tone**

* confident
* tactical
* premium
* energetic
* precise

**Should feel like**

* Gundam chest vents
* caution decals on a mobile suit
* pit-lane graphics
* a launch hangar dashboard

**Should not feel like**

* soft pastel anime UI
* grungy cyberpunk overload
* military-only camouflage aesthetic
* generic SaaS minimalism

---

## 3. Color System

Use classic Gundam-inspired primaries with neutral support colors.

### Core Palette

| Token                   |       Hex | Usage                         |
| ----------------------- | --------: | ----------------------------- |
| `--color-bg`            | `#F4F6F8` | Main page background          |
| `--color-surface`       | `#FFFFFF` | Cards, nav, content surfaces  |
| `--color-panel`         | `#E9EEF3` | Secondary panels              |
| `--color-ink`           | `#111318` | Primary text / deep outlines  |
| `--color-outline`       | `#1D2430` | Borders, strokes, separators  |
| `--color-gundam-blue`   | `#0057B8` | Primary brand color           |
| `--color-gundam-red`    | `#E10613` | High-energy CTA / alerts      |
| `--color-gundam-yellow` | `#F7B500` | Accent stripes / highlights   |
| `--color-gundam-white`  | `#FCFCFD` | Bright panel fill             |
| `--color-steel`         | `#6E7B8B` | Secondary text / technical UI |
| `--color-signal-green`  | `#3DDC84` | Success / active systems      |

### Optional Extended Colors

| Token                     |       Hex | Usage                         |
| ------------------------- | --------: | ----------------------------- |
| `--color-thruster-orange` | `#FF7A00` | Heat / motion accents         |
| `--color-warning-amber`   | `#FFC928` | Warning labels                |
| `--color-dark-navy`       | `#0B1B3A` | Footer / hero contrast blocks |

### Color Ratio

* **50%** white / light neutral surfaces
* **20%** dark ink / outline structure
* **15%** Gundam blue
* **10%** Gundam red
* **5%** yellow / specialty accents

### Usage Rules

* Blue is the default brand anchor.
* Red is for action, emphasis, or performance data.
* Yellow is for micro-accents, not large reading surfaces.
* Black / deep ink should frame and ground the system.
* Keep long-form content on white or very pale gray only.

---

## 4. Typography

The reference image uses bold, sticker-like lettering. For the web, combine a **custom display face** with a practical UI sans and a technical mono layer.

### Font Stack to Use

**Local poster / hero font**

* `New Zelek` (installed in the webpage repo assets folder)
* Use this as the signature display face for hero words, giant numeric overlays, and select badge treatments.
* Keep usage intentional so it feels special, not everywhere.

**Display / Headline**

* `New Zelek`
* `Lacquer`
* `Jost`
* `Outfit`

**UI / Body**

* `Noto Sans`
* `Outfit`
* `Jost`
* `Ropa Sans`

**Technical / Mono / Utility**

* `Roboto Mono`
* `Courier Prime`
* `Press Start 2P` for extremely limited decorative use only

### Recommended Role Assignment

| Role                            | Font                          | Notes                                       |
| ------------------------------- | ----------------------------- | ------------------------------------------- |
| Hero wordmark / poster headline | `New Zelek`                   | Best for the most branded moments only      |
| Main headings                   | `Jost` or `Outfit`            | Strong, clean, modern, geometric            |
| Navigation / tabs / labels      | `Jost`                        | Uppercase, medium to bold, slightly tracked |
| Body text                       | `Noto Sans` or `Outfit`       | Most readable for product/UI copy           |
| Data values / metadata / specs  | `Roboto Mono`                 | Adds technical dashboard feel               |
| Caution stamps / novelty accent | `Lacquer` or `Press Start 2P` | Use very sparingly                          |

### Type Strategy

* `New Zelek` is the **signature brand display font**.
* `Jost` should be the **default structural UI typeface** for headings, nav, buttons, and labels.
* `Noto Sans` should be the **default reading typeface** for paragraphs and longer content.
* `Roboto Mono` should handle technical numbers, system labels, table metadata, small stat callouts, and utility UI.
* `Lacquer` and `Press Start 2P` are accent fonts only and should never carry core UX copy.

### Type Roles

| Role            | Style                                                                  |
| --------------- | ---------------------------------------------------------------------- |
| Hero title      | `New Zelek`, all caps or poster casing, tight leading                  |
| Section heading | `Jost` or `Outfit`, bold, uppercase or title case                      |
| Section label   | `Roboto Mono` or `Jost`, uppercase, tracked out                        |
| Body text       | `Noto Sans` or `Outfit`, normal width                                  |
| Data / tags     | `Roboto Mono` or bold `Jost`, uppercase, compact                       |
| Numbers         | `New Zelek` for decorative large numbers, `Roboto Mono` for UI metrics |

### Typography Rules

* Prefer **ALL CAPS** for navigation, labels, tabs, badges, and key CTA text.
* Use `New Zelek` for the biggest branded statements only.
* Use `Jost` for the majority of interface-facing display needs.
* Keep body copy in `Noto Sans` or `Outfit` with normal casing.
* Use `Roboto Mono` to inject technical/machine energy into dashboards, labels, and stats.
* Do not use `Lacquer` or `Press Start 2P` in paragraphs, forms, or dense navigation.
* Mix very large numbers with small utility labels for motorsport energy.

### Suggested Scale

| Token        | Size |
| ------------ | ---: |
| `display-xl` | 88px |
| `display-lg` | 64px |
| `h1`         | 48px |
| `h2`         | 36px |
| `h3`         | 28px |
| `title`      | 22px |
| `body`       | 16px |
| `small`      | 14px |
| `micro`      | 12px |

### Web Font Notes

Include the Google Fonts link block directly in the project `<head>` so the styling agent has explicit access to the font imports, and load `New Zelek.ttf` locally via `@font-face` from the repo assets.

Add this directly to the project `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Courier+Prime&family=Jost:ital,wght@0,100..900;1,100..900&family=Lacquer&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Press+Start+2P&family=Roboto+Mono:wght@500&family=Ropa+Sans&display=swap" rel="stylesheet">
```

Local font loading example:

```css
@font-face {
  font-family: "New Zelek";
  src: url("/assets/New Zelek.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

Google font families already relevant to this system:

* `Jost`
* `Noto Sans`
* `Outfit`
* `Roboto Mono`
* `Courier Prime`
* `Lacquer`
* `Ropa Sans`
* `Press Start 2P`

---

## 5. Layout Principles

### Grid

* Use a **12-column desktop grid**.
* Prefer strong vertical alignment.
* Let sections feel like assembled armor plates.
* Use asymmetry, but keep edges snapped and intentional.

### Spacing

Base unit: **8px**

| Token     | Value |
| --------- | ----: |
| `space-1` |   4px |
| `space-2` |   8px |
| `space-3` |  12px |
| `space-4` |  16px |
| `space-5` |  24px |
| `space-6` |  32px |
| `space-7` |  48px |
| `space-8` |  64px |
| `space-9` |  96px |

### Section Structure

Good page rhythm:

1. Hero with bold stripe/panel motif
2. Feature cards with sponsor-badge styling
3. Technical data or product grid
4. CTA band with red/blue paneling
5. Footer in dark navy or ink

---

## 6. Shape Language

The visual system should borrow from decals, armor seams, and warning panels.

### Shape Rules

* Favor **trapezoids, angled rectangles, chevrons, vertical slashes**
* Avoid soft organic blobs
* Rounded corners should be minimal: **4px to 8px max**
* Borders should feel deliberate and mechanical
* Use cut-corner panels for featured cards and buttons

### Signature Motifs

* double racing stripes
* vent-like side accents
* caution label blocks
* large numeric overlays
* asymmetrical diagonal separators
* outlined panels with inset fills

---

## 7. Components

### Buttons

**Primary Button**

* Fill: Gundam red or Gundam blue
* Text: white
* Shape: rectangular with optional cut corner
* Border: 2px dark outline or none depending on density
* Font: `Jost` bold uppercase

**Secondary Button**

* White or panel gray fill
* 2px dark outline
* Hover fills with blue
* Font: `Jost` medium/bold uppercase

**Utility Button**

* Small uppercase label
* Yellow accent bar or left stripe
* Used for filters, tabs, toggles
* Font: `Roboto Mono` or `Jost`

### Navigation

* White/navy base with strong bottom border
* Active states marked by red underline or yellow wedge
* Uppercase labels preferred
* Include badge-like count chips where useful
* Use `Jost` for primary nav and `Roboto Mono` for small status counters

### Cards

* White surface
* Thick top stripe or corner accent in blue/red
* 1–2px outline
* Optional small sponsor-label metadata row
* Great place for number overlays or technical tags

### Tags / Chips

* Uppercase
* Compact padding
* Colors:

  * blue = default category
  * red = urgent / featured
  * yellow = caution / new
  * gray = neutral
* Prefer `Roboto Mono` or bold `Jost`

### Inputs

* Crisp rectangular fields
* Dark outline with blue focus ring
* Labels should sit above fields, uppercase micro text preferred
* Use `Noto Sans` or `Outfit` for input text
* Use `Roboto Mono` or `Jost` for field labels

### Tables / Data Panels

* Strong row separators
* Oversized numeric values for key metrics
* Alternating subtle panel background okay
* Red/green should be used sparingly for state, not decoration only
* `Roboto Mono` works well for technical rows, IDs, and values

### Alerts / Status

* **Info:** blue + white
* **Warning:** yellow + ink
* **Critical:** red + white
* **Success:** green + deep ink

---

## 8. Iconography & Illustration

### Icon Style

* Geometric
* Bold strokes
* Minimal rounding
* Dashboard / mechanical influence

### Illustration Direction

* Linework inspired by panel seams
* Mecha silhouettes, shield forms, antenna motifs
* Use abstract Gundam influence, not literal copyrighted character art unless licensed

### Decorative Graphics

* hazard stripes
* launch lines
* segmented frames
* number plates
* emblem circles / stars / insignia-like markers

---

## 9. Motion

Motion should feel like systems activating, not floating.

### Motion Principles

* quick
* directional
* mechanical
* snappy

### Recommended Motion

* Panels slide in on x/y axes
* Underlines sweep horizontally
* Hover states add border glow or stripe reveal
* Cards lift only slightly; prefer accent movement over soft shadows

### Timing

* Fast interactions: `120ms–180ms`
* Standard transitions: `200ms–280ms`
* Section reveals: `300ms–450ms`

### Easing

* Use sharp ease-out curves
* Avoid overly bouncy motion

---

## 10. Texture, Borders, and Effects

### Borders

* 1px to 2px, high contrast
* Good default: `1px solid var(--color-outline)`

### Shadows

* Keep subtle
* Let borders and shape language do most of the work
* Prefer layered panels over soft neumorphic shadows

### Texture

Use sparingly:

* faint grid overlays
* technical blueprint lines
* micro caution text
* diagonal stripe accents

Do **not** over-texture the whole site.

---

## 11. Patterns & Background Treatments

### Recommended Background Treatments

* clean white with panel seams
* pale gray technical grid
* large blue block with red/yellow corner accents
* diagonal stripe slice in hero/footer

### Pattern Rules

* Use at section boundaries or inside banners
* Never behind dense body text
* Keep opacity low for utility patterns

---

## 12. Accessibility Rules

* Maintain WCAG-compliant contrast for all text
* Do not place yellow text on white
* Avoid red text on blue surfaces
* Body copy should remain on white or near-white backgrounds
* Interactive states must use more than color alone: border, icon, underline, or label change
* Decorative fonts should never be the only font used to communicate critical information

---

## 13. CSS Token Starter

```css
@font-face {
  font-family: "New Zelek";
  src: url("/assets/New Zelek.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

:root {
  --color-bg: #F4F6F8;
  --color-surface: #FFFFFF;
  --color-panel: #E9EEF3;
  --color-ink: #111318;
  --color-outline: #1D2430;
  --color-gundam-blue: #0057B8;
  --color-gundam-red: #E10613;
  --color-gundam-yellow: #F7B500;
  --color-gundam-white: #FCFCFD;
  --color-steel: #6E7B8B;
  --color-signal-green: #3DDC84;
  --color-thruster-orange: #FF7A00;
  --color-warning-amber: #FFC928;
  --color-dark-navy: #0B1B3A;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;

  --radius-sm: 4px;
  --radius-md: 8px;

  --border-strong: 2px solid var(--color-outline);
  --border-default: 1px solid var(--color-outline);

  --shadow-panel: 0 8px 24px rgba(17, 19, 24, 0.08);

  --font-display: "New Zelek", "Jost", "Outfit", sans-serif;
  --font-heading: "Jost", "Outfit", "Noto Sans", sans-serif;
  --font-body: "Noto Sans", "Outfit", "Jost", sans-serif;
  --font-mono: "Roboto Mono", "Courier Prime", monospace;
  --font-accent: "Lacquer", "Press Start 2P", cursive;
}
```

---

## 14. Example UI Recipes

### Hero Section

* White background
* Giant `New Zelek` headline in ink
* Blue content block
* Red CTA button
* Yellow slashes or caution ticks as accents
* Large faded technical number in background
* Small `Roboto Mono` labels around the main headline

### Product Card

* White panel with black outline
* Blue title bar
* Red status tag
* Yellow mini-accent on top-right or bottom-left
* Clean content body
* `Jost` for titles, `Noto Sans` for body, `Roboto Mono` for metadata

### Dashboard / Stats Section

* Ink or navy background
* White data cards
* Blue chart lines
* Red threshold markers
* Yellow labels for highlights only
* `Roboto Mono` for metrics and panel labels

---

## 15. Do / Don’t

### Do

* Use hard-edged color blocking
* Build components like modular armor panels
* Mix white space with strong graphic accents
* Let typography carry brand energy
* Use red/yellow as controlled accents
* Treat `New Zelek` as a signature display asset, not the default font everywhere

### Don’t

* Make every section loud at once
* Overuse diagonal shapes in small UI areas
* Use soft glassmorphism or pastel gradients
* Put long paragraphs inside heavily decorated blocks
* Let decorative motifs hurt readability
* Use accent/decorative fonts for core product UX text

---

## 16. One-Sentence Style Summary

**A clean, high-contrast web system that blends vintage racing decal energy with iconic Gundam primary-color armor paneling, using a poster-like custom display font for brand moments and crisp modern sans typography for everything else.**

