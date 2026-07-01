import SEO from "../../components/seo/Seo";
import Cta from "../../components/services/Cta";

export default function ConsultingCommercial() {
  return (
    <>
      <SEO
        title="Consulting Commercial & Optimisation des Ventes"
        description="Optimisez vos processus commerciaux, formez vos équipes et intégrez les meilleurs outils de vente du marché pour maximiser votre ROI."
        canonical="https://rivercoandco.com/services/consulting-commercial"
      />

      <main className="w-full bg-black text-white min-h-screen pt-12 pb-24">
        <section className="w-full px-6 md:px-16 py-12 md:py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              Optimisez vos{" "}
              <span className="text-[#FF0000]">processus de vente</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed">
              Vos ventes stagnent malgré vos efforts ? Nos consultants analysent
              vos goulots d'étranglement, restructurent vos cycles de décision
              et outillent vos commerciaux pour débloquer votre croissance.
            </p>
          </div>
        </section>

        <section className="w-full px-6 md:px-16 py-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Domaines d'<span className="text-[#FF0000]">intervention</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Audit des Taux de Signatures
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Analyse approfondie de vos rendez-vous manqués et
                  perfectionnement des techniques de traitement des objections
                  de vos closers.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Architecture CRM & Outils
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Configuration avancée de HubSpot ou Pipedrive. Automatisation
                  des rappels et tableaux de bord pour un suivi rigoureux.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Playbook Commercial
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Rédaction de bibles de vente contenant vos argumentaires de
                  pitch pour onboarder vos futurs commerciaux deux fois plus
                  vite.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Cta />
      </main>
    </>
  );
}
