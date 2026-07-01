import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-riverco-co.webp";
import { NAV_LINKS } from "../../utils/constants";
import { MapPin, Menu, X } from "lucide-react";

export default function Header() {
  // État pour gérer l'ouverture du menu sur mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50 bg-black text-white border-b border-white/10">
      <div className="w-full py-4 px-6 flex items-center justify-between">
        <div className="hidden lg:flex items-center gap-4 flex-1">
          <MapPin className="w-5 h-5" />
          <Link
            to="/recrutement"
            className="bg-red-600 hover:bg-red-700 transition-colors text-white px-4 py-2 rounded-full font-bold text-sm"
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

        {/* Navigation Desktop (Cachée sur mobile) */}
        <nav className="hidden lg:flex gap-6 items-center justify-end flex-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-red-500 transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Bouton Menu Hamburger (Visible uniquement sur mobile) */}
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
            ? "max-h-125 opacity-100 py-6 px-6"
            : "max-h-0 opacity-0 py-0 px-6"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)} // Ferme le menu au clic
              className="text-lg font-bold hover:text-red-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
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
