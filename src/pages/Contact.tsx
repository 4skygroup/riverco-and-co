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

      <main className="min-h-screen bg-black py-20 px-6 md:px-20 flex items-center justify-center">
        
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
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
