/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Cafe v60",
    suffix: ".",
    tagline: "Aesthetic Cafe & Coffee Spot",
    description: "Cafe v60 offers delicious food, artisanal coffee, pastas, burgers, momos, and pizza with a calm, cozy ambiance in Janakpuri, New Delhi.",
    keywords: "coffee, cafe, v60, janakpuri, pasta, burgers, momos, pizza, beverages, new delhi",
    themeColor: "#0d0e12",
    domain: "https://www.instagram.com/cafev60.official",
    ogImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmNaeOwP0m0iptFP5b2n3ETQikRRFH-bQxLm9rh4uCZ_63Aq2B4NQtccqYGcC8u9yIGDAybkCp01sgdw3ET1VvVzisiK3pZqFq5qS-kokuEAzPBqN0VwdsmTPAU8IIWZ8JCMJ7bhIxM974f8=w326-h312-n-k-no",
    faviconEmoji: "☕",
    whatsappNumber: "919899751719"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#0d0e12",
      bgCard: "#15181e",
      bgLight: "#1c2028",
      primary: "#d4a373",
      primaryHover: "#faedcd",
      text: "#e0e2ec",
      textMuted: "#9aa0b4",
      accent: "#2c313c"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Aesthetic Cafe in Janakpuri",
    title: "Relax, Vibe & Enjoy Great Food",
    description: "Discover a calm and cozy haven serving delicious artisanal beverages, pastas, burgers, momos, and pizzas.",
    bgImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmNaeOwP0m0iptFP5b2n3ETQikRRFH-bQxLm9rh4uCZ_63Aq2B4NQtccqYGcC8u9yIGDAybkCp01sgdw3ET1VvVzisiK3pZqFq5qS-kokuEAzPBqN0VwdsmTPAU8IIWZ8JCMJ7bhIxM974f8=w326-h312-n-k-no",
    stats: [
      { value: "5.0 ★", label: "Customer Rating" },
      { value: "100%", label: "Good Vibes" },
      { value: "7 Days", label: "Open Daily" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "The Only Aesthetic Cafe in Janakpuri",
    paragraphs: [
      "Cafe v60 is a hidden gem located in Janakpuri, New Delhi. Designed as a peaceful retreat, we offer a cozy ambiance perfect for relaxing, catching up with friends, or enjoying a casual evening.",
      "Our menu covers all the essential comfort food basics—from signature pink sauce pasta and crispy burgers to steaming momos, fresh pizzas, and hand-crafted beverages."
    ],
    image: "https://lh3.googleusercontent.com/grass-cs/ACvplmMEGa8aXDCCGx7xS98kxyyDaR3gTfSWBzcGxwTvXAeboAtONR2NJ1zcdwaIJc9kZrVWhhSIuj7uoN6YN72m22on2UZ1uY-2cOHVQIkVmv3KvYYeVXAyPbxkFslUp0ws6Z6N2xpvmdjGRzbV=w326-h156-n-k-no",
    imageAlt: "Interior view of Cafe v60",
    experienceValue: "Top",
    experienceLabel: "Rated Cafe"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Fresh From Kitchen",
    title: "Newly Added Specials",
    badge: "Must Try",
    description: "Chef's specials loved by our visitors for a quick bite or chill hangout.",
    items: [
      {
        badge: "Bestseller",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLK0MbOHvCgy2yk2IiYN1GhxAvlwB0s3UHC8GFKQXkfg&s=10",
        alt: "Creamy Pink Sauce Pasta",
        diet: "veg",
        title: "Signature Pink Sauce Pasta",
        price: "₹240",
        desc: "Rich, creamy blend of tomato red sauce and smooth white cream sauce tossed with al dente pasta and herbs."
      },
      {
        badge: "Chef's Pick",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
        alt: "Gourmet Loaded Burger",
        diet: "veg",
        title: "Classic Loaded Burger",
        price: "₹180",
        desc: "Juicy crispy patty topped with melted cheese, fresh lettuce, tomatoes, and house special sauce in a toasted bun."
      },
      {
        badge: "Popular",
        img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600",
        alt: "Steamed Dumplings / Momos",
        diet: "veg",
        title: "Steamed Classic Momos",
        price: "₹150",
        desc: "Delicate hand-folded dumplings served piping hot with fiery spicy red chutney and mayo."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Exclusive Deals",
    title: "Current Offers",
    items: [
      {
        tag: "COMBO DEAL",
        title: "Pasta & Beverage Combo",
        desc: "Pair any signature pasta with a refreshing iced beverage at a special discount.",
        code: "PASTA60",
        highlight: true
      },
      {
        tag: "EVENINGS",
        title: "Chill Hangout Deal",
        desc: "Order 2 Burgers or Pizzas and get a complimentary cold brew or cooler.",
        code: "VIBE60",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Full Menu",
    title: "Freshly Brewed & Prepared",
    pdfUrl: "assets/cafe-v60-menu.pdf",
    pdfFilename: "Cafe_v60_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "beverages", label: "Beverages & Coffee", active: false },
      { id: "pasta", label: "Pastas", active: false },
      { id: "quickbites", label: "Burgers & Momos", active: false },
      { id: "pizza", label: "Pizzas", active: false }
    ],
    items: [
      {
        category: "beverages",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        title: "V60 Hand Brew Coffee",
        price: "₹160",
        diet: "veg",
        desc: "Single-origin pour-over coffee crafted to extract smooth, rich, and clean flavors.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-v60-janakpuri-rest1352297",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-v60-janakpuri-new-delhi?amp=1"
      },
      {
        category: "pasta",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLK0MbOHvCgy2yk2IiYN1GhxAvlwB0s3UHC8GFKQXkfg&s=10",
        title: "Creamy Pink Sauce Pasta",
        price: "₹240",
        diet: "veg",
        desc: "Balanced tanginess and creaminess topped with fresh herbs and garlic bread.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-v60-janakpuri-rest1352297",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-v60-janakpuri-new-delhi?amp=1"
      },
      {
        category: "quickbites",
        img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600",
        title: "Paneer / Veg Fried Momos",
        price: "₹170",
        diet: "veg",
        desc: "Crispy fried momos filled with seasoned paneer or fresh veggies, served with chili dip.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-v60-janakpuri-rest1352297",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-v60-janakpuri-new-delhi?amp=1"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        title: "Classic Margherita Pizza",
        price: "₹260",
        diet: "veg",
        desc: "Fresh mozzarella cheese, basil, and rich tomato sauce on a crispy baked crust.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-v60-janakpuri-rest1352297",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-v60-janakpuri-new-delhi?amp=1"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"Great cafe with really good vibes and delicious food. The ambiance is perfect for a chill hangout or a casual evening. I personally loved their pasta—if you don't want to eat too heavy, definitely try the pink sauce pasta, it's absolutely bang on. Overall, a perfect spot to relax and enjoy good food. One of the best cafes in the area—you should definitely visit at least once.\"",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
        name: "Mr Ashish Solanki",
        role: "Local Guide · 209 reviews"
      },
      {
        stars: 5,
        text: "\"Awesome food with great ambience , quality superb , the only aesthetic cafe in janak puri , must visit ❤️\"",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=100",
        name: "Suresh Manocha",
        role: "Dine in customer"
      },
      {
        stars: 5,
        text: "\"A newly opened hidden gem in Janakpuri. The cafe has a calm and cozy vibe with a peaceful ambiance, perfect for relaxing. Though the menu is limited, it covers all the basics like burgers, pasta, momos, pizza, and beverages. Great spot for quick bites and chilling with friends without spending much.\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Bhavini Verma",
        role: "Local Guide · 94 reviews"
      }
    ],
    googleCta: {
      title: "Enjoyed your experience at Cafe v60?",
      desc: "Help others discover us by leaving a review on Google Maps!",
      url: "https://maps.google.com/?q=Cafe+v60+Janakpuri+New+Delhi"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Life Inside Cafe v60",
    images: [
      { src: "https://lh3.googleusercontent.com/grass-cs/ACvplmO5V9puW566L78uCegspTvoCb0U6LQpj8Eg5TyrXAwdDP-_iwYzzWzYjsEvunpkco6pNyUvzbsVhVyFYNw8s6sS9PvLMpJ44tQblaUudnBY7JYn1RmY97njQehVSdpsOINcVQk0OQ5opnc=w163-h156-n-k-no", alt: "Cafe v60 gallery photo 1" },
      { src: "https://lh3.googleusercontent.com/grass-cs/ACvplmOI40xC296bcvMfm6SKjx5FmloHz0gjvU0R-umb4QCjr_PRrOVOYRM3MwJtFOJ-WIltjKZYttkUQNyoF58CrMDfUibE6L73pdlpzBt_pfpMNUtytYunloHyTfFzFqlKX2rN3rjmmA6IjyMD=w163-h156-n-k-no", alt: "Cafe v60 gallery photo 2" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnS5T62X3q5g6xPA_pjP3dwSvIfQYFg9RLehFTRRLPedzX-5RixTyYhVg97dq-4fHsbiSJ885YKtniVXFwltsk1xqIDoXiaGG1Wwue9lCFKJIHsO1GriZIlbXTB2KhyrZu_DDc6EN2cDJmy=w243-h305-n-k-no-nu", alt: "Cafe v60 gallery photo 3" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk2y0-86kN-8_xylNrpMYjYyoOqHRNZeVk-5RR1Ygub1v__wHW68-e0ryK_N9EIVEorYeJOJYy75K_tht4cTpqOt4rPNOGMqmi-XRxi1rk3yZqWnkn0MHyqYxEpUWsLoraGc2QEY5qdyznz=w243-h406-n-k-no-nu", alt: "Cafe v60 gallery photo 4" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Locations & Hours",
    title: "Visit Our Cafe",
    description: "Drop in for a calm and cozy vibe, delicious food, and great beverages right in the heart of Janakpuri.",
    address: "Shop No 1, A3, A Block, DDA Market, A3 Block, Janakpuri, New Delhi, Delhi 110058",
    hours: [
      "Monday - Sunday: 12:30 PM - 11:30 PM"
    ],
    email: "contact@cafev60.com",
    phone: "+91 98997 51719",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.138246328318!2d77.0827289!3d28.6256082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c45a4f6ebd%3A0x8bc0d984cfb7d415!2sJanakpuri%2C%20New%20Delhi%2C%20Delhi%20110058!5e0!3m2!1sen!2sin!4v1614134823123!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "The only aesthetic cafe in Janakpuri serving delicious food, coffee, and good vibes daily.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/cafev60.official?stkn=MXZzdG4xOWk2bzhmZg==", iconClass: "ph-instagram-logo" },
      { platform: "zomato", url: "https://www.zomato.com/ncr/cafe-v60-janakpuri-new-delhi?amp=1", iconClass: "ph-fork-knife" },
      { platform: "swiggy", url: "https://www.swiggy.com/city/delhi/cafe-v60-janakpuri-rest1352297", iconClass: "ph-shopping-bag" }
    ],
    copyright: "© 2026 Cafe v60. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Cafe_v60_Guest_WiFi",
    password: "cafev60janakpuri"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
