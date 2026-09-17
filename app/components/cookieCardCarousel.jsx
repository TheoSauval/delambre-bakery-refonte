"use client";

import Slider from "react-slick";
import CookieCard from "./cookieCard";

const COOKIES = [
  { src: "/img/cookie-original.png", alt: "Cookie Original", name: "Original" },
  { src: "/img/Chocolate-Tuxedo.png", alt: "Cookie Chocolate Tuxedo", name: "Chocolate Tuxedo" },
  { src: "/img/REd-Velvet.png", alt: "Cookie Red Velvet", name: "Red Velvet" },
];

export default function CookieCardCarousel() {
  return (
    <div className="mx-auto w-72 md:hidden">
      <Slider
        infinite
        autoplay
        autoplaySpeed={3000}
        speed={600}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
      >
        {COOKIES.map((cookie) => (
          <div key={cookie.name}>
            <CookieCard src={cookie.src} alt={cookie.alt} name={cookie.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
