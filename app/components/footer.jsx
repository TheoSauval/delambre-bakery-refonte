"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LINK_CLASS = "transition-colors ease-linear hover:text-rougecerise";

const NAV_LINKS = [
  { href: "/nos-cookies", label: "Nos cookies" },
  { href: "/evenementiel", label: "Evénementiel" },
  { href: "/notre-maison", label: "Notre maison" },
  { href: "/nos-boutiques", label: "Nos boutiques" },
  { href: "/presse", label: "Presse" },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const footerRef = useRef(null);

  const handleJoin = (e) => {
    e.preventDefault();
    setJoined(true);
  };

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const setHeightVar = () => {
      document.documentElement.style.setProperty("--footer-height", `${footer.offsetHeight}px`);
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    setHeightVar();
    const observer = new ResizeObserver(setHeightVar);
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={footerRef}
      className="static z-0 flex flex-col bg-foreground text-blanccasse sm:fixed sm:inset-x-0 sm:bottom-0 sm:max-h-screen sm:min-h-screen sm:overflow-y-auto"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-8 md:grid-cols-4 md:gap-12 md:px-10 md:py-16">
        <div>
          <img src="/img/logo.webp" alt="Logo The Delambre Bakery" className="size-16" />
          <p className="mt-4 text-sm uppercase tracking-wide text-blanccasse/70">Lille</p>
          <p className="text-blanccasse/90">3 rue Bartholomé Masurel, 59800 Lille</p>
          <p className="mt-3 text-sm uppercase tracking-wide text-blanccasse/70">Paris</p>
          <p className="text-blanccasse/90">62 rue de la Chaussée d&apos;Antin, 75009 Paris</p>
        </div>

        <nav>
          <p className="text-sm uppercase tracking-wide text-blanccasse/70">Navigation</p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={LINK_CLASS}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm uppercase tracking-wide text-blanccasse/70">Suivez-nous</p>
          <a
            href="https://www.instagram.com/delambrebakery/"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 ${LINK_CLASS}`}
          >
            Instagram
          </a>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-blanccasse/70">Newsletter</p>
          <p className="mt-4 text-blanccasse/90">Restez informés de nos nouveautés et événements.</p>
          <form onSubmit={handleJoin} className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              className="w-full rounded-full bg-blanccasse px-5 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-rougecerise px-6 py-3 font-bold uppercase tracking-wide text-blanccasse transition hover:opacity-90"
            >
              {joined ? "Merci !" : "OK"}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-auto">
        <h2 className="select-none overflow-hidden whitespace-nowrap px-4 text-center font-bold uppercase leading-none text-blanccasse text-[1.5rem] sm:text-[2.25rem] md:px-10 md:text-[5.5vw]">
          The Delambre Bakery
        </h2>

        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-4 border-t border-blanccasse/20 px-6 py-4 text-sm text-blanccasse/70 sm:flex-row sm:justify-between md:px-10 md:py-6">
          <p>© {new Date().getFullYear()} The Delambre Bakery.</p>
          <div className="flex gap-6">
            <a href="/mentions-legales" className="transition ease-linear hover:text-rougecerise">
              Mentions légales
            </a>
            <a href="/politique-de-confidentialite" className="transition ease-linear hover:text-rougecerise">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
