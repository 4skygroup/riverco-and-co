import SEO from "../../components/seo/Seo";
import Cta from "../../components/services/Cta";

export default function CallCenterB2B() {
  return (
    <>
      <SEO
        title="Call Center B2B Premium | Riverco & Co"
        description="Un centre d'appels B2B axé sur la performance. Téléprospection haut de gamme, qualification de fichiers et relance de leads."
        canonical="https://rivercoandco.com/services/call-center-b2b"
      />

      <main className="w-full bg-black text-white min-h-screen pt-12 pb-24">
        <section className="w-full px-6 md:px-16 py-12 md:py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              Call Center B2B{" "}
              <span className="text-[#FF0000]">haute performance</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed">
              Oubliez les centres d'appels de masse low-cost. Nous gérons vos
              campagnes de téléprospection avec un niveau d'élocution et
              d'excellence commerciale digne d'un collaborateur interne.
            </p>
          </div>
        </section>

        <section className="w-full px-6 md:px-16 py-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Nos solutions de{" "}
              <span className="text-[#FF0000]">téléprospection</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Cold Calling Rigoureux
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Des appels à froid structurés avec des scripts fluides,
                  orientés valeur, pour capter instantanément l'intérêt des
                  décideurs.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Qualification de Leads
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Nettoyage et enrichissement de vos bases de données pour
                  s'assurer de la pertinence des coordonnées et des fiches
                  entreprises.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-black hover:border-[#FF0000] hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors">
                  Relance d'Événements
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Maximisez le ROI de vos webinaires ou salons professionnels
                  grâce à des relances téléphoniques ultra-réactives.
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
