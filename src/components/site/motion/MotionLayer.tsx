import { useEffect, useRef, useState } from "react";

// Pointer-driven motion for the whole site, in one place:
//  - cursor follower ring (grows over links and buttons)
//  - spotlight: elements with .spot get --mx/--my set from the pointer
//  - magnetic: elements with .magnetic lean towards the pointer (about 35% of offset, capped)
// Fine pointers only, and nothing at all when the visitor prefers reduced motion.
export function MotionLayer() {
  const ring = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !calm.matches);
    update();
    fine.addEventListener("change", update);
    calm.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ring.current;
    let tx = -100, ty = -100, x = -100, y = -100;
    let raf = 0;
    let magnet: HTMLElement | null = null;

    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.3 ? requestAnimationFrame(loop) : 0;
    };

    const releaseMagnet = () => {
      if (magnet) {
        magnet.style.transform = "";
        magnet = null;
      }
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (el) el.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(loop);

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [role='button']");
      if (el) el.dataset.hover = interactive ? "true" : "false";

      const spot = target?.closest<HTMLElement>(".spot");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      const m = target?.closest<HTMLElement>(".magnetic") ?? null;
      if (m !== magnet) releaseMagnet();
      if (m) {
        magnet = m;
        const r = m.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.35;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
        const cap = 10;
        m.style.transform = `translate(${Math.max(-cap, Math.min(cap, dx))}px, ${Math.max(-cap, Math.min(cap, dy))}px)`;
      }
    };

    const onLeave = () => {
      if (el) el.style.opacity = "0";
      releaseMagnet();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
      releaseMagnet();
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={ring} className="cursor-ring" aria-hidden="true" />;
}

// Thin accent bar showing how far down the page the reader is.
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={bar} className="scroll-progress" aria-hidden="true" />;
}
