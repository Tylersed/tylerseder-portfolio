(() => {
  const qs=(s,c=document)=>c.querySelector(s); const qsa=(s,c=document)=>[...c.querySelectorAll(s)];
  const progress=qs('[data-case-progress]'); const header=qs('[data-case-header]');
  const update=()=>{const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);const p=scrollY/max; if(progress)progress.style.transform=`scaleX(${p})`;header?.classList.toggle('scrolled',scrollY>30)};
  addEventListener('scroll',()=>requestAnimationFrame(update),{passive:true});update();
  const targets=qsa('.reveal'); if('IntersectionObserver'in window){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');o.unobserve(e.target)}}),{threshold:.14});targets.forEach(t=>o.observe(t))}else targets.forEach(t=>t.classList.add('in-view'));
  const copy=qs('[data-copy-link]'); copy?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);copy.textContent='Link copied'}catch{copy.textContent='Copy unavailable'}setTimeout(()=>copy.textContent='Copy link',1800)});
})();
