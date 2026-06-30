export const NAV_LINKS = [
  { name: "Accueil", path: "/" },
  {
    name: "Services",
    path: "/services",
    subLinks: [
      { name: "Méthodologie", path: "/methodologie" },
      { name: "Externalisation", path: "/externalisation" },
    ],
  },
  { name: "Outils", path: "/outils" },
  { name: "Contact", path: "/contact" },
];

// --- Page Home
export const PILIERS_DATA = [
  {
    id: 1,
    title: "Externalisation clé en main",
    description:
      "Une force commerciale internationale immédiatement opérationnelle, sans les coûts et risques de l'implantation directe.",
  },
  {
    id: 2,
    title: "Prospection B2B intensive",
    description:
      "Nos équipes effectuent quotidiennement des campagnes de prospection à froid multicanales pour décrocher des rendez-vous hautement qualifiés.",
  },
  {
    id: 3,
    title: "Synergie de réseau",
    description:
      "En tant que représentant des filiales Play To Sky, nous capitalisons sur un écosystème solide pour vous apporter un flux constant de nouveaux clients.",
  },
  {
    id: 4,
    title: "Conversion et acquisition",
    description:
      "Nous ne faisons pas que prospecter, nous transformons vos leads en partenariats concrets grâce à des démarches commerciales sur-mesure.",
  },
];

export const APPROCHE_DATA = [
  {
    image: "images/call-riverco-and-co.webp",
    id: 1,
    title: "Une approche pédagogique centrée sur la performance",
    description:
      "Les contenus sont pensés pour être activables dès la formation, avec un impact à long terme sur les équipes.",
  },
  {
    image: "images/call-riverco-and-co.webp",
    id: 2,
    title: "Des intervenants spécialisés et expérimentés",
    description:
      "Animée par les fondateurs, forts de leur expérience, qui interviennent directement dans la formation.",
  },
  {
    image: "images/call-riverco-and-co.webp",
    id: 3,
    title: "Un programme élaboré par une agence de référence",
    description:
      "Nous générons des opportunités commerciales à froid pour nos clients et formons vos équipes à partir de notre expérience concrète.",
  },
  {
    image: "images/call-riverco-and-co.webp",
    id: 4,
    title: "Des approches validées par l'expérience sur le terrain",
    description:
      "Nos enseignements s'appuient exclusivement sur notre expérience opérationnelle et sur des méthodes réellement efficaces en contexte commercial.",
  },
];

export const FAQ_DATA = [
  {
    id: 1,
    question: "Vous êtes une nouvelle agence — comment vous faire confiance ?",
    answer:
      "Bien que Riverco & Co soit une structure récente, nous nous appuyons sur l'expertise consolidée du groupe Play To Sky et sur des fondateurs ayant fait leurs preuves dans le développement commercial B2B. Nos méthodes sont testées et validées sur le terrain.",
  },
  {
    id: 2,
    question: "Vous travaillez avec quel type de budget ?",
    answer:
      "Nous proposons des solutions sur-mesure. Notre modèle tarifaire est hybride, combinant un socle fixe pour la mise en place opérationnelle de la force de vente et une part variable indexée sur les performances et les rendez-vous qualifiés générés.",
  },
  {
    id: 3,
    question: "Combien de temps prend un projet typique ?",
    answer:
      "Le déploiement initial (immersion, création des scripts, formation) prend généralement 2 semaines. Les premières campagnes débutent dans la foulée, avec de premiers résultats tangibles dès le premier mois.",
  },
  {
    id: 4,
    question: "Vous êtes basés où ? Vous travaillez en dehors de Paris ?",
    answer:
      "Bien que nous soyons implantés avec des hubs à Paris, London et New York, notre force de frappe est mondiale. Nous accompagnons nos clients à l'international, partout où leurs enjeux de croissance se trouvent.",
  },
  {
    id: 5,
    question: "Que se passe-t-il si le résultat ne me convient pas ?",
    answer:
      "Nous fonctionnons dans une logique de partenariat et de transparence. Si les KPI définis ensemble ne sont pas atteints, nous ajustons nos approches (scripts, ciblages) sans frais supplémentaires. Notre part variable garantit notre alignement total avec vos intérêts.",
  },
];

// --- Page Externalisation

export const COMPARISON_INTERNE = [
  "6 à 12 mois de recrutement",
  "Coûts fixes élevés (salaires, charges, bureaux)",
  "Formation longue et incertaine",
  "Risque d'implantation internationale",
  "Visibilité limitée sur la performance",
];

export const COMPARISON_RIVERCO = [
  "Opérationnel en moins de 4 semaines",
  "100% coûts variables, zéro structure",
  "Équipe formée à votre ADN dès J+1",
  "3 hubs actifs Paris, Londres, New York",
  "Dashboard partagé en temps réel",
];

export const EXTERNALISATION_AVANTAGES = [
  {
    title: "Recrutement & RH",
    description:
      "Nous gérons la sélection, la formation et le management opérationnel de votre équipe commerciale.",
  },
  {
    title: "Implantation locale",
    description:
      "Nos hubs existants vous donnent une présence immédiate sur les marchés clés, sans entité juridique locale.",
  },
  {
    title: "Pilotage & reporting",
    description:
      "Un accès temps réel à vos KPIs commerciaux. Vous gardez la vision, nous gérons l'exécution.",
  },
  {
    title: "Stack technologique",
    description:
      "CRM, outils de prospection, automation — entièrement configurés et maintenus par nos équipes.",
  },
  {
    title: "Stratégie & ajustements",
    description:
      "Nous optimisons le discours, le ciblage et la stratégie en continu selon les résultats terrain.",
  },
  {
    title: "Conformité internationale",
    description:
      "Nos équipes connaissent les codes culturels et réglementaires de chaque marché visé.",
  },
];

// --- Page Méthodologie

export const METHODOLOGIE_PARCOURS = [
  {
    step: "1",
    title: "Audit stratégique & cadrage",
    description:
      "Analyse approfondie de votre marché, positionnement, cibles et avantages concurrentiels. Définition ensemble des objectifs mesurables et des marchés prioritaires.",
    tags: ["Workshops", "Analyse Concurrentielle", "Définition Des ICP"],
  },
  {
    step: "2",
    title: "Immersion & formation intensive",
    description:
      "Nos commerciaux suivent un cursus d'immersion total dans votre culture, produits, valeurs et discours commercial. Formation continue pour une représentation d'élite.",
    tags: [
      "Formation Produit",
      "Culture D'entreprise",
      "Pitch Commercial",
      "Objections",
    ],
  },
  {
    step: "3",
    title: "Déploiement & activation terrain",
    description:
      "Mise en place de la stack technologique, configuration CRM, lancement des premières campagnes de prospection multicanale ciblées.",
    tags: ["Configuration CRM", "Séquences Email", "Prospection Téléphonique"],
  },
  {
    step: "4",
    title: "Pilotage continu & optimisation",
    description:
      "Reporting hebdomadaire partagé, ajustements stratégiques data-driven, montée en puissance progressive. Votre performance s'améliore semaine après semaine.",
    tags: ["Dashboard Live", "Reporting Hebdo", "A/B Testing Pitch"],
  },
];

export const METHODOLOGIE_PHILOSOPHIE = [
  {
    tag: "Immersion",
    title: "Former comme un interne",
    description:
      "Nos commerciaux ne sont pas de simples exécutants. Ils connaissent votre offre, votre histoire, vos valeurs et vos clients aussi bien que vous. Cette profondeur garantit une représentation d'élite.",
  },
  {
    tag: "Continuité",
    title: "Formation continue",
    description:
      "À chaque évolution produit, à chaque nouveau marché, à chaque feedback terrain — nos équipes se reforment pour maintenir un niveau d'excellence constant sur la durée.",
  },
];

// --- Page Outil

export const OUTILS_ECOSYSTEME = [
  {
    title: "CRM & gestion du pipeline",
    badge: "Intégré",
    description:
      "Connexion directe à votre CRM existant (Salesforce, HubSpot, Pipedrive...). Chaque appel, chaque échange, chaque relance est tracé en temps réel dans votre outil.",
    features: [
      "Synchronisation bidirectionnelle automatique",
      "Qualification des leads en temps réel",
      "Historique complet de chaque interaction",
    ],
  },
  {
    title: "Prospection multicanale",
    badge: "Intégré",
    description:
      "Orchestration de séquences de prospection mêlant cold calling, cold emailing et social selling pour engager vos prospects là où ils sont le plus réceptifs.",
    features: [
      "Séquences email personnalisées et automatisées",
      "Automatisation des points de contact LinkedIn",
      "Tracking d'ouverture, de clics et de réponses",
    ],
  },
  {
    title: "Data B2B & Enrichissement",
    description:
      "Accès aux bases de données les plus fiables du marché pour identifier vos ICP (Ideal Customer Profile) et obtenir des coordonnées directes et vérifiées.",
    features: [
      "Scraping ciblé, légal et 100% RGPD compliant",
      "Enrichissement des données en temps réel",
      "Vérification des adresses emails et numéros",
    ],
  },
  {
    title: "Reporting & Analytics",
    description:
      "Tableaux de bord personnalisés pour suivre les KPIs de vos campagnes. Vous gardez un œil sur le volume d'appels, les taux de conversion et le pipeline généré.",
    features: [
      "Dashboard Live accessible 24/7",
      "Suivi des KPIs (taux de conversion, RDV pris)",
      "Enregistrement et analyse qualitative des appels",
    ],
  },
];

export const OUTILS_COMPATIBLES = [
  "SALESFORCE",
  "HUBSPOT",
  "PIPEDRIVE",
  "LINKEDIN",
];

// --- Page Localisation

export const LOCALISATION_HUBS = [
  {
    bgCity: "paris",
    bgRegion: "EUROPE",
    title: "Paris",
    subtitle: "Hub Europe — Siège",
    description:
      "Siège opérationnel et stratégique. Coordination globale, co-construction des stratégies clients et pilotage des équipes européennes depuis la capitale.",
  },
  {
    bgCity: "London",
    bgRegion: "UK & NORTH",
    title: "London",
    subtitle: "Hub UK & Europe du Nord",
    description:
      "Au cœur du premier centre financier européen, notre hub londonien opère sur les marchés anglophones, nordiques et d'Europe du Nord.",
  },
  {
    bgCity: "new york",
    bgRegion: "AMERICAS",
    title: "New York", // Corrigé depuis la maquette ;)
    subtitle: "Hub Amériques",
    description:
      "Une implantation au cœur du marché américain pour conquérir les États-Unis, le Canada et l'Amérique latine avec une équipe locale et des codes culturels maîtrisés.",
  },
];

export const LOCALISATION_SYNERGIE = [
  {
    title: "Maîtrise culturelle locale",
    description:
      "Chaque hub recrute et forme des commerciaux natifs du marché. Ils comprennent les codes, les attentes et les décideurs locaux — une crédibilité impossible à simuler.",
  },
  {
    title: "Coordination centrale",
    description:
      "Malgré leur autonomie locale, tous nos hubs partagent la même méthodologie, les mêmes outils et la même vision stratégique définie avec vous depuis Paris.",
  },
  {
    title: "Couverture horaire mondiale",
    description:
      "Paris, Londres, New York — nos trois fuseaux garantissent une présence commerciale active sur toutes les plages horaires business des marchés clés.",
  },
  {
    title: "Scalabilité immédiate",
    description:
      "Vous souhaitez attaquer un nouveau marché ? Nos hubs existants vous permettent de l'activer en semaines, sans création de structure ni recrutement local.",
  },
];

// --- Page Recrutement

export const OFFRES_EMPLOI = [
  {
    title: "Business Developer B2B",
    status: "Actif",
    subtitle: "Chasse et Ouverture de Comptes Grands Comptes",
    description:
      "Votre mission : Identifier et approcher les décideurs C-Level, initier le premier contact et qualifier les besoins pour les grands comptes.",
  },
  {
    title: "Account Manager (Closer)",
    status: "Actif",
    subtitle: "Scaling et Finalisation des contrats stratégiques",
    description:
      "Votre mission : Prendre le relais sur les comptes qualifiés, mener les négociations complexes et sécuriser la signature des partenariats.",
  },
  {
    title: "Lead Generation Specialist",
    status: "Actif",
    subtitle: "Stratégie d'acquisition et Sourcing Data",
    description:
      "Votre mission : Construire et enrichir des bases de données ultra-ciblées, orchestrer les campagnes multicanales et optimiser le taux de réponse.",
  },
  {
    title: "Sales Operations Manager",
    status: "Actif",
    subtitle: "Optimisation de la stack et Reporting",
    description:
      "Votre mission : Piloter la stack technologique, automatiser les processus CRM et assurer la qualité de la donnée pour maximiser la performance des campagnes.",
  },
];

// --- Page Services

export const SERVICES_ITEMS = [
  {
    title: "Externalisation commerciale clé en main",
    description: "Une force de vente internationale immédiatement opérationnelle. Vos commerciaux dédiés, formés à votre ADN, déployés sur vos marchés cibles en moins de 4 semaines.",
    stats: { appels: "2 300", trend: "+21%" }
  },
  {
    title: "Prospection Inbound & Outbound",
    description: "Multiplication des points de contact stratégiques. Nous combinons cold calling, emailing et LinkedIn automation pour saturer votre pipeline de leads qualifiés.",
    stats: { appels: "1 850", trend: "+15%" }
  },
  {
    title: "Consulting Stratégie Commerciale",
    description: "Audit de vos process actuels et refonte de votre stack sales. Nous structurons votre croissance pour passer à l'échelle (scale) sans friction opérationnelle.",
    stats: { appels: "3 100", trend: "+32%" }
  },
  {
    title: "Recrutement & Formation Sales",
    description: "Vous préférez internaliser ? Nous sourçons, recrutons et formons vos équipes à nos méthodes de vente d'élite. Transmission de savoir-faire garantie.",
    stats: { appels: "2 500", trend: "+18%" }
  }
];