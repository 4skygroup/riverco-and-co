import Hero from '../components/recrutement/Hero';
import Offres from '../components/recrutement/Offres';
import Contact from '../components/recrutement/Contact';

export default function Recrutement() {
    return (
        <div className="w-full bg-black text-white flex flex-col pt-12 pb-24">
            <Hero />
            <Offres />
            <Contact />
        </div>
    );
}