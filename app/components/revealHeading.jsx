"use client";

import React, { useEffect, useRef, useState } from "react";

const NBSP = " ";

function Letters({ text, startIndex, visible }) {
  return text.split("").map((char, i) => (
    <span key={startIndex + i} className="inline-block overflow-hidden align-bottom">
      <span
        className="inline-block transition-transform duration-500 ease-out will-change-transform"
        style={{
          transform: visible ? "translateY(0)" : "translateY(1em)",
          transitionDelay: `${(startIndex + i) * 25}ms`,
        }}
      >
        {char === " " ? NBSP : char}
      </span>
    </span>
  ));
}

export default function RevealHeading({ segments, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let index = 0;

  return (
    <h2 ref={ref} className={className}>
      {segments.map((seg, si) => {
        const start = index;
        index += seg.text.length;
        return (
          <span key={si} className={seg.className}>
            <Letters text={seg.text} startIndex={start} visible={visible} />
          </span>
        );
      })}
    </h2>
  );
}
