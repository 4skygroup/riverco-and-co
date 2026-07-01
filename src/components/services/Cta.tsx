import { Link } from "react-router-dom";

export default function Cta() {
    return (
        <div className="w-full text-center py-16">
            <Link to='/contact' className="bg-transparent border border-white hover:bg-white/10 text-white font-medium px-8 py-3 rounded-full transition-all">
                Demander Un RDV
            </Link>
        </div>
    );
}