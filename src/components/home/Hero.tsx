export default function Hero() {
    const locations = ["Paris", "London", "New York"];

    return (
        <section className="w-full min-h-[calc(100vh-80px)] bg-black text-white flex items-center px-6 md:px-16 py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

                {/* CÔTÉ GAUCHE : Contenu textuel */}
                <div className="flex flex-col items-start text-left gap-6 max-w-2xl">

                    {/* Titre Principal bicolore */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                        Votre croissance mondiale,<br />
                        <span className="text-[#FF0000]">orchestrée par des experts</span>
                    </h1>

                    {/* Sous-titre / Description */}
                    <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-xl leading-relaxed">
                        Déployez une force commerciale d'élite à l'international sans la structure.
                        Riverco & Co prend en charge l'intégralité de votre développement commercial sur le terrain.
                    </p>

                    {/* Zones de localisation (Badges rectangulaires arrondis sous le texte) */}
                    <div className="flex flex-wrap gap-3 mt-2">
                        {locations.map((city) => (
                            <span
                                key={city}
                                className="bg-black border border-white text-white text-xs md:text-sm px-4 py-1.5 rounded-xl font-medium tracking-wide"
                            >
                                {city}
                            </span>
                        ))}
                    </div>

                    {/* Bouton CTA conforme */}
                    <button className="mt-4 flex items-center gap-3 bg-black border border-white/30 hover:border-white/80 active:scale-98 transition-all text-white font-medium text-sm md:text-base px-6 py-3.5 rounded-full tracking-wide">
                        Démarrer Avec Riverco
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transform translate-y-[0.5px]"
                        >
                            <path
                                d="M1.4 15L0 13.6L11.6 2H5V0H15V10H13V3.4L1.4 15Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>

                {/* CÔTÉ DROIT : Le visuel de la carte de marque (Simulé proprement en Tailwind) */}
                <div className="hidden md:flex justify-center items-center w-full relative">
                    <div className="relative w-85 lg:w-95 aspect-4/5 bg-white rounded-[40px] overflow-hidden flex items-center justify-center shadow-2xl shadow-white/5 transform hover:scale-[1.02] transition-transform duration-500">
                        {/* Bandeau noir diagonal */}
                        <div className="absolute w-[160%] h-22.5 lg:h-25 bg-black transform -rotate-25 flex items-center justify-center box-content">
                            <span className="text-white font-black text-2xl lg:text-3xl tracking-wider select-none whitespace-nowrap">
                                RIVERCO & CO
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}