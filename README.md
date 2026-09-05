# TrueTrack Tyres & Wheel Alignment Center

A responsive, high-performance static website for TrueTrack Tyres, a multi-brand tyre shop and computerised wheel alignment centre.

## Overview
TrueTrack Tyres provides drivers with practical tyre care, computerized wheel alignment, electronic dynamic balancing, certified puncture repair, and nitrogen inflation. The website features an accessible, responsive design with full Light/Dark theme switching and bi-directional Left-to-Right (LTR) and Right-to-Left (RTL) language support.

## Key Pages
- **Home Page 1 (`pages/index.html`)**: Flagship homepage featuring technical alignment rack spotlight and tyre replacement guide.
- **Home Page 2 (`pages/home-2.html`)**: Alternative editorial landing page with vehicle category breakdowns.
- **About Us (`pages/about.html`)**: Workshop philosophy, workshop equipment standards, and technician certifications.
- **Services (`pages/services.html`)**: Full portfolio of core tyre care services.
- **Service Details (`pages/service-details.html`)**: Dynamic query-driven service deep dive (`?service=alignment|fitting|balancing|puncture|nitrogen`).
- **Brands (`pages/brands.html`)**: Multi-brand inventory showcase and tyre selection criteria.
- **Pricing (`pages/pricing.html`)**: Transparent, itemized workshop pricing in USD with booking guidance.
- **Contact & Booking (`pages/contact.html`)**: Workshop address, opening hours, interactive map, and appointment request form.
- **FAQ (`pages/faq.html`)**: Common driver questions with accessible accordions.
- **Privacy Policy (`pages/privacy.html`)** & **Terms of Service (`pages/terms.html`)**: Plain-language customer policies.
- **404 Not Found (`pages/404.html`)**: Custom error page with navigational recovery links.
- **Coming Soon (`pages/coming-soon.html`)**: Standby status page for upcoming customer services.

## Technologies
- **Markup**: Semantic HTML5 with microdata schema and accessibility attributes (ARIA, focus management, keyboard trapping).
- **Styling**: Modern vanilla CSS using custom properties (CSS variables), CSS Grid, and Flexbox with zero framework dependencies.
- **Interactions**: Vanilla ECMAScript with Web Components for shared navigation and footer shells, smooth carousel touch/swipe controls, and accessible client-side form validation.
- **Branding**: Lightweight vector SVG brand marks and favicons.

## Project Structure
```
Tyre Shop & Wheel Alignment Center/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── dark-mode.css
│   │   └── rtl.css
│   ├── js/
│   │   ├── main.js
│   │   └── plugins/
│   ├── images/
│   └── fonts/
├── pages/
│   ├── index.html
│   ├── home-2.html
│   ├── about.html
│   ├── services.html
│   ├── service-details.html
│   ├── brands.html
│   ├── pricing.html
│   ├── contact.html
│   ├── faq.html
│   ├── privacy.html
│   ├── terms.html
│   ├── 404.html
│   └── coming-soon.html
├── documentation/
│   ├── project-overview.md
│   ├── IMAGE-USAGE.md
│   └── IMAGE-CREDITS.md
└── README.md
```

## Local Usage
To view the site locally, serve the project folder using any static HTTP server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js npx serve
npx serve .
```

Then navigate to `http://localhost:8000/pages/index.html` in your web browser.
