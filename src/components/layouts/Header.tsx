import { Link } from 'react-router';
import logo from '../../assets/logo-riverco-co.webp';
import { NAV_LINKS } from '../../utils/constants';
import { MapPin } from 'lucide-react';

export default function Header() {
    return (
        <header className="w-full py-4 px-6 flex items-center justify-between bg-black text-white border-b border-white/10">
            {/* Partie gauche : Localisation + Recrutement */}
            <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5" />
                <Link
                    to="/recrutement"
                    className="bg-red-600 hover:bg-red-700 transition-colors text-white px-4 py-2 rounded-full font-bold text-sm"
                >
                    Nous Recrutons
                </Link>
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