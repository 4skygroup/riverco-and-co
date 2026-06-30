import Hero from "../components/localisation/Hero";
import Hubs from "../components/localisation/Hubs";
import Synergie from "../components/localisation/Synergie";
import Cta from "../components/localisation/Cta";
import SEO from "../components/seo/Seo";

export default function Localisation() {
  return (
    <>
      <SEO
        title="Présence Globale et Hubs Commerciaux"
        description="Riverco & Co : Une vision mondiale. Paris, Londres, New York. Vos centres d'excellence commerciaux à travers le monde."
        canonical="https://rivercoandco.com/localisation"
      />

      <div className="w-full bg-black text-white flex flex-col pt-12 pb-24">
        <Hero />
        <Hubs />
        <Synergie />
        <Cta />
      </div>
    </>
  );
}
