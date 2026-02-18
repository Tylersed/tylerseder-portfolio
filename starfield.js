/*
  starfield.js
  Generated: 2026-02-18T19:06:50.739572Z
*/
import { clamp, isReducedMotion } from "./utils.js";

/**
 * Subtle starfield background. Respects reduced motion.
 */
export function startStarfield(canvas){
  if (!canvas) return () => {};
  if (isReducedMotion()) return () => {};

  const ctx = canvas.getContext("2d");
  const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

  let w=0, h=0;
  const stars = [];
  const STAR_COUNT = 180;

  function resize(){
    const rect = canvas.getBoundingClientRect();
    w = Math.max(320, Math.floor(rect.width));
    h = Math.max(240, Math.floor(rect.height));
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    stars.length = 0;
    for (let i=0;i<STAR_COUNT;i++){
      stars.push({
        x: Math.random()*w,
        y: Math.random()*h,
        z: Math.random()*1.0,
        r: 0.8 + Math.random()*1.8,
        v: 0.18 + Math.random()*0.38
      });
    }
  }

  let raf = 0;
  function tick(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = "rgba(200,162,70,0.04)";
    ctx.fillRect(0,0,w,h);

    for (const s of stars){
      s.y += s.v;
      if (s.y > h + 10){ s.y = -10; s.x = Math.random()*w; }

      const alpha = clamp(0.05 + s.z*0.35, 0.05, 0.45);
      ctx.fillStyle = `rgba(110,231,255,${alpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fill();
    }
    raf = requestAnimationFrame(tick);
  }

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();
  raf = requestAnimationFrame(tick);

  return () => { cancelAnimationFrame(raf); ro.disconnect(); };
}
