import Hero from '../components/externalisation/Hero';
import Avantages from '../components/externalisation/Avantages';
import Comparaison from '../components/externalisation/Comparaison';
import Cta from '../components/externalisation/Cta';

export default function Externalisation() {
    return (
        <div className="w-full bg-black text-white flex flex-col pt-12 pb-24">
            <Hero />
            <Comparaison />
            <Avantages />
            <Cta />
        </div>
    );
}