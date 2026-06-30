import { EXTERNALISATION_AVANTAGES } from '../../utils/constants';

export default function Avantages() {
    return (
        <section className="w-full px-6 md:px-16 py-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                        Ce que vous n'aurez <span className="text-[#FF0000]">plus à gérer</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Chaque poste de friction est pris en charge par nos équipes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {EXTERNALISATION_AVANTAGES.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-white/40 transition-colors"
                        >
                            <h3 className="text-sm md:text-base font-bold text-white">
                                {card.title}
                            </h3>
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}