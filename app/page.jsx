import React from "react";
import Header from "./components/header";
import TextCarousel from "./components/carousel";
import MultipleItems from "./components/MultipleItems";
import Actu from "./components/actu";
import Adresse from "./components/adresse";
import Footer from "./components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div className="custom-font">
      <Header />
      <h1 className="flex flex-col justify-around items-center text-8xl text-blanccasse font-bold custom-font text-center animate-fadeIn">
        <span className="text-4xl">The</span>Delambre- <br /> Bakery
      </h1>
      <h3 className="flex justify-around items-center text-4xl text-blanccasse font-bold custom-font text-center animate-fadeIn">
        New York <br />
        Style <br />
        COOKIES
      </h3>
      <div className="flex justify-around items-end absolute -bottom-2 bg-foreground w-full size-36"></div>
      <div className="flex justify-around items-end absolute bottom-20 w-full size-40">
        <img
          src="/img/cookie-praline.png"
          alt="Cookie praliné"
          className="size-72"
        />
        <img
          src="/img/cookie-orignal.png"
          alt="Cookie orignal"
          className="size-72"
        />
        <img
          src="/img/cookie-original.png"
          alt="Cookie original"
          className="size-72"
        />
      </div>
      <main className="mt-96 bg-blanccasse"> {/* Ajout d'une marge pour placer en dessous */}
        <div>
          <TextCarousel />
        </div>
        <div className="flex justify-around items-center mt-40">
          <img
            src="/img/createur.jpg"
            alt=""
            className="rounded-3xl"
          />
          <div className="w-1/2">
            <h3 className="text-2xl text-rougecerise">The Delambre Bakery</h3>
            <p>Homemade New York Style Cookies <br />
              <br />
              Vous faire voyager à New York en une seule bouchée, c’est ce que <span className="text-rougecerise">The Delambre Bakery</span> a décidé de faire en ouvrant sa première boutique à Lille en 2021. Le cookie shop propose à la vente des cookies new-yorkais désormais célèbres et ultras gourmands : moelleux à l’intérieur et croustillant à l’extérieur, voilà la recette du bonheur !
              <br />
              <br />
              Il aura suffi d’un coup de foudre à Manhattan dans le quartier de Times Square et d’un confinement quelques années plus tard pour que Cinthia et Benjamin décident de se lancer dans cette incroyable et délicieuse aventure ! Si les savoureux cookies ont commencé à voir le jour dans l’appartement du jeune couple, ils sont vite passés à la vitesse supérieure. The Delambre Bakery ouvre sa première boutique en septembre 2021 à Lille puis deux ans plus tard à Paris.
              <br />
              <br />
              Au menu, 8 cookies signatures aux saveurs gourmandes et inspirés des USA : Red Velvet, Chocolate Tuxedo ou encore Salted Caramel, mais aussi des cookies éphémères tout au long de l’année avec des ingrédients uniques et originaux qui ne manqueront pas de vous surprendre !
              <br />
              <br />
              <span className="text-rougecerise">Mais c'est quoi un cookie de chez The Delambre Bakery ?</span>
              <br />
              <br />
              Un cookie The Delambre Bakery, c’est d’abord des ingrédients de qualité supérieure : œufs de poule élevés en plein air, grand chocolatier belge et beurre de campagne sont les ingrédients phares. Chaque cookie est ensuite fait à la main, sans moule, pour un résultat généreux, authentique et gourmand qui ravira toutes les papilles. De fabuleux cookies…Toujours home-made !
              <br />
              <br />
              The Delambre Bakery vous accueille :
              <br />
              <br />
              À Lille, 3 rue Batholomé Masurel du mardi au samedi de 13h à 19h. <br />
              À Paris, 62 rue de la Chaussée-d’Antin, du mardi au samedi de 12h à 19h.</p>
            <div className="flex justify-around items-center mt-4">
              <button className="border text-rougecerise border-rougecerise hover:bg-rougecerise hover:text-blanccasse transition ease-linear py-2 px-4 rounded-3xl">Contact</button>
            </div>
          </div>
        </div>
        {/* Order */}

        <div className="mt-28 pl-20">
          <h2 className="text-4xl text-rougecerise">Nos Cookies</h2>
          <div className="pr-10">
          <MultipleItems />
          <Actu />
          <Adresse />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}