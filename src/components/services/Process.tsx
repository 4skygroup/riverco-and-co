export default function Process() {
    return (
        <section className="w-full px-6 md:px-16 py-16 bg-[#050505] border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center">
              Notre processus de <span className="text-[#FF0000]">déploiement</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative mt-4">
              {/* Ligne connectrice rouge (visible uniquement sur Desktop) */}
              <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-0.5 bg-linear-to-r from-red-900/20 via-[#FF0000]/50 to-red-900/20"></div>

              {/* Etape 1 */}
              <div className="flex flex-col items-center text-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-xl font-black text-white border-2 border-[#FF0000] shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                  1
                </div>
                <h3 className="text-lg font-bold text-white mt-2">Audit & Stratégie</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-4">
                  Nous analysons votre marché, vos ICPs et vos processus actuels pour définir une feuille de route d'acquisition sur-mesure.
                </p>
              </div>

              {/* Etape 2 */}
              <div className="flex flex-col items-center text-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-xl font-black text-white border-2 border-[#FF0000] shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                  2
                </div>
                <h3 className="text-lg font-bold text-white mt-2">Setup & Immersion</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-4">
                  Mise en place technique (CRM, outils d'outbound) et immersion totale de nos équipes dans votre discours de marque.
                </p>
              </div>

              {/* Etape 3 */}
              <div className="flex flex-col items-center text-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-xl font-black text-white border-2 border-[#FF0000] shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                  3
                </div>
                <h3 className="text-lg font-bold text-white mt-2">Lancement & Scaling</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-4">
                  Lancement des campagnes, optimisation itérative basée sur la data et montée en puissance pour maximiser votre ROI.
                </p>
              </div>

            </div>
          </div>
        </section>
    )
}