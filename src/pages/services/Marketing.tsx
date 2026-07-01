import SEO from "../../components/seo/Seo";
import Cta from "../../components/services/Cta";

export default function InboundMarketing() {
  return (
    <>
      <SEO
        title="Stratégie Inbound Marketing B2B | Leads Qualifiés"
        description="Attirez vos clients idéaux au lieu de les chasser. Génération de leads organiques, tunnels de conversion et stratégies de contenu performantes."
        canonical="https://rivercoandco.com/services/inbound-marketing"
      />

      <main className="w-full bg-black text-white min-h-screen pt-12 pb-24">
        <section className="w-full px-6 md:px-16 py-12 md:py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              Faites venir vos clients{" "}
              <span className="text-[#FF0000]">à vous</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed">
              Associez la puissance de l'Inbound Marketing à vos actions de
              prospection. Créez un système d'acquisition continu qui génère des
              leads qualifiés de manière totalement automatisée.
            </p>
          </div>
        </section>

        <section className="w-full px-6 md:px-16 py-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Les piliers de notre stratégie{" "}
              <span className="text-[#FF0000]">Inbound</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Tunnels de Conversion
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Mise en place de landing pages optimisées et de lead magnets
                  captivants pour transformer vos visiteurs anonymes en
                  prospects identifiés.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Lead Nurturing
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Scénarios d'automatisation d'emails pour éduquer vos prospects
                  à forte valeur ajoutée jusqu'à ce qu'ils soient mûrs pour un
                  appel de vente.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Alignement Alignement Marketing/Sales
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Nous connectons parfaitement vos flux marketing à votre CRM
                  afin qu'aucun lead chaud ne se perde en chemin.
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
