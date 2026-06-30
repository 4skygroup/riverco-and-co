export default function Hero() {
    return (
        <section className="w-full px-6 md:px-16 py-12 md:py-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Parlons de <span className="text-[#FF0000]">votre stratégie</span>
                </h1>
                <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
                    Vous avez un projet d'expansion ou besoin d'externaliser votre force commerciale ? Contactez nos experts pour une analyse personnalisée.
                </p>
            </div>
        </section>
    );
}