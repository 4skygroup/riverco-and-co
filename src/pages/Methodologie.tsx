import Hero from "../components/methodologie/Hero";
import Parcours from "../components/methodologie/Parcours";
import Philosophie from "../components/methodologie/Philosophie";
import Cta from "../components/methodologie/Cta";
import SEO from "../components/seo/Seo";

export default function Methodologie() {
  return (
    <>
      <SEO
        title="Notre Méthodologie de Prospection Commerciale"
        description="Découvrez la méthode Riverco pour une prospection chirurgicale : qualification, approche multicanale et pilotage transparent de vos campagnes."
        canonical="https://rivercoandco.com/methodologie"
      />
      <main className="w-full bg-black text-white flex flex-col pt-12 pb-24">
        <Hero />
        <Parcours />
        <Philosophie />
        <Cta />
      </main>
    </>
  );
}
