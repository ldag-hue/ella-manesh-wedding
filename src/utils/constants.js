export const WEDDING = {
  // Families
  families: ["Dagbovie", "Desouza", "Lalwani", "Vitolio"],
  familyIntro: "Les Familles DAGBOVIE, DESOUZA, LALWANI ET VITOLIO, unies dans la joie, ont l'honneur de célébrer l'union de leur enfant",

  // Couple
  groomName: "Ella",
  brideName: "Manesh",
  groomInitial: "E",
  brideInitial: "M",

  // Date
  date: new Date("2026-08-15T15:00:00"),
  dateDisplay: "15 Août 2026",
  dateUppercase: "15 AOÛT 2026",
  time: "15h00",
  rsvpDeadline: "15 Juin 2026",

  // Venues
  ceremony: {
    role: "Cérémonie",
    name: "Église Brother Home",
    address: "Lomé, Togo",
    mapsUrl: "https://www.google.com/maps/search/Brother+Home+Lome",
  },
  reception: {
    role: "Festivités & Réception",
    name: "Hôtel Sarakawa",
    subtitle: "Jardins & Salle Aledjo",
    address: "Lomé, Togo",
    mapsUrl: "https://www.google.com/maps/search/Hotel+Sarakawa+Lome",
  },

  // Programme (2 events only)
  events: [
    {
      time: "15h00",
      title: "Cérémonie Religieuse",
      location: "Église Brother Home",
      icon: "rings",
    },
    {
      time: "18h00",
      title: "Festivités & Réception",
      location: "Hôtel Sarakawa",
      icon: "music",
    },
  ],

  // Practical info
  details: {
    dressCode: "Tenue de cocktail élégante.",
    transport: "Un service de navettes sera mis à disposition depuis le centre-ville. Parking disponible sur place.",
    accommodation: "L'Hôtel Sarakawa et la Résidence du Lac proposent des tarifs préférentiels pour nos invités.",
    childrenNote:
      "NB : Afin de préserver l'intimité et le recueillement de la cérémonie, celle-ci se tiendra sans enfants. Nous vous remercions de votre compréhension.",
  },

  // Contributions
  contributions: {
    title: "Boîte à Souhaits",
    label: "Souhaits des Mariés",
    text: "Le plus beau des cadeaux que vous puissiez nous offrir est de nous entourer de vos prières et de votre présence en ce jour si spécial.\n\nToutefois, pour ceux qui souhaiteraient nous accompagner dans ce nouveau chapitre, un espace est accessible ci-dessous pour toute attention chaleureuse.",
    envelopeNote: "Une boîte à enveloppes sera également disponible lors de la réception le 15 Août.",
    platforms: [
      { name: "PayPal", contact: "+1 704 949 5565", detail: "dagella90@gmail.com" },
      { name: "T-Money", contact: "+228 90 56 08 87" },
      { name: "Flooz",   contact: "+228 79 29 46 84" },
    ],
  },

  // Contact
  contact: {
    whatsapp: "+17049495565",
  },
  
  // RSVP
  rsvp: {
    title: "RSVP",
    subtitle: "Réponse souhaitée avant le 15 juillet 2026",
    successMessage: "Merci, votre réponse a bien été prise en compte !",
  },
  
  // Calendrier
  calendar: {
    title: "Ajouter à mon Agenda",
    eventTitle: "Mariage Ella & Manesh",
    startTime: "2026-08-15T15:00:00",
    endTime: "2026-08-15T23:00:00",
    location: "Église Brother Home, Lomé, Togo",
    description: "Cérémonie religieuse à 15h, festivités à 18h à l'Hôtel Sarakawa - Jardins & Salle Aledjo",
  },
};

// Timeline events export for compatibility
export const timelineEvents = WEDDING.events;

export default WEDDING;
