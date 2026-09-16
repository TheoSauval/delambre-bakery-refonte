const LOCATIONS = [
  {
    city: "Lille",
    address: "3 rue Bartholomé Masurel, 59800 Lille",
    img: "/img/Lille.jpg",
  },
  {
    city: "Paris",
    address: "62 rue de la Chaussée d'Antin, 75009 Paris",
    img: "/img/Paris.jpg",
  },
];

const Adresse = () => {
  return (
    <div className="pt-20">
      <h2 className="text-center text-4xl text-rougecerise">Adresse</h2>

      <div className="mt-14 flex flex-col items-center">
        <img src="/img/logo.webp" alt="Logo de la boutique" className="w-40 md:w-48" />
        <p className="mt-6 text-center text-lg">
          Venez nous rendre visite ! <br />
          Deux adresses pour déguster nos cookies :
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
        {LOCATIONS.map((loc) => (
          <div
            key={loc.city}
            className="overflow-hidden rounded-3xl bg-white shadow-lg"
          >
            <img src={loc.img} alt={loc.city} className="h-64 w-full object-cover" />
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="text-center">
                <p className="text-xl font-bold uppercase text-rougecerise">{loc.city}</p>
                <p className="mt-1 text-foreground">{loc.address}</p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border-2 border-rougecerise px-6 py-2 font-bold uppercase tracking-wide text-rougecerise transition ease-linear hover:bg-rougecerise hover:text-blanccasse"
              >
                Itinéraire
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adresse;
