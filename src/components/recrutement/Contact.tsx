export default function Contact() {
    return (
        <section className="w-full px-6 md:px-16 py-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-4">
                <h2 className="text-2xl font-bold tracking-tight">
                    Nous <span className="text-[#FF0000]">contacter</span>
                </h2>
                <a
                    href="mailto:ricoverpostuler@gmail.com"
                    className="text-white hover:text-[#FF0000] transition-colors underline underline-offset-4"
                >
                    ricoverpostuler@gmail.com
                </a>
            </div>
        </section>
    );
}