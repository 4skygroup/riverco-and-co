import { OUTILS_ECOSYSTEME } from '../../utils/constants';

export default function Ecosysteme() {
    return (
        <section className="w-full px-6 md:px-16 py-12">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                {/* En-tête */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                        L'écosystème <span className="text-[#FF0000]">Riverco</span>
                    </h2>
                </div>

                {/* Grille 2x2 des cartes outils */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {OUTILS_ECOSYSTEME.map((outil, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-6 p-8 rounded-none border border-white/20 bg-transparent hover:border-white/50 transition-colors"
                        >
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="text-lg md:text-xl font-medium text-white max-w-[60%]">
                                    {outil.title}
                                </h3>
                                {outil.badge && (
                                    <span className="px-4 py-1 border border-[#B8860B] text-[#B8860B] text-xs font-medium rounded-md uppercase tracking-wider">
                                        {outil.badge}
                                    </span>
                                )}
                            </div>

                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                {outil.description}
                            </p>

                            <ul className="list-disc pl-5 text-white text-sm md:text-base flex flex-col gap-2 mt-2">
                                {outil.features.map((feature, idx) => (
                                    <li key={idx} className="pl-1 leading-relaxed">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}