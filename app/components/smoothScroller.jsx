"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function SmoothScroller() {
  const smootherRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // En dessous de 640px, pas de ScrollSmoother du tout : scroll natif de l'iPhone,
    // le wrapper/content restent des divs normales sans position/transform imposés.
    mm.add("(min-width: 640px)", () => {
      smootherRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
      });

      return () => {
        smootherRef.current?.kill();
        smootherRef.current = null;
      };
    });

    return () => mm.revert();
  }, []);

  return null;
}
