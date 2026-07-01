import SEO from "../../components/seo/Seo";
import Cta from "../../components/services/Cta";

export default function StrategieCommerciale() {
  return (
    <>
      <SEO
        title="Stratégie Commerciale B2B & Go-To-Market"
        description="Définissez votre stratégie de conquête de marché. Structuration des offres, pricing et positionnement à l'international."
        canonical="https://rivercoandco.com/services/strategie-commerciale"
      />

      <main className="w-full bg-black text-white min-h-screen pt-12 pb-24">
        <section className="w-full px-6 md:px-16 py-12 md:py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              Planifiez votre{" "}
              <span className="text-[#FF0000]">conquête de marché</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed">
              Une exécution commerciale sans stratégie claire mène droit dans le
              mur. Nous co-construisons votre feuille de route pour pénétrer de
              nouveaux segments complexes ou vous déployer mondialement.
            </p>
          </div>
        </section>

        <section className="w-full px-6 md:px-16 py-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Composantes de notre{" "}
              <span className="text-[#FF0000]">accompagnement stratégique</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Ingénierie des Offres
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Packaging de vos services, ajustement du pricing et création
                  d'une proposition de valeur irrésistible face à vos
                  concurrents.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Expansion Internationale
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Analyse des barrières à l'entrée et adaptation culturelle de
                  vos discours de prospection pour les marchés UK, US ou EMEA.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Modélisation des Objectifs
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Alignement de vos KPIs business (MRR, LTV, CAC) avec le volume
                  d'appels hebdomadaires nécessaires pour sécuriser vos
                  objectifs.
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
