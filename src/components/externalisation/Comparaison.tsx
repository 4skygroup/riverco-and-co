import { COMPARISON_INTERNE, COMPARISON_RIVERCO } from '../../utils/constants';

export default function Comparaison() {
    return (
        <section className="w-full px-6 md:px-16 py-12">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                        Interne vs <span className="text-[#FF0000]">Riverco & Co</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl text-sm md:text-base leading-relaxed">
                        Chaque client bénéficie d'un parcours structuré en 4 phases, garantissant que nos commerciaux représentent votre marque avec le niveau d'excellence d'un salarié interne senior.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-0 mt-4">
                    {/* Colonne Gauche : Interne */}
                    <div className="flex-1 flex flex-col gap-6 md:border-r md:border-white/20 md:pr-12 lg:pr-24">
                        {COMPARISON_INTERNE.map((item, index) => (
                            <div key={`interne-${index}`} className="flex items-start gap-4">
                                <svg className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span className="text-gray-300 text-sm md:text-base">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Colonne Droite : Riverco */}
                    <div className="flex-1 flex flex-col gap-6 md:pl-12 lg:pl-24 pt-8 md:pt-0 border-t border-white/20 md:border-t-0">
                        {COMPARISON_RIVERCO.map((item, index) => (
                            <div key={`riverco-${index}`} className="flex items-start gap-4">
                                <svg className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-white font-medium text-sm md:text-base">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}