interface Props {
    title: string;
    description: string;
    stats: { appels: string; trend: string };
}

export default function ServiceCard({ title, description, stats }: Props) {
    return (
        <div className="w-full bg-[#111] rounded-3xl border border-white/10 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-[0_20px_30px_-15px_rgba(255,0,0,0.3)]">
            {/* Partie visuelle (Dashboard placeholder) */}
            <div className="relative w-full md:w-1/2 h-64 md:h-80 bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Ici tu pourras mettre ton image réelle plus tard */}
                <div className="absolute inset-0 bg-linear-to-br from-red-900/20 to-black/80" />

                {/* Dashboard Card Overlay */}
                <div className="relative bg-white/90 p-6 rounded-2xl shadow-xl w-64 flex flex-col gap-2">
                    <span className="text-xs text-gray-500 uppercase font-bold">Résultats du mois</span>
                    <div className="text-2xl font-black text-black">{stats.appels} appels</div>
                    <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded w-fit">
                        ↗ {stats.trend} vs le mois dernier
                    </div>
                </div>
            </div>

            {/* Partie Texte */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{description}</p>
            </div>
        </div>
    );
}