import React from "react";

function MarqueeRow({ text, reverse }) {
  const items = Array.from({ length: 8 });

  return (
    <div className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center shrink-0">
          {items.map((_, i) => (
            <span
              key={i}
              className={`mx-6 whitespace-nowrap text-6xl md:text-8xl font-bold uppercase ${
                i % 2 === 0 ? "text-outline-rougecerise" : "text-rougecerise"
              }`}
            >
              {text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function ScrollingBanner({ text = "NEW YORK COOKIES", children }) {
  const rows = Array.from({ length: 4 });

  return (
    <section className="relative overflow-hidden bg-blanccasse py-32 md:py-44">
      <div className="flex items-center justify-center">
        <div className="w-[140%] flex flex-col gap-4 -rotate-[8deg]">
          {rows.map((_, i) => (
            <MarqueeRow key={i} text={text} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
      {children && (
        <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-8 px-6">
          {children}
        </div>
      )}
    </section>
  );
}
