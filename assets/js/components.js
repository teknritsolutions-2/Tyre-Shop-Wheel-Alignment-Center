(() => {
  const brand = `
    <svg class="brand-mark" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <defs>
        <mask id="brand-tread-cutout">
          <rect width="100" height="100" fill="#ffffff" />
          <path d="M 77.6 73.1 A 36 36 0 1 1 81.5 35.8" stroke="#000000" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M 81.5 84.9 L 78.3 72.2 L 65.8 69.4 M 62.7 95.3 L 65.4 82.5 L 55.5 74.4 M 41.1 96.2 L 49.3 86.0 L 44.1 74.3 M 21.5 87.4 L 33.3 81.9 L 33.9 69.1 M 7.8 70.7 L 20.8 71.1 L 27.0 59.9 M 3.0 49.7 L 14.5 55.9 L 25.0 48.6 M 8.1 28.8 L 15.6 39.4 L 28.3 37.6 M 22.0 12.3 L 23.9 25.2 L 36.1 29.2 M 41.7 3.7 L 37.8 16.1 L 46.8 25.2 M 63.2 4.9 L 54.2 14.2 L 58.2 26.4 M 82.0 15.6 L 69.7 19.9 L 67.9 32.5" stroke="#000000" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
        </mask>
      </defs>
      <path class="brand-tyre-track" d="M 77.6 73.1 A 36 36 0 1 1 75.5 24.5" stroke="currentColor" stroke-width="18" stroke-linecap="round" mask="url(#brand-tread-cutout)"/>
      <path class="brand-tyre-accent" d="M 75.5 24.5 A 36 36 0 0 1 81.5 35.8" stroke="#c99022" stroke-width="18" stroke-linecap="round" mask="url(#brand-tread-cutout)"/>
    </svg>
    <span class="brand-name">TrueTrack</span>`;

  const themeIcons = `
    <svg class="theme-icon theme-icon-moon" data-theme-icon="moon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path></svg>
    <svg class="theme-icon theme-icon-sun" data-theme-icon="sun" viewBox="0 0 24 24" aria-hidden="true" focusable="false" hidden><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"></path></svg>`;

  class SiteHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <a class="skip-link" href="#main-content">Skip to content</a>
        <header class="site-header">
          <div class="container nav-shell">
            <a class="brand" href="index.html" aria-label="TrueTrack Tyres home">${brand}</a>
            <nav class="desktop-nav" aria-label="Primary navigation">
              <div class="home-menu">
                <button class="dropdown-trigger" type="button" data-home-trigger aria-expanded="false" aria-controls="home-dropdown">Home <span class="chevron" aria-hidden="true">▾</span></button>
                <div class="dropdown-panel" id="home-dropdown" data-home-panel>
                  <a href="index.html">Home Page 1</a>
                  <a href="home-2.html">Home Page 2</a>
                </div>
              </div>
              <a class="nav-link" href="about.html" data-nav-page="about.html">About</a>
              <a class="nav-link" href="services.html" data-nav-page="services.html,service-details.html">Services</a>
              <a class="nav-link" href="brands.html" data-nav-page="brands.html">Brands</a>
              <a class="nav-link" href="pricing.html" data-nav-page="pricing.html">Pricing</a>
              <a class="nav-link" href="contact.html" data-nav-page="contact.html">Contact</a>
            </nav>
            <div class="nav-utilities">
              <button class="icon-btn" type="button" data-theme-toggle aria-label="Switch to dark mode">${themeIcons}</button>
              <button class="icon-btn" type="button" data-dir-toggle aria-label="Switch to right-to-left direction">RTL</button>
              <a class="btn btn-primary" href="contact.html#appointment">Book Appointment</a>
            </div>
            <button class="menu-btn" type="button" data-menu-open aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation"><span class="menu-lines" aria-hidden="true"></span></button>
          </div>
        </header>
        <div class="drawer-backdrop" data-drawer-backdrop></div>
        <aside class="mobile-drawer" id="mobile-menu" data-drawer aria-hidden="true" aria-label="Mobile navigation" inert>
          <div class="drawer-head">
            <a class="brand" href="index.html" aria-label="TrueTrack Tyres home">${brand}</a>
            <button class="icon-btn" type="button" data-menu-close aria-label="Close navigation">×</button>
          </div>
          <nav class="drawer-nav" aria-label="Mobile navigation links">
            <a href="index.html">Home Page 1</a><a href="home-2.html">Home Page 2</a>
            <a href="about.html">About</a><a href="services.html">Services</a><a href="brands.html">Brands</a><a href="pricing.html">Pricing</a><a href="contact.html">Contact</a>
            <a href="contact.html#appointment">Book Appointment</a>
          </nav>
          <div class="drawer-controls">
            <div><span class="control-label">DISPLAY</span><div class="segmented"><button class="segment-btn" type="button" data-theme-choice="light" aria-pressed="true">Light</button><button class="segment-btn" type="button" data-theme-choice="dark" aria-pressed="false">Dark</button></div></div>
            <div><span class="control-label">DIRECTION</span><div class="segmented"><button class="segment-btn" type="button" data-dir-choice="ltr" aria-pressed="true">LTR</button><button class="segment-btn" type="button" data-dir-choice="rtl" aria-pressed="false">RTL</button></div></div>
          </div>
        </aside>`;
    }
  }

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="site-footer">
          <div class="container footer-grid">
            <div class="footer-brand"><a class="brand" href="index.html" aria-label="TrueTrack Tyres home">${brand}</a><p>Practical tyre care, computerised alignment and clear service guidance for everyday drivers.</p></div>
            <div><h2 class="footer-title">Navigation</h2><div class="footer-links"><a href="index.html">Home Page 1</a><a href="home-2.html">Home Page 2</a><a href="about.html">About</a><a href="services.html">Services</a><a href="brands.html">Brands</a><a href="pricing.html">Pricing</a><a href="contact.html">Contact</a></div></div>
            <div><h2 class="footer-title">Services</h2><div class="footer-links"><a href="service-details.html?service=fitting">Tyre Fitting</a><a href="service-details.html?service=alignment">Wheel Alignment</a><a href="service-details.html?service=balancing">Wheel Balancing</a><a href="service-details.html?service=puncture">Puncture Repair</a><a href="service-details.html?service=nitrogen">Nitrogen Filling</a></div></div>
            <div><h2 class="footer-title">Visit / Contact</h2><div class="footer-contact"><p><a href="tel:+4310000000">+43 1 000 0000</a></p><p><a href="mailto:hello@truetracktyres.example">hello@truetracktyres.example</a></p><p>Triester Straße 120<br>1100 Wien, Austria</p><p>Mon–Sat: 8:30 AM–7:30 PM<br>Sun: 9:00 AM–5:00 PM</p></div></div>
            <div><h2 class="footer-title">Info</h2><div class="footer-links"><a href="faq.html">FAQ</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a></div></div>
          </div>
          <div class="container footer-bottom"><span>© <span data-year></span> TrueTrack Tyres. All rights reserved.</span><div class="footer-bottom-links"><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a></div></div>
        </footer>
        <button class="scroll-top" type="button" data-scroll-top aria-label="Scroll to top">↑</button>`;
    }
  }

  customElements.define("site-header", SiteHeader);
  customElements.define("site-footer", SiteFooter);
})();
