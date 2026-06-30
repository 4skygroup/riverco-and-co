import Hero from '../components/services/Hero';
import ServiceCard from '../components/services/ServiceCard';
import Cta from '../components/services/Cta';
import { SERVICES_ITEMS } from '../utils/constants';

export default function Services() {
    return (
        <div className="w-full bg-black text-white min-h-screen pt-12 pb-24">
            <Hero />

            <section className="w-full px-6 md:px-16 py-12 flex flex-col gap-12 max-w-7xl mx-auto">
                {SERVICES_ITEMS.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </section>

            <Cta />
        </div>
    );
}