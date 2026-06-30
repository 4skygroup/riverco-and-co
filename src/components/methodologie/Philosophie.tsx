import { METHODOLOGIE_PHILOSOPHIE } from '../../utils/constants';

export default function Philosophie() {
    return (
        <section className="w-full px-6 md:px-16 py-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                {/* En-tête */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                        Notre philosophie de <span className="text-[#FF0000]">formation</span>
                    </h2>
                </div>

                {/* Grille */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {METHODOLOGIE_PHILOSOPHIE.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-white/40 transition-colors"
                        >
                            <span className="px-3 py-1 border border-[#B8860B] text-[#B8860B] text-xs font-medium rounded-md">
                                {card.tag}
                            </span>
                            <h3 className="text-base md:text-lg font-bold text-white mt-2">
                                {card.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}