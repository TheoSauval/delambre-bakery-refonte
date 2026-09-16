import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 bg-blanccasse px-6 text-center">
      <img src="/img/logo.webp" alt="Logo The Delambre Bakery" className="size-20" />
      <h1 className="text-4xl font-bold uppercase leading-tight text-foreground md:text-6xl">
        Bientôt disponible
      </h1>
      <p className="max-w-md text-lg text-foreground/80">
        Cette page est en cours de préparation. Revenez très vite pour la découvrir !
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-rougecerise px-8 py-4 font-bold uppercase tracking-wide text-blanccasse transition hover:opacity-90"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
