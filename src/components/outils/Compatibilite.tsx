import { OUTILS_COMPATIBLES } from '../../utils/constants';

export default function Compatibilite() {
    return (
        <section className="w-full px-6 md:px-16 py-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Compatible avec <span className="text-[#FF0000]">vos outils existants</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Nous nous adaptons à votre stack, pas l'inverse.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 md:gap-6 mt-2">
                    {OUTILS_COMPATIBLES.map((outil, index) => (
                        <div
                            key={index}
                            className="px-8 py-4 border border-white/20 bg-transparent text-gray-400 font-medium tracking-widest text-sm hover:border-white hover:text-white transition-all cursor-default"
                        >
                            {outil}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}