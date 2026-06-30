import { OFFRES_EMPLOI } from '../../utils/constants';

export default function Offres() {
    return (
        <section className="w-full px-6 md:px-16 py-12">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Deux expertises clés pour <span className="text-[#FF0000]">notre croissance</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {OFFRES_EMPLOI.map((offre, index) => (
                        <div key={index} className="border border-white/20 p-8 flex flex-col gap-6 hover:border-white/40 transition-colors">
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="text-xl font-bold text-white">{offre.title}</h3>
                                <span className="px-3 py-1 border border-green-600 text-green-500 text-xs uppercase font-medium rounded-sm">
                                    {offre.status}
                                </span>
                            </div>
                            <p className="text-white text-sm font-medium">{offre.subtitle}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">{offre.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}