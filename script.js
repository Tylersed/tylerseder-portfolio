(()=>{
  'use strict';
  const q=(selector,parent=document)=>parent.querySelector(selector);
  const qa=(selector,parent=document)=>[...parent.querySelectorAll(selector)];
  const root=document.documentElement;
  const body=document.body;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer=matchMedia('(pointer:fine)').matches;
  const animeAPI=window.anime||{};
  const {animate,createTimeline,stagger,svg}=animeAPI;

  const storage={
    get(key,fallback){try{return localStorage.getItem(key)||fallback}catch{return fallback}},
    set(key,value){try{localStorage.setItem(key,value)}catch{}}
  };

  const showToast=message=>{
    const toast=q('[data-toast]');
    if(!toast)return;
    toast.textContent=message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer=setTimeout(()=>toast.classList.remove('show'),1800);
  };

  // Theme system
  const allowedThemes=['nova','orchid','ember'];
  const themePanel=q('[data-theme-panel]');
  const setTheme=(theme,announce=false)=>{
    const resolved=allowedThemes.includes(theme)?theme:'nova';
    root.dataset.theme=resolved;
    storage.set('tyler-theme',resolved);
    qa('[data-theme-choice]').forEach(button=>button.classList.toggle('active',button.dataset.themeChoice===resolved));
    const color={nova:'#f6f0f8',orchid:'#140d1b',ember:'#18110f'}[resolved];
    q('meta[name="theme-color"]')?.setAttribute('content',color);
    if(announce)showToast(`${resolved} theme selected`);
  };
  setTheme(storage.get('tyler-theme','nova'));
  const openThemePanel=open=>{
    themePanel?.classList.toggle('open',open);
    themePanel?.setAttribute('aria-hidden',String(!open));
  };
  q('[data-theme-open]')?.addEventListener('click',event=>{event.stopPropagation();openThemePanel(!themePanel?.classList.contains('open'));});
  q('[data-theme-close]')?.addEventListener('click',()=>openThemePanel(false));
  qa('[data-theme-choice]').forEach(button=>button.addEventListener('click',()=>{setTheme(button.dataset.themeChoice,true);openThemePanel(false);}));
  document.addEventListener('click',event=>{if(themePanel?.classList.contains('open')&&!themePanel.contains(event.target)&&!event.target.closest('[data-theme-open]'))openThemePanel(false);});

  // Focus / explore mode
  const modeButton=q('[data-mode-toggle]');
  const modeLabel=q('[data-mode-label]');
  const setMode=(mode,announce=false)=>{
    const focus=mode==='focus';
    body.classList.toggle('focus-mode',focus);
    modeButton?.setAttribute('aria-pressed',String(focus));
    if(modeLabel)modeLabel.textContent=focus?'Focus':'Explore';
    storage.set('tyler-mode',focus?'focus':'explore');
    if(announce)showToast(focus?'Focus mode enabled':'Explore mode enabled');
  };
  setMode(storage.get('tyler-mode','explore'));
  modeButton?.addEventListener('click',()=>setMode(body.classList.contains('focus-mode')?'explore':'focus',true));

  // Intro and hero animation
  const splitText=()=>{
    qa('[data-split]').forEach(element=>{
      const words=element.textContent.trim().split(/\s+/);
      element.textContent='';
      words.forEach((word,index)=>{
        const outer=document.createElement('span');outer.className='word';
        const inner=document.createElement('span');inner.className='word-inner';inner.textContent=word;
        outer.append(inner);element.append(outer);
        if(index<words.length-1)element.append(document.createTextNode(' '));
      });
    });
  };
  splitText();
  const loader=q('[data-loader]');
  const finishLoader=()=>{
    if(loader)loader.style.display='none';
    body.classList.add('body-ready');
  };
  if(reduced||!animate||!createTimeline){finishLoader();}
  else{
    const intro=createTimeline({defaults:{ease:'out(4)'}});
    intro
      .add('.loader-card',{opacity:[0,1],scale:[.94,1],y:[18,0],duration:550})
      .add('.loader-logo',{rotate:['-12deg','0deg'],scale:[.75,1],duration:480},'-=360')
      .add('[data-loader-track]',{scaleX:[0,1],duration:950,ease:'inOut(3)'},'-=180')
      .add('[data-loader-label]',{opacity:[1,.35,1],duration:420},'-=420')
      .add('.loader-card',{opacity:[1,0],scale:[1,.97],duration:380,delay:80})
      .add(loader,{opacity:[1,0],duration:360,onComplete:finishLoader},'-=260')
      .add('.hero h1 .word-inner',{y:['115%',0],rotate:['4deg','0deg'],delay:stagger(48),duration:820},'-=90')
      .add('.hero-reveal',{opacity:[0,1],y:[20,0],delay:stagger(75),duration:620},'-=620');
    animate('.portrait-orbit',{rotate:[0,360],duration:42000,loop:true,ease:'linear'});
    animate('.portrait-chip',{y:[-4,6],delay:stagger(400),duration:3000,alternate:true,loop:true,ease:'inOut(2)'});
  }

  // Header, progress and active section
  const header=q('[data-header]');
  const progress=q('[data-progress]');
  const indexProgress=q('[data-index-progress]');
  const onScroll=()=>{
    const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
    const ratio=Math.min(1,scrollY/max);
    header?.classList.toggle('scrolled',scrollY>18);
    if(progress)progress.style.transform=`scaleX(${ratio})`;
    if(indexProgress)indexProgress.style.transform=`scaleY(${ratio})`;
  };
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  const navLinks=qa('[data-nav]');
  const indexLinks=qa('[data-index]');
  const sections=qa('[data-section]');
  const sectionObserver=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible)return;
    const id=visible.target.id;
    navLinks.forEach(link=>link.classList.toggle('active',link.dataset.nav===id));
    indexLinks.forEach(link=>link.classList.toggle('active',link.dataset.index===id));
  },{rootMargin:'-35% 0px -52%',threshold:[0,.15,.4]});
  sections.forEach(section=>sectionObserver.observe(section));

  // Scroll reveals
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const target=entry.target;
      if(reduced||!animate){target.classList.add('in-view');target.style.opacity='1';target.style.transform='none';}
      else{
        target.classList.add('in-view');
        animate(target,{opacity:[0,1],y:[32,0],duration:760,ease:'out(4)'});
      }
      revealObserver.unobserve(target);
    });
  },{threshold:.1,rootMargin:'0px 0px -7%'});
  qa('.reveal-card').forEach(element=>revealObserver.observe(element));

  const groupObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const children=[...entry.target.children];
      if(reduced||!animate){children.forEach(child=>{child.style.opacity='1';child.style.transform='none';});}
      else animate(children,{opacity:[0,1],y:[28,0],delay:stagger(85),duration:720,ease:'out(4)'});
      groupObserver.unobserve(entry.target);
    });
  },{threshold:.13,rootMargin:'0px 0px -8%'});
  qa('.reveal-group').forEach(group=>groupObserver.observe(group));

  // Counters
  const countObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const element=entry.target;
      const target=Number(element.dataset.count||0);
      const comma=element.dataset.format==='comma';
      const state={value:(reduced||!animate)?target:0};
      const render=()=>element.textContent=comma?Math.round(state.value).toLocaleString('en-US'):String(Math.round(state.value));
      render();
      if(!reduced&&animate)animate(state,{value:target,duration:1450,ease:'outExpo',onUpdate:render});
      countObserver.unobserve(element);
    });
  },{threshold:.55});
  qa('[data-count]').forEach(element=>countObserver.observe(element));

  // Career line and systems map line drawing
  const lineObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      if(reduced||!animate)entry.target.style.transform='scaleY(1)';
      else animate(entry.target,{scaleY:[0,1],duration:1700,ease:'inOut(3)'});
      lineObserver.unobserve(entry.target);
    });
  },{threshold:.2});
  const careerLine=q('[data-career-line]');if(careerLine)lineObserver.observe(careerLine);
  const mapObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const paths=qa('[data-path]',entry.target);
      paths.forEach(path=>{
        const length=path.getTotalLength();path.style.strokeDasharray=length;path.style.strokeDashoffset=length;
      });
      if(!reduced&&animate)animate(paths,{strokeDashoffset:[el=>el.getTotalLength(),0],delay:stagger(120),duration:1400,ease:'inOut(3)'});
      else paths.forEach(path=>path.style.strokeDashoffset=0);
      mapObserver.unobserve(entry.target);
    });
  },{threshold:.2});
  const systemMap=q('[data-system-map]');if(systemMap)mapObserver.observe(systemMap);

  // Uiverse-inspired tilt and glow
  if(finePointer&&!reduced&&animate){
    qa('[data-tilt]').forEach(card=>{
      card.addEventListener('pointermove',event=>{
        const rect=card.getBoundingClientRect();
        const rx=(event.clientX-rect.left)/rect.width;
        const ry=(event.clientY-rect.top)/rect.height;
        card.style.setProperty('--mx',`${rx*100}%`);card.style.setProperty('--my',`${ry*100}%`);
        animate(card,{rotateX:(ry-.5)*-4.5,rotateY:(rx-.5)*5.5,duration:380,ease:'out(3)'});
      });
      card.addEventListener('pointerleave',()=>animate(card,{rotateX:0,rotateY:0,duration:620,ease:'out(4)'}));
    });
    qa('.magnetic').forEach(element=>{
      element.addEventListener('pointermove',event=>{
        const rect=element.getBoundingClientRect();
        animate(element,{x:(event.clientX-rect.left-rect.width/2)*.08,y:(event.clientY-rect.top-rect.height/2)*.11,duration:330,ease:'out(3)'});
      });
      element.addEventListener('pointerleave',()=>animate(element,{x:0,y:0,duration:480,ease:'out(4)'}));
    });
  }

  // Systems map interaction
  const systemTooltip=q('[data-system-tooltip]');
  qa('[data-system]').forEach(node=>{
    const activate=()=>{
      qa('[data-system]').forEach(item=>item.classList.toggle('active',item===node));
      if(systemTooltip){systemTooltip.innerHTML=`<span>SELECTED SYSTEM</span><b>${node.dataset.system}</b>`;}
    };
    node.addEventListener('pointerenter',activate);node.addEventListener('focus',activate);node.addEventListener('click',activate);
  });

  // CTF category interaction
  const challengeCaption=q('[data-challenge-caption]');
  qa('[data-challenge]').forEach(button=>{
    const show=()=>{if(challengeCaption)challengeCaption.innerHTML=`<span>${button.textContent.toUpperCase()}</span><b>${button.dataset.challenge}</b>`;};
    button.addEventListener('pointerenter',show);button.addEventListener('focus',show);
  });
  if(!reduced&&animate){
    animate('.challenge-center',{scale:[1,.96,1],duration:2600,loop:true,ease:'inOut(2)'});
    animate('.challenge-map svg',{rotate:[0,360],duration:70000,loop:true,ease:'linear'});
  }

  // Skill tooltips
  const tooltip=q('[data-global-tooltip]');
  qa('[data-tip]').forEach(button=>{
    const show=event=>{
      if(!tooltip)return;
      tooltip.textContent=button.dataset.tip;tooltip.style.opacity='1';
      const rect=button.getBoundingClientRect();
      tooltip.style.left=`${rect.left+rect.width/2}px`;tooltip.style.top=`${rect.top}px`;
    };
    const hide=()=>{if(tooltip)tooltip.style.opacity='0';};
    button.addEventListener('pointerenter',show);button.addEventListener('focus',show);button.addEventListener('pointerleave',hide);button.addEventListener('blur',hide);
  });

  // Copy email
  const copyEmail=async()=>{
    const email='tylerseder12@gmail.com';
    try{await navigator.clipboard.writeText(email);showToast('Email copied');return true;}
    catch{showToast(email);return false;}
  };
  q('[data-copy-email]')?.addEventListener('click',async event=>{
    const ok=await copyEmail();
    const label=q('[data-copy-label]',event.currentTarget);
    if(label){const original=label.textContent;label.textContent=ok?'Copied':'Email shown';setTimeout(()=>label.textContent=original,1700);}
  });

  // Mobile menu
  const menuButton=q('[data-menu]');
  const mobileMenu=q('[data-mobile-menu]');
  const setMenu=open=>{
    mobileMenu?.classList.toggle('open',open);mobileMenu?.setAttribute('aria-hidden',String(!open));menuButton?.setAttribute('aria-expanded',String(open));body.classList.toggle('menu-open',open);
    if(open&&!reduced&&animate)animate('.mobile-menu nav a',{opacity:[0,1],x:[-22,0],delay:stagger(55),duration:480,ease:'out(4)'});
  };
  menuButton?.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));
  q('[data-menu-close]')?.addEventListener('click',()=>setMenu(false));
  qa('a',mobileMenu).forEach(link=>link.addEventListener('click',()=>setMenu(false)));

  // Command palette
  const commandOverlay=q('[data-command]');
  const commandInput=q('[data-command-input]');
  const commandButtons=qa('.command-list button');
  let selectedIndex=0;
  const visibleCommands=()=>commandButtons.filter(button=>!button.hidden);
  const updateSelected=()=>visibleCommands().forEach((button,index)=>button.classList.toggle('selected',index===selectedIndex));
  const setCommand=open=>{
    commandOverlay?.classList.toggle('open',open);commandOverlay?.setAttribute('aria-hidden',String(!open));body.classList.toggle('command-open',open);
    if(open){commandInput.value='';filterCommands('');selectedIndex=0;updateSelected();setTimeout(()=>commandInput?.focus(),50);}
  };
  const filterCommands=value=>{
    const term=value.trim().toLowerCase();
    if(term==='whoami'){
      commandButtons.forEach(button=>button.hidden=true);
      const list=q('[data-command-list]');
      let terminal=q('.whoami-result',list);
      if(!terminal){terminal=document.createElement('div');terminal.className='whoami-result';terminal.style.cssText='padding:18px;border-radius:12px;background:var(--surface-2);font-family:var(--font-mono);font-size:11px;line-height:1.8';list.prepend(terminal);}
      terminal.hidden=false;terminal.innerHTML='<b style="color:var(--accent)">$ whoami</b><br>Tyler Seder<br>Cybersecurity graduate · Technology Experience Architect<br>Internal IT & security lead · CTF competitor / Ty6';
      return;
    }
    q('.whoami-result')?.setAttribute('hidden','');
    commandButtons.forEach(button=>{const haystack=`${button.textContent} ${button.dataset.commandKeywords||''}`.toLowerCase();button.hidden=term&&!haystack.includes(term);});
    selectedIndex=0;updateSelected();
  };
  const runCommand=button=>{
    if(!button)return;
    setCommand(false);
    if(button.dataset.commandTarget){q(button.dataset.commandTarget)?.scrollIntoView({behavior:reduced?'auto':'smooth'});return;}
    if(button.dataset.commandHref){button.dataset.commandExternal?open(button.dataset.commandHref,'_blank','noopener'):location.assign(button.dataset.commandHref);return;}
    if(button.dataset.commandAction==='copy-email'){copyEmail();return;}
    if(button.dataset.commandAction==='theme'){openThemePanel(true);return;}
    if(button.dataset.commandAction==='mode'){setMode(body.classList.contains('focus-mode')?'explore':'focus',true);}
  };
  q('[data-command-open]')?.addEventListener('click',()=>setCommand(true));
  commandOverlay?.addEventListener('pointerdown',event=>{if(event.target===commandOverlay)setCommand(false);});
  commandInput?.addEventListener('input',event=>filterCommands(event.target.value));
  commandButtons.forEach(button=>button.addEventListener('click',()=>runCommand(button)));
  addEventListener('keydown',event=>{
    if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();setCommand(!commandOverlay?.classList.contains('open'));return;}
    if(event.key==='Escape'){setCommand(false);setMenu(false);openThemePanel(false);return;}
    if(commandOverlay?.classList.contains('open')){
      const commands=visibleCommands();
      if(event.key==='ArrowDown'){event.preventDefault();selectedIndex=(selectedIndex+1)%Math.max(1,commands.length);updateSelected();commands[selectedIndex]?.scrollIntoView({block:'nearest'});}
      if(event.key==='ArrowUp'){event.preventDefault();selectedIndex=(selectedIndex-1+commands.length)%Math.max(1,commands.length);updateSelected();commands[selectedIndex]?.scrollIntoView({block:'nearest'});}
      if(event.key==='Enter'){event.preventDefault();runCommand(commands[selectedIndex]);}
    }
  });

  // Footer year
  const year=q('[data-year]');if(year)year.textContent=String(new Date().getFullYear());
})();
