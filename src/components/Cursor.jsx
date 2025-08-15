import React, { useEffect, useRef } from "react";

/** Smooth + mobile-aware cursor glow (desktop follow, mobile follow/ripple) */
export default function Cursor({
  size = 240,            // glow diameter
  intensity = 0.28,      // overall glow opacity
  ease = 0.22,           // follow smoothing (0..1)
  mobileMode = "follow", // 'follow' | 'ripple' | 'disabled'
  mobileOffsetY = 36,    // shift glow above finger so it's visible
}) {
  const rootRef = useRef(null);
  const glowRef = useRef(null);
  const dotRef  = useRef(null);

  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const state = useRef({
    visible: false,
    down: false,
    lastType: "mouse",
    raf: 0,
    hideTimer: 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const easing = prefersReduced ? 1 : ease;

    const show = () => {
      state.current.visible = true;
      if (rootRef.current) rootRef.current.style.opacity = "1";
    };
    const hide = () => {
      state.current.visible = false;
      if (rootRef.current) rootRef.current.style.opacity = "0";
    };

    const onPointerMove = (e) => {
      const isTouch = e.pointerType === "touch";
      state.current.lastType = e.pointerType || "mouse";

      if (isTouch && mobileMode === "disabled") return;

      // place slightly above finger on mobile so it isn't hidden
      const offsetY = isTouch && mobileMode !== "disabled" ? -mobileOffsetY : 0;
      target.current.x = e.clientX;
      target.current.y = e.clientY + offsetY;

      show();
      // auto-hide after a short idle on mobile to save battery
      if (isTouch) {
        clearTimeout(state.current.hideTimer);
        state.current.hideTimer = setTimeout(hide, 900);
      }
    };

    const onPointerDown = (e) => {
      state.current.down = true;
      if (dotRef.current) dotRef.current.style.transform =
        "translate(-50%, -50%) scale(0.85)";
      if (glowRef.current) glowRef.current.style.filter = "blur(40px)";
      if (e.pointerType === "touch" && mobileMode === "disabled") return;
      show();
    };

    const onPointerUp = (e) => {
      state.current.down = false;
      if (dotRef.current) dotRef.current.style.transform =
        "translate(-50%, -50%) scale(1)";
      if (glowRef.current) glowRef.current.style.filter = "blur(50px)";

      if (e.pointerType === "touch") {
        if (mobileMode === "ripple" || mobileMode === "follow") spawnRipple();
        // quick hide a bit after lift
        clearTimeout(state.current.hideTimer);
        state.current.hideTimer = setTimeout(hide, 450);
      }
    };

    const onEnter = show;
    const onLeave = hide;

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);

    // follow loop
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * easing;
      pos.current.y += (target.current.y - pos.current.y) * easing;

      const root = rootRef.current;
      if (root) {
        root.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      state.current.raf = requestAnimationFrame(loop);
    };
    state.current.raf = requestAnimationFrame(loop);

    // init hidden
    if (rootRef.current) rootRef.current.style.opacity = "0";

    return () => {
      cancelAnimationFrame(state.current.raf);
      clearTimeout(state.current.hideTimer);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [ease, mobileMode, mobileOffsetY]);

  // tiny pulse on tap
  const spawnRipple = () => {
    const container = rootRef.current;
    if (!container) return;
    const el = document.createElement("span");
    const duration = 420;
    el.style.position = "absolute";
    el.style.left = "0";
    el.style.top = "0";
    el.style.width = "20px";
    el.style.height = "20px";
    el.style.borderRadius = "9999px";
    el.style.transform = "translate(-50%, -50%) scale(0.5)";
    el.style.opacity = "0.6";
    el.style.background =
      "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.0) 70%)";
    el.style.filter = "blur(2px)";
    el.style.pointerEvents = "none";
    el.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;
    container.appendChild(el);

    // next tick animate
    requestAnimationFrame(() => {
      el.style.transform = "translate(-50%, -50%) scale(2.2)";
      el.style.opacity = "0";
    });

    setTimeout(() => container.removeChild(el), duration + 20);
  };

  const glowOpacity = Math.max(0, Math.min(1, intensity));
  const glowStyle = {
    width: `${size}px`,
    height: `${size}px`,
    opacity: glowOpacity,
    background: `
      radial-gradient(circle at 50% 50%,
        rgba(236,72,153,0.85) 0%,
        rgba(239,68,68,0.65) 40%,
        rgba(239,68,68,0) 70%)
    `,
  };

  return (
    <div
      ref={rootRef}
      className="fixed left-0 top-0 z-[9999] pointer-events-none select-none"
      style={{
        willChange: "transform, opacity",
        transition: "opacity 180ms ease",
      }}
      aria-hidden
    >
      {/* soft glow */}
      <div
        ref={glowRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{ ...glowStyle, filter: "blur(50px)" }}
      />
      {/* small dot (desktop cue) */}
      <div
        ref={dotRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 10,
          height: 10,
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow: "0 0 10px rgba(255,255,255,0.12)",
        }}
      />
    </div>
  );
}
