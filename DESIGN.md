---
name: Nocturne Atelier
colors:
  surface: '#07151c'
  surface-dim: '#07151c'
  surface-bright: '#2d3b43'
  surface-container-lowest: '#031017'
  surface-container-low: '#0f1d25'
  surface-container: '#142129'
  surface-container-high: '#1e2c33'
  surface-container-highest: '#29373e'
  on-surface: '#d6e5ef'
  on-surface-variant: '#c3c7c6'
  inverse-surface: '#d6e5ef'
  inverse-on-surface: '#25323a'
  outline: '#8d9191'
  outline-variant: '#434847'
  surface-tint: '#c3c7c6'
  primary: '#e8eceb'
  on-primary: '#2d3131'
  primary-container: '#ccd0cf'
  on-primary-container: '#545958'
  inverse-primary: '#5b5f5f'
  secondary: '#b6c9d9'
  on-secondary: '#20323f'
  secondary-container: '#394b59'
  on-secondary-container: '#a8bbcb'
  tertiary: '#e1eef1'
  on-tertiary: '#263235'
  tertiary-container: '#c5d2d5'
  on-tertiary-container: '#4e5a5d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dfe3e2'
  primary-fixed-dim: '#c3c7c6'
  on-primary-fixed: '#181c1c'
  on-primary-fixed-variant: '#434847'
  secondary-fixed: '#d2e5f6'
  secondary-fixed-dim: '#b6c9d9'
  on-secondary-fixed: '#0a1d29'
  on-secondary-fixed-variant: '#374956'
  tertiary-fixed: '#d8e5e8'
  tertiary-fixed-dim: '#bcc9cc'
  on-tertiary-fixed: '#111d20'
  on-tertiary-fixed-variant: '#3d494c'
  background: '#07151c'
  on-background: '#d6e5ef'
  surface-variant: '#29373e'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system embodies quiet luxury, architectural precision, and editorial sophistication. Crafted primarily for executive showcases, premium architecture, design portfolios, and bespoke digital artifacts, it communicates deliberate restraint, high intellectual craft, and uncompromised authority. 

Drawing from modern minimalism with high-end editorial and tonal depth influences, the aesthetic relies on subtle luminescent gradations, surgical typography, and whisper-thin hairline borders rather than gratuitous embellishment. Interactions feel deliberate, smooth, and grounded. The interface recedes into an atmospheric backdrop, letting the curation of work, typography, and precise structural alignment carry visual command.

## Colors
The palette is derived directly from layered twilight gradients: deep oceanic navies, mineral slate, weathered zinc, and crisp pale silver. 

- **Primary Canvas & Surfaces (`#06141B`, `#11212D`)**: The bedrock of the interface. `#06141B` serves as the abyssal base canvas, with `#11212D` layering elevated surfaces, cards, and navigation bars.
- **Secondary Accent & Boundary (`#253745`, `#4A5C6A`)**: Used for muted container fills, secondary interactive buttons, borders, divider hairlines, and hover states. `#4A5C6A` provides precise structure without creating stark, jarring lines.
- **Tertiary Accent & Muted Typography (`#9BA8AB`)**: A cool sage/slate gray tailored for metadata, subheadings, labels, secondary icons, and muted editorial captions.
- **Primary Text & High-Light (`#CCD0CF`)**: Pale silver/soft off-white that acts as the primary foreground element. It delivers sharp, crystalline contrast against dark surfaces while preventing the harsh eye fatigue of pure `#FFFFFF`.

## Typography
The typography system balances sculptural modernity with technical rigor. 

- **Headlines (`Plus Jakarta Sans`)**: Clean, contemporary geometric sans with nuanced humanist curves. In large display sizes, negative tracking tightens the layout to evoke high-end editorial publications and architectural folios.
- **Body Text (`Inter`)**: Chosen for its neutral, highly legible proportions across body copy, biographical details, and project case studies.
- **Labels & Metadata (`JetBrains Mono`)**: Introduces a calibrated technical foil to the fluid sans-serif headings. Set in uppercase with wide letter spacing, it handles categorizations, dates, dimensions, coordinates, and indexing tags.

## Layout & Spacing
The layout adheres to a structured 12-column grid system on desktop (max content width 1320px) and collapses to a 4-column system on mobile viewports. Rhythms are generous, providing ample breathing room to amplify the sense of curated calm.

- **Desktop (1024px+)**: 12 columns with 1.5rem gutters and 3rem side margins. Asymmetrical column pairings (e.g., 4 columns for fixed project indices, 8 columns for expansive media showcases) reinforce the gallery feeling.
- **Tablet (768px - 1023px)**: 8 columns with 1.25rem gutters and 2rem outer margins.
- **Mobile (Below 768px)**: 4 columns with 1rem gutters and 1.25rem canvas margins. Content reflows vertically into singular visual narratives.

## Elevation & Depth
Depth is constructed through tonal surface tiering and soft, tinted ambient illumination rather than harsh drop shadows.

- **Base Layer (0dp)**: Root surface `#06141B`.
- **Level 1 (Card / Container)**: Surface `#11212D` framed with a 1px hairline border of `rgba(74, 92, 106, 0.45)`.
- **Level 2 (Hover / Floating Cards / Dropdowns)**: Surface `#182A38` elevated with an ultra-diffused atmospheric shadow: `0 16px 36px -8px rgba(6, 20, 27, 0.8), 0 0 0 1px rgba(155, 168, 171, 0.15)`.
- **Frosted Overlays (Modals / Sticky Navigation)**: `rgba(17, 33, 45, 0.75)` combined with `backdrop-filter: blur(16px)` and a subtle bottom border of `rgba(204, 208, 207, 0.08)`.

## Shapes
A subtle, refined corner curvature (`0.25rem` / `4px` base) dominates the interface, nodding to classic industrial product design, mid-century architectural frames, and precision engineering. 

- **Interactive Elements & Cards**: Use base radius (`0.25rem`) to maintain crisp, architectural silhouettes.
- **Larger Modular Panels (`rounded-lg`)**: Use `0.5rem` (`8px`) for hero containers and featured case presentation viewports.
- **System Tags & Pill Badges**: Use full rounded caps (`9999px`) purely for metadata tags and status indicators to offer organic visual relief against orthogonal grids.

## Components

### Buttons
- **Primary**: Solid `#CCD0CF` background with `#06141B` text in `Plus Jakarta Sans` 500. Subtle hover shifts to `#9BA8AB` with `0 0 12px rgba(204, 208, 207, 0.2)`.
- **Secondary / Ghost**: Transparent fill with a 1px border in `#4A5C6A` and `#CCD0CF` text. Hover transitions background to `rgba(74, 92, 106, 0.25)` and border to `#9BA8AB`.
- **Tertiary / Link**: `#9BA8AB` text with an offset underline of `rgba(155, 168, 171, 0.4)`. Transitions to `#CCD0CF` on hover with a full 100% width underline transition.

### Chips & Badges
- Defined using `JetBrains Mono` uppercase labels. Background is `#11212D` with a delicate 1px border of `rgba(155, 168, 171, 0.25)` and text in `#9BA8AB`. Full pill radius (`9999px`).

### Cards & Work Items
- Constructed with `#11212D` surfaces and a 1px border in `rgba(74, 92, 106, 0.4)`. 
- Media preview layers inside cards utilize a slight desaturated overlay that gracefully animates to full fidelity on hover.
- Internal padding adheres strictly to `space-lg` (`1.5rem`).

### Form Inputs & Textareas
- Inset field styling with a `#06141B` fill, surrounded by a 1px border in `#253745`.
- Text color is `#CCD0CF` with placeholder text in `rgba(155, 168, 171, 0.5)`.
- Focus state illuminates border to `#9BA8AB` accompanied by a soft, outer aura of `0 0 0 3px rgba(74, 92, 106, 0.25)`.

### Selection Controls (Checkboxes & Radios)
- Base box: `#11212D` with a 1px `#4A5C6A` border.
- Selected state: Fill with `#CCD0CF` with glyph or inner dot rendered in `#06141B`.

### Lists & Case Indices
- Clean tabular rows separated by 1px rules in `rgba(74, 92, 106, 0.3)`.
- Metadata sits on the right aligned with `JetBrains Mono` in `#9BA8AB`, while project titles occupy the left in `#CCD0CF`. Hovering highlights the entire row with a subtle wash of `rgba(37, 55, 69, 0.35)`.