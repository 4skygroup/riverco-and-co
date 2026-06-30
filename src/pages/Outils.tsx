import Hero from '../components/outils/Hero';
import Ecosysteme from '../components/outils/Ecosysteme';
import Compatibilite from '../components/outils/Compatibilite';
import Cta from '../components/outils/Cta';

export default function Outils() {
    return (
        <div className="w-full bg-black text-white flex flex-col pt-12 pb-24">
            <Hero />
            <Ecosysteme />
            <Compatibilite />
            <Cta />
        </div>
    );
}