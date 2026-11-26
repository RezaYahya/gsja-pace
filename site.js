/* =====================================================================
   site.js: SATU berkas untuk seluruh skrip situs GSJA PACE.
   Isi (berurutan): main, anim, fx, journey, fx2, fx3, fx4, fx5, music.
   Tiap bagian dibungkus pengaman: jika satu bagian error, bagian lain tetap jalan.
   (renungan.js sengaja dipisah karena itu berkas data yang Anda edit tiap hari.)
   ===================================================================== */

/* ---------- main ---------- */
(function () { try {
// Tema terang atau gelap (default gelap, pilihan tersimpan di browser)
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const paintIcon = () => themeBtn.innerHTML = root.dataset.theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
// Ganti tema: warna baru menyebar melingkar dari tombol (View Transitions); tanpa dukungan, ganti biasa
themeBtn.onclick = () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  const apply = () => {
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    paintIcon();
  };
  if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return apply();
  const r = themeBtn.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
  const rad = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  root.classList.add('theme-switching');
  const vt = document.startViewTransition(apply);
  vt.ready.then(() => root.animate(
    { clipPath: ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + rad + 'px at ' + x + 'px ' + y + 'px)'] },
    { duration: 850, easing: 'cubic-bezier(.2,.7,.2,1)', pseudoElement: '::view-transition-new(root)' }
  ));
  vt.finished.finally(() => root.classList.remove('theme-switching'));
};
paintIcon();
document.getElementById('year').textContent = new Date().getFullYear();


// Baris poster: geser, dan kartu muncul satu per satu saat terlihat
document.querySelectorAll('.row-sw').forEach(el => {
  el.querySelectorAll('.swiper-slide').forEach((s, i) => s.style.setProperty('--i', i));
  new Swiper(el, { slidesPerView: 'auto', spaceBetween: 14, slidesOffsetAfter: 24, freeMode: true, grabCursor: true });
});
const rowObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rowObs.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll('.row-s').forEach(r => rowObs.observe(r));

// Galeri: carousel coverflow + perbesar foto
const gal = new Swiper('.gal', {
  effect: 'coverflow', grabCursor: true, centeredSlides: true, slidesPerView: 'auto', loop: true, speed: 700,
  coverflowEffect: { rotate: 28, stretch: 0, depth: 140, modifier: 1, slideShadows: false },
  autoplay: { delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true },
  pagination: { el: '.gal-pg', clickable: true }
});
document.getElementById('galPrev').onclick = () => gal.slidePrev();
document.getElementById('galNext').onclick = () => gal.slideNext();
const lb = new bootstrap.Modal(document.getElementById('lightbox'));
// Lightbox bersama: dipakai Galeri, Pelayanan, dan Events (foto terbuka di tempat, tidak berpindah halaman)
window.__lb = { list: [], i: 0 };
window.__openLB = (list, i) => {
  window.__lb.list = list; window.__lb.i = i;
  const im = document.getElementById('lbImg'); im.classList.remove('swap-l', 'swap-r'); im.src = list[i]; lb.show();
};
const bigSrc = src => /picsum\.photos/.test(src) ? src.replace(/\/(\d+)\/(\d+)(\?.*)?$/, (m, w, h, q) => '/1200/' + Math.round(1200 * h / w) + (q || '')) : src;
document.querySelectorAll('.g-slide').forEach(s => s.addEventListener('click', () => {
  const imgs = [...document.querySelectorAll('.g-slide:not(.swiper-slide-duplicate) img')], me = s.querySelector('img').src;
  window.__openLB(imgs.map(i => i.src.replace('/640/800', '/1200/1500')), Math.max(0, imgs.findIndex(x => x.src === me)));
}));
// Foto Pelayanan dan Events: ketuk untuk melihat besar, geser kiri/kanan untuk foto berikutnya
['#pelayanan', '#events'].forEach(sel => {
  const sec = document.querySelector(sel); if (!sec) return;
  const items = [...sec.querySelectorAll('[data-zoom]')], list = items.map(a => bigSrc(a.querySelector('img').src));
  items.forEach((a, i) => {
    a.addEventListener('click', e => { e.preventDefault(); window.__openLB(list, i); });
    a.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.__openLB(list, i); } });
  });
});

// Menu, dan efek parallax pada foto hero
const nav = document.getElementById('nav');
const hero = document.getElementById('home');
let tick = false;
addEventListener('scroll', () => {
  if (tick) return; tick = true;
  requestAnimationFrame(() => {
    nav.classList.toggle('scrolled', scrollY > 40);
    if (!document.documentElement.classList.contains('lite') && scrollY < innerHeight) hero.style.setProperty('--sy', (scrollY * 0.25) + 'px');
    tick = false;
  });
});
nav.classList.toggle('scrolled', scrollY > 40);

// Renungan: tampilkan satu renungan untuk hari ini
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };
const now = new Date();
const today = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
const sorted = [...RENUNGAN].sort((a, b) => a.tanggal.localeCompare(b.tanggal));
const d = sorted.filter(r => r.tanggal <= today).pop() || sorted[0];
const tgl = new Date(d.tanggal + 'T00:00:00');
const tglPanjang = tgl.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
const words = o => typeof o === 'string' ? o.split(/\s+/).length : Object.entries(o).reduce((n, [k, v]) => n + (['tanggal', 'foto', 'ref'].includes(k) ? 0 : (v && typeof v === 'object' ? (Array.isArray(v) ? v.reduce((a, x) => a + words(x), 0) : words(v)) : (typeof v === 'string' ? words(v) : 0))), 0);
const menit = Math.max(1, Math.round(words(d) / 180));
window.__devo = { tgl, menit };  // dipakai fitur ganti bahasa
const $ = id => document.getElementById(id);

$('dcDay').textContent = tgl.getDate();
$('dcMon').textContent = tgl.toLocaleDateString('id-ID', { month: 'short' });
$('dcMin').textContent = menit;
$('devoCardTitle').textContent = d.judul;
$('dcQuote').textContent = '“' + d.ayat.teks.split(' ').slice(0, 16).join(' ') + '…”';
$('devoCardVerse').textContent = d.ayat.ref;
$('devoCardImg').src = d.foto; $('devoTopImg').src = d.foto;
$('devoDate').textContent = tglPanjang + ', ' + menit + ' menit baca';
$('devoTitle').textContent = d.judul;
$('devoShare').href = 'https://wa.me/?text=' + encodeURIComponent('*' + d.judul + '*\n' + d.ayat.ref + '\n\n“' + d.ayat.teks + '”\n\nBaca selengkapnya: ' + location.href.split('#')[0]);

const body = $('devoBody');
const add = (node) => { node.classList.add('rv'); body.append(node); };
const ayat = el('div', 'd-verse'); ayat.append(el('i', 'fa-solid fa-quote-left'), el('blockquote', '', '“' + d.ayat.teks + '”'), el('cite', '', d.ayat.ref)); add(ayat);
d.pembuka.forEach((t, i) => add(el('p', i === 0 ? 'd-intro' : '', t)));
add(el('div', 'd-hl', d.sorotan));
d.poin.forEach((p, n) => {
  const box = el('section', 'd-pt');
  const h = el('h4'); h.append(el('span', 'd-n', String(n + 1)), document.createTextNode(p.judul)); box.append(h);
  p.blok.forEach(b => {
    if (b.p) box.append(el('p', '', b.p));
    if (b.daftar) { const ul = el('ul', 'd-list'); b.daftar.forEach(x => ul.append(el('li', '', x))); box.append(ul); }
  });
  add(box);
});
add(el('div', 'd-hl', d.sorotan2));
add(el('p', 'd-end', d.penutup));
const ref = el('div', 'd-ref'); ref.append(el('h5', '', 'Refleksi Renungan'), el('p', '', d.refleksi)); add(ref);

// Isi renungan muncul halus saat di-scroll di dalam jendela
$('devoModal').addEventListener('shown.bs.modal', () => {
  const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); o.unobserve(e.target); } }), { root: $('devoScroll'), threshold: .08 });
  body.querySelectorAll('.rv:not(.on)').forEach(x => o.observe(x));
});

// Progress bar baca di bagian atas jendela renungan
const scroller = $('devoScroll'), bar = $('readBar');
scroller.addEventListener('scroll', () => {
  const m = scroller.scrollHeight - scroller.clientHeight;
  bar.style.width = (m > 0 ? scroller.scrollTop / m * 100 : 0) + '%';
});
$('devoModal').addEventListener('show.bs.modal', () => { scroller.scrollTop = 0; bar.style.width = '0%'; });

// Sponsor: berjalan terus tanpa putus (item diperbanyak otomatis sampai cukup panjang)
function buildSponsor() {
  const track = document.getElementById('mqTrack');
  const box = track.parentElement;
  const base = [...track.children];
  const w = track.scrollWidth;
  if (!base.length || !w) return;
  const sets = Math.max(1, Math.ceil(box.clientWidth / w));
  for (let i = 1; i < sets * 2; i++) base.forEach(n => track.append(n.cloneNode(true)));
  track.style.setProperty('--dur', Math.max(15, (w * sets) / 45) + 's');
}
addEventListener('load', buildSponsor);


// Hitung mundur ibadah berikutnya (WIB). Hari & jam dibaca otomatis dari kartu Jadwal Ibadah.
(function () {
  const box = $('cd'); if (!box) return;
  const HARI = { minggu: 0, senin: 1, selasa: 2, rabu: 3, kamis: 4, jumat: 5, sabtu: 6 };
  const NAMA = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const BLN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const svc = [...document.querySelectorAll('#ibadah .sched')].map(c => {
    const day = HARI[((c.querySelector('small') || {}).textContent || '').trim().toLowerCase()];
    const m = ((c.querySelector('b') || {}).textContent || '').match(/(\d{1,2})[.:](\d{2})/);
    const nm = c.querySelector('span');
    return day == null || !m ? null : { day, h: +m[1], mi: +m[2], name: nm ? nm.textContent.trim() : 'Ibadah' };
  }).filter(Boolean);
  if (!svc.length) { box.hidden = true; return; }
  const DUR = 2 * 36e5, WEEK = 7 * 864e5, WIB = 7 * 36e5, pad = n => String(n).padStart(2, '0');
  const u = {}; box.querySelectorAll('[data-u]').forEach(e => u[e.dataset.u] = e);
  const put = (el, v) => { if (el.textContent !== v) { el.textContent = v; el.classList.remove('tick'); void el.offsetWidth; el.classList.add('tick'); } };
  function tick() {
    const w = Date.now() + WIB, d = new Date(w);
    let best = null;
    svc.forEach(s => {
      let t = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + ((s.day - d.getUTCDay() + 7) % 7), s.h, s.mi);
      if (t + DUR <= w) t += WEEK;
      if (!best || t < best.t) best = Object.assign({}, s, { t });
    });
    const diff = best.t - w, live = diff <= 0, dt = new Date(best.t);
    box.classList.toggle('is-live', live);
    $('cdLabel').textContent = live ? 'Sedang berlangsung' : 'Ibadah berikutnya';
    $('cdName').textContent = best.name;
    $('cdWhen').textContent = NAMA[dt.getUTCDay()] + ', ' + dt.getUTCDate() + ' ' + BLN[dt.getUTCMonth()] + ' · ' + pad(best.h) + '.' + pad(best.mi) + ' WIB';
    if (live) return;
    const s = Math.floor(diff / 1000);
    put(u.d, pad(Math.floor(s / 86400))); put(u.h, pad(Math.floor(s % 86400 / 3600)));
    put(u.m, pad(Math.floor(s % 3600 / 60))); put(u.s, pad(s % 60));
  }
  tick(); setInterval(tick, 1000);
})();
} catch (e) { console.error('[main]', e); } })();

/* ---------- anim ---------- */
(function () { try {
/* Animasi gaya studio kreatif: preloader, smooth scroll, teks naik per kata/huruf,
   gambar terbuka (wipe), parallax, marquee besar, garis progres scroll.
   Butuh GSAP + ScrollTrigger (+ Lenis opsional). Jika gagal dimuat, situs tetap tampil normal. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const pre = $('#pre');
  const removePre = () => pre && pre.remove();
  if (!window.gsap || !window.ScrollTrigger || matchMedia('(prefers-reduced-motion: reduce)').matches) return removePre();
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  
  /* ---------- Alat bantu ---------- */
  // Pecah teks jadi kata/huruf dengan "topeng" supaya bisa naik dari bawah garis
  function split(el, mode) {
    const out = [];
    const wrap = txt => {
      const f = document.createDocumentFragment();
      txt.split(/(\s+)/).forEach(p => {
        if (!p) return;
        if (/^\s+$/.test(p)) { f.append(p); return; }
        const w = document.createElement('span'); w.className = 'w';
        const make = t => { const c = document.createElement('span'); c.className = 'c'; c.textContent = t; w.append(c); out.push(c); };
        mode === 'chars' ? [...p].forEach(make) : make(p);
        f.append(w);
      });
      return f;
    };
    const walk = n => [...n.childNodes].forEach(k => {
      if (k.nodeType === 3) { if (k.textContent.trim()) k.replaceWith(wrap(k.textContent)); }
      else if (k.nodeType === 1 && !k.classList.contains('dot')) walk(k);
    });
    const label = el.textContent.trim().replace(/\s+/g, ' ');
    walk(el); el.setAttribute('aria-label', label);
    return out;
  }
  // Muncul dari bawah, saat elemen terlihat
  function rise(targets, o = {}) {
    const els = gsap.utils.toArray(targets); if (!els.length) return;
    els.forEach(e => e.classList.add('no-tr'));
    gsap.from(els, {
      y: o.y ?? 60, opacity: 0, duration: o.d ?? 1.1, ease: 'expo.out', stagger: o.s ?? .12,
      scrollTrigger: { trigger: o.trigger || els[0], start: o.start || 'top 88%', once: true },
      onComplete() { els.forEach(e => e.classList.remove('no-tr')); gsap.set(els, { clearProps: 'transform,opacity' }); }
    });
  }
  // Gambar terbuka seperti tirai naik
  function wipe(el) {
    const cs = getComputedStyle(el);
    const r = ['TopLeft', 'TopRight', 'BottomRight', 'BottomLeft'].map(c => cs['border' + c + 'Radius'].split(' ')[0]).join(' ');
    gsap.fromTo(el, { clipPath: `inset(100% 0% 0% 0% round ${r})` }, {
      clipPath: `inset(0% 0% 0% 0% round ${r})`, duration: 1.4, ease: 'expo.inOut', clearProps: 'clipPath',
      scrollTrigger: { trigger: el, start: 'top 86%', once: true }
    });
  }

  /* ---------- Smooth scroll (Lenis) ---------- */
  const lite = document.documentElement.classList.contains('lite'); // mode ringan: HP / perangkat sederhana
  let lenis = null;
  if (window.Lenis && !lite) {
    lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    window.__lenis = lenis; // dipakai fx4.js untuk lompat ke bagian saat transisi tirai
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    lenis.stop(); // dibuka lagi setelah preloader selesai
    // Lenis memblokir wheel saat berhenti; jendela renungan & menu harus tetap bisa di-scroll mouse
    $$('.modal, .offcanvas').forEach(e => e.setAttribute('data-lenis-prevent', ''));
    ['modal', 'offcanvas'].forEach(k => {
      document.addEventListener('show.bs.' + k, () => lenis.stop());
      document.addEventListener('hidden.bs.' + k, () => lenis.start());
    });
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.dataset.bsToggle) return;
    const id = a.getAttribute('href'); if (id.length < 2) return;
    const t = document.querySelector(id); if (!t) return;
    e.preventDefault();
    const go = () => lenis ? lenis.scrollTo(t, { offset: -70, duration: 1.6 }) : t.scrollIntoView({ behavior: 'smooth' });
    a.closest('#menu') ? $('#menu').addEventListener('hidden.bs.offcanvas', go, { once: true }) : go();
  });

  /* ---------- Beranda: teks masuk setelah preloader ---------- */
  const heroBtns = $$('.hero .btn'); heroBtns.forEach(b => b.classList.add('mag'));
  const hc = split($('.hero h1'), 'chars'), vw = split($('.hero .verse'), 'words');
  const intro = gsap.timeline({ paused: true, defaults: { ease: 'expo.out' }, onComplete() { heroBtns.forEach(b => b.classList.remove('mag')); gsap.set(heroBtns, { clearProps: 'transform,opacity' }); } });
  intro.from('.kicker', { y: 30, opacity: 0, duration: .9 })
    .from(hc, { yPercent: 115, rotate: 8, duration: 1.3, stagger: .05 }, '<.1')
    .from(vw, { yPercent: 110, duration: 1, stagger: .015 }, '<.35')
    .from(heroBtns, { y: 36, opacity: 0, duration: 1, stagger: .1 }, '<.2')
    .add(() => document.dispatchEvent(new Event('hero:in')), 0)
    .to(hc, { color: '#ffc2c9', duration: .35, stagger: .05, yoyo: true, repeat: 1, ease: 'sine.inOut' }, '>-.3');
  gsap.to('.hero-in', { yPercent: -18, opacity: 0, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom 20%', scrub: true } });

  // Preloader: percikan cahaya berkumpul di tengah, lalu membentuk salib
  const pw = $('#preWord'), pc = split(pw, 'chars');
  const cv = $('#preCanvas'), g2 = cv.getContext('2d');
  const dpr = Math.min(devicePixelRatio || 1, lite ? 1 : 1.5), W = innerWidth, H = innerHeight;
  cv.width = W * dpr; cv.height = H * dpr;
  const CS = Math.min(W, H) * (W < H ? .5 : .46), ox = W / 2, oy = H * .45;   // tinggi salib dan titik tengah
  const bw = CS * .2, aw = CS * .62, armY = oy - CS * .22;                       // lebar balok, panjang lengan, posisi lengan
  const mk = c => { const s = document.createElement('canvas'); s.width = s.height = 32; const g = s.getContext('2d'), r = g.createRadialGradient(16, 16, 0, 16, 16, 16); r.addColorStop(0, c[0]); r.addColorStop(.35, c[1]); r.addColorStop(1, c[2]); g.fillStyle = r; g.fillRect(0, 0, 32, 32); return s; };
  const spr = [mk(['rgba(255,244,214,1)', 'rgba(255,196,110,.6)', 'rgba(255,150,60,0)']), mk(['rgba(255,225,225,1)', 'rgba(255,90,110,.6)', 'rgba(225,29,46,0)'])];
  const P = [], aV = bw * CS, aH = (aw - bw) * bw;
  for (let i = 0, n = lite ? 420 : 900; i < n; i++) {
    let tx, ty;
    if (Math.random() < aV / (aV + aH)) { tx = ox + (Math.random() - .5) * bw; ty = oy - CS / 2 + Math.random() * CS; }
    else { tx = ox + (Math.random() < .5 ? -1 : 1) * (bw / 2 + Math.random() * (aw - bw) / 2); ty = armY + (Math.random() - .5) * bw; }
    const an = Math.random() * 6.283, R = Math.max(W, H) * (.55 + Math.random() * .5);
    P.push({ tx, ty, sx: ox + Math.cos(an) * R, sy: oy + Math.sin(an) * R, sw: (Math.random() - .5) * 2.6, d: Math.random() * .7, l: 1.1 + Math.random() * .7, r: .9 + Math.random() * 1.6, ph: Math.random() * 6.28, c: Math.random() < .22 ? 1 : 0,
      vx: (tx - ox) * (1.2 + Math.random() * 2.2) + (Math.random() - .5) * 120, vy: (ty - oy) * (1.2 + Math.random() * 2.2) + (Math.random() - .5) * 120 });
  }
  const st = { t: 0, glow: 0, burst: 0 };
  const draw = () => {
    g2.setTransform(dpr, 0, 0, dpr, 0, 0); g2.clearRect(0, 0, W, H);
    const live = 1 - st.burst;
    if (st.glow > 0) {
      const g = g2.createRadialGradient(ox, oy, 0, ox, oy, CS * 1.2);
      g.addColorStop(0, 'rgba(255,190,110,' + (.5 * st.glow * live) + ')'); g.addColorStop(.5, 'rgba(225,29,46,' + (.18 * st.glow * live) + ')'); g.addColorStop(1, 'rgba(225,29,46,0)');
      g2.globalCompositeOperation = 'source-over'; g2.fillStyle = g; g2.fillRect(0, 0, W, H);
    }
    g2.globalCompositeOperation = 'lighter';
    const fade = Math.min(1, st.t / .5);
    for (const p of P) {
      const u = Math.min(1, Math.max(0, (st.t - p.d) / p.l)), e = 1 - Math.pow(1 - u, 3), k = 1 - e;
      const dx = p.sx - p.tx, dy = p.sy - p.ty, an = k * p.sw, cs = Math.cos(an), sn = Math.sin(an);
      let x = p.tx + (dx * cs - dy * sn) * k, y = p.ty + (dx * sn + dy * cs) * k;
      if (u >= 1) { const b = Math.sin(st.t * 3 + p.ph) * .8; x += b; y += b * .6; }
      if (st.burst > 0) { x += p.vx * st.burst; y += p.vy * st.burst; }
      g2.globalAlpha = Math.max(0, (.3 + .7 * e) * fade * (.7 + .3 * Math.sin(st.t * 6 + p.ph)) * live);
      const r = p.r * (1 + k * 1.2) * (1 + st.glow * .5) * 3;
      g2.drawImage(spr[p.c], x - r, y - r, r * 2, r * 2);
    }
    g2.globalAlpha = 1;
  };
  gsap.ticker.add(draw);
  pw.style.top = (oy + CS / 2 + 30) + 'px'; pw.style.visibility = 'visible';
  gsap.timeline({ onComplete() { gsap.ticker.remove(draw); removePre(); lenis && lenis.start(); ScrollTrigger.refresh(); } })
    .to(st, { t: 2.4, duration: 2.4, ease: 'none' }, 0)
    .from(pc, { yPercent: 130, opacity: 0, duration: .9, stagger: .05, ease: 'expo.out' }, 1.65)
    .to(st, { glow: 1, duration: .7, ease: 'power2.out' }, 1.9)
    .to(st, { glow: .55, duration: .9, ease: 'sine.inOut' }, 2.6)
    .to(pc, { yPercent: -130, opacity: 0, duration: .6, stagger: .03, ease: 'power3.in' }, 3.0)
    .to(st, { burst: 1, duration: 1, ease: 'power2.in' }, 3.05)
    .fromTo(pre, { clipPath: 'inset(0 0 0% 0)' }, { clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'expo.inOut' }, 3.1)
    .add(() => intro.play(), 3.5);

  // Pengaman: jika preloader macet, buka paksa supaya halaman tidak terkunci
  setTimeout(() => { if ($('#pre')) { gsap.ticker.remove(draw); removePre(); lenis && lenis.start(); intro.play(); ScrollTrigger.refresh(); } }, 8000);

  /* ---------- Menu & progres scroll ---------- */
  const nav = $('#nav');
  let vel = 0;
  ScrollTrigger.create({ start: 0, end: 'max', onUpdate: s => { nav.classList.toggle('hide', s.direction === 1 && s.scroll() > 400); vel = s.getVelocity() / 250; } });
  const pg = gsap.quickSetter('.scroll-progress i', 'scaleX');
  ScrollTrigger.create({ start: 0, end: 'max', onUpdate: s => pg(s.progress), onRefresh: s => pg(s.progress) });
  $('#menu').addEventListener('show.bs.offcanvas', () => {
    const l = $$('#menu .offcanvas-body a'); l.forEach(a => a.classList.add('no-tr'));
    gsap.from(l, { x: 60, opacity: 0, duration: .8, ease: 'expo.out', stagger: .05, delay: .15, onComplete() { l.forEach(a => a.classList.remove('no-tr')); gsap.set(l, { clearProps: 'all' }); } });
  });

  /* ---------- Judul bagian: kata naik + garis memanjang ---------- */
  $$('.row-t').forEach(el => {
    const w = split(el, 'words');
    const st = { trigger: el, start: 'top 90%', once: true };
    gsap.from(w, { yPercent: 115, ...(lite ? {} : { filter: 'blur(10px)', opacity: 0 }), duration: 1.1, ease: 'expo.out', stagger: .07, clearProps: 'filter,opacity', scrollTrigger: st });
    gsap.fromTo(el, { '--ln': 0 }, { '--ln': 1, duration: 1.6, ease: 'expo.out', scrollTrigger: st });
  });

  /* ---------- Renungan hari ini ---------- */
  rise('.devo-card', { y: 90 });
  rise('.dc-body > *', { y: 40, s: .1, trigger: '.devo-card', start: 'top 70%' });
  gsap.fromTo('#devoCardImg', { yPercent: -8, scale: 1.2 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.devo-card', start: 'top bottom', end: 'bottom top', scrub: true } });

  /* ---------- Tentang: kalimat menyala per kata mengikuti scroll ---------- */
  const lead = $('.lead-s');
  if (lead) gsap.fromTo(split(lead, 'words'), { opacity: .15 }, { opacity: 1, stagger: .1, ease: 'none', scrollTrigger: { trigger: lead, start: 'top 82%', end: 'bottom 48%', scrub: true } });

  /* ---------- Marquee besar bereaksi pada kecepatan scroll ---------- */
  const S = $$('.bm-track').map(tr => {
    const base = [...tr.children]; for (let i = 0; i < 3; i++) base.forEach(n => tr.append(n.cloneNode(true)));
    const o = { tr, w: 0, x: 0, dir: tr.dataset.dir === 'r' ? -1 : 1 };
    const m = () => { o.w = tr.scrollWidth / 4; }; m();
    addEventListener('resize', m); document.fonts && document.fonts.ready.then(m);
    return o;
  });
  if (S.length) gsap.ticker.add((t, dt) => {
    vel *= .92;
    S.forEach(o => {
      o.x -= o.dir * (.8 + vel) * dt / 16.7;
      if (o.x < -o.w) o.x += o.w; if (o.x > 0) o.x -= o.w;
      gsap.set(o.tr, lite ? { x: o.x } : { x: o.x, skewX: gsap.utils.clamp(-10, 10, -vel * 1.5) });
    });
  });

  /* ---------- Gembala ---------- */
  const ph = $('.p-photo');
  if (ph) {
    wipe(ph);
    gsap.fromTo($('img', ph), { scale: 1.25, yPercent: -6 }, { scale: 1.05, yPercent: 6, ease: 'none', scrollTrigger: { trigger: ph, start: 'top bottom', end: 'bottom top', scrub: true } });
    const pb = $('.p-block'), name = $('.script'), role = $('.role');
    gsap.from(pb, { x: 100, opacity: 0, duration: 1.3, ease: 'expo.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: pb, start: 'top 88%', once: true } });
    gsap.fromTo(name, { clipPath: 'inset(-30% 100% -30% -30%)' }, { clipPath: 'inset(-30% -80% -30% -30%)', duration: 1.6, delay: .35, ease: 'power3.inOut', clearProps: 'clipPath', scrollTrigger: { trigger: pb, start: 'top 88%', once: true } });
    gsap.from(role, { y: 20, opacity: 0, duration: 1, delay: .9, ease: 'expo.out', scrollTrigger: { trigger: pb, start: 'top 88%', once: true } });
    const gw = $('.ghost-w');
    gw && !lite && gsap.fromTo(gw, { xPercent: 25 }, { xPercent: -10, ease: 'none', scrollTrigger: { trigger: '#gembala', start: 'top bottom', end: 'bottom top', scrub: true } });
  }

  /* ---------- Galeri, live, sponsor, kontak ---------- */
  rise('.gal', { y: 90 });
  rise('.gal-ctrl', { y: 30 });
  $$('.vid').forEach(wipe);
  rise('.sponsor', { y: 50 });
  rise('.contact .ci', { y: 40, s: .12, trigger: '.contact' });
  rise('.contact .btn-wa, .contact .social', { y: 30, s: .1, trigger: '.contact .btn-wa' });
  rise('.countdown', { y: 50 });

  /* ---------- Pelayanan & Events: baris melayang searah scroll, kedalaman, parallax foto, tilt 3D ---------- */
  (lite ? [] : $$('#events')).forEach((sec, n) => {
    const row = $('.row-sw', sec); if (!row) return;
    const dir = n % 2 ? 1 : -1; // baris bergantian arah
    $$('.swiper-slide', row).forEach((s, i) => s.style.setProperty('--k', [0, .6, 1.2][i % 3]));
    const st = { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true };
    gsap.fromTo(row, { '--drift': -dir * 110 + 'px', '--wave': '16px' }, { '--drift': dir * 110 + 'px', '--wave': '-16px', ease: 'none', scrollTrigger: st });
    $$('.poster img, .land img', row).forEach(im => gsap.fromTo(im, { scale: 1.25, xPercent: -5 * dir }, { scale: 1.25, xPercent: 5 * dir, ease: 'none', scrollTrigger: st }));
  });
  if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
    $$('.land, .poster').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
        el.style.setProperty('--ry', px * 14 + 'deg'); el.style.setProperty('--rx', -py * 14 + 'deg');
      });
      el.addEventListener('mouseleave', () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
    });
  }

  /* ---------- Footer raksasa ---------- */
  const mf = $('.mf-big');
  if (mf) {
    const ch = split(mf, 'chars'); mf.classList.add('split');
    gsap.from(ch, { yPercent: 115, duration: 1.5, ease: 'expo.out', stagger: .06, scrollTrigger: { trigger: mf, start: 'top 98%', once: true } });
    gsap.fromTo(mf, { y: 70 }, { y: 0, ease: 'none', scrollTrigger: { trigger: 'footer', start: 'top bottom', end: 'bottom bottom', scrub: true } });
  }
  /* ---------- Efek tambahan: ringan, tetap terasa di HP ---------- */
  // Foto hero membesar pelan saat di-scroll
  gsap.to('.hero-bg img', { scale: 1.18, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  // Angka besar Pelayanan muncul membal
  gsap.from('.top .num', { scale: .3, rotate: -20, opacity: 0, duration: 1.2, ease: 'back.out(2.2)', stagger: .12, clearProps: 'transform,opacity', scrollTrigger: { trigger: '#pelayanan', start: 'top 80%', once: true } });
  // Foto kartu terbuka seperti tirai
  $$('.poster img, .land img').forEach(wipe);
  $('.dc-media') && wipe($('.dc-media'));
  // HP: cahaya latar berpindah mengikuti scroll (hanya transform, murah)
  if (lite) {
    const bl = $$('.blobs i');
    const st = { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1 };
    bl[0] && gsap.to(bl[0], { x: '35vw', y: '55vh', ease: 'none', scrollTrigger: st });
    bl[1] && gsap.to(bl[1], { x: '-40vw', y: '-35vh', ease: 'none', scrollTrigger: st });
  }
  /* ---------- Gaya Kinema: adegan tersematan, geser menyamping, kata raksasa ---------- */
  // Beranda: foto menyusut menjadi kartu saat di-scroll (potong ke adegan berikutnya)
  if (!lite) gsap.fromTo('.hero', { clipPath: 'inset(0% 0% 0% 0% round 0px)' }, { clipPath: 'inset(0% 4% 5% 4% round 0px 0px 40px 40px)', ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  // Pelayanan: scroll ke bawah menggeser deretan poster ke samping (posisi "sticky", tanpa pin)
  // Hanya di layar lebar: di HP deretan poster tetap digeser dengan jari (tidak disematkan)
  const pel = $('#pelayanan'), prow = pel && $('.row-sw', pel);
  if (pel && prow && !lite && innerWidth >= 992) {
    const wrap = $('.swiper-wrapper', prow);
    if (prow.swiper) prow.swiper.destroy(true, true);
    pel.classList.add('pin-h');
    const dist = () => Math.max(0, wrap.scrollWidth + (parseFloat(getComputedStyle(prow).paddingLeft) || 0) - prow.clientWidth + 24);
    if (dist() > 40) {
      const inner = document.createElement('div'); inner.className = 'pin-in';
      while (pel.firstChild) inner.append(pel.firstChild);
      pel.append(inner);
      const setPH = () => pel.style.setProperty('--ph', 'calc(100svh + ' + Math.max(0, dist()) + 'px)');
      setPH(); ScrollTrigger.addEventListener('refreshInit', setPH);
      gsap.to(wrap, { x: () => -Math.max(0, dist()), ease: 'none', scrollTrigger: { trigger: pel, start: 'top top', end: 'bottom bottom', scrub: .6, invalidateOnRefresh: true } });
    }
  }

  // Tentang: Visi & Misi sebagai adegan sinematik yang menempel di layar (sticky), bergantian mengikuti scroll
  try {
    const tn = $('#tentang'), trow = tn && $('.row', tn), cards = trow ? $$('.card3', trow).slice(0, 2) : [];
    if (cards.length === 2) {
      tn.classList.add('stage');
      const vm = document.createElement('div'); vm.className = 'vm'; trow.replaceWith(vm);
      const mk = (cls, html) => { const d = document.createElement('div'); d.className = cls; d.setAttribute('aria-hidden', 'true'); if (html) d.innerHTML = html; return d; };
      const txt = (c, s) => $(s, c).textContent.trim();
      // dekorasi: cahaya, kata raksasa, cincin orbit, kilatan, rel progres (semuanya diambil dari isi kartu)
      const glows = [mk('vm-glow g1'), mk('vm-glow g2')];
      const fx = mk('vm-fx'), ghosts = cards.map(c => { const g = mk('vm-ghost'); g.textContent = txt(c, 'h5'); fx.append(g); return g; });
      const orbit = mk('vm-orbit', '<i class="o1"></i><i class="o2"></i>'); fx.append(orbit);
      const sweep = mk('vm-sweep');
      const rail = mk('vm-rail', cards.map((c, i) => '<span class="rn' + (i ? '' : ' on') + '"><b>' + txt(c, 'b') + '</b>' + txt(c, 'h5') + '</span>').join('<span class="rl"><i></i></span>'));
      vm.append(...glows, fx, ...cards, sweep, rail);
      const fill = $('.rl i', rail);
      const bl = lite ? {} : { filter: 'blur(8px)' }, bl0 = lite ? {} : { filter: 'blur(0px)' };
      const P = cards.map(c => ({ num: split($('b', c), 'chars'), ttl: split($('h5', c), 'chars'), txt: split($('p', c), 'words') }));
      const [c1, c2] = cards;

      // keadaan awal: semua tersembunyi
      gsap.set(cards, { autoAlpha: 0 });
      gsap.set([P[0].num, P[0].ttl, P[1].num, P[1].ttl], { yPercent: 120 });
      gsap.set([P[0].txt, P[1].txt], { opacity: 0, y: 16, ...bl });
      gsap.set(ghosts, { clipPath: 'inset(0% 100% 0% 0%)' });
      gsap.set(glows, { opacity: 0 }); gsap.set(orbit, { opacity: 0, scale: .6 }); gsap.set(rail, { opacity: 0, y: 20 });

      // 1) Pembuka (berjalan sendiri saat bagian ini terlihat): Visi masuk
      const intro = gsap.timeline({ paused: true, defaults: { ease: 'expo.out' }, onComplete() { gsap.set(P[0].txt, { clearProps: 'filter' }); } });
      intro.fromTo(c1, { autoAlpha: 0, y: 60, rotateX: -10, transformPerspective: 900 }, { autoAlpha: 1, y: 0, rotateX: 0, duration: 1.2 }, 0)
        .to(glows[0], { opacity: 1, duration: 1.6 }, 0)
        .to(orbit, { opacity: 1, scale: 1, duration: 1.6 }, .1)
        .to(ghosts[0], { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power3.inOut' }, .15)
        .to(P[0].num, { yPercent: 0, duration: 1, stagger: .08 }, .25)
        .to(P[0].ttl, { yPercent: 0, duration: 1.1, stagger: .05 }, .35)
        .to(P[0].txt, { opacity: 1, y: 0, ...bl0, duration: .9, stagger: .035 }, .55)
        .to(rail, { opacity: 1, y: 0, duration: .9 }, .9);
      ScrollTrigger.create({ trigger: tn, start: 'top 45%', once: true, onEnter: () => intro.play() });

      // 2) Peralihan Visi -> Misi mengikuti scroll (scrub)
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: tn, start: 'top top', end: 'bottom bottom', scrub: .4, onUpdate: s => { rail.classList.toggle('two', s.progress > .4); if (s.progress > .05 && intro.progress() < 1) intro.progress(1); } }
      });
      tl.fromTo(P[0].txt, { opacity: 1, y: 0, ...bl0 }, { opacity: 0, y: -18, ...bl, duration: .16, stagger: .008, immediateRender: false }, .2)
        .fromTo(P[0].ttl, { yPercent: 0 }, { yPercent: -120, duration: .16, stagger: .012, immediateRender: false }, .22)
        .fromTo(P[0].num, { yPercent: 0 }, { yPercent: -120, duration: .14, stagger: .02, immediateRender: false }, .22)
        .fromTo(ghosts[0], { yPercent: 0, opacity: 1 }, { yPercent: -60, opacity: 0, duration: .22, immediateRender: false }, .2)
        .fromTo(c1, { autoAlpha: 1 }, { autoAlpha: 0, duration: .1, immediateRender: false }, .36)
        .fromTo(glows[0], { opacity: 1 }, { opacity: 0, duration: .3, immediateRender: false }, .2)
        .fromTo(glows[1], { opacity: 0 }, { opacity: 1, duration: .3 }, .3)
        .fromTo(sweep, { xPercent: -130 }, { xPercent: 130, duration: .24 }, .32)
        .fromTo(orbit, { scale: 1 }, { scale: 1.18, duration: .14, yoyo: true, repeat: 1, immediateRender: false }, .32)
        .fromTo(ghosts[1], { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: .24 }, .34)
        .fromTo(c2, { autoAlpha: 0 }, { autoAlpha: 1, duration: .1 }, .38)
        .fromTo(P[1].num, { yPercent: 120 }, { yPercent: 0, duration: .16, stagger: .02 }, .42)
        .fromTo(P[1].ttl, { yPercent: 120 }, { yPercent: 0, duration: .18, stagger: .012 }, .44)
        .fromTo(P[1].txt, { opacity: 0, y: 18, ...bl }, { opacity: 1, y: 0, ...bl0, duration: .2, stagger: .008 }, .48)
        .fromTo(fill, { scaleX: 0 }, { scaleX: 1, duration: .3 }, .22)
        .to({}, { duration: .001 }, .999); // tahan di akhir: Misi dibiarkan terbaca

      // 3) Laptop: kata raksasa & cincin bergeser tipis mengikuti mouse
      if (matchMedia('(hover:hover) and (pointer:fine)').matches) vm.addEventListener('pointermove', e => {
        const r = vm.getBoundingClientRect();
        fx.style.setProperty('--px', ((e.clientX - r.left) / r.width - .5).toFixed(3)); fx.style.setProperty('--py', ((e.clientY - r.top) / r.height - .5).toFixed(3));
      }, { passive: true });
    }
  } catch (err) { console.warn('Tentang:', err); }

  // Kata raksasa di belakang tiap bagian bergeser mengikuti scroll
  const GH = { ibadah: 'Ibadah', renungan: 'Renungan', events: 'Events', galeri: 'Galeri', live: 'Live', kontak: 'Kontak' };
  $$('.row-s[id]').forEach(sec => {
    if (!GH[sec.id]) return;
    const g = document.createElement('span'); g.className = 'ghost-t'; g.setAttribute('aria-hidden', 'true'); g.textContent = GH[sec.id];
    sec.prepend(g);
    gsap.fromTo(g, { xPercent: 14 }, { xPercent: -24, ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: .6 } });
  });

  // Live: video membesar dari kecil ke penuh saat di-scroll
  const lv = $('#live .vid');
  lv && gsap.fromTo(lv, { scale: .86 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: lv, start: 'top 95%', end: 'top 35%', scrub: true } });

  ScrollTrigger.sort();

  addEventListener('load', () => ScrollTrigger.refresh());
})();
} catch (e) { console.error('[anim]', e); } })();

/* ---------- fx ---------- */
(function () { try {
/* Efek ringan tanpa GSAP: bara cahaya di hero, riak sentuhan pada tombol, teks kicker "teracak". */
(() => {
  // Pemutar YouTube: tampilkan gambar pratinjau, muat video saat ditekan (ringan untuk HP, selalu berfungsi)
  // data-yt boleh berisi ID video ATAU link YouTube lengkap (watch?v=..., youtu.be/..., shorts/..., embed/...)
  const ytId = s => { s = (s || '').trim(); const m = s.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/); return m ? m[1] : (/^[\w-]{11}$/.test(s) ? s : ''); };
  document.querySelectorAll('[data-yt]').forEach(box => {
    const id = ytId(box.dataset.yt), img = box.querySelector('.yt-thumb'), btn = box.querySelector('.yt-play'), ext = box.querySelector('.yt-ext');
    if (!id || !img || !btn) { console.warn('YouTube: ID video tidak terbaca dari data-yt="' + box.dataset.yt + '"'); return; }
    const watch = 'https://www.youtube.com/watch?v=' + id;
    if (ext) ext.href = watch;

    // gambar pratinjau dengan cadangan berlapis (ukuran yang tidak tersedia dilewati; 120px = gambar kosong milik YouTube)
    const sizes = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault'];
    let n = 0;
    const load = () => { img.src = 'https://i.ytimg.com/vi/' + id + '/' + sizes[n] + '.jpg'; };
    img.onload = () => { if (img.naturalWidth <= 120 && n < sizes.length - 1) { n++; load(); } };
    img.onerror = () => { if (n < sizes.length - 1) { n++; load(); } };
    load();

    // pesan ramah jika YouTube menolak memutar video di halaman ini
    const showFail = code => {
      if (box.querySelector('.yt-fail')) return;
      console.warn('YouTube: video tidak bisa diputar di halaman ini (kode ' + code + '). Kode 101/150: pemilik video belum mengaktifkan "Izinkan penyematan" di YouTube Studio. Kode 153: buka situs lewat alamat https (bukan file di komputer).');
      const f = document.createElement('div'); f.className = 'yt-fail';
      const p = document.createElement('p'); p.textContent = 'Video ini belum bisa diputar langsung di halaman ini.';
      const a = document.createElement('a'); a.className = 'btn btn-play'; a.href = watch; a.target = '_blank'; a.rel = 'noopener';
      a.innerHTML = '<i class="fa-brands fa-youtube me-2"></i>Tonton di YouTube';
      f.append(p, a); box.append(f);
    };

    btn.addEventListener('click', () => {
      const fr = document.createElement('iframe');
      const web = /^https?:$/.test(location.protocol);
      fr.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1&modestbranding=1&enablejsapi=1' + (web ? '&origin=' + encodeURIComponent(location.origin) : '');
      fr.title = 'Live Streaming GSJA PACE';
      fr.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      fr.referrerPolicy = 'strict-origin-when-cross-origin';
      fr.allowFullscreen = true;
      // dengarkan laporan kesalahan dari pemutar YouTube
      fr.addEventListener('load', () => {
        try {
          fr.contentWindow.postMessage(JSON.stringify({ event: 'listening', id: 1, channel: 'widget' }), '*');
          fr.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'addEventListener', args: ['onError'], id: 1, channel: 'widget' }), '*');
        } catch (_) {}
      });
      addEventListener('message', e => {
        if (e.source !== fr.contentWindow) return;
        let d = e.data; if (typeof d === 'string') { try { d = JSON.parse(d); } catch (_) { return; } }
        if (d && d.event === 'onError') showFail(d.info);
        else if (d && d.event === 'infoDelivery' && d.info && [101, 150, 153].includes(d.info.errorCode)) showFail(d.info.errorCode);
      });
      box.querySelector('.yt-inner').replaceWith(fr);
    });
  });

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const lite = document.documentElement.classList.contains('lite');

  // Riak saat tombol disentuh/diklik
  document.addEventListener('pointerdown', e => {
    const t = e.target.closest('.btn, .live-pill, .icon-btn.ring'); if (!t) return;
    const r = t.getBoundingClientRect(), d = Math.max(r.width, r.height) * 2.2, s = document.createElement('span');
    s.className = 'ripple';
    s.style.cssText = 'width:' + d + 'px;height:' + d + 'px;left:' + (e.clientX - r.left - d / 2) + 'px;top:' + (e.clientY - r.top - d / 2) + 'px';
    t.appendChild(s); setTimeout(() => s.remove(), 750);
  }, { passive: true });

  // Teks kicker hero: huruf teracak lalu menetap
  const k = document.querySelector('.kicker');
  if (k) {
    const txt = k.textContent, set = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ran = false;
    const run = () => {
      if (ran) return; ran = true;
      const t0 = performance.now(), dur = 1100;
      (function step(now) {
        const p = Math.min(1, (now - t0) / dur), fixed = Math.floor(p * txt.length);
        k.textContent = [...txt].map((ch, i) => ch === ' ' || i < fixed ? ch : set[Math.floor(Math.random() * 26)]).join('');
        if (p < 1) requestAnimationFrame(step); else k.textContent = txt;
      })(t0);
    };
    document.addEventListener('hero:in', run);
    if (!window.gsap) setTimeout(run, 400);
  }

  // Bara cahaya hangat naik pelan di hero (kanvas kecil, berhenti saat tidak terlihat)
  const hero = document.getElementById('home'); if (!hero) return;
  const cv = document.createElement('canvas'); cv.className = 'hero-embers'; cv.setAttribute('aria-hidden', 'true');
  hero.insertBefore(cv, hero.querySelector('.hero-in'));
  const ctx = cv.getContext('2d'); if (!ctx) return;
  const dpr = Math.min(devicePixelRatio || 1, lite ? 1 : 1.5), N = lite ? 16 : 34;
  let W = 0, H = 0, run = false, last = 0;
  const spr = document.createElement('canvas'); spr.width = spr.height = 32;
  const sg = spr.getContext('2d'), gr = sg.createRadialGradient(16, 16, 0, 16, 16, 16);
  gr.addColorStop(0, 'rgba(255,220,150,1)'); gr.addColorStop(.35, 'rgba(255,140,60,.55)'); gr.addColorStop(1, 'rgba(255,90,40,0)');
  sg.fillStyle = gr; sg.fillRect(0, 0, 32, 32);
  const P = [];
  const size = () => { W = hero.clientWidth; H = hero.clientHeight; cv.width = W * dpr; cv.height = H * dpr; };
  const reset = (p, init) => { p.x = Math.random() * W; p.y = init ? Math.random() * H : H + 20; p.r = 4 + Math.random() * 9; p.vy = 12 + Math.random() * 26; p.sw = 8 + Math.random() * 22; p.ph = Math.random() * 6.28; p.a = .25 + Math.random() * .6; };
  size(); for (let i = 0; i < N; i++) { const p = {}; reset(p, true); P.push(p); }
  addEventListener('resize', size);
  let raf = 0;
  function frame(now) {
    raf = 0;
    if (!run) return;
    const dt = Math.min(.05, (now - last) / 1000 || .016); last = now;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H); ctx.globalCompositeOperation = 'lighter';
    P.forEach(p => {
      p.y -= p.vy * dt; p.ph += dt;
      if (p.y < -20) reset(p, false);
      const x = p.x + Math.sin(p.ph) * p.sw, tw = .6 + .4 * Math.sin(p.ph * 3);
      ctx.globalAlpha = p.a * tw * Math.min(1, p.y / (H * .35)); ctx.drawImage(spr, x - p.r, p.y - p.r, p.r * 2, p.r * 2);
    });
    raf = requestAnimationFrame(frame);
  }
  const go = on => { if (on) { run = true; if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } } else run = false; };
  new IntersectionObserver(es => go(es[0].isIntersecting && !document.hidden), { threshold: .05 }).observe(hero);
  document.addEventListener('visibilitychange', () => go(!document.hidden && scrollY < H));
})();
} catch (e) { console.error('[fx]', e); } })();

/* ---------- journey ---------- */
(function () { try {
/* Perjalanan Iman: salib 3D (CSS 3D, tanpa pustaka berat), langit yang berganti, awan dan bintang berparalaks,
   bab teks yang bergantian mengikuti scroll, salib bisa diputar dengan jari/mouse, ketuk untuk percikan cahaya. */
(() => {
  const root = document.documentElement, lite = root.classList.contains('lite');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const sec = $('#perjalanan'); if (!sec || sec.dataset.ready) return;
  sec.dataset.ready = '1'; // cegah dijalankan dua kali

  /* ---------- Salib 3D dari dua balok ---------- */
  const cr = $('#cross3d'), U = 'var(--u)';
  const cuboid = (w, h, d, y) => {
    const g = document.createElement('div'); g.className = 'cb'; g.style.transform = 'translateY(calc(' + U + ' * ' + y + '))';
    [['f', 'translateZ(calc(' + U + ' * ' + d / 2 + '))', w, h], ['k', 'rotateY(180deg) translateZ(calc(' + U + ' * ' + d / 2 + '))', w, h],
     ['r', 'rotateY(90deg) translateZ(calc(' + U + ' * ' + w / 2 + '))', d, h], ['l', 'rotateY(-90deg) translateZ(calc(' + U + ' * ' + w / 2 + '))', d, h],
     ['t', 'rotateX(90deg) translateZ(calc(' + U + ' * ' + h / 2 + '))', w, d], ['b', 'rotateX(-90deg) translateZ(calc(' + U + ' * ' + h / 2 + '))', w, d]
    ].forEach(([c, tr, fw, fh]) => {
      const f = document.createElement('i'); f.className = 'fc ' + c;
      f.style.cssText = 'width:calc(' + U + ' * ' + fw + ');height:calc(' + U + ' * ' + fh + ');margin:calc(' + U + ' * ' + (-fh / 2) + ') 0 0 calc(' + U + ' * ' + (-fw / 2) + ');transform:' + tr;
      g.append(f);
    });
    return g;
  };
  cr.append(cuboid(1, 4, 1, 0), cuboid(2.8, 1, 1, -0.9));

  /* ---------- Bintang ---------- */
  const sc = $('.j-stars');
  for (let i = 0, n = lite ? 36 : 80; i < n; i++) {
    const s = document.createElement('i'), z = 1 + Math.random() * 2.2;
    s.className = 'st';
    s.style.cssText = 'left:' + Math.random() * 100 + '%;top:' + Math.random() * 100 + '%;width:' + z + 'px;height:' + z + 'px;opacity:' + (.4 + Math.random() * .6) + ';animation-delay:-' + (Math.random() * 3).toFixed(2) + 's;animation-duration:' + (2 + Math.random() * 3).toFixed(1) + 's';
    sc.append(s);
  }

  /* ---------- Putar salib: seret/geser, dengan inersia ---------- */
  const wrap = $('#crossWrap'), hint = $('.j-hint');
  let drag = 0, dRx = 0, vy = 0, down = false, lx = 0, ly = 0, moved = 0, auto = 0, prog = 0, run = false, last = 0;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  wrap.addEventListener('pointerdown', e => { down = true; moved = 0; lx = e.clientX; ly = e.clientY; vy = 0; try { wrap.setPointerCapture(e.pointerId); } catch (_) {} });
  wrap.addEventListener('pointermove', e => {
    if (!down) return;
    const dx = e.clientX - lx, dy = e.clientY - ly; lx = e.clientX; ly = e.clientY; moved += Math.abs(dx) + Math.abs(dy);
    drag += dx * .6; vy = dx * .6; dRx = clamp(dRx + dy * .3, -28, 28);
    hint && hint.classList.add('off');
  });
  const up = e => { if (down && moved < 6 && window.gsap) burst(e.clientX, e.clientY); down = false; };
  ['pointerup', 'pointercancel'].forEach(ev => wrap.addEventListener(ev, up));

  let raf = 0; // hanya satu putaran animasi yang boleh berjalan
  function frame(t) {
    raf = 0;
    if (!run) return;
    const dt = Math.min(.05, (t - last) / 1000 || .016); last = t;
    if (!down) { drag += vy; vy *= .94; dRx *= .95; }
    auto += dt * 12;
    cr.style.transform = 'rotateX(' + (-14 + dRx + Math.sin(t / 1800) * 3).toFixed(2) + 'deg) rotateY(' + (prog * 540 + auto + drag).toFixed(2) + 'deg)';
    raf = requestAnimationFrame(frame);
  }
  if (!reduce) new IntersectionObserver(es => { if (es[0].isIntersecting) { run = true; if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } } else run = false; }, { threshold: 0 }).observe(sec);
  else cr.style.transform = 'rotateX(-14deg) rotateY(25deg)';

  /* ---------- Percikan cahaya saat mengetuk (Beranda dan adegan ini) ---------- */
  const layer = document.createElement('div'); layer.className = 'spark-layer'; layer.setAttribute('aria-hidden', 'true'); document.body.append(layer);
  function burst(x, y) {
    if (!window.gsap || reduce) return;
    for (let i = 0, n = lite ? 8 : 14; i < n; i++) {
      const s = document.createElement('i'); s.style.left = x + 'px'; s.style.top = y + 'px'; layer.append(s);
      const a = Math.random() * 6.283, d = 40 + Math.random() * 90;
      gsap.fromTo(s, { x: 0, y: 0, scale: 1, opacity: 1 }, { x: Math.cos(a) * d, y: Math.sin(a) * d, scale: 0, opacity: 0, duration: .8 + Math.random() * .5, ease: 'power2.out', onComplete: () => s.remove() });
    }
  }
  ['#home', '#perjalanan'].forEach(sel => { const el = $(sel); el && el.addEventListener('pointerdown', e => { if (e.target.closest('a,button,.cross-wrap')) return; burst(e.clientX, e.clientY); }, { passive: true }); });

  /* ---------- Hero miring halus mengikuti pointer (hanya laptop) ---------- */
  const hero = $('#home');
  if (hero && !reduce && matchMedia('(hover:hover) and (pointer:fine)').matches) {
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(3));
      hero.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(3));
    }, { passive: true });
  }

  /* ---------- Adegan yang tertahan: langit, awan, bintang, salib, dan bab berganti ---------- */
  if (!window.gsap || !window.ScrollTrigger || reduce) return; // tanpa GSAP: tampil statis (salib tetap bisa diputar)
  gsap.registerPlugin(ScrollTrigger);
  sec.classList.add('journey-on');
  const sk = $$('.j-sky', sec), clouds = $$('.j-cl', sec), chap = $$('.j-chap', sec);
  gsap.set(chap, { autoAlpha: 0, y: 40 });
  // Memakai posisi "sticky" CSS (bukan pin): panggung menempel di layar selama bagian ini discroll
  const fades = $$('.j-fade', sec);
  fades[0] && gsap.fromTo(fades[0], { opacity: 1 }, { opacity: 0, ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'top 10%', scrub: true } });
  fades[1] && gsap.fromTo(fades[1], { opacity: 0 }, { opacity: 1, ease: 'none', scrollTrigger: { trigger: sec, start: 'bottom bottom', end: 'bottom 55%', scrub: true } });
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: { trigger: sec, start: 'top top', end: 'bottom bottom', scrub: .5, invalidateOnRefresh: true, onUpdate: s => { prog = s.progress; } }
  });
  tl.fromTo(wrap, { yPercent: 22, scale: .6 }, { yPercent: -4, scale: 1, duration: 1.6 }, 0)
    .to(wrap, { '--glow': 1, duration: 4 }, 0)
    .to(sk[1], { opacity: 1, duration: 1 }, .7)
    .to(sk[2], { opacity: 1, duration: 1 }, 1.7)
    .to(sk[3], { opacity: 1, duration: 1 }, 2.7)
    .fromTo(sc, { yPercent: 4 }, { yPercent: -14, duration: 4 }, 0)
    .fromTo(sc, { opacity: 0 }, { opacity: 1, duration: 1.4 }, 2);
  clouds.forEach(c => tl.to(c, { y: () => -innerHeight * (.35 + .7 * (+c.dataset.d)), duration: 4 }, 0));
  tl.to(clouds, { opacity: 0, duration: .9 }, 2.7);
  chap.forEach((c, i) => {
    tl.to(c, { autoAlpha: 1, y: 0, duration: .35 }, i + .08);
    if (i < chap.length - 1) tl.to(c, { autoAlpha: 0, y: -40, duration: .35 }, i + .8);
  });
  ScrollTrigger.sort(); ScrollTrigger.refresh();
})();
} catch (e) { console.error('[journey]', e); } })();

/* ---------- fx2 ---------- */
(function () { try {
/* Efek tambahan (fx2): hanya efek & interaksi, tanpa konten/menu baru.
   Cahaya senter di kartu, tilt 3D, cahaya hero mengikuti mouse, huruf hero & footer yang bereaksi,
   parallax foto galeri, geser/tombol panah di lightbox, judul miring saat scroll cepat, getar halus di HP.
   Semua dibungkus pengaman: jika satu efek gagal, yang lain tetap jalan. */
(() => {
  const root = document.documentElement, lite = root.classList.contains('lite');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const safe = f => { try { f(); } catch (e) { console.warn('fx2:', e); } };
  const set = (el, k, v) => el.style.setProperty(k, v);

  /* ---------- Lightbox galeri: geser kiri/kanan di HP, panah keyboard di laptop ---------- */
  safe(() => {
    const lbEl = $('#lightbox'), img = $('#lbImg'); if (!lbEl || !img) return;
    const step = dir => {
      const S = window.__lb; if (!S || S.list.length < 2) return;
      S.i = (S.i + dir + S.list.length) % S.list.length;
      img.classList.remove('swap-l', 'swap-r'); void img.offsetWidth;
      img.src = S.list[S.i];
      img.classList.add(dir > 0 ? 'swap-r' : 'swap-l');
    };
    document.addEventListener('keydown', e => {
      if (!lbEl.classList.contains('show')) return;
      if (e.key === 'ArrowRight') step(1); else if (e.key === 'ArrowLeft') step(-1);
    });
    let sx = 0, sy = 0, on = false;
    lbEl.addEventListener('pointerdown', e => { on = true; sx = e.clientX; sy = e.clientY; });
    lbEl.addEventListener('pointerup', e => {
      if (!on) return; on = false;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
    });
  });

  /* ---------- Getar halus saat menyentuh tombol (HP yang mendukung) ---------- */
  document.addEventListener('pointerdown', e => {
    if (reduce || e.pointerType !== 'touch' || !navigator.vibrate) return;
    if (e.target.closest('.btn,.icon-btn,.live-pill,.yt-play,.g-slide')) navigator.vibrate(8);
  }, { passive: true });

  if (reduce) return;

  /* ---------- Cahaya senter mengikuti mouse di kartu kaca ---------- */
  safe(() => {
    if (!fine) return;
    $$('.card3,.contact,.sched,.countdown,.dc-body').forEach(el => {
      if (getComputedStyle(el).position === 'static') el.classList.add('spot-host');
      const g = document.createElement('div'); g.className = 'spot-glow'; g.setAttribute('aria-hidden', 'true'); el.append(g);
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        set(g, '--sx', (e.clientX - r.left) + 'px'); set(g, '--sy', (e.clientY - r.top) + 'px');
      }, { passive: true });
    });
  });

  /* ---------- Tilt 3D halus: kartu renungan, foto gembala, pemutar video ---------- */
  safe(() => {
    if (!fine || lite) return;
    $$('.devo-card,.p-photo,.yt').forEach(el => {
      el.classList.add('tilt');
      el.addEventListener('pointermove', e => {
        if (el.querySelector('iframe')) return; // video sedang diputar: jangan miring
        const r = el.getBoundingClientRect();
        set(el, '--ry', (((e.clientX - r.left) / r.width - .5) * 8).toFixed(2) + 'deg');
        set(el, '--rx', (-((e.clientY - r.top) / r.height - .5) * 8).toFixed(2) + 'deg');
      }, { passive: true });
      el.addEventListener('pointerleave', () => { set(el, '--rx', '0deg'); set(el, '--ry', '0deg'); });
    });
  });

  /* ---------- Cahaya hangat di hero mengikuti mouse ---------- */
  safe(() => {
    const hero = $('#home'); if (!hero || !fine || lite || !window.gsap) return;
    const sp = document.createElement('div'); sp.className = 'hero-spot'; sp.setAttribute('aria-hidden', 'true');
    hero.insertBefore(sp, $('.hero-in', hero));
    const qx = gsap.quickTo(sp, 'x', { duration: .7, ease: 'power3' }), qy = gsap.quickTo(sp, 'y', { duration: .7, ease: 'power3' });
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect(); qx(e.clientX - r.left); qy(e.clientY - r.top); sp.classList.add('on');
    }, { passive: true });
    hero.addEventListener('pointerleave', () => sp.classList.remove('on'));
  });

  /* ---------- Huruf judul hero melompat saat dilewati mouse ---------- */
  safe(() => {
    const h1 = $('.hero h1'); if (!h1 || !fine || !window.gsap) return;
    let ready = false;
    document.addEventListener('hero:in', () => setTimeout(() => { ready = true; h1.classList.add('free'); }, 3800), { once: true });
    h1.addEventListener('pointerover', e => {
      const c = ready && e.target.closest('.c'); if (!c || c._busy) return; c._busy = true;
      gsap.timeline({ onComplete: () => { c._busy = false; } })
        .to(c, { y: -18, scale: 1.14, rotate: gsap.utils.random(-6, 6), color: '#ff8a95', duration: .22, ease: 'power2.out' })
        .to(c, { y: 0, scale: 1, rotate: 0, color: '#fff', duration: 1.1, ease: 'elastic.out(1,.35)' });
    });
  });

  /* ---------- Tulisan raksasa di footer bergelombang mengikuti mouse ---------- */
  safe(() => {
    const mf = $('.mf-big'), foot = $('footer'); if (!mf || !foot || !fine || lite || !window.gsap) return;
    let ready = false;
    new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { setTimeout(() => { ready = true; mf.classList.add('free'); }, 2800); o.disconnect(); } }).observe(mf);
    foot.addEventListener('pointermove', e => {
      if (!ready) return;
      $$('.c', mf).forEach(c => {
        const r = c.getBoundingClientRect(), v = Math.max(0, 1 - Math.abs(e.clientX - (r.left + r.width / 2)) / 260);
        gsap.to(c, { yPercent: -v * 14, duration: .45, ease: 'power3.out', overwrite: 'auto' });
      });
    }, { passive: true });
    foot.addEventListener('pointerleave', () => gsap.to($$('.c', mf), { yPercent: 0, duration: .9, ease: 'elastic.out(1,.5)', overwrite: 'auto' }));
  });

  /* ---------- Galeri: foto aktif bergeser & membesar mengikuti mouse ---------- */
  safe(() => {
    if (!fine) return;
    $$('.g-slide').forEach(s => {
      s.addEventListener('pointermove', e => {
        const r = s.getBoundingClientRect();
        set(s, '--gx', ((e.clientX - r.left) / r.width - .5).toFixed(3)); set(s, '--gy', ((e.clientY - r.top) / r.height - .5).toFixed(3));
      }, { passive: true });
      s.addEventListener('pointerleave', () => { set(s, '--gx', 0); set(s, '--gy', 0); });
    });
  });

  /* ---------- Judul bagian miring tipis saat scroll cepat (sinematik) ---------- */
  safe(() => {
    if (lite || !window.gsap) return;
    const ts = $$('.row-t'); if (!ts.length) return;
    const setters = ts.map(t => gsap.quickSetter(t, 'skewY', 'deg'));
    let last = scrollY, sk = 0, shown = 0;
    gsap.ticker.add(() => {
      const v = scrollY - last; last = scrollY;
      sk += (gsap.utils.clamp(-4, 4, v * .12) - sk) * .12;
      if (Math.abs(sk - shown) < .01 && Math.abs(sk) < .01) { if (shown) { setters.forEach(f => f(0)); shown = 0; } return; }
      shown = sk; setters.forEach(f => f(sk));
    });
  });
})();
} catch (e) { console.error('[fx2]', e); } })();

/* ---------- fx3 ---------- */
(function () { try {
/* fx3: efek terinspirasi dialedcoffee.com, disesuaikan untuk website gereja (tanpa konten baru).
   1) Warna suasana berganti halus di tiap bagian   2) Bar kecil "ibadah berikutnya" yang menempel di bawah layar
   3) Logo miring halus mengikuti scroll   4) Bagian yang lewat mengecil & meredup (kedalaman)
   5) Kejutan tersembunyi: ketuk logo 5x -> hujan bintang + ayat hero
   Pita marquee yang miring ada di CSS. */
(() => {
  const root = document.documentElement, lite = root.classList.contains('lite');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const safe = f => { try { f(); } catch (e) { console.warn('fx3:', e); } };
  const hasGS = !!(window.gsap && window.ScrollTrigger);
  if (hasGS) gsap.registerPlugin(ScrollTrigger);

  /* ---------- 1) Warna suasana per bagian ---------- */
  safe(() => {
    if (!hasGS || reduce) return;
    const mood = document.createElement('div'); mood.className = 'mood'; mood.setAttribute('aria-hidden', 'true');
    const bl = $('.blobs'); bl ? bl.after(mood) : document.body.prepend(mood);
    const PAL = {
      home: 'rgba(225,29,46,0)', ibadah: 'rgba(225,29,46,.10)', renungan: 'rgba(255,140,40,.15)',
      pelayanan: 'rgba(200,40,120,.12)', events: 'rgba(255,90,60,.14)', tentang: 'rgba(225,29,46,.10)',
      perjalanan: 'rgba(225,29,46,0)', gembala: 'rgba(255,175,60,.14)', galeri: 'rgba(110,70,230,.13)',
      live: 'rgba(225,29,46,.18)', kontak: 'rgba(30,160,190,.12)'
    };
    Object.keys(PAL).forEach(id => {
      const s = $('#' + id); if (!s) return;
      const go = () => gsap.to(mood, { backgroundColor: PAL[id], duration: 1.4, ease: 'power2.out', overwrite: 'auto' });
      ScrollTrigger.create({ trigger: s, start: 'top 55%', end: 'bottom 55%', onEnter: go, onEnterBack: go });
    });
  });

  if (!hasGS || reduce) return;

  /* ---------- 3) Logo miring halus mengikuti scroll ---------- */
  safe(() => {
    const logo = $('.topbar .logo'); if (!logo) return;
    $('.topbar .brand').classList.add('coin');
    gsap.fromTo(logo, { rotateY: -24 }, { rotateY: 24, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .6 } }); // miring halus, logo selalu terlihat
  });

  /* ---------- 4) Bagian yang lewat mengecil & meredup ---------- */
  safe(() => {
    if (lite) return;
    ['#ibadah', '#renungan', '#pelayanan', '#events', '#gembala', '#galeri', '#live'].forEach(id => {
      const s = $(id); if (!s) return;
      gsap.fromTo(s, { scale: 1, opacity: 1 }, {
        scale: .94, opacity: .3, ease: 'none', transformOrigin: '50% 100%', immediateRender: false,
        scrollTrigger: { trigger: s, start: 'bottom 55%', end: 'bottom 5%', scrub: true }
      });
    });
  });

  /* ---------- 5) Kejutan: ketuk logo 5x dalam waktu singkat ---------- */
  safe(() => {
    const brand = $('.topbar .brand'); if (!brand) return;
    let n = 0, t = 0;
    brand.addEventListener('click', () => { const now = Date.now(); n = now - t < 900 ? n + 1 : 1; t = now; if (n >= 5) { n = 0; party(); } });
    function party() {
      const cols = ['#ff4d5e', '#ff7a3d', '#ffc857', '#ffffff'];
      for (let i = 0, c = lite ? 22 : 42; i < c; i++) {
        const s = document.createElement('i'); s.className = 'confetti'; s.textContent = '✦';
        s.style.cssText = 'left:' + Math.random() * 100 + 'vw;color:' + cols[i % cols.length] + ';font-size:' + (12 + Math.random() * 22) + 'px';
        document.body.append(s);
        gsap.fromTo(s, { y: -40, rotate: 0, opacity: 1 }, { y: innerHeight + 60, rotate: gsap.utils.random(-540, 540), x: gsap.utils.random(-120, 120), duration: gsap.utils.random(1.8, 3.4), delay: Math.random() * .6, ease: 'power1.in', onComplete: () => s.remove() });
      }
      const v = $('.hero .verse'); if (!v) return;
      const tx = document.createElement('div'); tx.className = 'verse-toast glass'; tx.textContent = v.getAttribute('aria-label') || v.textContent.trim();
      document.body.append(tx);
      gsap.timeline({ onComplete: () => tx.remove() })
        .fromTo(tx, { y: 40, opacity: 0, scale: .94 }, { y: 0, opacity: 1, scale: 1, duration: .7, ease: 'expo.out' })
        .to(tx, { y: 20, opacity: 0, duration: .6, ease: 'power2.in' }, '+=3.6');
    }
  });

  addEventListener('load', () => ScrollTrigger.refresh());
})();
} catch (e) { console.error('[fx3]', e); } })();

/* ---------- fx4 ---------- */
(function () { try {
/* fx4: sinar cahaya hero, foto "dicetak warna" saat masuk fokus, mode "Sedang Live", transisi tirai saat menu diklik.
   Tes mode Live tanpa menunggu jadwal: buka halaman dengan tambahan  ?testlive  di alamatnya. */
(() => {
  const root = document.documentElement, lite = root.classList.contains('lite');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const safe = f => { try { f(); } catch (e) { console.warn('fx4:', e); } };
  const hasGS = !!(window.gsap && window.ScrollTrigger);

  /* ---------- 1) Sinar cahaya di hero ---------- */
  safe(() => {
    const hero = $('#home'); if (!hero || reduce) return;
    const rays = document.createElement('div'); rays.className = 'hero-rays'; rays.setAttribute('aria-hidden', 'true');
    const beam = document.createElement('i'); rays.append(beam);
    hero.insertBefore(rays, $('.hero-in', hero));
    const on = () => rays.classList.add('on');
    document.addEventListener('hero:in', () => setTimeout(on, 500), { once: true });
    setTimeout(on, 7000); // pengaman bila animasi pembuka tidak berjalan
    if (hasGS) gsap.to(beam, { opacity: 0, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom 35%', scrub: true } });
  });

  /* ---------- 2) Foto kusam kemerahan, menyala penuh saat berada di tengah layar ---------- */
  safe(() => {
    const imgs = $$('.poster img,.land img,.p-photo img,.dc-media img'); if (!imgs.length) return;
    imgs.forEach(i => i.classList.add('cg'));
    const io = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('lit', e.isIntersecting)), { rootMargin: '-22% 0px -22% 0px', threshold: .15 });
    imgs.forEach(i => io.observe(i));
  });

  /* ---------- 3) Mode "Sedang Live": mengikuti hitung mundur ibadah yang sudah ada ---------- */
  safe(() => {
    const cd = $('#cd'), forced = /[?&]testlive\b/.test(location.search);
    if (!cd && !forced) return;
    const edge = document.createElement('div'); edge.className = 'live-edge'; edge.setAttribute('aria-hidden', 'true'); document.body.append(edge);
    const apply = () => root.classList.toggle('live-now', forced || !!(cd && cd.classList.contains('is-live')));
    apply();
    cd && new MutationObserver(apply).observe(cd, { attributes: true, attributeFilter: ['class'] });
  });

  /* ---------- 4) Tirai gelap dengan nama bagian saat memilih menu ---------- */
  safe(() => {
    if (!hasGS || reduce) return;
    const cur = document.createElement('div'); cur.className = 'curtain'; cur.setAttribute('aria-hidden', 'true');
    const word = document.createElement('span'); cur.append(word); document.body.append(cur);
    let busy = false;
    const jump = t => {
      const L = window.__lenis;
      if (L) { try { L.scrollTo(t, { immediate: true, force: true, offset: -70 }); return; } catch (_) {} }
      scrollTo(0, t.getBoundingClientRect().top + scrollY - 70);
    };
    document.addEventListener('click', e => {
      const a = e.target.closest('.topbar .links a, #menu .offcanvas-body a'); if (!a || busy) return;
      const id = a.getAttribute('href') || ''; if (id.length < 2 || id[0] !== '#') return;
      const t = document.querySelector(id); if (!t) return;
      e.preventDefault(); e.stopImmediatePropagation(); busy = true;
      // menu samping (HP): tutup dulu sambil tirai menutup
      const menu = $('#menu'), inst = window.bootstrap && menu && bootstrap.Offcanvas.getInstance(menu);
      let closed = Promise.resolve();
      if (menu && menu.classList.contains('show') && inst) { closed = new Promise(r => menu.addEventListener('hidden.bs.offcanvas', r, { once: true })); inst.hide(); }
      word.textContent = (a.textContent || '').trim();
      gsap.set(cur, { visibility: 'visible' });
      gsap.timeline({
        onComplete() {
          closed.then(() => {
            jump(t);
            setTimeout(() => {
              gsap.to(word, { y: -40, opacity: 0, duration: .4, ease: 'power2.in' });
              gsap.to(cur, { clipPath: 'inset(0% 0% 100% 0%)', duration: .8, ease: 'expo.inOut', onComplete() { gsap.set(cur, { visibility: 'hidden' }); busy = false; } });
            }, 180);
          });
        }
      })
        .fromTo(cur, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: .65, ease: 'expo.inOut' })
        .fromTo(word, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: .6, ease: 'expo.out' }, '-=.3');
    }, true); // fase capture: dijalankan sebelum penggulir bawaan
  });
})();
} catch (e) { console.error('[fx4]', e); } })();

/* ---------- fx5 ---------- */
(function () { try {
/* fx5: Baca Renungan yang lebih sinematik + efek film di seluruh halaman.
   Renungan: bar sinema membuka dari tengah, butiran film, foto parallax, judul muncul kata demi kata,
   ayat & kalimat sorotan menyala kata demi kata, cahaya latar mengikuti kemajuan membaca.
   Halaman: vignette tepi layar (tema gelap). Semua dibungkus pengaman. */
(() => {
  const root = document.documentElement, lite = root.classList.contains('lite');
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const safe = f => { try { f(); } catch (e) { console.warn('fx5:', e); } };

  /* ---------- Jendela Baca Renungan ---------- */
  safe(() => {
    const modal = $('#devoModal'); if (!modal) return;
    const top = $('.modal-top', modal), scroller = $('#devoScroll'), content = $('.modal-content', modal), body = $('#devoBody');
    if (!top || !scroller || !content) return;

    // bar sinema + butiran film di foto utama (memakai <span>, bukan <div>, agar tidak terkena gaya .modal-top div)
    ['t', 'b'].forEach(k => { const s = document.createElement('span'); s.className = 'cine-bar ' + k; s.setAttribute('aria-hidden', 'true'); top.append(s); });
    const gr = document.createElement('span'); gr.className = 'cine-grain'; gr.setAttribute('aria-hidden', 'true'); top.append(gr);

    // judul: dipecah per kata
    const h2 = $('#devoTitle');
    if (h2 && h2.textContent.trim()) {
      const t = h2.textContent.trim(); h2.setAttribute('aria-label', t); h2.textContent = '';
      t.split(/\s+/).forEach((w, i) => {
        const s = document.createElement('span'); s.className = 'hw'; s.style.setProperty('--i', i); s.textContent = w;
        h2.append(s, ' ');
      });
    }

    // ayat & kalimat sorotan: kata demi kata menyala saat terlihat (dipicu kelas .on dari main.js)
    if (body) $$('.d-verse blockquote, .d-hl', body).forEach(el => {
      const t = el.textContent.trim(); el.setAttribute('aria-label', t); el.textContent = '';
      t.split(/\s+/).forEach((w, i) => {
        const s = document.createElement('span'); s.className = 'vw'; s.style.setProperty('--i', Math.min(i, 36)); s.textContent = w;
        el.append(s, ' ');
      });
    });

    // foto parallax, judul memudar, cahaya latar mengikuti kemajuan membaca
    scroller.addEventListener('scroll', () => {
      const st = scroller.scrollTop, m = scroller.scrollHeight - scroller.clientHeight;
      top.style.setProperty('--ty', (st * .35).toFixed(1));
      top.style.setProperty('--tf', Math.min(1, st / 300).toFixed(3));
      content.style.setProperty('--rp', (m > 0 ? st / m : 0).toFixed(3));
    }, { passive: true });
  });

  /* ---------- Efek film di seluruh halaman: vignette tepi layar (hanya tema gelap) ---------- */
  safe(() => {
    const f = document.createElement('div'); f.className = 'film'; f.setAttribute('aria-hidden', 'true'); document.body.append(f);
  });
})();
} catch (e) { console.error('[fx5]', e); } })();

/* ---------- music ---------- */
(function () { try {
/* Musik latar: tombol mengambang di kiri bawah. Tidak berbunyi sendiri (aturan browser), dimulai saat tombol ditekan.
   - suara naik/turun perlahan (fade)
   - berhenti otomatis saat tab disembunyikan, dan lanjut saat kembali
   - berhenti otomatis saat video YouTube di bagian Live mulai diputar
   - file musik: audio/musik.mp3 (ubah alamatnya di tag <audio id="bgm"> pada index.html) */
(() => {
  const audio = document.getElementById('bgm'), btn = document.getElementById('musicBtn');
  if (!audio || !btn) return;
  const VOL = .5;
  let raf = 0, resume = false;

  const label = on => { const t = on ? 'Jeda musik' : 'Putar musik'; btn.setAttribute('aria-label', t); btn.title = t; btn.setAttribute('aria-pressed', on ? 'true' : 'false'); };
  const fade = (to, ms, done) => {
    cancelAnimationFrame(raf);
    const from = audio.volume, t0 = performance.now();
    const step = now => {
      const p = Math.min(1, (now - t0) / ms);
      audio.volume = Math.max(0, Math.min(1, from + (to - from) * p));
      if (p < 1) raf = requestAnimationFrame(step); else if (done) done();
    };
    raf = requestAnimationFrame(step);
  };
  const start = () => {
    btn.classList.remove('err'); btn.classList.add('loading', 'used');
    audio.volume = 0;
    const p = audio.play();
    if (p && p.catch) p.catch(() => btn.classList.remove('loading'));
  };
  const stop = () => { resume = false; fade(0, 600, () => audio.pause()); };

  let silent = false; // true: sudah berputar tapi suara masih ditahan browser sampai ada sentuhan pertama
  const unmute = () => { silent = false; audio.muted = false; audio.volume = 0; fade(VOL, 1500); };
  btn.addEventListener('click', () => { if (silent) return unmute(); audio.paused ? start() : stop(); });

  audio.addEventListener('playing', () => { btn.classList.remove('loading'); btn.classList.add('on'); label(true); fade(VOL, 1500); });
  audio.addEventListener('pause', () => { btn.classList.remove('on', 'loading'); label(false); });
  audio.addEventListener('waiting', () => { if (!audio.paused) btn.classList.add('loading'); });
  audio.addEventListener('error', () => {
    btn.classList.remove('loading', 'on'); btn.classList.add('err'); btn.title = 'File musik tidak ditemukan';
    console.warn('Musik: file tidak bisa dimuat. Pastikan ada di ' + (audio.getAttribute('src') || 'audio/musik.mp3'));
  });

  // hemat baterai & tidak mengganggu: berhenti saat tab disembunyikan, lanjut saat kembali
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { if (!audio.paused) { resume = true; audio.pause(); } }
    else if (resume) { resume = false; audio.volume = 0; const p = audio.play(); if (p && p.catch) p.catch(() => {}); }
  });

  // video YouTube di bagian Live: musik berhenti supaya suara tidak bertabrakan
  const yt = document.querySelector('[data-yt]');
  if (yt) new MutationObserver(() => { if (yt.querySelector('iframe') && !audio.paused) stop(); }).observe(yt, { childList: true, subtree: true });

  /* ---------- Musik menyala otomatis saat halaman dibuka ----------
     Browser menolak SUARA otomatis sebelum pengunjung menyentuh halaman, tetapi mengizinkan putaran tanpa suara.
     Jadi musik langsung berjalan (ikon berputar); suaranya muncul perlahan pada sentuhan, klik, atau tombol keyboard pertama.
     Jika pengunjung sudah memilih lewat tombol musik, pilihannya dihormati. */
  let userChose = false;
  const EVS = ['pointerdown', 'pointerup', 'touchend', 'keydown'];
  const gesture = e => {
    if (e.target && e.target.closest && e.target.closest('.music-btn')) return;   // tombol musik mengatur dirinya sendiri
    if (silent) { unmute(); return off(); }
    if (userChose || !audio.paused) return off();
    audio.volume = 0; btn.classList.add('loading');
    const p = audio.play();
    if (p && p.then) p.then(off, err => { btn.classList.remove('loading'); if (!err || err.name !== 'NotAllowedError') off(); }); else off();
  };
  const off = () => EVS.forEach(ev => removeEventListener(ev, gesture, true));
  const arm = () => EVS.forEach(ev => addEventListener(ev, gesture, true));
  btn.addEventListener('click', () => { userChose = true; off(); }, true);
  audio.volume = 0;
  const first = audio.play();
  if (first && first.catch) first.catch(err => {
    if (!err || err.name !== 'NotAllowedError') return;
    // Browser menolak suara otomatis: putar dulu TANPA suara (diizinkan), ikon langsung berputar,
    // lalu suara dinaikkan perlahan begitu pengunjung menyentuh/mengklik halaman.
    audio.muted = true;
    const m = audio.play();
    const wait = () => { silent = true; arm(); };
    if (m && m.then) m.then(wait, () => { audio.muted = false; arm(); }); else wait();
  });
  label(false);
})();
} catch (e) { console.error('[music]', e); } })();

/* ---------- Ganti bahasa: Indonesia, English, 中文, 한국어, 日本語, العربية ----------
   Cara kerja: teks Indonesia di halaman dicocokkan dengan kamus di bawah lalu diganti sesuai bahasa pilihan
   (disimpan di perangkat pengunjung). Isi renungan harian ditulis di renungan.js dan tetap berbahasa Indonesia.
   Untuk menambah atau mengubah terjemahan, edit daftar D: setiap baris = teks Indonesia → [Inggris, Mandarin, Korea, Jepang, Arab].
   Bahasa Arab memakai tata letak yang sama; hanya arah baca teksnya yang kanan ke kiri. */
(function () { try {
  const root = document.documentElement;
  const L = [['id', 'Indonesia', 'ID'], ['en', 'English', 'EN'], ['zh', '中文', '中文'], ['ko', '한국어', 'KO'], ['ja', '日本語', 'JA'], ['ar', 'العربية', 'AR']];
  const LOC = { id: 'id-ID', en: 'en-US', zh: 'zh-CN', ko: 'ko-KR', ja: 'ja-JP', ar: 'ar-EG-u-nu-latn' };
  const ORDER = ['en', 'zh', 'ko', 'ja', 'ar'];
  const D = {
    'Beranda': ['Home', '首页', '홈', 'ホーム', 'الرئيسية'],
    'Tentang': ['About', '关于', '소개', '概要', 'عن الكنيسة'],
    'Pelayanan': ['Ministries', '事工', '사역', '奉仕', 'الخدمات'],
    'Renungan': ['Devotional', '灵修', '묵상', 'デボーション', 'تأمل'],
    'Events': ['Events', '活动', '행사', 'イベント', 'الفعاليات'],
    'Galeri': ['Gallery', '相册', '갤러리', 'ギャラリー', 'المعرض'],
    'Kontak': ['Contact', '联系我们', '연락처', 'お問い合わせ', 'اتصل بنا'],
    'Live': ['Live', '直播', '라이브', 'ライブ', 'مباشر'],
    'Tentang Kami': ['About Us', '关于我们', '우리 교회 소개', '私たちについて', 'من نحن'],
    'Perjalanan Iman': ['Journey of Faith', '信仰之旅', '믿음의 여정', '信仰の旅', 'رحلة الإيمان'],
    'Gembala': ['Pastor', '牧师', '목사님', '牧師', 'الراعي'],
    'Live Streaming': ['Live Streaming', '在线直播', '라이브 스트리밍', 'ライブ配信', 'البث المباشر'],
    '“Sebab di mana dua atau tiga orang berkumpul dalam nama-Ku, di situ Aku ada di tengah-tengah mereka.”': ['“For where two or three are gathered together in my name, there am I in the midst of them.”', '“因为无论在哪里,有两三个人奉我的名聚会,那里就有我在他们中间。”', '“두세 사람이 내 이름으로 모인 곳에는 나도 그들 중에 있느니라”', '“二三人わが名によりて集まる所には、我もその中にあるなり。”', '“لأَنَّهُ حَيْثُمَا اجْتَمَعَ اثْنَانِ أَوْ ثَلاَثَةٌ بِاسْمِي فَهُنَاكَ أَكُونُ فِي وَسْطِهِمْ.”'],
    'Matius 18:20': ['Matthew 18:20', '马太福音 18:20', '마태복음 18:20', 'マタイ 18:20', 'متى 18:20'],
    'Ibadah Online': ['Join Online Service', '在线参加崇拜', '온라인 예배', 'オンライン礼拝', 'العبادة عبر الإنترنت'],
    'Jadwal Ibadah': ['Service Schedule', '崇拜时间表', '예배 시간표', '礼拝スケジュール', 'مواعيد العبادة'],
    'Ibadah berikutnya': ['Next service', '下一场崇拜', '다음 예배', '次の礼拝', 'العبادة القادمة'],
    'Hari': ['Days', '天', '일', '日', 'أيام'], 'Jam': ['Hours', '时', '시간', '時間', 'ساعات'],
    'Menit': ['Minutes', '分', '분', '分', 'دقائق'], 'Detik': ['Seconds', '秒', '초', '秒', 'ثوانٍ'],
    'Gabung Live': ['Join Live', '加入直播', '라이브 참여', 'ライブに参加', 'انضم للبث'],
    'Minggu': ['Sunday', '周日', '일요일', '日曜日', 'الأحد'], 'Kamis': ['Thursday', '周四', '목요일', '木曜日', 'الخميس'], 'Sabtu': ['Saturday', '周六', '토요일', '土曜日', 'السبت'],
    'Ibadah Raya': ['Main Service', '主日崇拜', '주일 예배', '主日礼拝', 'العبادة الرئيسية'],
    'Ibadah Keluarga': ['Family Service', '家庭崇拜', '가정 예배', '家庭礼拝', 'عبادة العائلة'],
    'Ibadah Pemuda': ['Youth Service', '青年崇拜', '청년 예배', 'ユース礼拝', 'عبادة الشباب'],
    'Renungan Hari Ini': ["Today's Devotional", '今日灵修', '오늘의 묵상', '今日のデボーション', 'تأمل اليوم'],
    'menit baca': ['min read', '分钟阅读', '분 소요', '分で読めます', 'دقائق للقراءة'],
    'Renungan Harian': ['Daily Devotional', '每日灵修', '매일 묵상', 'デイリーデボーション', 'التأمل اليومي'],
    'Baca Renungan': ['Read Devotional', '阅读灵修', '묵상 읽기', 'デボーションを読む', 'اقرأ التأمل'],
    'Pemuda': ['Youth', '青年', '청년부', 'ユース', 'الشباب'], 'Anak': ['Children', '儿童', '어린이부', '子ども', 'الأطفال'],
    'Wanita': ['Women', '妇女', '여성부', '女性', 'النساء'], 'Pria': ['Men', '男士', '남성부', '男性', 'الرجال'],
    'Des': ['Dec', '12月', '12월', '12月', 'ديس'],
    'Perayaan Natal': ['Christmas Celebration', '圣诞庆典', '성탄 축하 예배', 'クリスマス祝会', 'احتفال عيد الميلاد'],
    'Ibadah Akhir Tahun': ['Year End Service', '年终崇拜', '송구영신 예배', '年末礼拝', 'عبادة نهاية العام'],
    'Beribadah': ['Worship', '敬拜', '예배', '礼拝', 'العبادة'], 'Memuridkan': ['Discipleship', '门徒栽培', '제자 양육', '弟子訓練', 'التلمذة'],
    'Melayani': ['Serving', '服事', '섬김', '奉仕', 'الخدمة'], 'Memberitakan Injil': ['Sharing the Gospel', '传扬福音', '복음 전파', '福音の宣教', 'نشر الإنجيل'],
    'Berawal dari persekutuan kecil orang percaya yang rindu melayani Tuhan bersama, kini kami terus bertumbuh sebagai satu keluarga.': ['It began as a small fellowship of believers longing to serve the Lord together, and today we continue to grow as one family.', '教会起初只是一群渴望一同事奉主的信徒所组成的小小团契,如今我们仍作为一家人不断成长。', '주님을 함께 섬기기를 소망하는 작은 신앙 공동체로 시작하여, 지금도 한 가족으로 계속 자라가고 있습니다.', '主に共に仕えたいと願う信徒たちの小さな交わりから始まり、今も一つの家族として成長し続けています。', 'بدأنا كشركة صغيرة من المؤمنين الذين يتوقون إلى خدمة الرب معًا، ولا نزال ننمو كعائلة واحدة.'],
    'Visi': ['Vision', '愿景', '비전', 'ビジョン', 'الرؤية'], 'Misi': ['Mission', '使命', '사명', 'ミッション', 'الرسالة'],
    'Gereja yang hidup, bertumbuh, dan menjadi berkat.': ['A living, growing church that is a blessing to others.', '一间有生命、不断成长并成为祝福的教会。', '살아 있고 성장하며 복이 되는 교회.', '生き生きと成長し、祝福となる教会。', 'كنيسة حية ونامية وتكون بركة.'],
    'Beribadah, memuridkan, melayani, dan memberitakan Injil.': ['To worship, make disciples, serve, and share the Gospel.', '敬拜神、栽培门徒、服事他人、传扬福音。', '예배하고, 제자 삼고, 섬기며, 복음을 전합니다.', '礼拝し、弟子を育て、奉仕し、福音を宣べ伝えます。', 'أن نعبد، ونتلمذ، ونخدم، وننشر الإنجيل.'],
    'Firman': ['The Word', '圣言', '말씀', 'み言葉', 'الكلمة'], 'Kasih': ['Love', '爱', '사랑', '愛', 'المحبة'],
    'Roh Kudus': ['Holy Spirit', '圣灵', '성령', '聖霊', 'الروح القدس'], 'Persekutuan': ['Fellowship', '团契', '교제', '交わり', 'الشركة'],
    'Dari Firman menuju terang': ['From the Word to the light', '从圣言走向光明', '말씀에서 빛으로', 'み言葉から光へ', 'من الكلمة إلى النور'],
    'Geser salib untuk memutar': ['Drag the cross to rotate it', '拖动十字架来旋转', '십자가를 밀어서 돌려보세요', '十字架をスワイプして回転', 'اسحب الصليب لتدويره'],
    'Mulai dari mendengar': ['It starts with listening', '从聆听开始', '듣는 것에서 시작됩니다', '聴くことから始まる', 'تبدأ بالإصغاء'],
    'Perjalanan iman dimulai ketika kita mau mendengar. Firman Tuhan menjadi terang bagi setiap langkah kita.': ["The journey of faith begins when we are willing to listen. God's Word is a light for every step we take.", '信仰之旅始于我们愿意聆听。神的话语是我们每一步的亮光。', '믿음의 여정은 기꺼이 들으려는 마음에서 시작됩니다. 하나님의 말씀은 우리의 모든 걸음을 비추는 빛입니다.', '信仰の旅は、耳を傾けることから始まります。神の言葉は私たちの一歩一歩を照らす光です。', 'تبدأ رحلة الإيمان عندما نرغب في الإصغاء. كلمة الله نور لكل خطوة نخطوها.'],
    'Digerakkan oleh kasih': ['Moved by love', '被爱所感动', '사랑에 이끌려', '愛に動かされて', 'بدافع المحبة'],
    'Kasih menggerakkan kita keluar dari diri sendiri, untuk melihat dan melayani sesama.': ['Love moves us beyond ourselves, to see and to serve others.', '爱使我们走出自我,去看见并服事他人。', '사랑은 우리를 자기 자신에서 벗어나 이웃을 보고 섬기게 합니다.', '愛は私たちを自分自身の外へと動かし、隣人を見つめ、仕えさせます。', 'المحبة تدفعنا للخروج من ذواتنا، لنرى الآخرين ونخدمهم.'],
    'Dituntun dan dikuatkan': ['Guided and strengthened', '蒙引导,得坚固', '인도하시고 힘주시는', '導かれ、力づけられて', 'بإرشاد وتقوية'],
    'Roh Kudus menuntun, menguatkan, dan memperbarui kita dari hari ke hari.': ['The Holy Spirit guides, strengthens, and renews us day by day.', '圣灵引导我们、坚固我们,并天天更新我们。', '성령님은 날마다 우리를 인도하시고, 힘 주시며, 새롭게 하십니다.', '聖霊は日々、私たちを導き、強め、新しくしてくださいます。', 'الروح القدس يرشدنا ويقوّينا ويجدّدنا يومًا بعد يوم.'],
    'Berjalan bersama': ['Walking together', '同行共进', '함께 걸어가요', '共に歩む', 'نسير معًا'],
    'Kita tidak berjalan sendiri. Bersama keluarga Allah, kita bertumbuh sampai tujuan.': ['We do not walk alone. Together with the family of God, we grow all the way to the goal.', '我们并不孤单。与神的家人同行,我们一起成长,直到终点。', '우리는 홀로 걷지 않습니다. 하나님의 가족과 함께 목적지까지 자라갑니다.', '私たちは一人で歩むのではありません。神の家族と共に、ゴールまで成長していきます。', 'لسنا نسير وحدنا. مع عائلة الله، ننمو معًا حتى بلوغ الهدف.'],
    'Gembala Sidang': ['Senior Pastor', '主任牧师', '담임목사', '主任牧師', 'الراعي الرئيسي'],
    'Pujian': ['Worship', '赞美', '찬양', '賛美', 'التسبيح'], 'Natal': ['Christmas', '圣诞节', '성탄절', 'クリスマス', 'عيد الميلاد'], 'Retreat': ['Retreat', '退修会', '수련회', 'リトリート', 'خلوة'],
    'Live Streaming GSJA PACE': ['GSJA PACE Live Streaming', 'GSJA PACE 在线直播', 'GSJA PACE 라이브 스트리밍', 'GSJA PACE ライブ配信', 'البث المباشر لكنيسة GSJA PACE'],
    'Buka di YouTube': ['Open on YouTube', '在 YouTube 上打开', 'YouTube에서 열기', 'YouTubeで開く', 'افتح على يوتيوب'],
    'Didukung oleh': ['Supported by', '赞助支持', '후원', '協賛', 'برعاية'],
    'Alamat': ['Address', '地址', '주소', '住所', 'العنوان'],
    'Minggu, 08.00 WIB': ['Sunday, 08.00 WIB', '周日 08.00 WIB', '일요일 08.00 WIB', '日曜日 08.00 WIB', 'الأحد، 08.00 WIB'],
    'Chat WhatsApp': ['Chat on WhatsApp', '通过 WhatsApp 联系', 'WhatsApp으로 문의', 'WhatsAppでチャット', 'تواصل عبر واتساب'],
    'Bagikan': ['Share', '分享', '공유', '共有', 'مشاركة'], 'Tutup': ['Close', '关闭', '닫기', '閉じる', 'إغلاق'],
    'Refleksi Renungan': ['Reflection', '反思', '묵상 질문', '振り返り', 'تأمل وتفكير'],
    'Sedang berlangsung': ['Happening now', '正在进行', '진행 중', '開催中', 'جارٍ الآن'], 'Sedang Live': ['Live now', '正在直播', '지금 라이브', 'ライブ配信中', 'مباشر الآن'],
    'Ganti tema terang atau gelap': ['Switch between light and dark theme', '切换浅色/深色主题', '밝은/어두운 테마 전환', 'ライト/ダークテーマの切り替え', 'تبديل المظهر الفاتح أو الداكن'],
    'Menu': ['Menu', '菜单', '메뉴', 'メニュー', 'القائمة'],
    'Sebelumnya': ['Previous', '上一个', '이전', '前へ', 'السابق'], 'Berikutnya': ['Next', '下一个', '다음', '次へ', 'التالي'],
    'Putar Live Streaming GSJA PACE': ['Play GSJA PACE live stream', '播放 GSJA PACE 直播', 'GSJA PACE 라이브 재생', 'GSJA PACE ライブ配信を再生', 'تشغيل البث المباشر لـ GSJA PACE'],
    'Sponsor': ['Sponsors', '赞助商', '후원사', 'スポンサー', 'الرعاة'],
    'Salib tiga dimensi, geser untuk memutar': ['3D cross, drag to rotate', '三维十字架,拖动旋转', '3D 십자가, 밀어서 회전', '3D十字架、スワイプで回転', 'صليب ثلاثي الأبعاد، اسحب لتدويره'],
    'Lokasi GSJA PACE': ['GSJA PACE location', 'GSJA PACE 位置', 'GSJA PACE 위치', 'GSJA PACEの場所', 'موقع GSJA PACE'],
    'Gembala GSJA PACE': ['Pastor of GSJA PACE', 'GSJA PACE 牧师', 'GSJA PACE 목사님', 'GSJA PACE の牧師', 'راعي GSJA PACE'],
    'Logo GSJA PACE': ['GSJA PACE logo', 'GSJA PACE 标志', 'GSJA PACE 로고', 'GSJA PACE のロゴ', 'شعار GSJA PACE'],
    'Putar musik': ['Play music', '播放音乐', '음악 재생', '音楽を再生', 'تشغيل الموسيقى'], 'Jeda musik': ['Pause music', '暂停音乐', '음악 일시정지', '音楽を一時停止', 'إيقاف الموسيقى مؤقتًا'],
    'File musik tidak ditemukan': ['Music file not found', '找不到音乐文件', '음악 파일을 찾을 수 없습니다', '音楽ファイルが見つかりません', 'ملف الموسيقى غير موجود'],
    'Website resmi GSJA PACE. Ibadah, renungan, event, dan live streaming.': ['Official website of GSJA PACE. Services, devotionals, events, and live streaming.', 'GSJA PACE 官方网站。崇拜、灵修、活动与在线直播。', 'GSJA PACE 공식 웹사이트. 예배, 묵상, 행사, 라이브 스트리밍.', 'GSJA PACE 公式サイト。礼拝、デボーション、イベント、ライブ配信。', 'الموقع الرسمي لكنيسة GSJA PACE. العبادة والتأملات والفعاليات والبث المباشر.']
  };
  const T = {}; ORDER.forEach((c, i) => { T[c] = {}; for (const k in D) T[c][k] = D[k][i]; });
  const PFX = { en: 'View photo: ', zh: '查看照片:', ko: '사진 보기: ', ja: '写真を見る: ', ar: 'عرض صورة: ' };
  const WD = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'], MN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const KEYS = Object.keys(D).sort((a, b) => b.length - a.length);
  let lang = 'id';

  // Pola teks yang berubah-ubah: nama foto, dan tanggal hitung mundur ("Minggu, 27 Des · 08.00 WIB")
  function pat(src) {
    let m = src.match(/^Lihat foto (.+)$/);
    if (m) return PFX[lang] + (T[lang][m[1]] || m[1]);
    m = src.match(/^(Minggu|Senin|Selasa|Rabu|Kamis|Jumat|Sabtu), (\d{1,2}) (Jan|Feb|Mar|Apr|Mei|Jun|Jul|Agu|Sep|Okt|Nov|Des) · (\d{2})\.(\d{2}) WIB$/);
    if (m) {
      const f = (o, d) => new Intl.DateTimeFormat(LOC[lang], Object.assign({ timeZone: 'UTC' }, o)).format(d);
      const wd = f({ weekday: 'long' }, new Date(Date.UTC(2023, 0, 1 + WD.indexOf(m[1])))), mo = f({ month: 'short' }, new Date(Date.UTC(2023, MN.indexOf(m[3]), 1))), tm = m[4] + '.' + m[5] + ' WIB';
      if (lang === 'zh' || lang === 'ja') return mo + m[2] + '日 ' + wd + ' · ' + tm;
      if (lang === 'ko') return mo + ' ' + m[2] + '일 ' + wd + ' · ' + tm;
      if (lang === 'ar') return wd + '، ' + m[2] + ' ' + mo + ' · ' + tm;
      return wd + ', ' + m[2] + ' ' + mo + ' · ' + tm;
    }
  }
  function lookup(src) {
    const t = T[lang]; if (t[src] !== undefined) return t[src];
    const p = pat(src); if (p) return p;
    for (const k of KEYS) if (src.length > k.length && src.startsWith(k + ' ')) {
      const rest = src.slice(k.length + 1), r = t[rest] !== undefined ? t[rest] : pat(rest);
      if (r !== undefined) return t[k] + ' ' + r;
    }
  }

  // Teks yang dipecah per kata oleh animasi dikembalikan menjadi teks biasa agar bisa diganti bahasa
  let split = false;
  function unsplit() {
    if (split) return; split = true;
    document.querySelectorAll('.w').forEach(w => {
      if (w.closest('h1,.mf-big,#pre,#devoModal')) return;
      const P = w.parentNode; if (!P || P.__us) return; P.__us = 1;
      let run = [];
      const flush = () => {
        if (!run.length) return;
        const txt = run.map(n => n.nodeType === 1 ? n.textContent : ' ').join('').replace(/\s+/g, ' ').trim();
        const t = document.createTextNode(txt + (run[run.length - 1].nodeType === 3 ? ' ' : ''));
        run[0].before(t); run.forEach(n => n.remove()); run = [];
      };
      [...P.childNodes].forEach(n => { if ((n.nodeType === 1 && n.classList.contains('w')) || (n.nodeType === 3 && !n.nodeValue.trim() && run.length)) run.push(n); else flush(); });
      flush();
    });
  }

  const SKIP = 'script,style,#pre,#devoModal,[data-i18n-skip],.mf-big,h1,.lang';
  const srcT = new WeakMap(), lastT = new WeakMap();
  function trText(n) {
    const p = n.parentElement; if (!p || p.closest(SKIP)) return;
    const cur = n.nodeValue; let src;
    if (lastT.has(n) && lastT.get(n) === cur) src = srcT.get(n); else { src = cur.replace(/\s+/g, ' ').trim(); if (!src) return; }
    if (lang === 'id' && !srcT.has(n)) { srcT.set(n, src); lastT.set(n, cur); return; }
    srcT.set(n, src);
    const out = lang === 'id' ? undefined : lookup(src), val = (/^\s/.test(cur) ? ' ' : '') + (out !== undefined ? out : src) + (/\s$/.test(cur) ? ' ' : '');
    if (cur !== val) n.nodeValue = val;
    lastT.set(n, val);
  }
  const ATTRS = ['aria-label', 'title', 'alt', 'placeholder', 'data-t', 'content'], ASEL = '[aria-label],[title],[alt],[placeholder],[data-t]';
  const attrS = new WeakMap();
  function trAttr(el) {
    if (el.closest && el.closest('#pre,#devoModal,[data-i18n-skip],.lang')) return;
    let st = attrS.get(el); if (!st) { st = {}; attrS.set(el, st); }
    ATTRS.forEach(a => {
      if (!el.hasAttribute(a)) return;
      const cur = el.getAttribute(a), s = st[a]; let src;
      if (s && s[1] === cur) src = s[0]; else { src = cur.replace(/\s+/g, ' ').trim(); if (!src) return; }
      if (lang === 'id' && !s) { st[a] = [src, cur]; return; }
      const out = lang === 'id' ? undefined : lookup(src), val = out !== undefined ? out : src;
      if (cur !== val) el.setAttribute(a, val);
      st[a] = [src, val];
    });
  }
  const walk = n => {
    if (n.nodeType === 3) return trText(n);
    if (n.nodeType !== 1) return;
    if (n.matches && n.matches(ASEL)) trAttr(n);
    const tw = document.createTreeWalker(n, NodeFilter.SHOW_TEXT); while (tw.nextNode()) trText(tw.currentNode);
    n.querySelectorAll && n.querySelectorAll(ASEL).forEach(trAttr);
  };
  // Tanggal dan hal yang dibuat skrip lain, mengikuti bahasa
  function refresh() {
    const d = window.__devo, loc = LOC[lang]; if (!d) return;
    const mon = document.getElementById('dcMon'), dd = document.getElementById('devoDate'), rh = document.querySelector('#devoBody .d-ref h5');
    mon && (mon.textContent = d.tgl.toLocaleDateString(loc, { month: 'short' }));
    dd && (dd.textContent = d.tgl.toLocaleDateString(loc, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) + ', ' + d.menit + ' ' + (lang === 'id' ? 'menit baca' : T[lang]['menit baca']));
    rh && (rh.textContent = lang === 'id' ? 'Refleksi Renungan' : T[lang]['Refleksi Renungan']);
  }
  const FONTS = { zh: 'Noto+Sans+SC:wght@400;700;800', ko: 'Noto+Sans+KR:wght@400;700;800', ja: 'Noto+Sans+JP:wght@400;700;800', ar: 'Noto+Sans+Arabic:wght@400;700;800' };
  function font(c) {
    if (!FONTS[c] || document.getElementById('f-' + c)) return;
    const k = document.createElement('link'); k.id = 'f-' + c; k.rel = 'stylesheet'; k.href = 'https://fonts.googleapis.com/css2?family=' + FONTS[c] + '&display=swap'; document.head.append(k);
  }
  const mark = ['dcMon'].forEach(id => { const e = document.getElementById(id); e && e.setAttribute('data-i18n-skip', ''); });

  function setLang(c, save) {
    if (c !== 'id' && !T[c]) return;
    lang = c; root.lang = c; L.forEach(l => root.classList.toggle('lang-' + l[0], l[0] === c));
    font(c);
    if (c !== 'id') unsplit();
    const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), ns = []; while (tw.nextNode()) ns.push(tw.currentNode);
    ns.forEach(trText);
    document.querySelectorAll(ASEL).forEach(trAttr);
    const meta = document.querySelector('meta[name=description]'); meta && trAttr(meta);
    refresh();
    const code = document.getElementById('langCode'); code && (code.textContent = (L.find(l => l[0] === c) || L[0])[2]);
    document.querySelectorAll('#langMenu [data-lang]').forEach(b => { const on = b.dataset.lang === c; b.classList.toggle('on', on); b.setAttribute('aria-checked', on ? 'true' : 'false'); });
    if (save) try { localStorage.setItem('gsja_lang', c); } catch (e) {}
  }

  // Elemen yang muncul atau berubah belakangan (hitung mundur, tombol musik, dll.) ikut diterjemahkan
  new MutationObserver(recs => {
    if (lang === 'id') return;
    recs.forEach(r => {
      if (r.type === 'characterData') trText(r.target);
      else if (r.type === 'attributes') trAttr(r.target);
      else r.addedNodes.forEach(walk);
    });
  }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });

  // Tombol dan daftar bahasa di menu atas
  const act = document.querySelector('.topbar .actions');
  if (act) {
    const w = document.createElement('div'); w.className = 'lang';
    w.innerHTML = '<button class="lang-btn" id="langBtn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Language"><i class="fa-solid fa-globe"></i><span id="langCode">ID</span></button>' +
      '<div class="lang-menu glass" id="langMenu" role="menu" hidden>' + L.map(l => '<button type="button" role="menuitemradio" aria-checked="false" data-lang="' + l[0] + '"><span>' + l[1] + '</span><i class="fa-solid fa-check"></i></button>').join('') + '</div>';
    act.prepend(w);
    const btn = w.querySelector('#langBtn'), menu = w.querySelector('#langMenu');
    const open = on => { menu.hidden = !on; btn.setAttribute('aria-expanded', on ? 'true' : 'false'); };
    btn.addEventListener('click', e => { e.stopPropagation(); open(menu.hidden); });
    menu.addEventListener('click', e => { const b = e.target.closest('[data-lang]'); if (b) { setLang(b.dataset.lang, true); open(false); } });
    document.addEventListener('click', e => { if (!w.contains(e.target)) open(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') open(false); });
  }
  let saved = 'id'; try { saved = localStorage.getItem('gsja_lang') || 'id'; } catch (e) {}
  setLang(saved, false);
} catch (e) { console.error('[i18n]', e); } })();
