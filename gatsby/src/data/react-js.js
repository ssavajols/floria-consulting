import React from 'react'
import { Link } from 'gatsby'
import image from '../assets/images/1_okufk5mMDbTfqA5iS_rldQ.png'

export const IMAGE = image
export const STYLE = 'style1'
export const NAME = 'React.JS'
export const SHORT_DESC = 'Le framework le plus populaire du web'
export const LONG_DESC = 'Le framework le plus populaire du web'
export const META_TITLE = 'Floria-consulting - Formation React.JS'
export const META_DESCRIPTION = 'Formation floria consulting React.JS'

export const Information = () => (
  <React.Fragment>
    <p>
      La formation React.JS conviendra aux novices comme aux expérimenté du
      développement web qui veulent découvrir React.JS et monter en compétence
      sur le développement front-end.
    </p>
    <ul>
      <li>
        <u>Durée :</u> <b>3 jours</b>
      </li>
      <li>
        <u>Tarifs inter-entreprises :</u> à partir de <b>1100€</b> (HT) par
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
        <b>1500€</b> HT par stagiaire
      </React.Fragment>
    ),
  },
  {
    label: '3 à 5 stagiaires',
    description: (
      <React.Fragment>
        <b>1300€</b> HT par stagiaire
      </React.Fragment>
    ),
  },
  {
    label: 'Plus de 6 stagiaires',
    description: (
      <React.Fragment>
        <b>1100€</b> HT par stagiaire
      </React.Fragment>
    ),
  },
  {
    label: 'Indépendants',
    description: (
      <React.Fragment>
        <b>800€</b> HT par stagiaire
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
    <h3>Les composants RIA</h3>
    <ul>
      <li>Rappel des bases HTML, CSS, JS.</li>
      <li>Le DOM et ses interactions</li>
      <li>
        L’éco-système des frameworks javascript, les limites des applications
        front-end.
      </li>
      <li>Le data-binding : virtual-dom, dirty-checking, observable objects</li>
      <li>Le principe de react JS dans l’univers des frameworks JAVASCRIPT.</li>
      <li>Les transpileurs. Le format JSX.</li>
      <li>
        Intégration dans les outils de développements, IDE webstorm, visual code
        studio, atom.
      </li>
      <li>Mise en place de l’environnement de travail et travaux pratiques.</li>
      <li>
        (Initiation a JSX, mise en place d’une architecture de projet pour les
        TP de la formation)
      </li>
    </ul>

    <h3>Le développement avec React.JS</h3>
    <ul>
      <li>Pattern MVC et Virtual Dom.</li>
      <li>Prise en main du JSX. Pièges à éviter.</li>
      <li>Méthodes principales de l’API.</li>
      <li>Création de composant de vues. Cycle de vie.</li>
      <li>La fonction de rendu.</li>
      <li>Le State et les props. Gestion des états.</li>
    </ul>

    <h3>Des composants intéractifs</h3>
    <ul>
      <li>Gestionnaire d’évènement react.js.</li>
      <li>Une stratégie pour les états de composants</li>
      <li>Composition de composant.</li>
      <li>Le component Data Flow.</li>
      <li>Les composants réutilisables. Les enfants et propriétés.</li>
      <li>La gestion des formulaires.</li>
      <li>Manipulation du DOM.</li>
    </ul>

    <h3>Single page app avec reactJS et Flux</h3>
    <ul>
      <li>Présentation du framework Flux.</li>
      <li>La gestion du MVC.</li>
      <li>Les dispatcher.</li>
      <li>Les stores.</li>
      <li>Extension react.js. Animation et data-binding.</li>
    </ul>

    <h3>Travailler avec des applications isomorphiques</h3>
    <ul>
      <li>Le concept d’application isomorphique.</li>
      <li>L’écosystème serveur.</li>
      <li>Initiation à NodeJS.</li>
      <li>Configurer node.js pour react.js.</li>
      <li>Utilisation des routes.</li>
    </ul>

    <h3>Un premier pas avec React Native</h3>
    <ul>
      <li>Les principes de fonctionnement des composants natifs.</li>
      <li>Présentation des composants et gestion multi-device.</li>
      <li>
        Où se situe react native par rapport aux autres outils d’applications
        hybride. Cordova, Phonegap, CocoonJS.
      </li>
    </ul>
  </React.Fragment>
)
