export default function ContactForm() {
    return (
      <div className="bg-[#EBEBEB] p-8 md:p-10 rounded-4xl w-full max-w-lg text-black">
        <h2 className="text-3xl font-bold mb-8">Échanger avec notre équipe</h2>

        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="nom"
                className="text-xs font-bold uppercase tracking-wide"
              >
                NOM*
              </label>
              <input
                id="nom"
                type="text"
                placeholder="Votre nom"
                className="bg-transparent border-b border-black/30 pb-2 focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="prenom"
                className="text-xs font-bold uppercase tracking-wide"
              >
                PRÉNOM*
              </label>
              <input
                id="prenom"
                type="text"
                placeholder="Votre prénom"
                className="bg-transparent border-b border-black/30 pb-2 focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-xs font-bold uppercase tracking-wide"
              >
                E-MAIL*
              </label>
              <input
                id="email"
                type="email"
                placeholder="votreemail@gmail.com"
                className="bg-transparent border-b border-black/30 pb-2 focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="tel"
                className="text-xs font-bold uppercase tracking-wide"
              >
                TÉLÉPHONE*
              </label>
              <input
                id="tel"
                type="tel"
                placeholder="Votre Numéro"
                className="bg-transparent border-b border-black/30 pb-2 focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="company"
              className="text-xs font-bold uppercase tracking-wide"
            >
              ENTREPRISE*
            </label>
            <input
              id="company"
              type="text"
              placeholder="Entreprise*"
              className="bg-transparent border-b border-black/30 pb-2 focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase tracking-wide">
              Par quel service êtes-vous intéressé ? *
            </label>
            <select className="bg-transparent border-b border-black/30 pb-2 focus:outline-none focus:border-black transition-colors">
              <option>Choisir votre service...</option>
              <option>Agence de prospection</option>
              <option>Prospection externalisée</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase tracking-wide">
              MESSAGE
            </label>
            <textarea
              placeholder="Décrivez votre projet"
              rows={3}
              className="bg-transparent border border-black/30 rounded-lg p-3 focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <button className="bg-black text-white py-3 px-8 rounded-full font-bold w-fit mt-4 hover:bg-gray-800 transition-colors">
            Envoyer
          </button>
        </form>
      </div>
    );
}