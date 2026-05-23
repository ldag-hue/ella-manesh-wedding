# Spécifications Design - Projet Ela (Invitation de Mariage)

## 1. Direction Artistique
**Style :** Fine Art / Bohème Chic.
**Ambiance :** Élégante, minimaliste, organique, évoquant le papier fait-main et l'artisanat de luxe.

---

## 2. Palette de Couleurs (Tailwind v4)

| Nom | Hex | Usage |
| :--- | :--- | :--- |
| `cream` | `#FAF9F6` | Fond principal (aspect papier coton) |
| `anthracite`| `#4A4A4A` | Texte de lecture, contrastes doux |
| `gold` | `#9A7B4F` | Titres, bordures, sceau de cire (aspect or vieilli) |
| `pink-petal`| `#EBC7C7` | Accents, boutons, surbrillances |
| `eucalyptus`| `#738678` | Écran d'ouverture (enveloppe), éléments végétaux |

```css
/* Configuration app.css suggérée */
@theme {
  --color-cream: #FAF9F6;
  --color-anthracite: #4A4A4A;
  --color-gold: #9A7B4F;
  --color-pink-petal: #EBC7C7;
  --color-eucalyptus: #738678;
  
  --font-title: "Alex Brush", cursive; /* Calligraphie */
  --font-body: "Inter", sans-serif;    /* Lisibilité moderne */
  --font-serif: "Cormorant Garamond", serif; /* Élégance classique */
}
```

---

## 3. Typographie

*   **Titres & Prénoms :** `Alex Brush` (ou `Great Vibes`). 
    *   Usage : `font-title`, tracking-wide.
    *   Sensation : Signature manuscrite à la plume.
*   **Corps de texte :** `Inter` (ou `Cormorant Garamond` pour un look plus littéraire).
    *   Usage : `font-body`, weight 300 ou 400.
    *   Sensation : Propre, aéré.
*   **Hiérarchie :**
    *   H1 : 3rem (48px) sur mobile, 5rem (80px) sur desktop.
    *   H2 : 2rem (32px), or bruni.

---

## 4. Spécifications par Écran (Story-like)

### Écran 1 : L'Enveloppe (Ouverture)
*   **Visuel :** Fond `eucalyptus`. Une enveloppe centrée avec un sceau de cire `gold` portant les initiales.
*   **Animation :** Au clic/tap, le sceau se brise, l'enveloppe s'ouvre avec un effet "flap" (Framer Motion) et disparaît pour révéler l'invitation.

### Écran 2 : Hero & Compte à rebours
*   **Visuel :** Photo des mariés avec overlay doux. Titre "Prénom & Prénom" en `gold`.
*   **Compte à rebours :** Chiffres en `anthracite`, labels en `gold` (Jours, Heures, Min, Sec). Design minimaliste, pas de boîtes, juste du texte aéré.

### Écran 3 : Venue & Map
*   **Visuel :** Carte stylisée (style aquarelle ou noir & blanc épuré). 
*   **Info :** Adresse précise cliquable (lien Google Maps). Bouton "Itinéraire" en `pink-petal`.

### Écran 4 : Timeline
*   **Visuel :** Ligne verticale fine `gold` centrale. 
*   **Éléments :** Icônes minimalistes (Bagues, Verre, Assiette, Note de musique).
*   **Animation :** Les étapes apparaissent au scroll via `staggerChildren`.

### Écran 5 : Infos Pratiques
*   **Contenu :** Dress Code (Pastels, élégant), Transports (navettes), Hébergements.
*   **Note Spéciale :** "Célébration entre adultes" (Sans enfants) avec une typographie délicate pour la courtoisie.

### Écran 6 : La Cagnotte (Contributions)
*   **Visuel :** Section très épurée. Texte expliquant le projet (ex: voyage de noces).
*   **Action :** Bouton "Contribuer" avec animation de pulsation douce.

---

## 5. Assets Graphiques Requis
1.  **Sceau de cire (SVG) :** Texture organique avec initiales imbriquées.
2.  **Aquarelles :** 3-4 "blobs" de peinture rose poudré et or pour le fond (format `.webp` avec transparence).
3.  **Illustrations :** Quelques feuilles d'eucalyptus et pampas dessinées au trait fin.
4.  **Cadre :** Bordure fine double (une `gold`, une `cream` sombre) pour certaines sections.

---

## 6. Classes Tailwind Réutilisables
*   `.btn-gold` : `bg-gold text-white px-6 py-2 rounded-full hover:bg-gold-dark transition-all`
*   `.card-fine-art` : `bg-white/50 backdrop-blur-sm border border-gold/20 shadow-sm p-8`
*   `.section-title` : `font-title text-4xl text-gold mb-6 text-center`
