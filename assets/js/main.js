/**
 * GRIYA JOGLO TRAYANG - MAIN JAVASCRIPT
 * Berdasarkan PRD dan DESIGN.md
 */

// 1. Tambahkan class .js pada elemen <html> untuk scroll reveal
document.documentElement.classList.add('js');

// 2. Konfigurasi WhatsApp Resmi Bisnis
const WA_PHONE_NUMBER = "6281234567890"; // Format internasional tanpa simbol + atau spasi

/**
 * Helper untuk membuka WhatsApp dengan pesan terenkripsi
 * @param {string} message 
 */
function sendToWhatsApp(message) {
  const encoded = encodeURIComponent(message.trim());
  const waUrl = `https://wa.me/${WA_PHONE_NUMBER}?text=${encoded}`;
  window.open(waUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Direct inquiry untuk produk tertentu
 * @param {string} productName 
 */
function tanyaProduk(productName) {
  const msg = `Halo Griya Joglo Trayang, saya tertarik dan ingin menanyakan informasi lebih lanjut mengenai:
*${productName}*

Mohon informasi spesifikasi kayu, ukuran detail, dan estimasi biaya pemasangan hingga ke lokasi saya. Terima kasih.`;
  sendToWhatsApp(msg);
}

// Global scope attachment
window.tanyaProduk = tanyaProduk;
window.sendToWhatsApp = sendToWhatsApp;

document.addEventListener('DOMContentLoaded', () => {
  // 3. Navbar scroll shadow effect
  const navbar = document.querySelector('.gjt-navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 8) {
        navbar.classList.add('is-scrolled');
      } else {
        navbar.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 3b. Mobile Navbar Popup Controller & Backdrop
  const navbarCollapse = document.getElementById('navbarMain');
  const navbarToggler = document.querySelector('.navbar-toggler');

  if (navbarCollapse && navbarToggler) {
    // Inject backdrop overlay if not already in DOM
    let backdrop = document.querySelector('.gjt-nav-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'gjt-nav-backdrop';
      document.body.appendChild(backdrop);
    }

    const togglerIcon = navbarToggler.querySelector('i');

    const openPopup = () => {
      navbarCollapse.classList.add('is-open');
      navbarToggler.classList.add('is-active');
      backdrop.classList.add('is-active');
      document.body.classList.add('nav-popup-open');
      if (togglerIcon) {
        togglerIcon.classList.remove('bi-list');
        togglerIcon.classList.add('bi-x-lg');
      }
    };

    const closePopup = () => {
      navbarCollapse.classList.remove('is-open');
      navbarToggler.classList.remove('is-active');
      backdrop.classList.remove('is-active');
      document.body.classList.remove('nav-popup-open');
      if (togglerIcon) {
        togglerIcon.classList.remove('bi-x-lg');
        togglerIcon.classList.add('bi-list');
      }
    };

    // Listen to Bootstrap collapse events
    navbarCollapse.addEventListener('show.bs.collapse', openPopup);
    navbarCollapse.addEventListener('hide.bs.collapse', closePopup);

    // Close when tapping backdrop overlay
    backdrop.addEventListener('click', () => {
      if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      } else {
        closePopup();
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navbarCollapse.classList.contains('is-open')) {
        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
          bsCollapse.hide();
        } else {
          closePopup();
        }
      }
    });

    // Auto-close when clicking any nav link on mobile
    const navLinks = navbarCollapse.querySelectorAll('.nav-link, .btn');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
          } else {
            closePopup();
          }
        }
      });
    });

    // Cleanup state if resized to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992 && navbarCollapse.classList.contains('is-open')) {
        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
        closePopup();
      }
    }, { passive: true });
  }

  // 4. Scroll Reveal via IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Staggered delay max 300ms
          const delay = Math.min(index * 50, 250);
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback jika browser tidak support IntersectionObserver
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 5. Validasi & Pengiriman Form Kontak ke WhatsApp
  const contactForm = document.getElementById('gjtContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const nama = document.getElementById('formNama');
      const waNumber = document.getElementById('formWa');
      const kota = document.getElementById('formKota');
      const produk = document.getElementById('formProduk');
      const pesan = document.getElementById('formPesan');

      // Validasi Nama
      if (!nama.value.trim()) {
        nama.classList.add('is-invalid');
        isValid = false;
      } else {
        nama.classList.remove('is-invalid');
      }

      // Validasi WhatsApp
      const cleanedWa = waNumber.value.replace(/[^0-9]/g, '');
      if (cleanedWa.length < 8) {
        waNumber.classList.add('is-invalid');
        isValid = false;
      } else {
        waNumber.classList.remove('is-invalid');
      }

      // Validasi Kota
      if (!kota.value.trim()) {
        kota.classList.add('is-invalid');
        isValid = false;
      } else {
        kota.classList.remove('is-invalid');
      }

      // Validasi Produk Pilihan
      if (!produk.value) {
        produk.classList.add('is-invalid');
        isValid = false;
      } else {
        produk.classList.remove('is-invalid');
      }

      if (!isValid) {
        const firstInvalid = contactForm.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Format Pesan WhatsApp Terstruktur
      const whatsappMessage = `*FORMULIR KONSULTASI - GRIYA JOGLO TRAYANG*
------------------------------------------------
*Nama Pemesan:* ${nama.value.trim()}
*Nomor WhatsApp:* ${waNumber.value.trim()}
*Kota Tujuan:* ${kota.value.trim()}
*Pilihan Produk:* ${produk.options[produk.selectedIndex].text}
*Pesan Tambahan:*
${pesan.value.trim() || 'Mohon dikirimkan katalog spesifikasi dan estimasi harga.'}
------------------------------------------------
Dikirim dari formulir website Griya Joglo Trayang.`;

      sendToWhatsApp(whatsappMessage);
    });

    // Remove is-invalid class on user input
    contactForm.querySelectorAll('.form-control, .form-select').forEach(input => {
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) {
          input.classList.remove('is-invalid');
        }
      });
    });
  }

  // 6. Filter Kategori Produk (Halaman Produk)
  const productFilterBtns = document.querySelectorAll('.product-filter-btn');
  const productCards = document.querySelectorAll('.product-item');

  if (productFilterBtns.length > 0 && productCards.length > 0) {
    productFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        productFilterBtns.forEach(b => {
          b.classList.remove('active', 'btn-primary');
          b.classList.add('btn-outline-brand');
        });
        btn.classList.add('active', 'btn-primary');
        btn.classList.remove('btn-outline-brand');

        const filter = btn.getAttribute('data-filter');

        productCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = '';
            card.classList.add('is-visible');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 7. Lightbox Galeri Proyek
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModalEl = document.getElementById('galleryLightboxModal');

  if (galleryItems.length > 0 && lightboxModalEl && typeof bootstrap !== 'undefined') {
    const lightboxModal = new bootstrap.Modal(lightboxModalEl);
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxSub = document.getElementById('lightboxSub');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    let currentIndex = 0;
    const galleryData = [];

    galleryItems.forEach((item, index) => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-caption-title')?.textContent || 'Dokumentasi Proyek';
      const sub = item.querySelector('.gallery-caption-sub')?.textContent || 'Griya Joglo Trayang';

      galleryData.push({
        src: img.getAttribute('src') || img.src,
        alt: img.getAttribute('alt') || title,
        title: title,
        sub: sub
      });

      item.addEventListener('click', () => {
        currentIndex = index;
        updateLightboxContent();
        lightboxModal.show();
      });

      // Keyboard accessibility (Enter / Space opens modal)
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
      });
    });

    function updateLightboxContent() {
      const current = galleryData[currentIndex];
      if (!current) return;
      lightboxImg.src = current.src;
      lightboxImg.alt = current.alt;
      if (lightboxTitle) lightboxTitle.textContent = current.title;
      if (lightboxSub) lightboxSub.textContent = current.sub;
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
        updateLightboxContent();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryData.length;
        updateLightboxContent();
      });
    }

    // Keyboard Arrow navigation inside modal
    window.addEventListener('keydown', (e) => {
      if (lightboxModalEl.classList.contains('show')) {
        if (e.key === 'ArrowLeft') {
          currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
          updateLightboxContent();
        } else if (e.key === 'ArrowRight') {
          currentIndex = (currentIndex + 1) % galleryData.length;
          updateLightboxContent();
        }
      }
    });
  }
});
