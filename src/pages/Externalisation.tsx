import Hero from "../components/externalisation/Hero";
import Avantages from "../components/externalisation/Avantages";
import Comparaison from "../components/externalisation/Comparaison";
import Cta from "../components/externalisation/Cta";
import SEO from "../components/seo/Seo";

export default function Externalisation() {
  return (
    <>
      <SEO
        title="Externalisation Commerciale & Prospection B2B"
        description="Confiez votre prospection à Riverco & Co. Force de vente externalisée, génération de leads qualifiés et développement commercial international."
        canonical="https://rivercoandco.com/externalisation"
      />

      <div className="w-full bg-black text-white flex flex-col pt-12 pb-24">
        <Hero />
        <Comparaison />
        <Avantages />
        <Cta />
      </div>
    </>
  );
}
