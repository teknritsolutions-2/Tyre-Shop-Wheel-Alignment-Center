# TrueTrack final refinement QA report

QA date: 4 September 2026

## Rendered test scope

- Pages: Home 1, Home 2, About, Services, Service Details, Brands, Pricing, Contact, FAQ, Privacy, Terms and 404.
- Widths: 1440, 1280, 1024, 900, 820, 768, 700, 640, 430, 414, 390, 375 and 360 CSS pixels.
- Modes: light/LTR, light/RTL, dark/LTR and dark/RTL.
- Total: 624 browser-rendered page/width/mode checks in headless Brave, with 0 failures.
- The matrix checked image loading and media fit, horizontal overflow, final CTA count, process layout, FAQ count, carousel mode, sticky navigation, responsive navigation and map sizing.
- Targeted screenshots covered the changed hero, featured service, alignment image, process grid, tyre-condition image, service journey, workshop-quality image, About philosophy, puncture state, four-stage sequence, equipment panel, FAQ and final CTA.

## Final acceptance report

| Check | Result | Evidence |
| --- | --- | --- |
| FEATURED SERVICE TEXT CONTRAST | PASS | White overlay copy remains readable over the image in desktop, tablet and mobile screenshots. |
| ALIGNMENT IMAGE | PASS | The Home 1 technical panel now uses a real car-on-alignment-rack photograph. |
| GENERIC WHEEL DIAGRAMS REMOVED | PASS | Decorative wheel/geometry nodes and their CSS were removed; no matching production classes remain. |
| PROCESS NUMBER ALIGNMENT | PASS | Explicit 01–04 number elements align with their content columns in 4-, 2- and 1-column layouts, including RTL. |
| TYRE CONDITION IMAGE WRAPPER | PASS | Wrapper and image bounds match at mobile and desktop sizes with no empty lower region. |
| HOME 2 HERO IMAGE | PASS | A unique modern service-bay/car photograph keeps its vehicle focal point at desktop and mobile crops. |
| SERVICE JOURNEY VISUAL | PASS | The generic diagram was replaced by a real wheel-balancing machine and monitor photograph. |
| WORKSHOP QUALITY IMAGE WRAPPER | PASS | Content-driven 3:2 media sizing removes the blank lower area; the full technician head and tyre remain visible. |
| SERVICE PHILOSOPHY VISUAL | PASS | About now uses real precision wheel-equipment photography. |
| PUNCTURE VISUAL | PASS | The puncture detail state loads a dedicated landscape technician-and-tyre repair photograph. |
| FOUR-STAGE SEQUENCE | PASS | A responsive four-step timeline is paired with a real wheel-service photograph. |
| RELATED EQUIPMENT SPACE | PASS | The equipment panel is compact at desktop and tablet widths without a large empty card region. |
| FAQ CONTENT | PASS | Service Details contains five concise FAQ rows and the accordion interaction passes. |
| GLOBAL CTA CONSISTENCY | PASS | Services, Service Details, Brands, Pricing, About and FAQ each contain one shared final CTA pattern. |
| CTA TO FOOTER SPACING | PASS | The final CTA uses a controlled bottom gap before the footer in both themes. |
| NEW LOGO | PASS | Header, footer and status surfaces use the simplified circular tyre, two guide lines and central T mark. |
| FAVICON | PASS | The favicon uses the same simplified mark and is linked across all rendered pages. |
| IMAGE UNIQUE USAGE | PASS | The image inventory assigns each meaningful photograph to one logical placement. |
| IMAGE CROPPING | PASS | Targeted and matrix renders keep relevant tyre, wheel, car and equipment content in frame. |
| HUMAN HEAD CROPPING | PASS | Featured, workshop-quality, balancing and puncture technician crops retain complete heads. |
| EMPTY CARD SPACE | PASS | Changed media cards and equipment panels use content-driven heights with no unintended blank regions. |
| SECTION SPACING LIGHT | PASS | All 12 pages pass the full width matrix in light mode. |
| SECTION SPACING DARK | PASS | All 12 pages pass the full width matrix in dark mode. |
| LIGHT CONTRAST | PASS | Targeted screenshots show readable primary, supporting and over-image copy in light mode. |
| DARK CONTRAST | PASS | Targeted screenshots show readable primary, supporting and control states in dark mode. |
| DESKTOP REVEAL | PASS | Desktop service-card layout and reveal behavior remain active. |
| TABLET SLIDERS | PASS | Two-up carousel mode, controls and one-step movement pass at tablet widths. |
| MOBILE SLIDERS | PASS | One-up carousel mode, controls and one-step movement pass at mobile widths. |
| TABLET QA | PASS | 640, 700, 768, 820, 900 and 1024 widths pass in both themes and both directions. |
| MOBILE QA | PASS | 360, 375, 390, 414 and 430 widths pass in both themes and both directions. |
| STICKY NAV | PASS | The shared header remains fixed to the viewport top during scroll checks. |
| THEME ICON | PASS | Moon appears in light mode and sun in dark mode; switching passes. |
| RTL | PASS | All matrix routes pass RTL; the tablet/mobile drawer hides and opens from the correct edge. |
| MAP | PASS | The contact map fills its card at responsive heights without overflow. |
| NO HORIZONTAL OVERFLOW | PASS | Document overflow remained 0px in every one of the 624 rendered checks. |

## Interaction and integrity results

- PASS: desktop dropdown, theme switch, direction switch, drawer open/close, carousel movement, FAQ expansion and appointment-form validation.
- PASS: the dynamic puncture route loads `puncture-check.jpg`; the Service Details FAQ count is five.
- PASS: `assets/js/main.js` and `assets/js/components.js` pass `node --check`.
- PASS: all images loaded in the rendered matrix and the final matrix recorded 0 failures.
