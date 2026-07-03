export default function ContactForm() {
  return (
    <div className="bg-[#EBEBEB] p-8 md:p-10 rounded-4xl w-full max-w-lg text-black">
      <h2 className="text-3xl font-bold mb-8">Échanger avec notre équipe</h2>

      <form
        action="https://formspree.io/f/VOTRE_FUTUR_CODE_ICI"
        method="POST"
        className="flex flex-col gap-6"
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
              name="nom"
              type="text"
              required
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
              name="prenom"
              type="text"
              required
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
              name="email"
              type="email"
              required
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
              name="telephone"
              type="tel"
              required
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
            name="entreprise"
            type="text"
            required
            placeholder="Entreprise*"
            className="bg-transparent border-b border-black/30 pb-2 focus:outline-none focus:border-black transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="service"
            className="text-xs font-bold uppercase tracking-wide"
          >
            Par quel service êtes-vous intéressé ? *
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="bg-transparent border-b border-black/30 pb-2 focus:outline-none focus:border-black transition-colors appearance-none"
          >
            <option value="" disabled>
              Choisir votre service...
            </option>
            <option value="Agence de prospection">Agence de prospection</option>
            <option value="Prospection externalisée">
              Prospection externalisée
            </option>
            <option value="Call center B2B">Call center B2B</option>
            <option value="Inbound marketing">Inbound marketing</option>
            <option value="Consulting commercial">Consulting commercial</option>
            <option value="Stratégie commerciale">Stratégie commerciale</option>
            <option value="Autre demande">Autre demande</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="message"
            className="text-xs font-bold uppercase tracking-wide"
          >
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Décrivez votre projet"
            rows={3}
            className="bg-transparent border border-black/30 rounded-lg p-3 focus:outline-none focus:border-black transition-colors"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white py-3 px-8 rounded-full font-bold w-fit mt-4 hover:bg-gray-800 transition-colors"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
