import Hero from '../components/methodologie/Hero';
import Parcours from '../components/methodologie/Parcours';
import Philosophie from '../components/methodologie/Philosophie';
import Cta from '../components/methodologie/Cta';

export default function Methodologie() {
    return (
        <div className="w-full bg-black text-white flex flex-col pt-12 pb-24">
            <Hero />
            <Parcours />
            <Philosophie />
            <Cta />
        </div>
    );
}