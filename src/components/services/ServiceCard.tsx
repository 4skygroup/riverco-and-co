import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  stats: { appels: string; trend: string };
  image: string;
  path: string;
}

export default function ServiceCard({
  title,
  description,
  stats,
  image,
  path,
}: Props) {
  return (
    <div className="w-full bg-[#111] rounded-3xl border border-white/10 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-[0_20px_30px_-15px_rgba(255,0,0,0.3)] hover:border-[#FF0000]/50 transition-all duration-300 group">
      {/* Partie visuelle avec la nouvelle image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-80 bg-black rounded-2xl flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay sombre/rouge pour que le texte reste lisible */}
        <div className="absolute inset-0 bg-linear-to-br from-red-900/60 to-black/80" />

        {/* Dashboard Card Overlay */}
        <div className="relative bg-white/95 p-6 rounded-2xl shadow-xl w-64 flex flex-col gap-2 backdrop-blur-sm">
          <span className="text-xs text-gray-500 uppercase font-bold">
            Résultats du mois
          </span>
          <div className="text-2xl font-black text-black">{stats.appels}</div>
          <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded w-fit">
            ↗ {stats.trend} vs M-1
          </div>
        </div>
      </div>

      {/* Partie Texte */}
      <div className="w-full md:w-1/2 flex flex-col gap-5 items-start">
        <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
          {title}
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        {/* Nouveau Bouton de redirection */}
        <Link
          to={path}
          className="mt-2 flex items-center gap-3 bg-transparent border border-white hover:bg-white hover:text-black transition-all text-white font-medium text-sm px-6 py-2.5 rounded-full"
        >
          Découvrir ce service
          <svg
            width="14"
            height="14"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform translate-y-[0.5px]"
          >
            <path
              d="M1.4 15L0 13.6L11.6 2H5V0H15V10H13V3.4L1.4 15Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
