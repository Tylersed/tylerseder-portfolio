(()=>{
  'use strict';
  const q=(s,p=document)=>p.querySelector(s);
  const qa=(s,p=document)=>[...p.querySelectorAll(s)];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer=matchMedia('(pointer:fine)').matches;
  const animeAPI=window.anime||{};
  const {animate,createTimeline,stagger}=animeAPI;

  const loader=q('[data-loader]');
  const splitHeadline=()=>{
    qa('[data-split]').forEach(el=>{
      const words=el.textContent.trim().split(/\s+/);
      el.textContent='';
      words.forEach((word,index)=>{
        const outer=document.createElement('span');
        outer.className='word';
        const inner=document.createElement('span');
        inner.className='word-inner';
        inner.textContent=word;
        outer.append(inner);
        el.append(outer);
        if(index<words.length-1)el.append(document.createTextNode(' '));
      });
    });
  };
  splitHeadline();

  const finishLoader=()=>{
    if(!loader)return;
    loader.style.display='none';
    document.body.classList.add('ready');
  };

  if(reduced||!animate||!createTimeline){
    finishLoader();
    q('.portrait-frame')?.style.setProperty('clip-path','none');
  }else{
    const intro=createTimeline({defaults:{ease:'out(4)'}});
    intro
      .add('.loader-mark',{opacity:[0,1],scale:[.72,1],rotate:['-12deg','0deg'],duration:650})
      .add('.loader p',{opacity:[0,1],y:[10,0],duration:420},'-=260')
      .add('[data-loader-bar]',{scaleX:[0,1],duration:920,ease:'inOut(3)'},'-=120')
      .add('.loader-meta span',{opacity:[0,1],y:[7,0],delay:stagger(80),duration:350},'-=520')
      .add('.loader-inner',{opacity:[1,0],scale:[1,.96],duration:420,delay:120})
      .add(loader,{opacity:[1,0],duration:420,onComplete:finishLoader},'-=280')
      .add('.portrait-frame',{clipPath:['inset(100% 0 0 0 round 28px)','inset(0% 0 0 0 round 28px)'],duration:1100,ease:'inOut(4)'},'-=100')
      .add('.hero-title .word-inner',{y:['110%',0],rotate:['5deg','0deg'],delay:stagger(60),duration:900},'-=850')
      .add('.hero-animate',{opacity:[0,1],y:[20,0],delay:stagger(80),duration:720},'-=650')
      .add('.floating-chip',{opacity:[0,1],x:[30,0],delay:stagger(110),duration:700},'-=500');

    animate('.orbit-lines',{rotate:[0,360],duration:42000,loop:true,ease:'linear'});
    animate('.floating-chip',{y:[-5,6],duration:2800,delay:stagger(350),alternate:true,loop:true,ease:'inOut(2)'});
  }

  const header=q('[data-header]');
  const scrollProgress=q('[data-scroll-progress]');
  const railProgress=q('[data-rail-progress]');
  const onPageScroll=()=>{
    const top=scrollY;
    const max=document.documentElement.scrollHeight-innerHeight;
    const ratio=max?Math.min(top/max,1):0;
    header?.classList.toggle('scrolled',top>24);
    if(scrollProgress)scrollProgress.style.transform=`scaleX(${ratio})`;
    if(railProgress)railProgress.style.transform=`scaleY(${ratio})`;
  };
  addEventListener('scroll',onPageScroll,{passive:true});
  onPageScroll();

  const navLinks=qa('[data-nav-link]');
  const railLinks=qa('[data-rail-link]');
  const sectionObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const id=entry.target.id;
      navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${id}`));
      railLinks.forEach(link=>link.classList.toggle('active',link.dataset.railLink===id));
    });
  },{rootMargin:'-40% 0px -50%',threshold:0});
  qa('[data-section]').forEach(section=>sectionObserver.observe(section));

  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const children=[...entry.target.children];
      if(reduced||!animate){
        children.forEach(el=>{el.style.opacity='1';el.style.transform='none';});
      }else{
        animate(children,{opacity:[0,1],y:[34,0],delay:stagger(85),duration:780,ease:'out(4)'});
      }
      revealObserver.unobserve(entry.target);
    });
  },{threshold:.12,rootMargin:'0px 0px -8%'});
  qa('.reveal-group').forEach(group=>{
    [...group.children].forEach(el=>{el.style.opacity='0';});
    revealObserver.observe(group);
  });

  const counters=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const el=entry.target;
      const target=Number(el.dataset.count||0);
      const decimals=Number(el.dataset.decimals||0);
      const comma=el.dataset.format==='comma';
      const state={value:target};
      const render=()=>{
        const value=state.value;
        el.textContent=comma?Math.round(value).toLocaleString('en-US'):value.toFixed(decimals);
      };
      if(reduced||!animate){state.value=target;render();}
      else{state.value=0;render();animate(state,{value:target,duration:1450,ease:'outExpo',onUpdate:render});}
      counters.unobserve(el);
    });
  },{threshold:.55});
  qa('[data-count]').forEach(el=>counters.observe(el));

  const bits=q('[data-flag-bits]');
  if(bits){
    for(let i=0;i<136;i++){
      const bit=document.createElement('i');
      bit.className=`flag-bit${i>=123?' empty':''}`;
      bits.append(bit);
    }
    if(!reduced&&animate&&stagger){
      animate('.flag-bit:not(.empty)',{opacity:[.28,.9],scale:[.8,1],delay:stagger(14,{from:'center'}),duration:950,alternate:true,loop:true,ease:'inOut(3)'});
    }
  }

  const menu=q('[data-menu]');
  const panel=q('[data-mobile-panel]');
  const closeButton=q('[data-close-menu]');
  const setMenu=open=>{
    menu?.setAttribute('aria-expanded',String(open));
    panel?.classList.toggle('open',open);
    panel?.setAttribute('aria-hidden',String(!open));
    document.body.classList.toggle('menu-open',open);
    if(open&&!reduced&&animate){animate('.mobile-panel nav a',{opacity:[0,1],x:[-35,0],delay:stagger(65),duration:550,ease:'out(4)'});}
  };
  menu?.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
  closeButton?.addEventListener('click',()=>setMenu(false));
  qa('a',panel).forEach(link=>link.addEventListener('click',()=>setMenu(false)));
  addEventListener('keydown',event=>{if(event.key==='Escape')setMenu(false);});

  qa('.anime-card').forEach(card=>{
    card.addEventListener('pointermove',event=>{
      const rect=card.getBoundingClientRect();
      card.style.setProperty('--mx',`${((event.clientX-rect.left)/rect.width)*100}%`);
      card.style.setProperty('--my',`${((event.clientY-rect.top)/rect.height)*100}%`);
      if(!reduced&&finePointer&&animate){
        const x=((event.clientX-rect.left)/rect.width-.5)*5;
        const y=((event.clientY-rect.top)/rect.height-.5)*-5;
        animate(card,{rotateX:y,rotateY:x,duration:420,ease:'out(3)'});
      }
    });
    card.addEventListener('pointerleave',()=>{
      if(!reduced&&finePointer&&animate)animate(card,{rotateX:0,rotateY:0,duration:650,ease:'out(4)'});
    });
  });

  if(!reduced&&finePointer&&animate){
    qa('.magnetic').forEach(el=>{
      el.addEventListener('pointermove',event=>{
        const r=el.getBoundingClientRect();
        animate(el,{x:(event.clientX-r.left-r.width/2)*.08,y:(event.clientY-r.top-r.height/2)*.12,duration:350,ease:'out(3)'});
      });
      el.addEventListener('pointerleave',()=>animate(el,{x:0,y:0,duration:500,ease:'out(4)'}));
    });
    const cursor=q('[data-cursor]');
    if(cursor){
      cursor.style.opacity='1';
      addEventListener('pointermove',event=>animate(cursor,{x:event.clientX,y:event.clientY,duration:650,ease:'out(4)'}),{passive:true});
    }
    animate('.identity-art>i',{rotate:[0,360],duration:18000,delay:stagger(1200),loop:true,ease:'linear'});
    animate('.role-orbit',{rotate:[0,360],duration:34000,loop:true,ease:'linear'});
    animate('.role-orbit b,.role-orbit span',{rotate:[0,-360],duration:34000,loop:true,ease:'linear'});
  }

  const canvas=q('#network-canvas');
  if(canvas&&!reduced){
    const ctx=canvas.getContext('2d');
    let w=0,h=0,dpr=1,nodes=[];
    const resize=()=>{
      dpr=Math.min(devicePixelRatio||1,2);w=canvas.width=innerWidth*dpr;h=canvas.height=innerHeight*dpr;
      canvas.style.width=`${innerWidth}px`;canvas.style.height=`${innerHeight}px`;
      const count=Math.min(44,Math.max(20,Math.floor(innerWidth/34)));
      nodes=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.08*dpr,vy:(Math.random()-.5)*.08*dpr}));
    };
    const draw=()=>{
      ctx.clearRect(0,0,w,h);
      nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>w)n.vx*=-1;if(n.y<0||n.y>h)n.vy*=-1;ctx.beginPath();ctx.arc(n.x,n.y,1*dpr,0,Math.PI*2);ctx.fillStyle='rgba(201,255,87,.28)';ctx.fill();});
      for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
        const a=nodes[i],b=nodes[j],distance=Math.hypot(a.x-b.x,a.y-b.y),limit=145*dpr;
        if(distance<limit){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(109,230,255,${.045*(1-distance/limit)})`;ctx.stroke();}
      }
      requestAnimationFrame(draw);
    };
    resize();addEventListener('resize',resize);draw();
  }

  const year=q('[data-year]');if(year)year.textContent=String(new Date().getFullYear());
})();
