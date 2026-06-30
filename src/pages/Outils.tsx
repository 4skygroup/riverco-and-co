import Hero from "../components/outils/Hero";
import Ecosysteme from "../components/outils/Ecosysteme";
import Compatibilite from "../components/outils/Compatibilite";
import Cta from "../components/outils/Cta";
import SEO from "../components/seo/Seo";

export default function Outils() {
  return (
    <>
      <SEO
        title="Stack Technologique & Outils de Prospection"
        description="Une infrastructure technologique au service de votre performance. CRM, automation, et analytics pour une prospection sous contrôle total."
        canonical="https://rivercoandco.com/outils"
      />
      <div className="w-full bg-black text-white flex flex-col pt-12 pb-24">
        <Hero />
        <Ecosysteme />
        <Compatibilite />
        <Cta />
      </div>
    </>
  );
}
