import { Helmet } from "react-helmet-async";

export default function JSONLD() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Riverco & Co",
    url: "https://rivercoandco.com",
    logo: "https://rivercoandco.com/logo-riverco-co.webp", // À adapter avec ton futur logo
    description:
      "Expert en externalisation commerciale et prospection B2B internationale.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-6-51-08-17-38",
      contactType: "customer service",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
