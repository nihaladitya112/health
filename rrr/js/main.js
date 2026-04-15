// ============================================================
// MAIN JS — GovHealth Monitor
// ============================================================

// Dark mode
function toggleDark() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('darkModeToggle');
    const isDark = document.body.classList.contains('dark-mode');
    if (btn) btn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('govhealth_dark', isDark ? '1' : '0');
  }
  
  // Language toggle
  let currentLang = localStorage.getItem('govhealth_lang') || 'en';
  
  function toggleLang() {
    currentLang = currentLang === 'en' ? 'te' : 'en';
    localStorage.setItem('govhealth_lang', currentLang);
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = currentLang === 'en' ? 'తెలుగు' : 'English';
    applyLang();
  }
  
  function applyLang() {
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = currentLang === 'te' ? (el.dataset.te || el.dataset.en) : el.dataset.en;
    });
  }
  
  // Session-aware navigation
  function updateNavForSession() {
    const user = (typeof getSession === 'function') ? getSession() : null;
    const authItem = document.getElementById('navAuthItem');
    if (!authItem) return;
    if (user) {
      const dashUrl = user.role === 'admin' ? 'admin-dashboard.html'
                    : user.role === 'hw'    ? 'hw-dashboard.html'
                    :                         'patient-dashboard.html';
      const roleIcon = user.role === 'admin' ? 'fa-user-shield'
                     : user.role === 'hw'    ? 'fa-user-nurse'
                     :                         'fa-user';
      authItem.innerHTML =
        '<a class="nav-link btn-admin-nav" href="' + dashUrl + '">' +
          '<i class="fa-solid ' + roleIcon + ' me-1"></i>' + user.name.split(' ')[0] +
        '</a>';
      // Add logout button after
      if (!document.getElementById('navLogoutItem')) {
        const li = document.createElement('li');
        li.className = 'nav-item ms-lg-1';
        li.id = 'navLogoutItem';
        li.innerHTML = '<button class="btn btn-sm btn-outline-light" onclick="doLogout()"><i class="fa-solid fa-right-from-bracket me-1"></i>Logout</button>';
        authItem.parentElement.insertBefore(li, authItem.nextSibling);
      }
    }
  }

  function doLogout() {
    if (typeof clearSession === 'function') clearSession();
    window.location.href = 'login.html';
  }
  
  // Restore preferences
  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('govhealth_dark') === '1') {
      document.body.classList.add('dark-mode');
      const btn = document.getElementById('darkModeToggle');
      if (btn) btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.textContent = currentLang === 'en' ? 'తెలుగు' : 'English';
    applyLang();
  
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('mainNav');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Session-aware nav on all pages
    updateNavForSession();
  });
  
  // Resource badge color
  function resourceBadge(val, low = 10, mid = 30) {
    if (val <= low) return 'badge-danger';
    if (val <= mid) return 'badge-warning';
    return 'badge-success';
  }
  
  // Hospital card builder (used across pages)
  function buildHospitalCard(h) {
    const bedBadge = resourceBadge(h.beds, 10, 40);
    const icuBadge = resourceBadge(h.icu, 3, 10);
    const o2Badge = resourceBadge(h.oxygen, 5, 20);
    return `
    <div class="col-md-6 col-lg-4 hosp-card-col" data-name="${h.name.toLowerCase()}" data-loc="${h.location.toLowerCase()}">
      <div class="hospital-card">
        <div class="hc-header">
          <div class="hc-icon"><i class="fa-solid fa-hospital-user"></i></div>
          <div>
            <div class="hc-name">${h.name}</div>
            <div class="hc-loc"><i class="fa-solid fa-location-dot me-1"></i>${h.location}</div>
          </div>
        </div>
        <div class="hc-resources">
          <div class="hc-res-item">
            <i class="fa-solid fa-bed"></i>
            <div class="res-info">
              <span class="res-val ${bedBadge}">${h.beds}</span>
              <small>Beds</small>
            </div>
          </div>
          <div class="hc-res-item">
            <i class="fa-solid fa-heart-pulse"></i>
            <div class="res-info">
              <span class="res-val ${icuBadge}">${h.icu}</span>
              <small>ICU</small>
            </div>
          </div>
          <div class="hc-res-item">
            <i class="fa-solid fa-wind"></i>
            <div class="res-info">
              <span class="res-val ${o2Badge}">${h.oxygen}</span>
              <small>O₂</small>
            </div>
          </div>
          <div class="hc-res-item">
            <i class="fa-solid fa-user-doctor"></i>
            <div class="res-info">
              <span class="res-val badge-info">${h.doctors}</span>
              <small>Doctors</small>
            </div>
          </div>
        </div>
        <div class="hc-footer">
          <div class="hc-updated"><i class="fa-solid fa-clock me-1"></i>Updated: ${h.updated}</div>
          <div class="hc-contact"><i class="fa-solid fa-phone me-1"></i>${h.contact}</div>
          <a href="${h.maps}" target="_blank" class="btn btn-sm btn-maps mt-2 w-100">
            <i class="fa-solid fa-map-location-dot me-1"></i>Open in Google Maps
          </a>
        </div>
      </div>
    </div>`;
  }
  
  // Show toast notification
  function showToast(msg, type = 'success') {
    let tc = document.getElementById('toastContainer');
    if (!tc) {
      tc = document.createElement('div');
      tc.id = 'toastContainer';
      tc.style.cssText = 'position:fixed;top:80px;right:20px;z-index:9999;';
      document.body.appendChild(tc);
    }
    const t = document.createElement('div');
    t.className = `toast-msg toast-${type}`;
    t.innerHTML = `<i class="fa-solid fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} me-2"></i>${msg}`;
    tc.appendChild(t);
    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3500);
  }
  