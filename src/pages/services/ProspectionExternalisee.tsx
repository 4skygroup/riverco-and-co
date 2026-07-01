import SEO from "../../components/seo/Seo";
import Cta from "../../components/services/Cta";

export default function ProspectionExternalisee() {
  return (
    <>
      <SEO
        title="Prospection Externalisée B2B | Force de Vente"
        description="Externalisez votre prospection commerciale sans aucun risque structurel. Nos SDR d'élite génèrent votre pipeline de vente sur mesure."
        canonical="https://rivercoandco.com/services/prospection-externalisee"
      />

      <main className="w-full bg-black text-white min-h-screen pt-12 pb-24">
        <section className="w-full px-6 md:px-16 py-12 md:py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              Prospection <span className="text-[#FF0000]">externalisée</span>{" "}
              flexible
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed">
              Déployez une force de vente externalisée performante en moins de 4
              semaines. Libérez-vous des contraintes de recrutement et
              concentrez-vous uniquement sur la signature des contrats.
            </p>
          </div>
        </section>

        <section className="w-full px-6 md:px-16 py-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Pourquoi externaliser votre{" "}
              <span className="text-[#FF0000]">pipeline commercial</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Zéro Risque RH
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pas de charges fixes lourdes, pas de management complexe à
                  gérer, ni de longs processus de recrutement de profils sales
                  seniors.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Commerciaux Formés
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Nos équipes maîtrisent les meilleures techniques de vente, de
                  traitement des objections et les outils de prospection de
                  pointe.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Modèle Scalable
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Augmentez ou ajustez la puissance de vos campagnes de
                  prospection en temps réel selon vos objectifs de croissance.
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
