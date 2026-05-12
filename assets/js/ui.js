// ============================================================
// TENACITY LOCKS LTD — Shared UI Components
// ============================================================

// Determine root path (admin pages are one level deeper)
const ROOT = window.location.pathname.includes('/admin') ? '../' : '';

function renderNav(activePage) {
  const hp = typeof getHomepageSettings === 'function' ? getHomepageSettings() : {};
  const siteEmail = hp.email || SITE.email;
  const sitePhone = hp.phone || SITE.phone1;
  const sitePhoneHref = sitePhone.replace(/\D/g, '');
  const pages = [
    { href: `${ROOT}index.html`, label: 'Home', key: 'home' },
    { href: `${ROOT}shop.html`, label: 'Shop', key: 'shop' },
    { href: `${ROOT}about.html`, label: 'About', key: 'about' },
    { href: `${ROOT}blog.html`, label: 'Blog', key: 'blog' },
    { href: `${ROOT}contact.html`, label: 'Contact', key: 'contact' },
  ];
  const links = pages.map(p => `<a href="${p.href}" class="${activePage === p.key ? 'active' : ''}">${p.label}</a>`).join('');
  const mobileLinks = pages.map(p => `<a href="${p.href}" class="${activePage === p.key ? 'active' : ''}">${p.label}</a>`).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <!-- Top Bar -->
    <div class="topbar">
      <div class="container">
        <div class="topbar-inner">

          <!-- Left: social links -->
          <div class="topbar-social">
            <a href="${SITE.instagram}" target="_blank">📸 Instagram</a>
            <a href="https://wa.me/${SITE.whatsapp}" target="_blank"><img src="${ROOT}assets/images/icons/whatsapp-white.svg" class="wa-btn-icon" alt=""> WhatsApp</a>
            <a href="${SITE.mapsLink}" target="_blank">📍 Find Us</a>
          </div>

          <!-- Centre: email (absolutely centred) -->
          <div class="topbar-email">
            <span>✉️</span>
            <a href="mailto:${siteEmail}">${siteEmail}</a>
          </div>

          <!-- Right: phone numbers -->
          <div class="topbar-phones">
            <a href="tel:${sitePhoneHref}">📞 ${sitePhone}</a>
            <span class="sep">|</span>
            <a href="tel:0729863950">${SITE.phone2}</a>
          </div>

        </div>
      </div>
    </div>

    <!-- Main Nav -->
    <nav class="nav" id="mainNav">
      <div class="container">
        <div class="nav-inner">
          <a href="${ROOT}index.html" class="nav-logo">
            <img src="${ROOT}assets/images/logos/white-logo.png" alt="Tenacity Locks Ltd">
          </a>
          <div class="nav-links">${links}</div>
          <div class="nav-actions">
            <a href="${ROOT}cart.html" class="cart-btn">
              🛒 Cart
              <span class="cart-count">0</span>
            </a>
          </div>
          <button class="hamburger" id="hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
    <div class="mobile-nav" id="mobileNav">${mobileLinks}
      <a href="${ROOT}cart.html" style="color:#e0b4dd;">🛒 Cart</a>
    </div>
  `);

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  function updateMobileNavTop() {
    // Always position mobile nav directly below the main nav bar
    const topbarH = document.querySelector('.topbar').offsetHeight;
    const navH = document.getElementById('mainNav').offsetHeight;
    mobileNav.style.top = (topbarH + navH) + 'px';
  }

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    updateMobileNavTop();
    mobileNav.classList.toggle('open');
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('open') &&
        !mobileNav.contains(e.target) &&
        !hamburger.contains(e.target)) {
      mobileNav.classList.remove('open');
    }
  });

  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll && mobileNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') mobileNav.classList.remove('open');
  });

  // Scroll effect on main nav
  window.addEventListener('scroll', () => {
    document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 40);
  });
}

function renderFooter() {
  const hp = typeof getHomepageSettings === 'function' ? getHomepageSettings() : {};
  const siteEmail = hp.email || SITE.email;
  const sitePhone = hp.phone || SITE.phone1;
  const sitePhoneHref = sitePhone.replace(/\D/g, '');
  const year = new Date().getFullYear();
  document.body.insertAdjacentHTML('beforeend', `
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <img src="${ROOT}assets/images/logos/white-logo.png" alt="Tenacity Locks Ltd">
              <p>Kenya's trusted name in door security since 2011. Quality locks for homes, offices, and commercial properties across the country.</p>
              <div class="footer-social">
                <a href="${SITE.instagram}" target="_blank" title="Instagram">📸</a>
                <a href="https://wa.me/${SITE.whatsapp}" target="_blank" title="WhatsApp"><img src="${ROOT}assets/images/icons/whatsapp-white.svg" class="wa-btn-icon" alt="WhatsApp"></a>
                <a href="${SITE.mapsLink}" target="_blank" title="Location">📍</a>
                <a href="${SITE.reviewLink}" target="_blank" title="Review Us">⭐</a>
              </div>
            </div>
            <div class="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="${ROOT}index.html">Home</a></li>
                <li><a href="${ROOT}shop.html">Shop</a></li>
                <li><a href="${ROOT}about.html">About Us</a></li>
                <li><a href="${ROOT}blog.html">Blog</a></li>
                <li><a href="${ROOT}contact.html">Contact</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Categories</h4>
              <ul>
                <li><a href="${ROOT}shop.html?cat=entry-level">TB68 Series MAIN DOOR ENTRY LOCKS</a></li>
                <li><a href="${ROOT}shop.html?cat=single-pin-ndk">THE TM53 SERIES INTERNAL DOOR LOCKS ON OFFER!!!</a></li>
                <li><a href="${ROOT}shop.html?cat=premium-quality">Premium Quality</a></li>
                <li><a href="${ROOT}shop.html?cat=four-pin-non-duplicatable">TENACITY 4-PIN locks</a></li>
                <li><a href="${ROOT}shop.html?cat=deadlocks">Deadlocks</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Contact Us</h4>
              <div class="footer-contact-item"><span>📍</span><span>${SITE.addressFull}</span></div>
              <div class="footer-contact-item"><span>📞</span><span><a href="tel:${sitePhoneHref}">${sitePhone}</a> / <a href="tel:0729863950">${SITE.phone2}</a></span></div>
              <div class="footer-contact-item"><span>✉️</span><span><a href="mailto:${siteEmail}">${siteEmail}</a></span></div>
              <div class="footer-contact-item"><span>🕐</span><span>Mon–Sat: 8am – 6pm</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;">
          <p>© ${year} Tenacity Locks Ltd. All rights reserved.</p>
          <p>Paybill: <strong style="color:#ce8bcb;">222111</strong> | Account: <strong style="color:#ce8bcb;">863950</strong></p>
        </div>
      </div>
    </footer>

    <!-- Floating WhatsApp -->
    <a href="https://wa.me/${SITE.whatsapp}?text=Hello%20Tenacity%20Locks%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
       class="wa-float" target="_blank" title="Chat on WhatsApp"><img src="${ROOT}assets/images/icons/whatsapp-white.svg" alt="WhatsApp"></a>
  `);
}

// Scroll reveal
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

// Product card HTML
function productCardHTML(p, rootPath = '') {
  const rp = rootPath || ROOT;
  const cat = getAllCategories().find(c => c.id === p.category);
  const discount = p.originalPrice ? Math.round((1 - p.price/p.originalPrice)*100) : 0;
  return `
    <div class="product-card">
      <a href="${rp}product.html?id=${p.id}">
        <div class="product-card-img">
          <img src="${rp}${p.image}" alt="${p.name}" loading="lazy">
          ${p.onOffer ? `<span class="offer-badge">-${discount}%</span>` : ''}
        </div>
      </a>
      <div class="product-card-body">
        <div class="product-card-cat">${cat ? cat.name : p.category}</div>
        <a href="${rp}product.html?id=${p.id}">
          <div class="product-card-name">${p.name}</div>
        </a>
        <div class="product-card-price">
          <span class="price-current">${fmt(p.price)}</span>
          ${p.originalPrice ? `<span class="price-original">${fmt(p.originalPrice)}</span>` : ''}
        </div>
        <div class="product-card-actions">
          <a href="${rp}product.html?id=${p.id}" class="btn btn-outline btn-sm">View</a>
          <button class="btn btn-primary btn-sm" onclick="Cart.add('${p.id}');this.textContent='✓ Added';setTimeout(()=>this.textContent='Add to Cart',2000)">Add to Cart</button>
        </div>
      </div>
    </div>`;
}

// Init cart badge on load
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();
  initReveal();
  window.addEventListener('cartUpdated', () => Cart.updateBadge());
});
