export default function Hero() {
    return (
        <section className="w-full px-6 md:px-16 py-12 md:py-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
                    Présence globale <span className="text-[#FF0000]">une vision mondiale</span>
                </h1>
                <p className="text-gray-400 text-base md:text-lg max-w-4xl leading-relaxed mt-2">
                    Nos bureaux à Paris, Londres et New York ne sont pas de simples adresses. Ce sont des centres d'excellence où nos équipes locales incarnent votre marque sur chaque marché.
                </p>
            </div>
        </section>
    );
}