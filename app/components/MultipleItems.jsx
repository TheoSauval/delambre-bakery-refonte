import React from "react";

const COOKIES = [
  { id: "daim", src: "/img/cookie-daim.png", name: "Daim" },
  { id: "original", src: "/img/cookie-original.png", name: "Original" },
  { id: "kinder", src: "/img/cookie-orignal.png", name: "Kinder Madness" },
  { id: "praline", src: "/img/cookie-praline.png", name: "Praline" },
  { id: "maple", src: "/img/Canadian-Maple.png", name: "Canadian Maple" },
  { id: "tuxedo", src: "/img/Chocolate-Tuxedo.png", name: "Chocolate Tuxedo" },
  { id: "newyorker", src: "/img/cookie-New-Yorker.png", name: "New-Yorker" },
  { id: "nutella", src: "/img/Nutella-explosion.png", name: "Nutella Explosion" },
  { id: "peanut", src: "/img/Peanut-Butter.png", name: "Peanut Butter" },
  { id: "redvelvet", src: "/img/REd-Velvet.png", name: "Red Velvet" },
  { id: "speculoos", src: "/img/Speculoos.png", name: "Speculoos" },
];

function CookieCard({ src, name }) {
  return (
    <div className="flex flex-col">
      <div className="aspect-square w-full overflow-hidden rounded-2xl bg-white">
        <img src={src} alt={name} className="h-full w-full object-contain p-6" />
      </div>

      <h3 className="mt-4 text-lg md:text-xl font-bold uppercase leading-tight text-foreground">
        {name}
      </h3>
      <p className="mt-1 text-sm text-foreground/60">À l'unité</p>

      <button
        type="button"
        className="mt-4 w-full rounded-full bg-rougecerise py-3 text-sm font-bold uppercase tracking-wide text-blanccasse transition hover:bg-foreground"
      >
        Découvrir
      </button>
    </div>
  );
}

function MultipleItems() {
  return (
    <div className="mt-8">
      <div className="flex gap-3">
        <span className="rounded-full bg-foreground px-6 py-2 text-sm font-bold uppercase tracking-wide text-blanccasse">
          Cookies
        </span>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {COOKIES.slice(0, 6).map((cookie) => (
          <CookieCard key={cookie.id} src={cookie.src} name={cookie.name} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="/nos-cookies"
          className="rounded-full border-2 border-rougecerise px-8 py-3 text-sm font-bold uppercase tracking-wide text-rougecerise transition hover:bg-rougecerise hover:text-blanccasse"
        >
          Voir tout
        </a>
      </div>
    </div>
  );
}

export default MultipleItems;
