(()=>{
  'use strict';
  const q=(s,p=document)=>p.querySelector(s);
  const qa=(s,p=document)=>[...p.querySelectorAll(s)];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer=matchMedia('(pointer:fine)').matches;
  const {animate,createTimeline,stagger}=window.anime||{};
  const themes=['nova','orchid','ember'];
  const root=document.documentElement;
  const storage={get(k,f){try{return localStorage.getItem(k)||f}catch{return f}},set(k,v){try{localStorage.setItem(k,v)}catch{}}};
  const setTheme=theme=>{const selected=themes.includes(theme)?theme:'nova';root.dataset.theme=selected;storage.set('tyler-theme',selected);return selected;};
  let currentTheme=setTheme(storage.get('tyler-theme','nova'));

  const toast=document.createElement('div');toast.className='case-toast';toast.setAttribute('aria-live','polite');document.body.append(toast);
  const showToast=message=>{toast.textContent=message;toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),1600);};
  const nav=q('.case-nav');
  if(nav){
    const themeButton=document.createElement('button');themeButton.type='button';themeButton.className='case-theme-cycle';themeButton.textContent=`Theme: ${currentTheme}`;themeButton.setAttribute('aria-label','Cycle color theme');
    themeButton.addEventListener('click',()=>{currentTheme=setTheme(themes[(themes.indexOf(currentTheme)+1)%themes.length]);themeButton.textContent=`Theme: ${currentTheme}`;showToast(`${currentTheme} theme selected`);});
    nav.append(themeButton);
  }

  const progress=q('[data-case-progress]');
  const header=q('[data-case-header]');
  const update=()=>{
    const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
    const ratio=scrollY/max;
    if(progress)progress.style.transform=`scaleX(${ratio})`;
    header?.classList.toggle('scrolled',scrollY>30);
  };
  addEventListener('scroll',update,{passive:true});update();

  if(!reduced&&animate&&createTimeline){
    createTimeline({defaults:{ease:'out(4)'}})
      .add('.case-index',{opacity:[0,1],x:[-24,0],duration:650})
      .add('.case-copy h1',{opacity:[0,1],y:[70,0],rotate:['2deg','0deg'],duration:950},'-=430')
      .add('.case-copy>p',{opacity:[0,1],y:[28,0],duration:700},'-=600')
      .add('.case-meta>div',{opacity:[0,1],y:[18,0],delay:stagger(80),duration:550},'-=480')
      .add('.event-link',{opacity:[0,1],y:[15,0],duration:520},'-=350')
      .add('.case-signal',{opacity:[0,1],scale:[.6,1],duration:750},'-=700');
    animate('.case-signal',{rotate:[0,360],duration:22000,loop:true,ease:'linear'});
  }else{
    qa('.case-index,.case-copy h1,.case-copy>p,.case-meta>div,.event-link,.case-signal').forEach(el=>{el.style.opacity='1';el.style.transform='none';});
  }

  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    const target=entry.target;
    if(reduced||!animate){target.classList.add('in-view');target.style.opacity='1';target.style.transform='none';}
    else{
      target.classList.add('in-view');
      animate(target,{opacity:[0,1],y:[34,0],duration:800,ease:'out(4)'});
      const children=[...target.children];
      if(children.length>1)animate(children,{opacity:[0,1],y:[20,0],delay:stagger(65),duration:620,ease:'out(4)'});
    }
    observer.unobserve(target);
  }),{threshold:.13,rootMargin:'0px 0px -7%'});
  qa('.reveal').forEach(target=>observer.observe(target));

  if(!reduced&&animate){
    qa('.principles article,.outcomes article,.process article,.ctf-results article,.credential-card').forEach(card=>{
      card.addEventListener('pointerenter',()=>animate(card,{y:-6,duration:350,ease:'out(3)'}));
      card.addEventListener('pointerleave',()=>animate(card,{y:0,duration:500,ease:'out(4)'}));
    });
    const next=q('.next-project a');
    next?.addEventListener('pointerenter',()=>animate('.next-project b',{x:7,y:-7,duration:350,ease:'out(3)'}));
    next?.addEventListener('pointerleave',()=>animate('.next-project b',{x:0,y:0,duration:500,ease:'out(4)'}));
    if(finePointer){
      qa('.event-link,.next-project a').forEach(el=>{
        el.addEventListener('pointermove',event=>{const r=el.getBoundingClientRect();animate(el,{x:(event.clientX-r.left-r.width/2)*.05,y:(event.clientY-r.top-r.height/2)*.08,duration:300,ease:'out(3)'});});
        el.addEventListener('pointerleave',()=>animate(el,{x:0,y:0,duration:450,ease:'out(4)'}));
      });
    }
  }

  const copy=q('[data-copy-link]');
  copy?.addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(location.href);copy.textContent='Link copied';showToast('Case study link copied');}
    catch{copy.textContent='Copy unavailable';}
    setTimeout(()=>copy.textContent='Copy link',1800);
  });
})();
