# Gundam Racing Design System

A website design system based on vintage Tamiya racing decals: bold geometric panels, oversized condensed type, sponsor-style label blocks, directional striping, and high-contrast utility graphics. Colors follow the Gundam palette.

---

## 1. Design Direction

### Reference Description

The reference looks like a retro Japanese racing poster combined with mecha styling. Visual traits of Tamiya packaging and sponsor-liveried RC car graphics: large stacked text, bold stripes, dense labels, panel-like segmentation, strong sense of motion.

Key visual traits of the reference:

* **High-contrast poster composition** with large blocks of white, black, red, and yellow
* **Oversized headline typography** that feels stamped, condensed, and graphic rather than elegant
* **Sticker-sheet / sponsor-logo density** with many small labels, badges, and utility marks clustered together
* **Angular segmentation** that makes the layout feel cut into mechanical panels instead of soft content boxes
* **Hard outlines and sharp dividers** that give each area a distinct boundary
* **Racing-inspired striping and directional graphics** that imply speed and assembly
* **Industrial caution-label energy** rather than luxury fashion minimalism
* **Layered typography hierarchy** where giant type, small technical labels, and numeric callouts coexist in the same composition

Web adaptation:
* Preserve the graphic confidence, panel blocking, and sponsor-style hierarchy
* Reduce clutter so the interface stays usable
* Treat decorative elements as armor seams, warning decals, and racing livery accents on a modern UI system
* Keep the site feeling like a designed machine surface

**Core vibe**

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
A control panel for a mecha brand.

**Tone**

* confident
* tactical
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

## 3. UI Elements & Effects

### Custom Cursor
* Custom Gundam RX-78-2 cursor from CDN (`https://cdn.cursors-4u.net`)
* Position offset: 32px 32px
* Fallback: auto

### Particle Background
* Three particle types: cyan (`#59f8e8`), blue (`#4a78ff`), pink (`#ff4fa8`)
* Each particle has a `box-shadow: 0 0 10px currentColor`
* Animation: `particleDrift` keyframe moves particles horizontally across viewport
* Uses CSS custom properties `--start-y` and `--drift-y` for varied paths
* Particle container hidden by default (`display: none`)

### Ghost Canvas Trail Effect
* Canvas-based mouse trail effect with smooth interpolation
* Purple/violet gradient tail using `createLinearGradient`
* Tail length: 14–68px (velocity-dependent)
* Tail thickness: 1.6–5.5px (velocity-dependent)
* Radial gradient halo and core at cursor position
* Uses `lighter` composite blending mode
* Dual-buffer canvas approach with blur filter for trail persistence
* Color processing includes grain noise for texture

### Grain Overlay
* Fixed position overlay with dual radial gradient pattern
* Sizes: 3px (black dots) and 4px (white dots)
* `multiply` blend mode at 16% opacity
* Animated with `grainShift` keyframe (subtle 2px shift)

### Header (Sticky Navigation)
* Sticky position with `z-index: 100`
* White surface with bottom border
* Inner layout: flex with space-between alignment
* Contains logo (New Zelek display font) and optional back link
* Logo: uppercase, 24px, letter-spacing 2px, blue accent on accent span

### Hero Section
* Center-aligned with large display title (clamp 48–88px)
* Subtitle in heading font, uppercase, steel color
* Blue accent span for emphasis
* `fadeSlideUp` entrance animation (0.6s ease-out)

### Board Grid (Homepage)
* Flexbox wrap layout, centered
* Cards in three sizes: large (400×350px), medium (280×245px), small (220×193px)
* Responsive breakpoints at 900px and 600px
* `floatIn` + `float` combo animation with staggered delays
* Hover: scale 1.15, brightness boost, blue drop shadow
* Contains board image, board-label (bottom-left), board-tag (top-right)
* Labels fade/slide in on hover with 0.3s transition
* Image swap on hover using `data-hover` attribute

### Page Content Structure
* Container max-width: 1000px (content pages), 1200px (main)
* Page header: padding 96px 0 64px, surface background, badge in mono blue
* Page title: display font, clamp 36–64px, uppercase
* Section cards: white surface, default border, 32px padding
* Section title: heading font, 22px, uppercase, blue underline border
* Stats grid: 3-column grid, panel background cards

### Footer
* Dark navy background (`#0B1B3A`)
* White text with 70% opacity
* Mono font, uppercase, 12px, 2px letter-spacing

---

## 4. Color System

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

### Board Card (Homepage Grid)

Primary interaction component for the homepage board selection grid.

* Three sizes: large (400×350px), medium (280×245px), small (220×193px)
* Border: none (transparent background)
* Contains `<img>` with `data-hover` attribute for hover image swap
* Padding: `--space-2`
* Cursor: pointer

**Board Label**
* Position: absolute, bottom-left
* Background: `rgba(252, 252, 253, 0.85)`
* Font: `Jost` bold, 14px, uppercase
* Opacity 0 → 1 on hover with 8px upward translate

**Board Tag**
* Position: absolute, top-right
* Background: `rgba(252, 252, 253, 0.85)`
* Font: `Roboto Mono`, 10px, uppercase
* Opacity 0 → 1 on hover with 8px downward translate

**Board Image**
* Width/height: 100%
* `object-fit: contain`
* `brightness(0.97)` default, `brightness(1)` on hover
* Blue drop shadow on hover: `0 8px 24px rgba(0, 91, 184, 0.3)`

**Animations**
* Staggered `floatIn` entrance animation (0.8s cubic-bezier)
* Infinite `float` animation for subtle vertical drift
* Hover: `scale(1.15)`, animation paused

### Page Header

Header component for content pages.

* No border-bottom (clean separation)
* Background: surface color
* Padding: `--space-9` top (96px), `--space-7` bottom (48px)

**Page Badge**
* Font: `Roboto Mono`, 12px, uppercase, letter-spacing 2px
* Color: Gundam blue
* Margin bottom: `--space-3`

**Page Title**
* Font: `New Zelek` display
* Size: `clamp(36px, 8vw, 64px)`, uppercase, letter-spacing 2px
* Line height: 1.1

**Page Subtitle**
* Font: `Jost`, 20px, font-weight 400
* Color: steel
* Margin top: `--space-4`
* Max width: 700px

### Section Card

Content container for page body sections.

* No background, border, or padding (clean editorial flow)
* Margin bottom: `--space-7` (56px)
* Full width of page

**Section Title**
* Font: `Jost`, 20px, bold, uppercase
* Letter-spacing: 1px
* Color: ink
* Margin bottom: `--space-5` (24px)

**Section Text**
* Font size: 17px
* Line height: 1.85
* Paragraph margin: `--space-5` (24px)

### Stats Grid

Three-column grid for displaying statistics.

* CSS Grid: `repeat(3, 1fr)`
* Gap: `--space-6` (32px)
* Margin top: `--space-8` (96px)
* Padding top: `--space-6` (32px)

**Stat Value**
* Font: `New Zelek` display
* Size: 40px (larger for impact)
* Color: Gundam blue

**Stat Label**
* Font: `Roboto Mono`, 11px, uppercase
* Letter-spacing: 1px
* Color: steel
* Margin top: `--space-2`

### Header (Sticky Navigation)

* Position: sticky, top 0
* Background: surface
* Border bottom: default border
* Padding: `--space-4` vertical
* Z-index: 100

**Logo**
* Font: `New Zelek` display, 24px
* Text transform: uppercase
* Letter-spacing: 2px
* Accent span in Gundam blue

### Back Link

* Font: `Roboto Mono`, 12px, uppercase
* Letter-spacing: 1px
* Color: Gundam blue
* Hover: Gundam red

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

### Implemented Animations

**fadeSlideUp**
* Used for: Hero text, page entrance elements
* Duration: 0.5–0.6s
* Easing: ease-out
* Transform: translateY(20px) → translateY(0)
* Opacity: 0 → 1

**floatIn**
* Used for: Board card entrance on homepage
* Duration: 0.8s
* Easing: cubic-bezier(0.16, 1, 0.3, 1)
* Transform: translateY(40px) scale(0.95) → translateY(0) scale(1)

**float**
* Used for: Subtle continuous board card drift
* Duration: 5–7.5s (varies per card)
* Easing: ease-in-out
* Transform: translateY(0) → translateY(-8px) → translateY(0)
* Infinite loop

**particleDrift**
* Used for: Particle background (cyan, blue, pink)
* Duration: linear, infinite
* Transform: translate3d(-12vw, var(--start-y), 0) → translate3d(112vw, calc(var(--start-y) + var(--drift-y)), 0)
* Opacity fades in at 7% and out at 92%

**grainShift**
* Used for: Grain overlay texture
* Duration: 0.32s
* Easing: steps(2)
* Transform: translate(0, 0) → translate(2px, 1px)
* Infinite loop

### Timing (Actual Values)

* Board card entrance: `0.8s cubic-bezier(0.16, 1, 0.3, 1)`
* Hero entrance: `0.6s ease-out`
* Hover transitions: `0.3s ease-out`
* Board card hover scale: `0.4s cubic-bezier(0.16, 1, 0.3, 1)`
* Ghost canvas interpolation: 9% per frame (~0.09 lerp factor)
* Float animation: `5s–7.5s ease-in-out infinite`

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
  src: url("./assets/New Zelek.ttf") format("truetype");
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
}
```

---

## 14. Example UI Recipes

### Homepage (Board Selection)

* Light gray background (`--color-bg`)
* Centered hero with `New Zelek` display title
* Board grid with 3 sizes (large, medium, small)
* Board cards with image swap on hover
* Labels fade in on hover
* Ghost canvas trail follows cursor
* Grain overlay adds subtle texture

### Content Page Layout (Editorial Style)

* Clean, minimal layout inspired by dakotacsk.com
* Content width: 720px max (optimal reading)
* Sticky header with logo
* Page header: badge + title + subtitle (left-aligned, no card borders)
* Sections flow directly without card backgrounds
* Section titles: simple uppercase text, no underlines
* Stats displayed as large numbers with top border separator
* Footer in dark navy

### Homepage Hero

* `New Zelek` display headline
* Blue accent on "Models" text
* `Jost` uppercase subtitle in steel color
* `fadeSlideUp` entrance animation
* Responsive clamp sizing (48–88px)

---

## 15. Do / Don’t

### Do

* Use hard-edged color blocking
* Build components like modular armor panels
* Mix white space with strong graphic accents
* Use red and yellow as controlled accents
* Treat `New Zelek` as a signature display asset

### Don't

* Make every section loud at once
* Overuse diagonal shapes in small UI areas
* Use soft glassmorphism or pastel gradients
* Put long paragraphs inside heavily decorated blocks
* Let decorative motifs hurt readability
* Use accent fonts for core UX text

---

## 16. One-Sentence Style Summary

A high-contrast web system that blends vintage racing decal energy with Gundam primary-color armor paneling. Custom display font for brand moments, modern sans-serif typography for everything else.

