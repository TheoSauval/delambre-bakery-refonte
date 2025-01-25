const Adresse = () => {
    return (
        <div className="pt-20">
            <h2 className="text-4xl text-rougecerise">Adresse</h2>
            <div className="flex flex-col justify-around items-center mt-20">
                <img src="/img/logo.webp" alt="Logo de la boutique" className="pb-5" />
                <p className="text-center">Venez nous rendre visite ! <br />
                    Deux adresses pour déguster nos Cookies :</p>
            </div>

            <div className="flex justify-around items-center py-10">
                <div className="flex flex-col items-center">
                    <p>3 rue Bartholomé Masurel 59800 Lille</p>
                    <img src="/img/Lille.jpg" alt="Lille" className="w-96 h-64 object-cover rounded-xl" />
                </div>
                <div className="flex flex-col items-center">
                    <p>62 Rue de la Chau. d'Antin, 75009 Paris</p>
                    <img src="/img/Paris.jpg" alt="Paris" className="w-96 h-64 object-cover rounded-xl" />
                </div>
            </div>
        </div>
    );
}

export default Adresse;