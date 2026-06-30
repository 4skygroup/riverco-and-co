import ContactForm from '../components/contact/ContactForm';
import InfoSection from '../components/contact/ContactInfo';

export default function Contact() {
    return (
        <div className="min-h-screen bg-black py-20 px-6 md:px-16 flex items-center justify-center">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <ContactForm />
                <InfoSection />
            </div>
        </div>
    );
}