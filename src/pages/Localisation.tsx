import Hero from '../components/localisation/Hero';
import Hubs from '../components/localisation/Hubs';
import Synergie from '../components/localisation/Synergie';
import Cta from '../components/localisation/Cta';

export default function Localisation() {
    return (
        <div className="w-full bg-black text-white flex flex-col pt-12 pb-24">
            <Hero />
            <Hubs />
            <Synergie />
            <Cta />
        </div>
    );
}