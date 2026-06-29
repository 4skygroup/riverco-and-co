export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 border-t border-gray-800">
            <div className="flex justify-center gap-8">
                <a href="/services">Nos Services</a>
                <a href="/mentions-legales">Mentions légales</a>
                <a href="/contact">Contact</a>
            </div>
            <p className="text-center mt-4 text-sm opacity-60">© 2026 Riverco & Co</p>
        </footer>
    );
}