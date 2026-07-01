/* Wooden Hub — minimal interactions */
(function(){
  'use strict';
  document.documentElement.classList.add('js');

  /* ─── Header Dropdowns ─── */
  function initDropdowns() {
    const dropdowns = document.querySelectorAll('.header-dropdown');

    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('button');
      const menu = dropdown.querySelector('.dropdown-menu');

      if (!trigger || !menu) return;

      // Toggle dropdown
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';

        // Close all other dropdowns first
        closeAllDropdowns();

        if (!isOpen) {
          trigger.setAttribute('aria-expanded', 'true');
          menu.hidden = false;
        }
      });

      // Prevent dropdown from closing when clicking inside
      menu.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', closeAllDropdowns);

    // Close dropdowns on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllDropdowns();
    });

    function closeAllDropdowns() {
      dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('button');
        const menu = dropdown.querySelector('.dropdown-menu');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
        if (menu) menu.hidden = true;
      });
    }
  }
  initDropdowns();

  /* ─── Sticky header shadow ─── */
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  /* ─── Mobile menu ─── */
  const toggleBtn = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobileMenu');
  toggleBtn.addEventListener('click', () => {
    const open = header.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobileMenu.hidden = !open;
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      header.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded','false');
      mobileMenu.hidden = true;
    });
  });

  /* ─── Language toggle ─── */
  const langBtns = document.querySelectorAll('[data-lang-btn]');
  const setLang = (lang) => {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'gu' ? 'gu' : 'en');
    document.querySelectorAll('[data-en],[data-gu]').forEach(el => {
      const next = el.dataset[lang];
      if (next != null) el.textContent = next;
    });
    langBtns.forEach(b => {
      const active = b.dataset.langBtn === lang;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    try { localStorage.setItem('wh-lang', lang); } catch(e){}
  };
  langBtns.forEach(b => b.addEventListener('click', () => setLang(b.dataset.langBtn)));
  let savedLang = 'en';
  try { savedLang = localStorage.getItem('wh-lang') || 'en'; } catch(e){}
  setLang(savedLang);

  /* ───────────────────────────────────────────────
     PROJECTS DATA
     To add a new project: drop a folder under
     /projects/<slug>/ with photos and/or .mp4 files,
     then add an entry below.
     ─────────────────────────────────────────────── */
  const PROJECTS = [
    {
      slug: 'kedar-hills-surat',
      title: { en: 'Kedar Hills', gu: 'કેદાર હિલ્સ' },
      location: { en: 'Surat, Gujarat', gu: 'સુરત, ગુજરાત' },
      summary: {
        en: 'Complete residential interior — custom furniture, wooden flooring, P.O.P. ceilings, lighting and finishing.',
        gu: 'સંપૂર્ણ રહેણાંક ઇન્ટિરિયર — કસ્ટમ ફર્નિચર, વુડન ફ્લોરિંગ, પી.ઓ.પી. છત, લાઇટિંગ અને ફિનિશિંગ.'
      },
      tags: ['Turnkey','Furniture','Interior','P.O.P.','Flooring','Lighting'],
      cover: 'projects/kedar-hills-surat/01.jpg',
      media: [
        { type:'video', src:'projects/kedar-hills-surat/01.mp4', poster:'projects/kedar-hills-surat/01.jpg' },
        { type:'video', src:'projects/kedar-hills-surat/02.mp4', poster:'projects/kedar-hills-surat/02.jpg' },
        { type:'video', src:'projects/kedar-hills-surat/03.mp4', poster:'projects/kedar-hills-surat/03.jpg' },
        { type:'video', src:'projects/kedar-hills-surat/04.mp4', poster:'projects/kedar-hills-surat/04.jpg' },
        { type:'video', src:'projects/kedar-hills-surat/05.mp4', poster:'projects/kedar-hills-surat/05.jpg' },
        { type:'video', src:'projects/kedar-hills-surat/06.mp4', poster:'projects/kedar-hills-surat/06.jpg' },
        { type:'video', src:'projects/kedar-hills-surat/07.mp4', poster:'projects/kedar-hills-surat/07.jpg' },
        { type:'video', src:'projects/kedar-hills-surat/08.mp4', poster:'projects/kedar-hills-surat/08.jpg' },
        { type:'video', src:'projects/kedar-hills-surat/09.mp4', poster:'projects/kedar-hills-surat/09.jpg' },
        { type:'video', src:'projects/kedar-hills-surat/10.mp4', poster:'projects/kedar-hills-surat/10.jpg' }
      ]
    }
  ];

  /* ─── Build project cards ─── */
  const grid = document.getElementById('projectsGrid');
  if (grid){
    grid.innerHTML = PROJECTS.map((p, i) => {
      const photos = p.media.filter(m => m.type === 'photo').length;
      const videos = p.media.filter(m => m.type === 'video').length;
      const badges = [];
      if (videos) badges.push(`<span class="pcard-badge"><svg viewBox="0 0 24 24" width="11" height="11" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg> ${videos}</span>`);
      if (photos) badges.push(`<span class="pcard-badge"><svg viewBox="0 0 24 24" width="11" height="11" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M4 7h4l2-2h4l2 2h4v12H4z"/><circle cx="12" cy="13" r="3.4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg> ${photos}</span>`);
      return `
        <article class="pcard" data-project="${i}" tabindex="0" role="button" aria-label="Open ${p.title.en}">
          <div class="pcard-img">
            <img src="${p.cover}" alt="${p.title.en}" loading="lazy" />
            <div class="pcard-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
            </div>
            <div class="pcard-badges">${badges.join('')}</div>
          </div>
          <div class="pcard-body">
            <h3 class="pcard-title" data-en="${p.title.en}" data-gu="${p.title.gu}">${p.title.en}</h3>
            <p class="pcard-loc" data-en="${p.location.en}" data-gu="${p.location.gu}">${p.location.en}</p>
            <p class="pcard-sum" data-en="${p.summary.en}" data-gu="${p.summary.gu}">${p.summary.en}</p>
            <ul class="pcard-tags">${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>
            <span class="pcard-view" data-en="View project →" data-gu="પ્રોજેક્ટ જુઓ →">View project →</span>
          </div>
        </article>`;
    }).join('');

    // re-apply language to newly-injected nodes
    const cur = document.documentElement.getAttribute('data-lang') || 'en';
    grid.querySelectorAll('[data-en],[data-gu]').forEach(el => {
      const next = el.dataset[cur];
      if (next != null) el.textContent = next;
    });
  }

  /* ─── Lightbox ─── */
  const lb        = document.getElementById('lightbox');
  const lbMedia   = document.getElementById('lbMedia');
  const lbThumbs  = document.getElementById('lbThumbs');
  const lbTitle   = document.getElementById('lbTitle');
  const lbDesc    = document.getElementById('lbDesc');
  const lbCount   = document.getElementById('lbCount');
  let activeProj = null;
  let activeIdx  = 0;

  function getLang(){ return document.documentElement.getAttribute('data-lang') || 'en'; }

  function renderSlide(){
    const m = activeProj.media[activeIdx];
    lbMedia.innerHTML = '';
    if (m.type === 'video'){
      const v = document.createElement('video');
      v.src = m.src;
      v.poster = m.poster || '';
      v.controls = true;
      v.playsInline = true;
      v.preload = 'metadata';
      v.setAttribute('controlsList','nodownload');
      lbMedia.appendChild(v);
      // auto-play attempt (muted to satisfy autoplay policy)
      v.muted = false;
      v.play().catch(()=>{ /* user gesture required, ignore */ });
    } else {
      const img = document.createElement('img');
      img.src = m.src;
      img.alt = '';
      lbMedia.appendChild(img);
    }
    lbCount.textContent = `${activeIdx + 1} / ${activeProj.media.length}`;
    // thumbs active state
    lbThumbs.querySelectorAll('.lb-thumb').forEach((t, i) => {
      t.classList.toggle('is-active', i === activeIdx);
    });
    // ensure active thumb is visible
    const active = lbThumbs.querySelector('.lb-thumb.is-active');
    if (active) active.scrollIntoView({ block:'nearest', inline:'center', behavior:'smooth' });
  }

  function buildThumbs(){
    lbThumbs.innerHTML = activeProj.media.map((m, i) => {
      const src = m.type === 'video' ? (m.poster || '') : m.src;
      const badge = m.type === 'video'
        ? '<span class="lb-thumb-badge"><svg viewBox="0 0 24 24" width="9" height="9" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></span>'
        : '';
      return `<button class="lb-thumb" data-idx="${i}" aria-label="Slide ${i + 1}">
                <img src="${src}" alt="" loading="lazy" />${badge}
              </button>`;
    }).join('');
    lbThumbs.querySelectorAll('.lb-thumb').forEach(t => {
      t.addEventListener('click', () => {
        activeIdx = parseInt(t.dataset.idx, 10);
        renderSlide();
      });
    });
  }

  function openLightbox(projIdx, mediaIdx = 0){
    activeProj = PROJECTS[projIdx];
    activeIdx = mediaIdx;
    const lang = getLang();
    lbTitle.textContent = `${activeProj.title[lang]} · ${activeProj.location[lang]}`;
    lbDesc.textContent = activeProj.summary[lang];
    buildThumbs();
    renderSlide();
    lb.hidden = false;
    lb.setAttribute('aria-hidden','false');
    document.body.classList.add('lb-open');
    requestAnimationFrame(() => lb.classList.add('is-open'));
  }

  function closeLightbox(){
    // pause any playing video first
    const v = lbMedia.querySelector('video');
    if (v) { v.pause(); v.removeAttribute('src'); v.load(); }
    lb.classList.remove('is-open');
    setTimeout(() => {
      lb.hidden = true;
      lb.setAttribute('aria-hidden','true');
      document.body.classList.remove('lb-open');
      lbMedia.innerHTML = '';
    }, 240);
  }

  function next(){ if (!activeProj) return; activeIdx = (activeIdx + 1) % activeProj.media.length; renderSlide(); }
  function prev(){ if (!activeProj) return; activeIdx = (activeIdx - 1 + activeProj.media.length) % activeProj.media.length; renderSlide(); }

  // bind project card clicks
  if (grid){
    grid.querySelectorAll('.pcard').forEach(card => {
      const idx = parseInt(card.dataset.project, 10);
      const open = () => openLightbox(idx);
      card.addEventListener('click', open);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); }
      });
    });
  }

  // lightbox controls
  if (lb){
    lb.querySelector('[data-lb-close]').addEventListener('click', closeLightbox);
    lb.querySelector('[data-lb-next]').addEventListener('click', next);
    lb.querySelector('[data-lb-prev]').addEventListener('click', prev);
    lb.addEventListener('click', (e) => {
      // click on the dark backdrop only
      if (e.target === lb) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (lb.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    });

    // swipe on the media stage
    let sx = 0, sy = 0;
    const stage = lb.querySelector('.lb-stage');
    stage.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, {passive:true});
    stage.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)){
        if (dx < 0) next(); else prev();
      }
    });
  }

  /* ─── Reveal on scroll ─── */
  document.querySelectorAll('.about-copy, .about-img, .section-head, .svc-card, .why-grid li, .pcard, .cities li, .contact-copy, .contact-form, .turnkey-inner, .hero-inner > *').forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.is-in)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.3) el.classList.add('is-in');
    });
  }, 1500);

  /* ─── Contact form ─── */
  const form = document.querySelector('.contact-form');
  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      if (!name){ form.name.focus(); return; }
      if (!phone){ form.phone.focus(); return; }
      form.classList.add('is-sent');
      form.querySelector('.btn-submit').setAttribute('disabled','true');
    });
  }

  /* ─── Year ─── */
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = String(new Date().getFullYear());
})();
