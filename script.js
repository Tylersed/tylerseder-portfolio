(() => {
  const doc = document.documentElement;
  const body = document.body;
  const header = document.querySelector('[data-header]');
  const loader = document.querySelector('.site-loader');
  const loaderValue = document.querySelector('.loader-value');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const heroMedia = document.querySelector('[data-hero-media]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

  function runLoader() {
    let value = 0;
    const timer = window.setInterval(() => {
      value += Math.ceil((100 - value) * 0.19);
      if (value > 99) value = 100;
      if (loaderValue) loaderValue.textContent = String(value).padStart(2, '0');
      if (value === 100) {
        clearInterval(timer);
        window.setTimeout(() => {
          loader?.classList.add('is-hidden');
          body.classList.add('is-ready');
        }, 220);
      }
    }, 48);
  }

  function setMenu(open) {
    menuToggle?.setAttribute('aria-expanded', String(open));
    menuToggle?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu?.setAttribute('aria-hidden', String(!open));
    mobileMenu?.classList.toggle('is-open', open);
    header?.classList.toggle('menu-active', open);
    body.classList.toggle('menu-open', open);
  }

  menuToggle?.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenu(false);
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

  const statement = document.querySelector('[data-split]');
  if (statement) {
    const words = statement.textContent.trim().split(/\s+/);
    statement.innerHTML = words.map(word => `<span class="word">${word}&nbsp;</span>`).join('');
  }

  function updateScroll() {
    const y = window.scrollY;
    header?.classList.toggle('is-scrolled', y > 40);

    if (!reducedMotion && heroMedia) {
      const heroHeight = document.querySelector('[data-hero]')?.offsetHeight || window.innerHeight;
      const progress = clamp(y / heroHeight);
      heroMedia.style.transform = `scale(${1.05 + progress * 0.08}) translateY(${progress * 28}px)`;
    }

    document.querySelectorAll('[data-project]').forEach(project => {
      const rect = project.getBoundingClientRect();
      const travel = Math.max(1, project.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / travel);
      project.style.setProperty('--project-progress', progress.toFixed(4));
    });

    if (statement) {
      const rect = statement.getBoundingClientRect();
      const viewportPoint = window.innerHeight * 0.78;
      const total = window.innerHeight * 0.92 + rect.height;
      const progress = clamp((viewportPoint - rect.top) / total);
      const wordElements = statement.querySelectorAll('.word');
      wordElements.forEach((word, index) => {
        const start = index / Math.max(1, wordElements.length) * .78;
        const local = clamp((progress - start) / .16);
        word.style.opacity = String(.16 + local * .84);
      });
    }
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', updateScroll);
  document.querySelector('[data-year]').textContent = new Date().getFullYear();

  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.addEventListener('error', () => heroVideo.remove());
    const source = heroVideo.querySelector('source');
    source?.addEventListener('error', () => heroVideo.remove());
  }

  runLoader();
  updateScroll();
})();
