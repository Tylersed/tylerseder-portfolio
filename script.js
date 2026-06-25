(() => {
  'use strict';

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(pointer: fine)');
  const saveData = Boolean(navigator.connection?.saveData);

  let soundEnabled = false;
  let audioContext = null;
  let lastPhaseTone = '';

  function playTone(frequency = 520, duration = 0.05, volume = 0.018) {
    if (!soundEnabled) return;
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(volume, audioContext.currentTime + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + duration + 0.02);
    } catch (error) {
      console.warn('Sound unavailable:', error);
    }
  }

  async function initializeLoader() {
    const loader = qs('[data-loader]');
    const value = qs('[data-loader-value]');
    const bar = qs('[data-loader-bar]');
    const message = qs('[data-loader-message]');
    const logItems = qsa('[data-loader-log] span');
    const heroImage = qs('.hero-media img');
    const heroVideo = qs('[data-hero-video]');

    if (!loader) return;

    let completed = 0;
    const total = 3;
    const update = (label) => {
      completed += 1;
      const percent = Math.round((completed / total) * 100);
      if (value) value.textContent = String(percent).padStart(2, '0');
      if (bar) bar.style.transform = `scaleX(${percent / 100})`;
      if (message) message.textContent = label;
      if (completed >= 1) logItems[0]?.classList.add('ready');
      if (completed >= total) logItems[1]?.classList.add('ready');
    };

    const imageTask = heroImage?.decode?.().catch(() => undefined).then(() => update('Identity verified')) || Promise.resolve(update('Identity verified'));
    const fontTask = (document.fonts?.ready || Promise.resolve()).then(() => update('Typography ready'));
    const videoTask = new Promise(resolve => {
      if (!heroVideo || reduceMotion.matches || saveData) {
        update('Static experience ready');
        resolve();
        return;
      }
      let finished = false;
      const finish = () => {
        if (finished) return;
        finished = true;
        heroVideo.removeEventListener('loadeddata', finish);
        heroVideo.removeEventListener('error', finish);
        update('Motion system ready');
        resolve();
      };
      if (heroVideo.readyState >= 2) finish();
      else {
        heroVideo.addEventListener('loadeddata', finish, { once: true });
        heroVideo.addEventListener('error', finish, { once: true });
        window.setTimeout(finish, 2400);
      }
    });

    await Promise.race([
      Promise.allSettled([imageTask, fontTask, videoTask]),
      new Promise(resolve => window.setTimeout(resolve, 3000))
    ]);

    if (value) value.textContent = '100';
    if (bar) bar.style.transform = 'scaleX(1)';
    if (message) message.textContent = 'Systems ready';
    logItems.forEach(item => item.classList.add('ready'));

    await new Promise(resolve => window.setTimeout(resolve, reduceMotion.matches ? 0 : 260));
    loader.classList.add('hidden');
    qs('[data-hero]')?.classList.add('ready');
  }

  function splitVisualLines(element) {
    if (!element || element.dataset.linesReady === 'true') return;
    const text = element.textContent.trim();
    if (!text) return;

    const words = text.split(/\s+/);
    element.textContent = '';
    element.style.visibility = 'hidden';

    const wordNodes = words.map((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + (index === words.length - 1 ? '' : ' ');
      span.style.whiteSpace = 'pre';
      element.appendChild(span);
      return span;
    });

    const groups = [];
    let currentTop = null;
    wordNodes.forEach(node => {
      const top = Math.round(node.offsetTop);
      if (currentTop === null || Math.abs(top - currentTop) > 2) {
        groups.push([]);
        currentTop = top;
      }
      groups.at(-1).push(node.textContent);
    });

    element.textContent = '';
    groups.forEach(group => {
      const line = document.createElement('span');
      line.className = 'line';
      const inner = document.createElement('span');
      inner.textContent = group.join('').trim();
      line.appendChild(inner);
      element.appendChild(line);
    });
    element.style.visibility = '';
    element.dataset.linesReady = 'true';
  }

  function initializeReveals() {
    qsa('[data-split-lines]').forEach(splitVisualLines);
    const targets = qsa('.mask-reveal, .line-reveal, [data-journey-card]');
    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      targets.forEach(target => target.classList.add('in-view'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8%' });
    targets.forEach(target => observer.observe(target));
  }

  function initializeMenu() {
    const toggle = qs('[data-menu-toggle]');
    const menu = qs('[data-mobile-menu]');
    if (!toggle || !menu) return;

    const setOpen = open => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.setAttribute('aria-hidden', String(!open));
      menu.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
    };

    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    qsa('a', menu).forEach(link => link.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false);
    });
  }

  function initializeCommandPalette() {
    const dialog = qs('[data-command-dialog]');
    const trigger = qs('[data-command-trigger]');
    const search = qs('[data-command-search]');
    const items = qsa('[data-command-item]');
    if (!dialog || !trigger || !search || !items.length) return;

    let visibleItems = items;
    let selectedIndex = 0;

    const select = index => {
      visibleItems.forEach(item => item.classList.remove('selected'));
      if (!visibleItems.length) return;
      selectedIndex = (index + visibleItems.length) % visibleItems.length;
      visibleItems[selectedIndex].classList.add('selected');
      visibleItems[selectedIndex].scrollIntoView({ block: 'nearest' });
    };

    const filter = () => {
      const query = search.value.trim().toLowerCase();
      visibleItems = items.filter(item => {
        const matches = !query || `${item.textContent} ${item.dataset.keywords || ''}`.toLowerCase().includes(query);
        item.hidden = !matches;
        return matches;
      });
      select(0);
    };

    const open = () => {
      if (!dialog.open) dialog.showModal();
      document.body.classList.add('dialog-open');
      window.setTimeout(() => search.focus(), 30);
      search.value = '';
      filter();
      playTone(440, 0.05);
    };
    const close = () => {
      if (dialog.open) dialog.close();
      document.body.classList.remove('dialog-open');
      trigger.focus({ preventScroll: true });
    };

    trigger.addEventListener('click', open);
    dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
    dialog.addEventListener('click', event => {
      if (event.target === dialog) close();
    });
    search.addEventListener('input', filter);
    search.addEventListener('keydown', event => {
      if (event.key === 'ArrowDown') { event.preventDefault(); select(selectedIndex + 1); }
      if (event.key === 'ArrowUp') { event.preventDefault(); select(selectedIndex - 1); }
      if (event.key === 'Enter' && visibleItems[selectedIndex]) {
        event.preventDefault();
        visibleItems[selectedIndex].click();
      }
    });
    items.forEach(item => item.addEventListener('click', () => dialog.close()));

    document.addEventListener('keydown', event => {
      const tag = event.target?.tagName?.toLowerCase();
      const typing = tag === 'input' || tag === 'textarea' || event.target?.isContentEditable;
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        open();
      } else if (!typing && event.key === '/') {
        event.preventDefault();
        open();
      }
    });
  }

  function initializeSound() {
    const button = qs('[data-sound-toggle]');
    if (!button) return;
    button.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      button.setAttribute('aria-pressed', String(soundEnabled));
      button.textContent = soundEnabled ? 'Sound on' : 'Sound off';
      if (soundEnabled) playTone(610, 0.08, 0.025);
    });
  }

  function initializeVideo() {
    const video = qs('[data-hero-video]');
    if (!video) return;
    if (reduceMotion.matches || saveData) {
      video.hidden = true;
      return;
    }
    const ready = () => video.classList.add('ready');
    if (video.readyState >= 2) ready();
    else video.addEventListener('loadeddata', ready, { once: true });
    video.addEventListener('error', () => { video.hidden = true; });
    const play = video.play();
    play?.catch?.(() => { video.hidden = true; });
  }

  function initializePointerParallax() {
    const hero = qs('[data-hero]');
    const media = qs('[data-hero-media]');
    const content = qs('[data-hero-content]');
    if (!hero || !media || !content || reduceMotion.matches || !finePointer.matches) return;

    hero.addEventListener('pointermove', event => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      media.style.setProperty('--parallax-x', `${(-x * 8).toFixed(2)}px`);
      media.style.setProperty('--parallax-y', `${(-y * 6).toFixed(2)}px`);
      content.style.setProperty('--copy-x', `${(x * 2.5).toFixed(2)}px`);
      content.style.setProperty('--copy-y', `${(y * 2).toFixed(2)}px`);
    });
    hero.addEventListener('pointerleave', () => {
      media.style.setProperty('--parallax-x', '0px');
      media.style.setProperty('--parallax-y', '0px');
      content.style.setProperty('--copy-x', '0px');
      content.style.setProperty('--copy-y', '0px');
    });
  }

  function initializePortalComparison() {
    const range = qs('[data-comparison-range]');
    const after = qs('[data-comparison-after]');
    const handle = qs('[data-comparison-handle]');
    if (!range || !after || !handle) return;
    const update = () => {
      const value = `${range.value}%`;
      after.style.setProperty('--comparison', value);
      handle.style.setProperty('--comparison', value);
      after.parentElement.style.setProperty('--comparison', value);
    };
    range.addEventListener('input', update);
    update();
  }

  const identityContent = {
    entra: {
      label: 'Entra ID',
      title: 'Access that begins with clear ownership.',
      body: 'MFA, administrative roles, account lifecycle, group access, and identity review.'
    },
    exchange: {
      label: 'Exchange Online',
      title: 'Messaging designed as an operational system.',
      body: 'Shared mailboxes, distribution groups, external-forwarding controls, contacts, and mail-flow troubleshooting.'
    },
    calendar: {
      label: 'Calendars',
      title: 'Shared time that behaves consistently.',
      body: 'Company calendars, ownership, permissions, event workflows, and reliable mobile access.'
    },
    powershell: {
      label: 'PowerShell',
      title: 'Repeated administration becomes a documented process.',
      body: 'Bulk configuration, validation, contact management, reporting, and repeatable onboarding steps.'
    },
    security: {
      label: 'Security controls',
      title: 'Identity and messaging protected as one environment.',
      body: 'Authentication, email security, DNS records, incident procedures, access review, and user education.'
    }
  };

  function setIdentityNode(key, play = true) {
    const data = identityContent[key];
    const detail = qs('[data-identity-detail]');
    if (!data || !detail) return;
    qsa('[data-identity-node]').forEach(node => node.classList.toggle('active', node.dataset.identityNode === key));
    detail.innerHTML = `<small>${data.label}</small><b>${data.title}</b><p>${data.body}</p>`;
    if (play) playTone(560 + Object.keys(identityContent).indexOf(key) * 40, 0.045);
  }

  function initializeIdentityNodes() {
    qsa('[data-identity-node]').forEach(node => {
      node.addEventListener('click', () => setIdentityNode(node.dataset.identityNode));
      node.addEventListener('pointerenter', () => setIdentityNode(node.dataset.identityNode, false));
    });
  }

  const networkStates = {
    normal: { label: 'Primary path active', note: 'Backup ready' },
    failover: { label: 'Primary circuit unavailable', note: 'Failover active' },
    recovery: { label: 'Primary path restored', note: 'Stability window running' }
  };
  let networkManualUntil = 0;

  function setNetworkMode(mode, manual = false) {
    const visual = qs('.network-visual');
    const alert = qs('[data-network-alert]');
    const data = networkStates[mode];
    if (!visual || !alert || !data) return;
    visual.dataset.networkMode = mode;
    qsa('[data-network-button]').forEach(button => button.classList.toggle('active', button.dataset.networkButton === mode));
    qs('span', alert).textContent = data.label;
    qs('b', alert).textContent = data.note;
    if (manual) networkManualUntil = Date.now() + 5000;
    const tones = { normal: 470, failover: 330, recovery: 580 };
    playTone(tones[mode], 0.065);
  }

  function initializeNetworkControls() {
    qsa('[data-network-button]').forEach(button => {
      button.addEventListener('click', () => setNetworkMode(button.dataset.networkButton, true));
    });
  }

  function initializeCapabilities() {
    const buttons = qsa('[data-capability]');
    const panels = qsa('[data-capability-panel]');
    if (!buttons.length) return;
    const activate = key => {
      buttons.forEach(button => {
        const active = button.dataset.capability === key;
        button.classList.toggle('active', active);
        button.setAttribute('aria-selected', String(active));
      });
      panels.forEach(panel => panel.classList.toggle('active', panel.dataset.capabilityPanel === key));
      playTone(500 + buttons.findIndex(button => button.dataset.capability === key) * 35, 0.04);
    };
    buttons.forEach(button => {
      button.addEventListener('click', () => activate(button.dataset.capability));
      button.addEventListener('pointerenter', () => {
        if (finePointer.matches) activate(button.dataset.capability);
      });
    });
  }

  function initializeCopyEmail() {
    const button = qs('[data-copy-email]');
    const feedback = qs('[data-copy-feedback]');
    const email = 'hello@tylerseder.com';
    if (!button || !feedback) return;
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(email);
        feedback.textContent = 'Copied — hello@tylerseder.com';
        playTone(720, 0.09, 0.025);
      } catch {
        window.location.href = `mailto:${email}`;
      }
      window.setTimeout(() => { feedback.textContent = `Click to copy ${email}`; }, 2400);
    });
  }

  function initializeMagneticAndTilt() {
    qsa('[data-magnetic]').forEach(element => {
      element.addEventListener('pointermove', event => {
        if (reduceMotion.matches || !finePointer.matches) return;
        const rect = element.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 13;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
        element.style.setProperty('--mag-x', `${x.toFixed(2)}px`);
        element.style.setProperty('--mag-y', `${y.toFixed(2)}px`);
      });
      element.addEventListener('pointerleave', () => {
        element.style.setProperty('--mag-x', '0px');
        element.style.setProperty('--mag-y', '0px');
      });
    });

    qsa('.chapter-visual').forEach(element => {
      element.addEventListener('pointermove', event => {
        if (reduceMotion.matches || !finePointer.matches || window.innerWidth < 900) return;
        const rect = element.getBoundingClientRect();
        const x = clamp((event.clientX - rect.left) / rect.width);
        const y = clamp((event.clientY - rect.top) / rect.height);
        element.style.setProperty('--tilt-x', `${((x - 0.5) * 3.8).toFixed(2)}deg`);
        element.style.setProperty('--tilt-y', `${((0.5 - y) * 3).toFixed(2)}deg`);
        element.style.setProperty('--shine-x', `${(x * 100).toFixed(1)}%`);
        element.style.setProperty('--shine-y', `${(y * 100).toFixed(1)}%`);
      });
      element.addEventListener('pointerleave', () => {
        element.style.setProperty('--tilt-x', '0deg');
        element.style.setProperty('--tilt-y', '0deg');
        element.style.setProperty('--shine-x', '50%');
        element.style.setProperty('--shine-y', '50%');
      });
    });
  }

  function initializeCursor() {
    const cursor = qs('[data-cursor]');
    const label = qs('[data-cursor-label]');
    if (!cursor || reduceMotion.matches || !finePointer.matches) return;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const animate = () => {
      currentX += (targetX - currentX) * 0.17;
      currentY += (targetY - currentY) * 0.17;
      cursor.style.setProperty('--cursor-x', `${currentX}px`);
      cursor.style.setProperty('--cursor-y', `${currentY}px`);
      requestAnimationFrame(animate);
    };

    document.addEventListener('pointermove', event => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add('visible');
      const target = event.target.closest('[data-cursor-label]');
      const text = target?.dataset.cursorLabel || '';
      cursor.classList.toggle('engaged', Boolean(text));
      label.textContent = text;
    }, { passive: true });
    document.documentElement.addEventListener('mouseleave', () => cursor.classList.remove('visible'));
    animate();
  }

  function initializePageTransitions() {
    const curtain = qs('[data-page-curtain]');
    qsa('[data-page-link]').forEach(link => {
      link.addEventListener('click', event => {
        if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || reduceMotion.matches) return;
        const href = link.getAttribute('href');
        if (!href) return;
        event.preventDefault();
        curtain?.classList.add('active');
        playTone(410, 0.06);
        window.setTimeout(() => { window.location.href = href; }, 590);
      });
    });
    window.addEventListener('pageshow', () => curtain?.classList.remove('active'));
  }

  function updateChapterPhase(chapter, phaseIndex, progress) {
    const current = Number(chapter.dataset.phase || -1);
    chapter.dataset.phase = String(phaseIndex);
    chapter.style.setProperty('--chapter-progress', progress.toFixed(4));
    chapter.style.setProperty('--phase-progress', progress.toFixed(4));
    qsa('[data-phase-copy]', chapter).forEach(copy => copy.classList.toggle('active', Number(copy.dataset.phaseCopy) === phaseIndex));

    const type = chapter.dataset.chapter;
    if (current !== phaseIndex) {
      const toneKey = `${type}-${phaseIndex}`;
      if (lastPhaseTone !== toneKey) {
        playTone(390 + phaseIndex * 65, 0.045);
        lastPhaseTone = toneKey;
      }
      if (type === 'identity') {
        const identityKeys = ['entra', 'exchange', 'powershell', 'security'];
        setIdentityNode(identityKeys[phaseIndex] || 'security', false);
      }
      if (type === 'infrastructure' && Date.now() > networkManualUntil) {
        setNetworkMode(['normal', 'failover', 'recovery'][phaseIndex] || 'normal', false);
      }
      if (type === 'security') {
        qsa('[data-terminal-phase]', chapter).forEach(section => section.classList.toggle('active', Number(section.dataset.terminalPhase) === phaseIndex));
        const stages = ['Discovery', 'Assessment', 'Response', 'Verification'];
        const stage = qs('[data-terminal-stage]', chapter);
        if (stage) stage.textContent = stages[phaseIndex];
      }
    }
  }

  function initializeScrollSystem() {
    const header = qs('[data-header]');
    const hero = qs('[data-hero]');
    const heroVideo = qs('[data-hero-video]');
    const pageProgress = qs('[data-page-progress]');
    const signalPath = qs('[data-signal-progress]');
    const signalOrb = qs('[data-signal-orb]');
    const chapters = qsa('[data-chapter]');
    const rail = qs('[data-chapter-rail]');
    const work = qs('#work');
    const experience = qs('#experience');
    const journeySection = qs('[data-experience]');
    const journeyPath = qs('[data-journey-progress]');
    const contact = qs('[data-contact]');

    let signalLength = 0;
    let journeyLength = 0;
    try {
      signalLength = signalPath?.getTotalLength() || 0;
      if (signalPath) {
        signalPath.style.strokeDasharray = `${signalLength}`;
        signalPath.style.strokeDashoffset = `${signalLength}`;
      }
      journeyLength = journeyPath?.getTotalLength() || 0;
      if (journeyPath) {
        journeyPath.style.strokeDasharray = `${journeyLength}`;
        journeyPath.style.strokeDashoffset = `${journeyLength}`;
      }
    } catch { /* SVG length may be unavailable before layout */ }

    let ticking = false;
    const update = () => {
      ticking = false;
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const globalProgress = clamp(scrollY / maxScroll);
      document.documentElement.style.setProperty('--page-progress', globalProgress.toFixed(4));
      if (pageProgress) pageProgress.style.transform = `scaleY(${globalProgress})`;
      if (signalPath && signalLength) signalPath.style.strokeDashoffset = `${signalLength * (1 - globalProgress)}`;
      if (signalPath && signalOrb && signalLength) {
        const point = signalPath.getPointAtLength(signalLength * globalProgress);
        signalOrb.setAttribute('cx', point.x.toFixed(2));
        signalOrb.setAttribute('cy', point.y.toFixed(2));
      }

      header?.classList.toggle('scrolled', scrollY > 40);

      if (hero) {
        const heroScrollable = Math.max(1, hero.offsetHeight - window.innerHeight);
        const heroProgress = clamp(scrollY / heroScrollable);
        hero.style.setProperty('--hero-progress', heroProgress.toFixed(4));

        if (heroVideo && !heroVideo.hidden && !reduceMotion.matches) {
          if (heroProgress > 0.72 && heroVideo.dataset.scrollFrozen !== 'true') {
            heroVideo.dataset.scrollFrozen = 'true';
            const targetTime = Math.max(0, Math.min(9.15, (heroVideo.duration || 10) - 0.45));
            try {
              heroVideo.currentTime = targetTime;
              heroVideo.pause();
            } catch { /* ignore seek restrictions */ }
          } else if (heroProgress < 0.55 && heroVideo.dataset.scrollFrozen === 'true') {
            heroVideo.dataset.scrollFrozen = 'false';
            try {
              heroVideo.currentTime = 0;
              heroVideo.play()?.catch?.(() => undefined);
            } catch { /* ignore */ }
          }
        }
      }

      let activeChapter = null;
      chapters.forEach(chapter => {
        const rect = chapter.getBoundingClientRect();
        const scrollable = Math.max(1, rect.height - window.innerHeight);
        const progress = clamp(-rect.top / scrollable);
        const count = Number(chapter.dataset.phaseCount || 3);
        const phaseIndex = Math.min(count - 1, Math.floor(progress * count));
        updateChapterPhase(chapter, phaseIndex, progress);
        if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.55) activeChapter = chapter.dataset.chapter;
      });

      if (rail && work && experience) {
        const showRail = work.getBoundingClientRect().top < window.innerHeight * 0.45 && experience.getBoundingClientRect().top > window.innerHeight * 0.65;
        rail.classList.toggle('visible', showRail);
        qsa('[data-rail-link]', rail).forEach(link => link.classList.toggle('active', link.dataset.railLink === activeChapter));
      }

      if (journeySection && journeyPath && journeyLength) {
        const rect = journeySection.getBoundingClientRect();
        const progress = clamp((window.innerHeight * 0.75 - rect.top) / Math.max(1, rect.height - window.innerHeight * 0.25));
        journeyPath.style.strokeDashoffset = `${journeyLength * (1 - progress)}`;
      }

      if (contact) {
        const rect = contact.getBoundingClientRect();
        const progress = clamp((window.innerHeight - rect.top) / Math.max(1, rect.height));
        contact.style.setProperty('--contact-progress', progress.toFixed(3));
      }
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
  }

  function initializeNavTracking() {
    const links = qsa('.desktop-nav a');
    const sections = links.map(link => qs(link.getAttribute('href'))).filter(Boolean);
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach(link => {
        const active = link.getAttribute('href') === `#${visible.target.id}`;
        if (active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-28% 0px -58%', threshold: [0, .15, .4] });
    sections.forEach(section => observer.observe(section));
  }

  function initializeContactSpotlight() {
    const contact = qs('[data-contact]');
    if (!contact || reduceMotion.matches || !finePointer.matches) return;
    contact.addEventListener('pointermove', event => {
      const rect = contact.getBoundingClientRect();
      contact.style.setProperty('--contact-x', `${event.clientX - rect.left}px`);
      contact.style.setProperty('--contact-y', `${event.clientY - rect.top}px`);
    });
  }

  function initializeAmbientCanvas() {
    const canvas = qs('#ambient-canvas');
    if (!canvas || reduceMotion.matches) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const strings = [
      'Get-EXOMailbox -ResultSize Unlimited',
      'Get-MgUser -All | Select DisplayName,AccountEnabled',
      'Resolve-DnsName tylerseder.com -Type A',
      'Test-NetConnection gateway.local -Port 443',
      'spf=pass  dkim=pass  dmarc=pass',
      'nmap -sV 10.20.30.0/24',
      'FIREWALL POLICY: PASS',
      'IDENTITY BASELINE: REVIEWED',
      'BACKUP CIRCUIT: READY',
      'MFA COVERAGE: VERIFIED',
      'DEVICE ONBOARDING: DOCUMENTED',
      'git status --short',
      'pwsh ./validate-mailflow.ps1',
      'NETWORK TELEMETRY: HEALTHY',
      'SECURITY LOG VISIBILITY: ACTIVE'
    ];

    let width = 0;
    let height = 0;
    let dpr = 1;
    let lines = [];
    let lastScroll = window.scrollY;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(6, Math.min(14, Math.floor(width / 150)));
      lines = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: .1 + Math.random() * .24,
        opacity: .05 + Math.random() * .12,
        text: strings[Math.floor(Math.random() * strings.length)]
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.font = "11px 'IBM Plex Mono', ui-monospace, monospace";
      const scrollDelta = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      lines.forEach(line => {
        line.y -= line.speed + scrollDelta * .12;
        if (line.y < -30) {
          line.y = height + 30;
          line.x = Math.random() * width;
          line.text = strings[Math.floor(Math.random() * strings.length)];
        }
        if (line.y > height + 30) line.y = -30;
        context.fillStyle = `rgba(105,214,164,${line.opacity})`;
        context.fillText(line.text, line.x, line.y);
      });
      requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });
    draw();
  }

  document.addEventListener('DOMContentLoaded', async () => {
    initializeMenu();
    initializeCommandPalette();
    initializeSound();
    initializeVideo();
    initializePointerParallax();
    initializePortalComparison();
    initializeIdentityNodes();
    initializeNetworkControls();
    initializeCapabilities();
    initializeCopyEmail();
    initializeMagneticAndTilt();
    initializeCursor();
    initializePageTransitions();
    initializeNavTracking();
    initializeContactSpotlight();
    initializeAmbientCanvas();

    await initializeLoader();
    initializeReveals();
    initializeScrollSystem();
  });
})();
