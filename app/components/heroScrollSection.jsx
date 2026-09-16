"use client";

import { useEffect, useRef } from "react";

const MAX_RADIUS = 60;

function HeroScrollSection({ children, className = "" }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const scrollDistance = window.innerHeight * 0.6;
    let ticking = false;

    const update = () => {
      const progress = Math.min(window.scrollY / scrollDistance, 1);
      const radius = progress * MAX_RADIUS;
      section.style.borderBottomLeftRadius = `${radius}px`;
      section.style.borderBottomRightRadius = `${radius}px`;
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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
}

export default HeroScrollSection;
