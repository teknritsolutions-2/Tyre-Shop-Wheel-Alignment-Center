(() => {
  "use strict";

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

  if (!customElements.get("site-header")) {
    customElements.define("site-header", SiteHeader);
  }
  if (!customElements.get("site-footer")) {
    customElements.define("site-footer", SiteFooter);
  }

  const root = document.documentElement;
  const body = document.body;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  const safeStore = {
    get(key) {
      try { return localStorage.getItem(key); } catch (_) { return null; }
    },
    set(key, value) {
      try { localStorage.setItem(key, value); } catch (_) { /* preference remains session-only */ }
    }
  };

  function setTheme(theme) {
    const next = theme === "dark" ? "dark" : "light";
    root.dataset.theme = next;
    safeStore.set("truetrack-theme", next);
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const target = next === "dark" ? "light" : "dark";
      button.setAttribute("aria-label", `Switch to ${target} mode`);
      button.setAttribute("title", `Switch to ${target} mode`);
      const moon = button.querySelector('[data-theme-icon="moon"]');
      const sun = button.querySelector('[data-theme-icon="sun"]');
      if (moon) moon.hidden = next !== "light";
      if (sun) sun.hidden = next !== "dark";
    });
    document.querySelectorAll("[data-theme-choice]").forEach((button) => {
      const active = button.dataset.themeChoice === next;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function setDirection(direction) {
    const next = direction === "rtl" ? "rtl" : "ltr";
    root.dir = next;
    root.dataset.dir = next;
    safeStore.set("truetrack-direction", next);
    document.querySelectorAll("[data-dir-toggle]").forEach((button) => {
      button.textContent = next === "rtl" ? "LTR" : "RTL";
      button.setAttribute("aria-label", `Switch to ${next === "rtl" ? "left-to-right" : "right-to-left"} direction`);
    });
    document.querySelectorAll("[data-dir-choice]").forEach((button) => {
      const active = button.dataset.dirChoice === next;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    window.dispatchEvent(new CustomEvent("directionchange"));
  }

  const urlParams = new URLSearchParams(window.location.search);
  const initialTheme = urlParams.get("theme") || safeStore.get("truetrack-theme") || root.dataset.theme || "light";
  const initialDir = urlParams.get("dir") || safeStore.get("truetrack-direction") || root.dir || "ltr";
  setTheme(initialTheme);
  setDirection(initialDir);

  document.addEventListener("click", (event) => {
    const themeToggle = event.target.closest("[data-theme-toggle]");
    if (themeToggle) setTheme(root.dataset.theme === "dark" ? "light" : "dark");

    const themeChoice = event.target.closest("[data-theme-choice]");
    if (themeChoice) setTheme(themeChoice.dataset.themeChoice);

    const dirToggle = event.target.closest("[data-dir-toggle]");
    if (dirToggle) setDirection(root.dir === "rtl" ? "ltr" : "rtl");

    const dirChoice = event.target.closest("[data-dir-choice]");
    if (dirChoice) setDirection(dirChoice.dataset.dirChoice);
  });

  // Desktop Home menu
  const homeTrigger = document.querySelector("[data-home-trigger]");
  const homePanel = document.querySelector("[data-home-panel]");
  function closeHomeMenu() {
    if (!homeTrigger || !homePanel) return;
    homeTrigger.setAttribute("aria-expanded", "false");
    homePanel.classList.remove("open");
  }
  function openHomeMenu() {
    if (!homeTrigger || !homePanel) return;
    homeTrigger.setAttribute("aria-expanded", "true");
    homePanel.classList.add("open");
  }
  homeTrigger?.addEventListener("click", (event) => {
    event.stopPropagation();
    homePanel.classList.contains("open") ? closeHomeMenu() : openHomeMenu();
  });
  homePanel?.addEventListener("click", (event) => event.stopPropagation());
  document.addEventListener("click", closeHomeMenu);

  // Off-canvas navigation
  const menuButton = document.querySelector("[data-menu-open]");
  const drawer = document.querySelector("[data-drawer]");
  const drawerClose = document.querySelector("[data-menu-close]");
  const backdrop = document.querySelector("[data-drawer-backdrop]");
  let priorFocus = null;

  function openDrawer() {
    if (!drawer || !menuButton) return;
    priorFocus = document.activeElement;
    drawer.classList.add("open");
    backdrop?.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    drawer.inert = false;
    menuButton.setAttribute("aria-expanded", "true");
    body.classList.add("drawer-open");
    drawerClose?.focus();
  }
  function closeDrawer() {
    if (!drawer || !menuButton) return;
    drawer.classList.remove("open");
    backdrop?.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    drawer.inert = true;
    menuButton.setAttribute("aria-expanded", "false");
    body.classList.remove("drawer-open");
    if (priorFocus instanceof HTMLElement && priorFocus.offsetParent !== null) priorFocus.focus();
  }
  menuButton?.addEventListener("click", openDrawer);
  drawerClose?.addEventListener("click", closeDrawer);
  backdrop?.addEventListener("click", closeDrawer);
  drawer?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeDrawer));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeHomeMenu();
      if (drawer?.classList.contains("open")) closeDrawer();
    }
    if (event.key === "Tab" && drawer?.classList.contains("open")) {
      const items = [...drawer.querySelectorAll(focusableSelector)].filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  const desktopMq = window.matchMedia("(min-width: 1025px)");
  desktopMq.addEventListener("change", (event) => { if (event.matches) closeDrawer(); });

  // Mark current primary navigation item.
  const filename = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav-page]").forEach((link) => {
    const pages = link.dataset.navPage.split(",");
    if (pages.includes(filename)) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
  if (["index.html", "home-2.html"].includes(filename)) homeTrigger?.classList.add("active");

  // Reveal motion: card internals remain separate from moving tracks.
  const revealElements = [...document.querySelectorAll(".reveal, .reveal-inner")];
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: "0px 0px -30px" });
    revealElements.forEach((el) => observer.observe(el));
  }

  class ResponsiveCarousel {
    constructor(element) {
      this.element = element;
      this.viewport = element.querySelector(".carousel-viewport");
      this.track = element.querySelector(".carousel-track");
      this.slides = [...element.querySelectorAll(".slide")];
      this.prev = element.querySelector("[data-carousel-prev]");
      this.next = element.querySelector("[data-carousel-next]");
      this.index = 0;
      this.perView = 1;
      this.timer = null;
      this.userPaused = false;
      this.touchStart = 0;
      this.bind();
      this.refresh();
    }

    bind() {
      this.prev?.addEventListener("click", () => { this.move(-1); this.pauseTemporarily(); });
      this.next?.addEventListener("click", () => { this.move(1); this.pauseTemporarily(); });
      this.element.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") { event.preventDefault(); this.move(root.dir === "rtl" ? -1 : 1); this.pauseTemporarily(); }
        if (event.key === "ArrowLeft") { event.preventDefault(); this.move(root.dir === "rtl" ? 1 : -1); this.pauseTemporarily(); }
      });
      this.element.addEventListener("mouseenter", () => this.stop());
      this.element.addEventListener("mouseleave", () => this.start());
      this.element.addEventListener("focusin", () => this.stop());
      this.element.addEventListener("focusout", (event) => { if (!this.element.contains(event.relatedTarget)) this.start(); });
      this.viewport?.addEventListener("touchstart", (event) => { this.touchStart = event.touches[0].clientX; this.stop(); }, { passive: true });
      this.viewport?.addEventListener("touchend", (event) => {
        const delta = event.changedTouches[0].clientX - this.touchStart;
        if (Math.abs(delta) > 45) this.move((delta < 0) === (root.dir === "ltr") ? 1 : -1);
        this.pauseTemporarily();
      }, { passive: true });
    }

    maxIndex() { return Math.max(0, this.slides.length - this.perView); }

    move(delta) {
      if (desktopMq.matches) return;
      const max = this.maxIndex();
      this.index += delta;
      if (this.index > max) this.index = 0;
      if (this.index < 0) this.index = max;
      this.render();
    }

    render() {
      if (desktopMq.matches || !this.viewport || !this.track || !this.slides[0]) {
        if (this.track) this.track.style.transform = "";
        return;
      }
      const gap = parseFloat(getComputedStyle(this.track).columnGap || getComputedStyle(this.track).gap) || 0;
      const amount = this.index * (this.slides[0].getBoundingClientRect().width + gap);
      const signed = root.dir === "rtl" ? amount : -amount;
      this.track.style.transform = `translateX(${signed}px)`;
      if (this.prev) this.prev.setAttribute("aria-label", "Show previous cards");
      if (this.next) this.next.setAttribute("aria-label", "Show next cards");
    }

    refresh() {
      this.perView = desktopMq.matches ? 3 : (window.innerWidth >= 640 ? 2 : 1);
      this.index = Math.min(this.index, this.maxIndex());
      this.render();
      desktopMq.matches ? this.stop() : this.start();
    }

    start() {
      this.stop();
      if (desktopMq.matches || reducedMotion.matches || this.userPaused || this.slides.length <= this.perView) return;
      this.timer = window.setInterval(() => this.move(1), 5000);
    }

    stop() {
      if (this.timer) window.clearInterval(this.timer);
      this.timer = null;
    }

    pauseTemporarily() {
      this.userPaused = true;
      this.stop();
      window.clearTimeout(this.resumeTimer);
      this.resumeTimer = window.setTimeout(() => { this.userPaused = false; this.start(); }, 7000);
    }
  }

  const carousels = [...document.querySelectorAll("[data-carousel]")].map((el) => new ResponsiveCarousel(el));
  let resizeTimer;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => carousels.forEach((carousel) => carousel.refresh()), 140);
  });
  window.addEventListener("directionchange", () => carousels.forEach((carousel) => carousel.render()));

  // FAQ accordions
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const open = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
      const plus = button.querySelector(".faq-plus");
      if (plus) plus.textContent = open ? "−" : "+";
    });
  });

  // Scroll-to-top
  const scrollTopButton = document.querySelector("[data-scroll-top]");
  function updateScrollTop() { scrollTopButton?.classList.toggle("show", window.scrollY > 500); }
  window.addEventListener("scroll", updateScrollTop, { passive: true });
  updateScrollTop();
  scrollTopButton?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" }));

  // Service detail content changes from query string while retaining a useful default.
  const serviceData = {
    alignment: {
      eyebrow: "Computerised wheel alignment", title: "Straight tracking starts with accurate geometry.",
      intro: "We measure wheel angles, compare readings with vehicle specifications and make appropriate adjustments where the vehicle allows.",
      solves: "Wheel alignment helps address pulling, an off-centre steering wheel and irregular tread wear caused by wheel-angle deviation.",
      signs: ["Vehicle drifts or pulls on a level road", "Steering wheel sits off-centre", "Uneven wear across the tyre shoulder", "Steering feels unsettled after an impact"],
      price: "From $40 USD", duration: "Approx. 35–50 min"
    },
    fitting: {
      eyebrow: "Tyre fitting", title: "Correct fitment, from old tyre off to final torque.",
      intro: "We verify the tyre size and condition, mount the tyre with suitable equipment, set pressure and complete a visual final check.",
      solves: "Professional fitment protects the bead and rim while ensuring the selected tyre matches the vehicle's required size and rating.",
      signs: ["Tread is at or near the wear indicators", "Sidewall shows cracks, bulges or damage", "Tyre repeatedly loses pressure", "A technician has recommended replacement"],
      price: "From $25 USD / tyre", duration: "Approx. 15–25 min"
    },
    balancing: {
      eyebrow: "Wheel balancing", title: "Even wheel weight for a smoother drive.",
      intro: "The wheel and tyre assembly is spun on a balancing machine so small corrective weights can be placed where required.",
      solves: "Balancing corrects uneven weight around a rotating wheel and is commonly checked when vibration appears at road speed.",
      signs: ["Steering vibration at certain speeds", "Seat or floor vibration", "Tyres were recently fitted", "A balance weight appears to be missing"],
      price: "From $30 USD / pair", duration: "Approx. 25–40 min"
    },
    puncture: {
      eyebrow: "Puncture repair", title: "Inspect first. Repair only when appropriate.",
      intro: "We locate the air loss, inspect the tyre and explain whether the puncture position and condition are suitable for repair.",
      solves: "A correct inspection distinguishes a repairable tread-area puncture from sidewall or structural damage that may require replacement.",
      signs: ["Pressure drops repeatedly", "A nail or screw is visible", "Low-pressure warning appears", "You hear air escaping from the tread area"],
      price: "From $25 USD", duration: "Approx. 15–30 min"
    },
    nitrogen: {
      eyebrow: "Nitrogen filling", title: "A measured pressure check with nitrogen fill.",
      intro: "We check the recommended pressure, inspect valves and fill each tyre to the appropriate cold-pressure target.",
      solves: "Nitrogen filling is an optional pressure service. Correct pressure—whatever the inflation gas—remains the important factor.",
      signs: ["You want all tyres pressure-checked", "Tyres are below the vehicle's recommended pressure", "A valve appears to leak", "You are preparing for a longer journey"],
      price: "From $20 USD / set", duration: "Approx. 10–15 min"
    }
  };

  const detailRoot = document.querySelector("[data-service-detail]");
  if (detailRoot) {
    const requestedValue = new URLSearchParams(location.search).get("service") || "alignment";
    const requested = serviceData[requestedValue] ? requestedValue : "alignment";
    const selected = serviceData[requested];
    const assign = (selector, value) => { const el = document.querySelector(selector); if (el) el.textContent = value; };
    assign("[data-detail-eyebrow]", selected.eyebrow);
    assign("[data-detail-title]", selected.title);
    assign("[data-detail-intro]", selected.intro);
    assign("[data-detail-solves]", selected.solves);
    assign("[data-detail-price]", selected.price);
    assign("[data-detail-duration]", selected.duration);
    const detailImage = document.querySelector("[data-detail-image]");
    if (detailImage) {
      const punctureSelected = requested === "puncture";
      detailImage.src = punctureSelected ? "../assets/images/puncture-check.jpg" : "../assets/images/service-check.jpg";
      detailImage.alt = punctureSelected
        ? "Tyre technician checking a wheel during a puncture repair"
        : "Technician inspecting a tyre and wheel assembly";
      detailImage.classList.toggle("puncture-focus", punctureSelected);
    }
    const list = document.querySelector("[data-detail-signs]");
    if (list) {
      list.replaceChildren(...selected.signs.map((sign) => {
        const li = document.createElement("li");
        li.textContent = sign;
        return li;
      }));
    }
    document.querySelectorAll("[data-service-key]").forEach((link) => link.classList.toggle("active", link.dataset.serviceKey === requested));
    document.title = `${selected.eyebrow} | TrueTrack Tyres`;
  }

  // Accessible front-end appointment validation.
  const bookingForm = document.querySelector("[data-booking-form]");
  if (bookingForm) {
    const dateInput = bookingForm.querySelector('input[type="date"]');
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split("T")[0];
    if (dateInput) dateInput.min = localDate;

    const validators = {
      name: (value) => value.trim().length >= 2 ? "" : "Enter your full name.",
      phone: (value) => /^[+]?[-()\s\d]{10,16}$/.test(value.trim()) ? "" : "Enter a valid phone number.",
      email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Enter a valid email address.",
      vehicleType: (value) => value ? "" : "Choose a vehicle type.",
      vehicleModel: (value) => value.trim().length >= 2 ? "" : "Enter the vehicle make and model.",
      service: (value) => value ? "" : "Choose a service.",
      date: (value) => value && value >= localDate ? "" : "Choose today or a future date.",
      time: (value) => value ? "" : "Choose a preferred time."
    };

    function validateField(field) {
      const validator = validators[field.name];
      if (!validator) return true;
      const message = validator(field.value);
      const wrapper = field.closest(".field");
      const error = wrapper?.querySelector(".error-text");
      wrapper?.classList.toggle("invalid", Boolean(message));
      field.setAttribute("aria-invalid", String(Boolean(message)));
      if (error) error.textContent = message;
      return !message;
    }

    bookingForm.querySelectorAll("input, select, textarea").forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
      field.addEventListener("input", () => { if (field.closest(".field")?.classList.contains("invalid")) validateField(field); });
    });

    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const required = [...bookingForm.querySelectorAll("[required]")];
      const valid = required.map(validateField).every(Boolean);
      const status = bookingForm.querySelector("[data-form-status]");
      if (!valid) {
        required.find((field) => field.getAttribute("aria-invalid") === "true")?.focus();
        status?.classList.remove("show");
        return;
      }
      if (status) {
        status.textContent = "Appointment details checked. This front-end form is ready to connect to the workshop’s booking system.";
        status.classList.add("show");
        status.focus();
      }
      bookingForm.reset();
    });
  }

  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = String(new Date().getFullYear()); });
})();
