"use client";

import { useEffect, useRef } from "react";

const MAX_RADIUS = 60;

export default function FooterReveal({ children }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    let ticking = false;

    const update = () => {
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
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div ref={contentRef} className="relative z-10 overflow-hidden bg-blanccasse pointer-events-auto">
        {children}
      </div>
      {/* transparent spacer: at least the footer's height (so it sits flush beneath) and at least
          one viewport tall (so the page content is always fully cleared before the footer shows) */}
      <div
        className="pointer-events-none"
        style={{ height: "max(var(--footer-height, 100vh), 100vh)" }}
        aria-hidden="true"
      />
    </>
  );
}
