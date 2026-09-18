"use client";

import { useEffect, useRef } from "react";

const MAX_RADIUS = 60;

export default function FooterReveal({ children }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const mql = window.matchMedia("(min-width: 640px)");
    let ticking = false;

    const update = () => {
      if (!mql.matches) {
        content.style.borderBottomLeftRadius = "";
        content.style.borderBottomRightRadius = "";
        ticking = false;
        return;
      }
      const rect = content.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(Math.max((vh - rect.bottom) / (vh * 0.6), 0), 1);
      const radius = MAX_RADIUS * progress;
      content.style.borderBottomLeftRadius = `${radius}px`;
      content.style.borderBottomRightRadius = `${radius}px`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    mql.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mql.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <>
      <div ref={contentRef} className="relative z-10 overflow-hidden bg-blanccasse pointer-events-auto">
        {children}
      </div>
      {/* transparent spacer: reserves room for the fixed footer reveal from sm up.
          On mobile the footer sits in normal flow right after this, no reveal, no spacer. */}
      <div
        className="hidden pointer-events-none sm:block"
        style={{ height: "max(var(--footer-height, 100vh), 100vh)" }}
        aria-hidden="true"
      />
    </>
  );
}
