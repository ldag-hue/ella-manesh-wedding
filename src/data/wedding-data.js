export const weddingData = {
  couple: {
    bride: "Ella",
    groom: "Manesh"
  },
  
  families: "Desouza, Dagbovie et Lalwani",
  
  date: {
    full: "15 AOÛT 2026",
    iso: "2026-08-15",
    day: "15",
    month: "Août",
    year: "2026",
    weekday: "Samedi"
  },
  
  ceremony: {
    time: "15h00",
    location: "Église Brother Home",
    address: "Lomé, Togo",
    mapsUrl: "https://maps.google.com/?q=Brother+Home+Lomé+Togo"
  },
  
  reception: {
    time: "17h30",
    location: "Hôtel Sarakawa",
    venue: "Jardins & Salle Aledjo",
    address: "Lomé, Togo",
    mapsUrl: "https://maps.google.com/?q=Hôtel+Sarakawa+Lomé+Togo"
  },
  
  dressCode: {
    title: "Dress Code",
    description: "Tenue de cérémonie élégante. Palette recommandée : tons pastel, beige, crème, or.",
    note: "La cérémonie se déroulera en partie en extérieur, prévoyez des chaussures adaptées aux espaces verts."
  },
  
  transport: {
    title: "Transports",
    description: "Un service de navette sera disponible entre Église Brother Home et l'Hôtel Sarakawa.",
    details: "Parking gratuit sur place à l'hôtel."
  },
  
  accommodation: {
    title: "Hébergements",
    description: "Des chambres ont été pré-réservées à l'Hôtel Sarakawa pour nos invités.",
    code: "Code de réservation : MARIAGEELLA2026",
    note: "Merci de contacter l'hôtel directement avant le 15 juillet 2026."
  },
  
  noChildrenNote: "NB : Afin de préserver l'intimité et le recueillement de la cérémonie, celle-ci se tiendra sans enfants. Nous vous remercions de votre compréhension.",
  
  contributions: {
    title: "Contributions",
    text: "Le plus beau présent que vous puissiez nous offrir est de nous entourer de vos prières. Pour ceux qui souhaiteraient contribuer à nos futurs projets, un espace est accessible via ce QR code.",
    paymentMethods: ["T-Money", "Flooz", "PayPal"],
    qrPlaceholder: true
  },
  
  rsvp: {
    title: "RSVP",
    subtitle: "Réponse souhaitée avant le 15 juillet 2026",
    fields: {
      name: {
        label: "Nom complet",
        placeholder: "Prénom et Nom"
      },
      attendance: {
        label: "Serez-vous présent ?",
        options: {
          yes: "Oui, avec plaisir !",
          no: "Non, je regrette"
        }
      },
      guestCount: {
        label: "Nombre d'invités",
        placeholder: "1"
      },
      allergies: {
        label: "Allergies ou régimes spéciaux",
        placeholder: "Précisez si nécessaire..."
      }
    },
    submitButton: "Envoyer ma réponse",
    successMessage: "Merci, votre réponse a bien été prise en compte !"
  },
  
  calendar: {
    title: "Ajouter à mon Agenda",
    eventTitle: "Mariage Ella & Manesh",
    startTime: "2026-08-15T15:00:00",
    endTime: "2026-08-15T23:00:00",
    location: "Église Brother Home, Lomé, Togo",
    description: "Cérémonie religieuse à 15h, réception à 17h30 à l'Hôtel Sarakawa - Jardins & Salle Aledjo"
  },
  
  timeline: [
    {
      time: "15h00",
      title: "Cérémonie Religieuse",
      location: "Église Brother Home",
      description: "Échange des vœux et cérémonie religieuse",
      icon: "rings"
    },
    {
      time: "16h30",
      title: "Cocktail",
      location: "Église Brother Home",
      description: "Vin d'honneur et photos",
      icon: "champagne"
    },
    {
      time: "17h30",
      title: "Festivités & Réception",
      location: "Hôtel Sarakawa",
      description: "Jardins & Salle Aledjo",
      icon: "party"
    },
    {
      time: "20h00",
      title: "Dîner",
      location: "Salle Aledjo",
      description: "Repas de noces",
      icon: "dinner"
    },
    {
      time: "22h00",
      title: "Soirée Dansante",
      location: "Jardins",
      description: "Ouverture du bal et festivités",
      icon: "dance"
    }
  ]
};

export default weddingData;
