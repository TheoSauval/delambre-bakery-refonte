import React from "react";
import Header from "./components/header";
import HeroBackground from "./components/heroBackground";
import HeroScrollSection from "./components/heroScrollSection";
import ScrollingBanner from "./components/scrollingBanner";
import RevealHeading from "./components/revealHeading";
import CookieCard from "./components/cookieCard";
import MultipleItems from "./components/MultipleItems";
import Actu from "./components/actu";
import InstagramFeed from "./components/instagramFeed";
import Adresse from "./components/adresse";
import Contact from "./components/contact";
import FooterReveal from "./components/footerReveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div className="custom-font pointer-events-none">
      <FooterReveal>
      <HeroScrollSection className="relative h-screen w-full overflow-hidden">
        <HeroBackground
          src="/img/cookies-new-yorkais-faits-maison-lille-59_1.webp"
          alt="Cookies New York Style faits maison à Lille"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />

        <Header className="absolute top-0 left-0 w-full z-20" />

        <div className="absolute bottom-16 left-6 md:left-16 z-10">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-blanccasse leading-[0.85]">
            THE<br />DELAMBRE<br />BAKERY
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-blanccasse font-bold">
            New York Style Cookies
          </p>
        </div>

        <div className="group absolute bottom-16 right-6 md:right-16 z-10 size-32 md:size-44 cursor-pointer">
          <svg width="0" height="0" className="absolute pointer-events-none">
            <defs>
              <clipPath id="cookieBite" clipPathUnits="objectBoundingBox">
                <path
                  fillRule="evenodd"
                  d="M1,0.5 A0.5,0.5 0 1,0 0,0.5 A0.5,0.5 0 1,0 1,0.5 Z
                     M1.02,0.16 A0.16,0.16 0 1,0 0.7,0.16 A0.16,0.16 0 1,0 1.02,0.16 Z"
                />
              </clipPath>
            </defs>
          </svg>
          <img
            src="/img/cookie_accueil.webp"
            alt="Cookie The Delambre Bakery"
            style={{ clipPath: "url(#cookieBite)" }}
            className="size-full object-cover -rotate-12 shadow-lg transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-0"
          />
          <span className="pointer-events-none absolute top-1 right-1 size-4 rounded-full bg-rougecerise opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:-translate-y-6 group-hover:translate-x-6 group-hover:rotate-45" />
          <span className="pointer-events-none absolute top-0 right-8 size-3 rounded-full bg-rougecerise opacity-0 transition-all duration-500 ease-out delay-100 group-hover:opacity-100 group-hover:-translate-y-8 group-hover:translate-x-3 group-hover:rotate-12" />
          <span className="pointer-events-none absolute top-6 right-0 size-3.5 rounded-full bg-rougecerise opacity-0 transition-all duration-500 ease-out delay-150 group-hover:opacity-100 group-hover:-translate-y-3 group-hover:translate-x-9 group-hover:-rotate-12" />
        </div>
      </HeroScrollSection>
      <main className="bg-blanccasse">
        <div className="group relative flex flex-col items-center gap-8 px-6 pt-24 md:flex-row md:justify-around md:gap-4 md:px-0">
          <img
            src="/img/Lille.jpg"
            alt="Cinthia et Benjamin, fondateurs de The Delambre Bakery"
            className="w-full max-w-md h-auto object-contain md:w-[36rem]"
          />
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl text-rougecerise">The Delambre Bakery</h3>
            <p className="text-lg">
              Homemade New York Style Cookies
              <br />
              <br />
              Vous faire voyager à New York en une seule bouchée, c’est ce que <span className="text-rougecerise">The Delambre Bakery</span> a décidé de faire en ouvrant sa première boutique à Lille en 2021, puis à Paris deux ans plus tard.
              <br />
              <br />
              <span className="text-rougecerise">Mais c'est quoi un cookie de chez The Delambre Bakery ?</span> Des ingrédients de qualité supérieure, une fabrication 100&nbsp;% à la main, sans moule : de fabuleux cookies... toujours home-made !
            </p>
          </div>

          <img
            src="/img/cookie-daim.png"
            alt=""
            className="pointer-events-none absolute -top-6 left-4 w-16 md:w-20 opacity-0 scale-50 -rotate-12 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0"
          />
          <img
            src="/img/cookie-praline.png"
            alt=""
            className="pointer-events-none absolute -top-10 left-1/4 w-14 md:w-16 opacity-0 scale-50 rotate-12 transition-all duration-500 ease-out delay-100 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0"
          />
          <img
            src="/img/Speculoos.png"
            alt=""
            className="pointer-events-none absolute -bottom-6 left-8 w-16 md:w-20 opacity-0 scale-50 rotate-6 transition-all duration-500 ease-out delay-150 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0"
          />
          <img
            src="/img/Nutella-explosion.png"
            alt=""
            className="pointer-events-none absolute -top-6 right-6 w-16 md:w-20 opacity-0 scale-50 rotate-12 transition-all duration-500 ease-out delay-200 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0"
          />
          <img
            src="/img/cookie-New-Yorker.png"
            alt=""
            className="pointer-events-none absolute bottom-4 right-2 w-16 md:w-20 opacity-0 scale-50 -rotate-6 transition-all duration-500 ease-out delay-250 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0"
          />
          <img
            src="/img/cookie-orignal.png"
            alt=""
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 md:w-20 opacity-0 scale-50 rotate-6 transition-all duration-500 ease-out delay-200 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0"
          />
          <img
            src="/img/Canadian-Maple.png"
            alt=""
            className="pointer-events-none absolute top-1/3 right-4 w-14 md:w-16 opacity-0 scale-50 rotate-6 transition-all duration-500 ease-out delay-300 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0"
          />
        </div>
        {/* Order */}

        <div className="mt-8">
          <ScrollingBanner text="NEW YORK COOKIES">
            <CookieCard src="/img/cookie-original.png" alt="Cookie Original" name="Original" />
            <CookieCard src="/img/Chocolate-Tuxedo.png" alt="Cookie Chocolate Tuxedo" name="Chocolate Tuxedo" />
            <CookieCard src="/img/REd-Velvet.png" alt="Cookie Red Velvet" name="Red Velvet" />
          </ScrollingBanner>
        </div>

        <RevealHeading
          className="mt-40 px-6 text-center text-4xl md:text-6xl font-bold uppercase leading-tight"
          segments={[
            { text: "Le goût de New York, " },
            { text: "dans chaque bouchée.", className: "text-rougecerise" },
          ]}
        />

        <InstagramFeed />

        <div className="mt-40 px-6 md:pl-20 md:pr-0">
          <h2 className="text-4xl text-rougecerise">Nos Cookies</h2>
          <div className="md:pr-10">
          <MultipleItems />
          <Actu />
          <Adresse />
          </div>
        </div>

        <div className="mt-40 pb-40">
          <Contact />
        </div>
      </main>
      </FooterReveal>
    </div>
  );
}