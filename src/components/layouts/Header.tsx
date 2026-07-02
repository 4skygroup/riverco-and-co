import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-riverco-co.webp";
import { NAV_LINKS } from "../../utils/constants";
import { MapPin, Menu, X, ChevronDown } from "lucide-react"; // N'oublie pas l'import de ChevronDown

// On définit nos sous-menus directement ici pour faciliter la gestion
const SERVICES_SUB_LINKS = [
  { name: "Agence de prospection", path: "/services/agence-de-prospection" },
  {
    name: "Prospection externalisée",
    path: "/services/prospection-externalisee",
  },
  { name: "Call center B2B", path: "/services/call-center-b2b" },
  { name: "Inbound marketing", path: "/services/inbound-marketing" },
  { name: "Consulting commercial", path: "/services/consulting-commercial" },
  { name: "Stratégie commerciale", path: "/services/strategie-commerciale" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50 bg-black text-white border-b border-white/10">
      <div className="w-full py-4 px-6 flex items-center justify-between">
        {/* Partie gauche */}
        <div className="hidden lg:flex items-center gap-4 flex-1">
          {/* <MapPin className="w-5 h-5" /> */}
          <Link
            to="/recrutement"
            className="bg-red-600 hover:bg-red-700 transition-colors text-white ml-8 px-4 py-2 rounded-full font-bold text-sm"
          >
            Nous Recrutons
          </Link>
        </div>

        {/* Logo au centre */}
        <div className="flex justify-start lg:justify-center flex-1">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src={logo}
              alt="Riverco & Co Logo"
              loading="lazy"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex gap-6 items-center justify-end flex-1">
          {NAV_LINKS.map((link) => {
            // Cas spécifique pour le dropdown "Services"
            if (link.name === "Services") {
              return (
                <div key={link.path} className="relative group py-4">
                  <Link
                    to={link.path}
                    className="hover:text-red-500 transition-colors font-medium flex items-center gap-1 cursor-pointer"
                  >
                    {link.name}
                    {/* La petite flèche qui tourne au survol */}
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>

                  {/* Le menu déroulant (Caché par défaut, visible au survol) */}
                  <div className="absolute top-12.5 left-1/2 -translate-x-1/2 w-64 bg-[#111] border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-3 z-50">
                    {SERVICES_SUB_LINKS.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 hover:pl-6 transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            // Liens normaux
            return (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-red-500 transition-colors font-medium"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Bouton Menu Mobile */}
        <div className="lg:hidden flex justify-end flex-1">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
            className="text-white hover:text-red-500 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Déroulant Mobile */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-200 opacity-100 py-6 px-6"
            : "max-h-0 opacity-0 py-0 px-6"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => {
            // Variante Mobile pour Services
            if (link.name === "Services") {
              return (
                <div key={link.path} className="flex flex-col gap-3">
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-bold hover:text-red-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                  <div className="flex flex-col gap-3 pl-4 border-l border-white/20">
                    {SERVICES_SUB_LINKS.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold hover:text-red-500 transition-colors"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <hr className="border-white/10 my-6" />

        <div className="flex flex-col gap-4 items-start">
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>Présence globale</span>
          </div>
          <Link
            to="/recrutement"
            onClick={() => setIsMenuOpen(false)}
            className="bg-red-600 hover:bg-red-700 transition-colors text-white px-4 py-3 rounded-full font-bold text-sm text-center w-full"
          >
            Nous Recrutons
          </Link>
        </div>
      </div>
    </header>
  );
}
