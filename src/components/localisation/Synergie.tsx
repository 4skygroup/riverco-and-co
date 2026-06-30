import { LOCALISATION_SYNERGIE } from '../../utils/constants';

export default function Synergie() {
    return (
        <section className="w-full px-6 md:px-16 py-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    La synergie <span className="text-[#FF0000]">local &times; global</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                    {LOCALISATION_SYNERGIE.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-white/40 transition-colors"
                        >
                            <h3 className="text-base md:text-lg font-bold text-white">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}