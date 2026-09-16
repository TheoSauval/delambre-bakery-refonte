"use client";

import React from "react";
import Slider from "react-slick";

// Keep an even number of entries: with infinite scroll, an even count is what
// makes the dark/orange alternation wrap seamlessly without ever repeating.
const ACTUS = [
  {
    date: "08/01/2025",
    title: "They are back !",
    excerpt:
      "Vos cookies classiques préférés sont de retour ! Nutella Explosion, Chocolate Tuxedo... on commence 2025 du bon pied.",
  },
  {
    date: "À venir",
    title: "Nouvelle saveur",
    excerpt: "Un nouveau cookie arrive bientôt sur la carte. Restez à l'affût pour la découvrir en premier.",
  },
  {
    date: "À venir",
    title: "Nouvelle boutique",
    excerpt: "The Delambre Bakery continue son expansion. Plus d'infos très prochainement sur nos futures adresses.",
  },
  {
    date: "À venir",
    title: "Prochain événement",
    excerpt: "Un pop-up ou un atelier cookies en préparation. Suivez cette page pour ne rien manquer.",
  },
];

function ActuCard({ date, title, excerpt, isDark }) {

  return (
    <div className="px-3">
      <div
        className={`flex h-80 flex-col justify-between rounded-3xl p-8 ${
          isDark ? "bg-foreground" : "bg-rougecerise"
        }`}
      >
        <span className="text-sm font-bold uppercase tracking-wide text-blanccasse/70">{date}</span>
        <div>
          <h3 className="text-2xl font-bold uppercase text-blanccasse">{title}</h3>
          <p className="mt-3 text-blanccasse/90">{excerpt}</p>
        </div>
        <button
          type="button"
          className="self-start rounded-3xl border border-blanccasse px-4 py-2 text-blanccasse transition ease-linear hover:bg-blanccasse hover:text-foreground"
        >
          En savoir plus
        </button>
      </div>
    </div>
  );
}

const Actu = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="mt-40">
      <h2 className="mb-10 text-center text-4xl text-rougecerise">Actu</h2>
      <Slider {...settings}>
        {ACTUS.map((item, i) => (
          <ActuCard key={i} date={item.date} title={item.title} excerpt={item.excerpt} isDark={i % 2 === 0} />
        ))}
      </Slider>
    </div>
  );
};

export default Actu;
