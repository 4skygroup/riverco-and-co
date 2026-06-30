import Hero from "../components/recrutement/Hero";
import Offres from "../components/recrutement/Offres";
import Contact from "../components/recrutement/Contact";
import SEO from "../components/seo/Seo";

export default function Recrutement() {
  return (
    <>
      <SEO
        title="Recrutement Commerciaux & Scaling"
        description="Rejoignez l'équipe Riverco & Co. Opportunités en Business Development, Closing et Sourcing pour des experts de la vente B2B."
        canonical="https://rivercoandco.com/recrutement"
      />

      <div className="w-full bg-black text-white flex flex-col pt-12 pb-24">
        <Hero />
        <Offres />
        <Contact />
      </div>
    </>
  );
}
