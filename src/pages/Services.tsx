import Hero from "../components/services/Hero";
import ServiceCard from "../components/services/ServiceCard";
import Cta from "../components/services/Cta";
import { SERVICES_ITEMS } from "../utils/constants";
import SEO from "../components/seo/Seo";

export default function Services() {
  return (
    <>
      <SEO
        title="Services de Développement Commercial"
        description="De la stratégie à l'exécution terrain, découvrez tous nos services d'externalisation, conseil et recrutement commercial."
        canonical="https://rivercoandco.com/services"
      />

      <div className="w-full bg-black text-white min-h-screen pt-12 pb-24">
        <Hero />

        <section className="w-full px-6 md:px-16 py-12 flex flex-col gap-12 max-w-7xl mx-auto">
          {SERVICES_ITEMS.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </section>

        <Cta />
      </div>
    </>
  );
}
