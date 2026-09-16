"use client";

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="px-6">
      <div className="relative rounded-3xl bg-foreground px-8 py-20 text-center md:px-16">
        <img
          src="/img/cookie-original.png"
          alt=""
          className="pointer-events-none absolute -left-6 -top-10 w-28 -rotate-12 drop-shadow-xl md:-left-10 md:-top-14 md:w-44"
        />
        <img
          src="/img/Nutella-explosion.png"
          alt=""
          className="pointer-events-none absolute -bottom-10 -right-6 w-28 rotate-12 drop-shadow-xl md:-bottom-14 md:-right-10 md:w-44"
        />

        <h2 className="text-4xl font-bold uppercase leading-tight text-blanccasse md:text-6xl">
          Contactez-nous
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-blanccasse/90">
          Une question, une envie de cookies pour un événement ? Laissez-nous votre email, on vous répond vite.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email"
            className="w-full rounded-full bg-blanccasse px-6 py-4 text-foreground placeholder:text-foreground/50 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-rougecerise px-8 py-4 font-bold uppercase tracking-wide text-blanccasse transition hover:opacity-90"
          >
            {sent ? "Envoyé !" : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
  );
}
