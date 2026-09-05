# TrueTrack Tyres — Technical Documentation

## Project Summary
TrueTrack Tyres is a modern, responsive static website for a multi-brand tyre retail and computerised wheel alignment service center. The project is built using semantic HTML5, vanilla CSS, and vanilla JavaScript without external runtime dependencies or build tools.

## Key Features
- **Design & Layout**: Mobile-first responsive layout tested across 360px–1440px+ viewports.
- **Theme Support**: Integrated Light and Dark mode with persistence in local storage and automatic system preference detection.
- **Bi-Directional Support**: Full LTR (Left-to-Right) and RTL (Right-to-Left) directional support with mirror layout adjustments.
- **Dynamic Services Detail**: Interactive query-driven service specification (`service-details.html?service=...`) supporting dynamic content rendering for all five core tyre care offerings.
- **Accessible Interactions**: Keyboard-navigable accessible mobile drawer, dropdown navigation, FAQ accordions, and interactive appointment validation.
- **Zero Build Requirement**: Pure static architecture ready for immediate deployment on any static hosting environment or local web server.

## Directory Structure
```
Tyre Shop & Wheel Alignment Center/
├── assets/
│   ├── css/
│   │   ├── style.css         # Primary layout, typography, components, and responsive rules
│   │   ├── dark-mode.css     # Dark mode color tokens and surface overrides
│   │   └── rtl.css           # Right-to-left layout and transform overrides
│   ├── js/
│   │   ├── main.js           # Core site controller, custom elements, theme/direction logic
│   │   └── plugins/          # Third-party vendor scripts (if applicable)
│   ├── images/               # High-resolution optimized photography and SVG brand mark
│   └── fonts/                # Local webfont assets (if applicable)
├── pages/                    # Complete suite of 13 public HTML pages
├── documentation/            # Technical delivery documentation and media credits
└── README.md                 # Project orientation and quick-start guide
```

## Public Pages
1. `index.html`: Home Page 1 — Primary flagship landing page featuring technical alignment spotlight and replacement guide.
2. `home-2.html`: Home Page 2 — Alternative editorial layout focusing on vehicle categories and precision measurement.
3. `about.html`: About Us — Workshop philosophy, technician standards, and workshop equipment standards.
4. `services.html`: Services Overview — Comprehensive tyre fitting, computerised alignment, balancing, puncture repair, and nitrogen filling cards.
5. `service-details.html`: Detailed Service Specifications — Interactive inspection checklist, pricing, timeline, and FAQs.
6. `brands.html`: Brands & Tyres — Multi-brand stock overview and driver selection guide.
7. `pricing.html`: Transparent Pricing — Clear service pricing matrix in USD and booking guidance.
8. `contact.html`: Contact & Appointments — Workshop address, operating hours, interactive map, and appointment booking form.
9. `faq.html`: Frequently Asked Questions — Categorized driver FAQs with accessible accordions.
10. `privacy.html`: Privacy Policy — Plain-language data handling policy.
11. `terms.html`: Terms & Conditions — Transparent terms of service and guarantee policies.
12. `404.html`: Custom Error Page — Clear recovery navigation back to primary pages.
13. `coming-soon.html`: Status Page — Temporary placeholder for forthcoming workshop features.
