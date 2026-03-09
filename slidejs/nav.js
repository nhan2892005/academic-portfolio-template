// ─── State ────────────────────────────────────────────────────────────────
let current = 0;
const total  = SLIDES.length;

// ─── DOM refs (resolved after DOMContentLoaded) ───────────────────────────
let deck, dotWrap, counter, prevBtn, nextBtn;

// ─── Build slide deck ─────────────────────────────────────────────────────
function buildDeck() {
  deck.innerHTML = SLIDES.map((s, i) => {
    const hasWrapper = s.id === 'title' || s.id === 'qa';
    return `
      <div class="slide ${i === 0 ? 'slide--active' : ''} ${i < 0 ? 'slide--prev' : ''}"
           data-index="${i}" id="slide-${s.id}">
        ${hasWrapper ? '' : `
          <div class="slide-meta">
            ${s.tag ? `<span class="slide-tag">${s.tag}</span>` : '<span></span>'}
            <span class="slide-count">${i + 1} / ${total}</span>
          </div>
          <h2 class="slide-title">${s.title || ''}</h2>
        `}
        <div class="slide-body ${hasWrapper ? 'slide-body--full' : ''}">
          ${s.html}
        </div>
      </div>`;
  }).join('');
}

// ─── Build dot navigation ─────────────────────────────────────────────────
function buildDots() {
  dotWrap.innerHTML = SLIDES.map((s, i) =>
    `<button class="dot ${i === 0 ? 'dot--active' : ''}" 
             data-i="${i}" 
             aria-label="Slide ${i + 1}: ${s.title || s.id}"></button>`
  ).join('');

  dotWrap.querySelectorAll('.dot').forEach(d => {
    d.addEventListener('click', () => goTo(+d.dataset.i));
  });
}

// ─── Go to slide ──────────────────────────────────────────────────────────
function goTo(n, dir) {
  if (n === current) return;
  const slides = deck.querySelectorAll('.slide');
  const dots   = dotWrap.querySelectorAll('.dot');

  // Determine direction for animation
  const forward = dir !== undefined ? dir : n > current;

  slides[current].classList.remove('slide--active');
  slides[current].classList.add(forward ? 'slide--exit-left' : 'slide--exit-right');

  slides[n].classList.remove('slide--exit-left', 'slide--exit-right');
  slides[n].classList.add(forward ? 'slide--enter-right' : 'slide--enter-left');

  // Force reflow
  slides[n].getBoundingClientRect();
  slides[n].classList.remove('slide--enter-right', 'slide--enter-left');
  slides[n].classList.add('slide--active');

  setTimeout(() => {
    slides[current].classList.remove('slide--exit-left', 'slide--exit-right');
  }, 400);

  dots[current].classList.remove('dot--active');
  dots[n].classList.add('dot--active');

  current = n;
  updateCounter();
  updateButtons();
}

function next() { if (current < total - 1) goTo(current + 1, true); }
function prev() { if (current > 0)         goTo(current - 1, false); }

function updateCounter() {
  counter.textContent = `${current + 1} / ${total}`;
}

function updateButtons() {
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === total - 1;
}

// ─── Keyboard ─────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); next(); }
  if (e.key === 'ArrowLeft'  || e.key === 'PageUp')                    { e.preventDefault(); prev(); }
  if (e.key === 'Home') goTo(0);
  if (e.key === 'End')  goTo(total - 1);
  // Number keys 1-9
  const num = parseInt(e.key);
  if (!isNaN(num) && num >= 1 && num <= total) goTo(num - 1);
});

// ─── Touch / Swipe ────────────────────────────────────────────────────────
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
});

// ─── Progress bar ─────────────────────────────────────────────────────────
function updateProgress() {
  const pct = ((current) / (total - 1)) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
}

// Override goTo to also update progress
const _goTo = goTo;
window.goTo = function(n, dir) {
  _goTo(n, dir);
  updateProgress();
};

// ─── Init ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  deck    = document.getElementById('deck');
  dotWrap = document.getElementById('dot-nav');
  counter = document.getElementById('slide-counter');
  prevBtn = document.getElementById('btn-prev');
  nextBtn = document.getElementById('btn-next');

  buildDeck();
  buildDots();
  updateCounter();
  updateButtons();
  updateProgress();

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  // Fullscreen toggle
  document.getElementById('btn-fullscreen').addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
});