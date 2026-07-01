import SEO from "../../components/seo/Seo";
import Cta from "../../components/services/Cta";

export default function AgenceDeProspection() {
  return (
    <>
      <SEO
        title="Agence de Prospection B2B"
        description="Confiez votre acquisition à notre agence de prospection. Ciblage chirurgical, approche multicanale et génération de rendez-vous hyper-qualifiés."
        canonical="https://rivercoandco.com/services/agence-de-prospection"
      />

      <main className="w-full bg-black text-white min-h-screen pt-12 pb-24">
        {/* Section Hero */}
        <section className="w-full px-6 md:px-16 py-12 md:py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              Votre{" "}
              <span className="text-[#FF0000]">Agence de prospection</span>{" "}
              d'élite
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed">
              Transformez votre acquisition B2B avec une équipe dédiée. Nous
              identifions, qualifions et engageons vos futurs clients avec une
              précision chirurgicale pour remplir l'agenda de vos commerciaux.
            </p>
          </div>
        </section>

        {/* Section Fonctionnalités / Piliers */}
        <section className="w-full px-6 md:px-16 py-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            {/* L'escalier sémantique est respecté ! */}
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Notre méthode d'
              <span className="text-[#FF0000]">acquisition</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Carte 1 */}
              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Ciblage Chirurgical
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Création de bases de données ultra-qualifiées basées sur votre
                  ICP (Ideal Customer Profile) pour ne viser que les décideurs
                  pertinents.
                </p>
              </div>

              {/* Carte 2 */}
              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Approche Multicanale
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Séquences de prospection combinant Cold Call, Cold Email et
                  LinkedIn pour maximiser les taux de conversion et
                  d'engagement.
                </p>
              </div>

              {/* Carte 3 */}
              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Rendez-vous Qualifiés
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Nous ne vous livrons pas de simples leads froids, mais des
                  rendez-vous chauds et qualifiés, directement placés dans
                  l'agenda de vos closers.
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
