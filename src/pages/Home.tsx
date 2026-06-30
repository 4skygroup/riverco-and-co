import Approche from '../components/home/Approche';
import Faq from '../components/home/FAQ';
import Hero from '../components/home/Hero';
import Piliers from '../components/home/Piliers';

export default function Home() {
  return (
    <div className="w-full bg-black">
      {/* Hero Section */}
      <Hero />
      <Piliers/>
      <Approche/>
      <Faq/>
      
      {/* C'est ici qu'on ajoutera les sections suivantes du sprint (Piliers, Approche, FAQ...) */}
    </div>
  );
}