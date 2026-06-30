import { PILIERS_DATA } from '../../utils/constants';

export default function Piliers() {
    return (
        <section className="w-full bg-black text-white py-24 px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">

                {/* En-tête de la section */}
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Quatre piliers pour une <span className="text-[#FF0000]">performance d'exception</span>
                    </h2>
                </div>

                {/* Grille 2x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {PILIERS_DATA.map((pilier) => (
                        <div
                            key={pilier.id}
                            className="flex flex-col gap-4 p-8 bg-black border border-white/10 rounded-2xl hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-transparent hover:shadow-[#FF0000]/10 cursor-default group"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                                {pilier.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {pilier.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}