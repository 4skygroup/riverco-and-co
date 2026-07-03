import { Link } from "react-router-dom";
import GlobeMap from "../components/map/GlobeMap";
import SEO from "../components/seo/Seo";

export default function Locations() {
  return (
    <>
      <SEO
        title="Notre Réseau & Présence Globale | Riverco & Co"
        description="Découvrez le réseau mondial d'experts B2B Riverco & Co. Une présence sur 4 continents pour accélérer votre conquête commerciale et votre génération de leads à l'international."
        canonical="https://rivercoandco.com/locations"
      />
      <div className="bg-black">
        <div className="bg-black text-white">
          {/* En-tête avec un léger glow rouge adapté à l'identité Riverco */}
          <section className="flex flex-col items-center justify-center gap-y-8 md:gap-y-12 py-12 md:py-25 px-4 md:px-5 bg-[radial-gradient(circle_at_top_left,rgba(255,0,0,0.12)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,0,0,0.08)_0%,transparent_45%)]">
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
              <h1 className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent text-center font-bold max-w-4xl text-3xl md:text-5xl lg:text-6xl tracking-tight">
                Vos futurs clients sont partout, nos experts aussi.
              </h1>

              <p className="text-gray-400 text-center text-base md:text-lg max-w-3xl">
                Une équipe de Business Developers dédiée pour conquérir de
                nouveaux marchés, générer des leads qualifiés et scaler vos
                ventes à l'international.
              </p>
            </div>

            <hr className="w-full max-w-4xl border-white/10" />

            {/* Statistiques B2B */}
            <div className="grid grid-cols-3 gap-8 md:gap-25 w-fit max-w-4xl justify-items-center">
              <div className="flex flex-col gap-y-1 items-center justify-center">
                <span className="font-bold text-3xl md:text-5xl">+50</span>
                <span className="uppercase text-xs md:text-sm text-gray-400 tracking-wider">
                  Experts
                </span>
              </div>

              <div className="flex flex-col gap-y-1 items-center justify-center">
                <span className="font-bold text-3xl md:text-5xl">+150</span>
                <span className="uppercase text-xs md:text-sm text-gray-400 tracking-wider">
                  Clients
                </span>
              </div>

              <div className="flex flex-col gap-y-1 items-center justify-center">
                <span className="font-bold text-3xl md:text-5xl">4</span>
                <span className="uppercase text-xs md:text-sm text-gray-400 tracking-wider">
                  Continents
                </span>
              </div>
            </div>
          </section>

          {/* Section Globe */}
          <section style={{ padding: "20px", backgroundImage: "#000" }}>
            <GlobeMap />
          </section>

          {/* Call to Action Final */}
          <section className="w-full flex justify-center items-center p-4 md:p-5 mb-10">
            <div className="max-lg:w-full lg:w-[calc(100%-20px)] max-w-7xl bg-white flex flex-col justify-center items-center py-12 md:py-20 px-5 gap-y-6 md:gap-y-8 rounded-[40px]">
              <h2 className="font-bold text-center text-black text-2xl md:text-4xl tracking-tight">
                Prêt à accélérer votre conquête commerciale ?
              </h2>

              <Link
                to="/contact"
                className="group text-sm md:text-base py-4 md:py-5 px-8 md:px-10 bg-black text-white hover:bg-[#FF0000] transition-colors duration-300 w-fit rounded-full flex justify-center items-center gap-3 font-semibold shadow-lg"
              >
                Parler à un expert
                {/* Le SVG est passé en fill="currentColor" pour hériter de la couleur du texte/bouton */}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    d="M1.4 15L0 13.6L11.6 2H5V0H15V10H13V3.4L1.4 15Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
