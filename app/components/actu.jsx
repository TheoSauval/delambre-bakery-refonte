const Actu = () => {
    return (
        <div>
            <div className="flex justify-around items-center mt-40">
                <div>
                    <h1 className="text-4xl text-rougecerise">Actu</h1>
                    <p className="text-foreground py-10">
                        THEY ARE BACK !
                        08/01/2025</p>
                    <p className="text-foreground">Vos cookies classiques préférés sont de retour !   On commence 2025 du bon pied, avec tous vos cookies classiques préférés de retour sur la carte ! WELCOME BACK : Nutella Explosion : Fourré au Nutella et aux pépites de chocolat au lait, ce cookie fond dans la bouche. Chocolate Tuxedo : Une explosion ultime de chocolat dans la bouche : Trois chocolats : noir, lait et...</p>
                    <button className="mt-10">
                        <div className="border text-rougecerise border-rougecerise hover:bg-rougecerise hover:text-blanccasse transition ease-linear py-2 px-4 rounded-3xl">En savoir plus</div>
                    </button>
                </div>
                <img src="/img/actu.jpg" alt="" className="size-3/6 rounded-xl" />
            </div>
        </div>
    );
}

export default Actu;
