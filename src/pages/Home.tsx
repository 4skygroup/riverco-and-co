import Approche from "../components/home/Approche";
import Faq from "../components/home/Faq";
import Hero from "../components/home/Hero";
import Piliers from "../components/home/Piliers";
import JSONLD from "../components/seo/JSONLD";
import SEO from "../components/seo/Seo";

export default function Home() {
  return (
    <>
      <SEO
        title="Expert en Externalisation Commerciale"
        description="Boostez votre croissance internationale avec Riverco & Co. Expertise en prospection B2B, closing et déploiement CRM."
        canonical="https://rivercoandco.com/"
      />
      <JSONLD/>
      <main className="w-full bg-black">
        <Hero />
        <Piliers />
        <Approche />
        <Faq />
      </main>
    </>
  );
}
