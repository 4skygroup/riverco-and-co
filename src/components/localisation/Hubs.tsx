import { LOCALISATION_HUBS } from '../../utils/constants';

export default function Hubs() {
    return (
        <section className="w-full px-6 md:px-16 py-12">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Nos <span className="text-[#FF0000]">hubs</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {LOCALISATION_HUBS.map((hub, index) => (
                        <div
                            key={index}
                            className="relative border border-white/20 rounded-3xl p-8 flex flex-col justify-end min-h-112.5 overflow-hidden bg-black group hover:border-white/40 transition-colors"
                        >
                            {/* Texte de fond géant */}
                            <div className="absolute top-12 left-0 w-full flex flex-col items-center text-center text-white/3 uppercase font-medium pointer-events-none transition-transform duration-500 group-hover:scale-105">
                                <span className="text-2xl tracking-[0.2em]">{hub.bgCity}</span>
                                <span className="text-4xl tracking-[0.2em] mt-1 whitespace-pre-line">{hub.bgRegion}</span>
                            </div>

                            {/* Contenu textuel */}
                            <div className="relative z-10 flex flex-col gap-3">
                                <h3 className="text-2xl font-bold text-white">
                                    {hub.title}
                                </h3>
                                <p className="text-white text-sm md:text-base font-medium">
                                    {hub.subtitle}
                                </p>
                                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mt-2">
                                    {hub.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}