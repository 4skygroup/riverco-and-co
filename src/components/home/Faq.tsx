import { useState } from "react";
import { FAQ_DATA } from "../../utils/constants";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        {/* Colonne de gauche : Titres et contexte */}
        <div className="flex flex-col gap-4 sticky top-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#FF0000]">
            FAQ
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-sm mt-4">
            Vous avez des questions sur comment on travaille ? Voici les
            réponses aux questions qu'on nous pose le plus souvent.
          </p>
        </div>

        {/* Colonne de droite : L'accordéon */}
        <div className="flex flex-col w-full border-t border-white/20">
          {FAQ_DATA.map((item, index) => (
            <div key={item.id} className="border-b border-white/20">
              <button
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer focus:outline-none group"
              >
                <span className="text-base md:text-lg font-bold pr-8 group-hover:text-gray-300 transition-colors">
                  {item.question}
                </span>

                {/* Icône + (qui devient un x à l'ouverture) */}
                <div className="shrink-0 bg-white text-black rounded-full p-1 transition-transform duration-300">
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${openIndex === index ? "rotate-45" : "rotate-0"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </button>

              {/* La réponse animée */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 mb-6"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed pr-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
