import React from 'react'
import { Link } from 'gatsby'
import image from '../assets/images/logo-2582748_1280.png'

export const IMAGE = image
export const STYLE = 'style3'
export const NAME = 'HTML5 / CSS'
export const SHORT_DESC = 'Les bases développement sur le web'
export const LONG_DESC = 'Les bases développement sur le web'
export const META_TITLE = 'Floria-consulting - Formation HTML5 / CSS'
export const META_DESCRIPTION = 'Formation floria consulting HTML5 / CSS'

export const Information = () => (
  <React.Fragment>
    <p>
      La formation HTML 5 conviendra à tous les débutants dans le domaine du
      développement web. Vous apprendrez les fondamentaux de la création de page
      web multimédia.
    </p>
    <ul>
      <li>
        <u>Durée :</u> <b>3 jours</b>
      </li>
      <li>
        <u>Tarifs inter-entreprises :</u> à partir de <b>900€</b> (HT) par
        stagiaire
      </li>
    </ul>

    <p>Cette formation est disponible partout en france.</p>
  </React.Fragment>
)

export const tarifs = [
  {
    label: '1 à 2 stagiaires',
    description: (
      <React.Fragment>
        <b>1200€</b> HT par stagiaire
      </React.Fragment>
    ),
  },
  {
    label: '3 à 5 stagiaires',
    description: (
      <React.Fragment>
        <b>1000€</b> HT par stagiaire
      </React.Fragment>
    ),
  },
  {
    label: 'Plus de 6 stagiaires',
    description: (
      <React.Fragment>
        <b>900€</b> HT par stagiaire
      </React.Fragment>
    ),
  },
  {
    label: 'Indépendants',
    description: (
      <React.Fragment>
        <b>600€</b> HT par stagiaire
      </React.Fragment>
    ),
  },
  {
    label: 'Intra-entreprise',
    description: <Link to="#contact">Demander une convention</Link>,
  },
]

export const Programme = () => (
  <React.Fragment>
    <ul>
      <h3>INTRODUCTION À HTML 5 ET CSS3</h3>

      <li>Contexte : fonctionnement d’un site internet</li>
      <li>Histoire du HTML</li>
      <li>Organismes de normalisation : WHATWG et W3C</li>
      <li>La nouvelle vision HTML 5</li>
      <li>Roadmap HTML 5</li>

      <h3>UTILISER LE HTML 5 AUJOURD'HUI</h3>
      <li>Savoir quand choisir le HTML 5</li>
      <li>Utiliser le HTML 5 avec des navigateurs qui ne le supportent pas</li>
    </ul>
    <ul>
      <h3>BALISAGE HTML 5</h3>
      <li>
        Structure d'une page : disparition des notions "en ligne" et "bloc"
      </li>
      <li>Doctype, NameSpace, Encoding</li>
      <li>
        Les nouveaux éléments : section, article, aside, nav, ... pour en-têtes
        , pied de pages, etc.
      </li>
      <li>
        Les indispensables balises telles que menu, command, details, summary
      </li>
      <li>Elements sémantiques</li>
      <li>Les micro data</li>
      <li>Dates et temps</li>
      <li>Les éléments obsolètes : center, font, frame, acronym, ...</li>
    </ul>
    <ul>
      <h3>HTML 5 et CSS</h3>
      <li>Compatibilité entre navigateurs</li>
      <li>Optimisation des balises pour les moteurs de recherche (SEO)</li>
    </ul>
    <ul>
      <h3>LES FORMULAIRES HTML 5</h3>
      <li>Balise form</li>
      <li>Créer et utiliser des formulaires HTML 5</li>
      <li>Gestion des dates, des emails, ..</li>
      <li>Les validations de formulaire en HTML5</li>
      <li>Auto focus</li>
    </ul>
    <ul>
      <h3>AUDIO ET VIDEO EN HTML 5</h3>
      <li>Les éléments audio et video</li>
      <li>Les conteneurs</li>
      <li>Contrôler la vidéo, l'audio avec l'API HTML5</li>
      <li>
        Support et formats (codecs WebM, MP4, H.264, Ogg Theora, MP3, AAC,
        Vorbis)
      </li>
      <li>Gérer plusieurs sources vidéos/audios</li>
      <li>Streaming</li>
      <li>Ajouter des sous-titres à une vidéo HTML5</li>
    </ul>
    <ul>
      <h3>VUE D'ENSEMBLE DES APIS POUR HTML 5</h3>
      <li>Les APIs HTML 5</li>
      <li>Gestion des fichiers</li>
      <li>Audio et Vidéo</li>
      <li>Site web hors ligne</li>
      <li>Drag & Drop</li>
      <li>Extension de HTMLDocument</li>
      <li>Extension de HTML Element</li>
      <li>Historiques de pages</li>
    </ul>
    <ul>
      <h3>DESSINER EN HTML 5</h3>
      <li>Dessiner en JavaScript</li>
      <li>Canvas vs SVG</li>
      <li>Contexte</li>
      <li>Accessibilité</li>
      <li>Quid des designers actuels ?</li>
    </ul>
    <ul>
      <h3>LA COMMUNICATION EN HTML 5</h3>
      <li>Les événements</li>
      <li>Envoi de messages entre documents</li>
      <li>Envoi de messages par canaux</li>
      <li>Le push serveur</li>
    </ul>
    <ul>
      <h3>Web Sockets</h3>
      <li>Présentation de node.js</li>
      <li>Les Web Workers pour le multi-tâches</li>
    </ul>
    <ul>
      <h3>LA GÉO-LOCALISATION AVEC HTML 5</h3>
      <li>Vue d'ensemble</li>
      <li>La vie privée de l'utilisateur</li>
      <li>Géolocaliser ses utilisateurs sur Google Maps</li>
    </ul>
    <ul>
      <h3>STOCKAGE AVEC HTML 5</h3>
      <li>Stockage local</li>
      <li>Stockage en session</li>
      <li>Bases de données SQL Web</li>
    </ul>
    <ul>
      <h3>CSS3 : STANDARDISER DES PROPRIÉTÉS</h3>
      <li>Vue d'ensemble : se passer d'images, éviter les astuces</li>
      <li>Coins arrondis</li>
      <li>Ombres portés</li>
      <li>Transparence</li>
      <li>Mise en page et positionnement</li>
      <li>Autres nouveautés</li>
    </ul>
    <ul>
      <h3>CSS3 : MISE EN PAGE ET POSITIONNEMENT</h3>
      <li>
        Vue d'ensemble : clarifier le code, éviter la multiplication de
        imbriquées
      </li>
      <li>Niveau de présentation</li>
      <li>Mise en page par patron</li>
      <li>Mise en page multi-colonnes</li>
      <li>Mise en page par boite horizontales ou verticales</li>
      <li>Positionnement par grille</li>
      <li>Autres nouveautés</li>
    </ul>
    <ul>
      <h3>CSS3 : ANIMATION</h3>
      <li>Transformations (2D et 3D)</li>
      <li>Transitions</li>
    </ul>
  </React.Fragment>
)
