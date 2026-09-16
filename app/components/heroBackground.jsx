"use client";

import { useEffect, useRef } from "react";

const MAX_ZOOM = 0.3;

function HeroBackground({ src, alt, className = "" }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const zoomDistance = window.innerHeight;
    let ticking = false;

    const update = () => {
      const progress = Math.min(window.scrollY / zoomDistance, 1);
      img.style.transform = `scale(${1 + progress * MAX_ZOOM})`;
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
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`will-change-transform ${className}`}
    />
  );
}

export default HeroBackground;
