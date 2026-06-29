import logo from '../../assets/logo-riverco-co.webp';
import { NAV_LINKS } from '../../utils/constants';

export default function Header() {
    return (
        <header className="w-full py-4 px-6 flex items-center justify-between bg-black text-white border-b border-white/10">
            {/* Partie gauche : Localisation + Recrutement */}
            <div className="flex items-center gap-4">
                <button aria-label="Localisation" className="text-xl">📍</button>
                <button className="bg-red-600 hover:bg-red-700 transition-colors text-white px-4 py-2 rounded-full font-bold text-sm">
                    Nous recrutons
                </button>
            </div>

            {/* Logo */}
            <div className="flex justify-center">
                <img src={logo} alt="Riverco & Co Logo" className="h-8 w-auto" />
            </div>

            {/* Navigation */}
            <nav className="flex gap-6 items-center">
                {NAV_LINKS.map((link) => (
                    <a key={link.path} href={link.path} className="hover:text-red-500 transition-colors">
                        {link.name}
                    </a>
                ))}
            </nav>
        </header>
    );
}