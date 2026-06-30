export default function Cta() {
    return (
        <section className="w-full px-6 md:px-16 pt-8 pb-12">
            <div className="max-w-7xl mx-auto flex flex-col items-start gap-6">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Découvrez notre méthode <span className="text-[#FF0000]">en détail</span>
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                    Un échange de 30 minutes pour tout comprendre.
                </p>

                <button className="mt-2 flex items-center gap-3 bg-transparent border border-white hover:bg-white/10 transition-colors text-white font-medium text-sm md:text-base px-8 py-3 rounded-full cursor-pointer">
                    Demander Un RDV
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
                </button>
            </div>
        </section>
    );
}