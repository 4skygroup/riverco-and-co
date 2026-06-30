import { METHODOLOGIE_PARCOURS } from '../../utils/constants';

export default function Parcours() {
    return (
        <section className="w-full px-6 md:px-16 py-12">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                {/* En-tête */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                        Le parcours <span className="text-[#FF0000]">d'intégration client</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl text-sm md:text-base leading-relaxed">
                        Chaque client bénéficie d'un parcours structuré en 4 phases, garantissant que nos commerciaux représentent votre marque avec le niveau d'excellence d'un salarié interne senior.
                    </p>
                </div>

                {/* Liste des étapes */}
                <div className="flex flex-col gap-12 mt-4">
                    {METHODOLOGIE_PARCOURS.map((item) => (
                        <div key={item.step} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">

                            {/* Bulle numérotée */}
                            <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-black font-black text-xl md:text-2xl mt-1">
                                {item.step}
                            </div>

                            {/* Contenu */}
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-4xl">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-3 mt-2">
                                    {item.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-1.5 border border-white/20 rounded-md text-gray-300 text-xs md:text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}