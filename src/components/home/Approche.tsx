import { APPROCHE_DATA } from '../../utils/constants';

export default function Approche() {
    return (
        <section className="w-full bg-black text-white py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">

                {/* En-tête */}
                <div className="flex flex-col gap-4 text-left w-full">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Ce qui caractérise <span className="text-[#FF0000]">l'approche de RIVERCO & CO</span>
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-4xl">
                        En tant qu'agence spécialisée en développement commercial, nos équipes effectuent quotidiennement des campagnes de prospection à froid afin d'obtenir des rendez-vous pour nos clients.
                    </p>
                </div>

                {/* Grille des cartes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {APPROCHE_DATA.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col h-full rounded-4xl border border-white/20 bg-black overflow-hidden hover:border-white/50 transition-all duration-300 cursor-pointer"
                        >
                            {/* Zone Image */}
                            <div className="h-64 lg:h-72 w-full border-b border-white/10 overflow-hidden bg-[#111]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Contenu textuel */}
                            <div className="p-8 flex flex-col gap-4 relative z-10 bg-black grow">
                                <h3 className="text-lg lg:text-xl font-bold text-white leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bouton CTA centré */}
                <div className="flex justify-center mt-4">
                    <button className="flex items-center gap-3 bg-transparent border border-white hover:bg-white/10 transition-colors text-white font-medium text-sm md:text-base px-8 py-3 rounded-full cursor-pointer">
                        Nos Services
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
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}