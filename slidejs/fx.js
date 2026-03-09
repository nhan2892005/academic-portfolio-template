// ─── Animated dot-grid background ────────────────────────────────────────
(function initBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, dots = [], time = 0;
  const DOT_SPACING = 36;
  const DOT_R       = 1.2;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    buildDots();
  }

  function buildDots() {
    dots = [];
    for (let x = DOT_SPACING / 2; x < W; x += DOT_SPACING) {
      for (let y = DOT_SPACING / 2; y < H; y += DOT_SPACING) {
        dots.push({ x, y, ox: x, oy: y });
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    time += 0.004;

    dots.forEach(d => {
      // Subtle wave displacement
      const wave = Math.sin(time + d.ox * 0.012 + d.oy * 0.009) * 2.5;
      d.x = d.ox + wave;
      d.y = d.oy + Math.cos(time + d.ox * 0.009) * 1.5;

      const dist  = Math.hypot(d.x - W * 0.5, d.y - H * 0.5);
      const alpha = Math.max(0.04, 0.14 - dist / (Math.max(W, H) * 0.9));

      ctx.beginPath();
      ctx.arc(d.x, d.y, DOT_R, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99, 155, 255, ${alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();

// ─── Glowing orbs ────────────────────────────────────────────────────────
(function initOrbs() {
  const orbs = document.querySelectorAll('.orb');
  let t = 0;
  function drift() {
    t += 0.002;
    orbs.forEach((o, i) => {
      const x = Math.sin(t + i * 2.1) * 30;
      const y = Math.cos(t + i * 1.7) * 20;
      o.style.transform = `translate(${x}px, ${y}px)`;
    });
    requestAnimationFrame(drift);
  }
  if (orbs.length) drift();
})();

// ─── Keyboard shortcut overlay ────────────────────────────────────────────
(function initHelp() {
  let shown = false;
  const overlay = document.getElementById('shortcut-overlay');
  if (!overlay) return;

  document.addEventListener('keydown', e => {
    if (e.key === '?' || e.key === 'h' || e.key === 'H') {
      shown = !shown;
      overlay.classList.toggle('overlay--visible', shown);
    }
    if (e.key === 'Escape') {
      shown = false;
      overlay.classList.remove('overlay--visible');
    }
  });

  overlay.addEventListener('click', () => {
    shown = false;
    overlay.classList.remove('overlay--visible');
  });
})();