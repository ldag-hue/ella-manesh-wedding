# Brief Complet - SPA Mariage Ella & Manesh

## Écrans à développer (7 écrans scrollable vertical)

### Écran 1 : L'Ouverture (L'Enveloppe)
- Fond : Vert eucalyptus doux
- Visuel : Enveloppe avec sceau de cire rose poudré et or
- Animation : Au clic/scroll, ouverture avec transition fondue vers Écran 2

### Écran 2 : Le "Hero" (Couverture & Annonce)
- Photo romantique couple en background (placeholder)
- Filtre lumineux doux, cadre doré, motifs floraux roses
- Texte : "Les Familles Desouza, Dagbovie et Lalwani..." (petites majuscules)
- "Ella & Manesh" en très grand (script rose/or)
- Date : "15 AOÛT 2026"
- Compte à rebours dynamique (J/H/M/S)

### Écran 3 : Le Lieu ("The Venue" & Carte)
- Alliances entrelacées en haut
- Photo stylisée du lieu
- "Brother Home" (Cérémonie 15h) + "Hôtel Sarakawa - Jardins & Salle Aledjo" (Festivités 17h30)
- Bouton CTA : "Ouvrir dans Google Maps"

### Écran 4 : Le Programme ("The Day" - Timeline)
- Timeline verticale avec ligne dorée et icônes
- 15h00 - Cérémonie Religieuse (Brother Home)
- 17h30 - Festivités & Réception (Hôtel Sarakawa)
- Animation slide-in au scroll

### Écran 5 : Informations Pratiques ("All the details")
- Fond crème texturé, feuilles pampa transparence
- 3 sections : Dress Code, Transports, Hébergements
- Note obligatoire : "NB : Afin de préserver l'intimité et le recueillement de la cérémonie, celle-ci se tiendra sans enfants. Nous vous remercions de votre compréhension."

### Écran 6 : Contributions
- Titre : "Contributions"
- Texte exact : "Le plus beau présent que vous puissiez nous offrir est de nous entourer de vos prières. Pour ceux qui souhaiteraient contribuer à nos futurs projets, un espace est accessible via ce QR code."
- Placeholder QR Code au centre
- Logos/Mentions : "T-Money | Flooz | PayPal"

### Écran 7 : RSVP & Clôture
- "RSVP" en typographie Serif grande transparence derrière arche florale
- Formulaire React (state local) :
  * Nom complet (input)
  * Présence Oui/Non (toggle/select)
  * Nombre d'invités (number)
  * Allergies (textarea)
  * Bouton soumission élégant
- Post-submit : Message animé "Merci, votre réponse a bien été prise en compte !"
- Footer : Bouton "Ajouter à mon Agenda" (génération .ics ou lien calendrier)

---

## Direction Artistique

### Palette
- Fond : #FAF9F6 (crème)
- Texte : #4A4A4A (anthracite)
- Titres/cadres : #9A7B4F (or bruni)
- Accents : #EBC7C7 (rose poudré)
- Écran 1 : #7A9E7E (eucalyptus)

### Typographie
- Titres/Prénoms : Alex Brush ou Great Vibes (script)
- Corps : Inter ou Cormorant Garamond
- Majuscules : Cinzel (tracking large)

### Animations
- Framer Motion obligatoire
- Transitions smooth, staggered reveals
- Parallax sur éléments décoratifs
- Mobile-first, format vertical Story-like
