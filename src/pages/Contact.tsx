import ContactForm from "../components/contact/ContactForm";
import InfoSection from "../components/contact/ContactInfo";
import SEO from "../components/seo/Seo";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contactez nos Experts Commerciaux"
        description="Un projet d'expansion ou d'externalisation ? Contactez l'équipe Riverco & Co pour une analyse personnalisée de vos besoins commerciaux."
        canonical="https://rivercoandco.com/contact"
      />

      {/* Remplacement de md:px-20 par lg:px-20 pour éviter un écrasement sur tablette */}
      <main className="min-h-screen bg-black py-20 px-6 lg:px-20 flex items-center justify-center">
        {/* Correction du responsive : gap-12 sur mobile, gap-20 sur desktop */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="order-1 lg:order-2">
            <InfoSection />
          </div>

          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
