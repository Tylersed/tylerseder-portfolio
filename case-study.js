(()=>{
  'use strict';
  const q=(s,p=document)=>p.querySelector(s);
  const qa=(s,p=document)=>[...p.querySelectorAll(s)];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const {animate,createTimeline,stagger}=window.anime||{};
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
      .add('.case-copy h1',{opacity:[0,1],y:[70,0],duration:950},'-=430')
      .add('.case-copy>p',{opacity:[0,1],y:[28,0],duration:700},'-=600')
      .add('.case-meta>div',{opacity:[0,1],y:[18,0],delay:stagger(80),duration:550},'-=480')
      .add('.case-signal',{opacity:[0,1],scale:[.6,1],duration:750},'-=700');
    animate('.case-signal',{rotate:[0,360],duration:22000,loop:true,ease:'linear'});
  }

  const targets=qa('.reveal');
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    if(reduced||!animate){entry.target.classList.add('in-view');}
    else{
      entry.target.style.opacity='1';
      animate(entry.target,{opacity:[0,1],y:[34,0],duration:800,ease:'out(4)'});
      const children=[...entry.target.children];
      if(children.length>1)animate(children,{opacity:[0,1],y:[20,0],delay:stagger(70),duration:620,ease:'out(4)'});
    }
    observer.unobserve(entry.target);
  }),{threshold:.13,rootMargin:'0px 0px -7%'});
  targets.forEach(target=>observer.observe(target));

  if(!reduced&&animate){
    qa('.principles article,.outcomes article,.process article').forEach(card=>{
      card.addEventListener('pointerenter',()=>animate(card,{y:-6,duration:350,ease:'out(3)'}));
      card.addEventListener('pointerleave',()=>animate(card,{y:0,duration:500,ease:'out(4)'}));
    });
    q('.next-project a')?.addEventListener('pointerenter',()=>animate('.next-project b',{x:7,y:-7,duration:350,ease:'out(3)'}));
    q('.next-project a')?.addEventListener('pointerleave',()=>animate('.next-project b',{x:0,y:0,duration:500,ease:'out(4)'}));
  }

  const copy=q('[data-copy-link]');
  copy?.addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(location.href);copy.textContent='Link copied';}
    catch{copy.textContent='Copy unavailable';}
    setTimeout(()=>copy.textContent='Copy link',1800);
  });
})();
