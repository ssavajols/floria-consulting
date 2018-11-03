import React from 'react'
import { Link } from 'gatsby'
import image from '../assets/images/gatsby-browser.jpg'

export const IMAGE = image
export const STYLE = 'style2'
export const NAME = 'Progressive Web App'
export const SHORT_DESC =
  'Les Progressive Web Apps, une révolution pour le web mobile'
export const LONG_DESC =
  'Les Progressive Web Apps, une révolution pour le web mobile'
export const META_TITLE = 'Floria-consulting - Formation Progressive Web App'
export const META_DESCRIPTION =
  'Formation floria consulting Progressive Web App'

export const Information = () => (
  <React.Fragment>
    <p>
      La formation Progressive Web App offre un aperçu complet des méthodes
      modernes de developpement web mobile first.
    </p>
    <ul>
      <li>
        <u>Durée :</u> <b>4 jours</b>
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
    <h3>Rappel des bases du développement web</h3>
    <ul>
      <li>ES6 / ES7</li>
      <li>Rest et spread</li>
      <li>Template strings</li>
      <li>let et const</li>
      <li>Promise</li>
      <li>fetch</li>
      <li>async / await</li>
      <li>Reactive programming avec RxJS</li>
      <li>La transpilation avec babel</li>
      <li>Webpack</li>
      <li>React + redux</li>
      <li>Les tests unitaires avec Jest</li>
      <li>Node et les applications Isomorphiques</li>
    </ul>

    <h3>Ce qu’est une progressive web app ?</h3>
    <ul>
      <li>App vs Sites</li>
      <li>Ce qu’est le web aujourd’hui</li>
      <li>Introduction aux progressive web apps</li>
    </ul>

    <h3>Ajouter le site sur l’écran d’accueil</h3>
    <ul>
      <li>Pourquoi ajouter le site sur l’écran d’accueil ?</li>
      <li>Introduction au Web App Manifest</li>
      <li>Manifest Properties</li>
      <li>Créer un manifest</li>
      <li>Tester le manifest</li>
      <li>Install Banner requirements</li>
      <li>Manifest events</li>
    </ul>

    <h3>Envoyer des push notifications</h3>
    <ul>
      <li>Pourquoi des push notifications ?</li>
      <li>Introduction aux push et aux notifications</li>
      <li>Notifications non-persistentes</li>
      <li>Notifications persistentes</li>
      <li>Web notifications : introduction</li>
      <li>Web notifications : Notification generator</li>
      <li>Web notifications : Notification tags</li>
      <li>Web notifications : Notification events</li>
      <li>Push API : les fondamentaux</li>
      <li>Configuration des push : Introductions</li>
      <li>Configuration des push : Permissions</li>
      <li>Configuration des push : Souscriptions</li>
      <li>Envoyer des messages</li>
    </ul>

    <h3>Synchronisation en background</h3>
    <ul>
      <li>Pourquoi synchroniser en background ?</li>
      <li>Introduction à la synchronisation en background</li>
      <li>One-off Synchronisation : Enregistrement</li>
      <li>One-off Synchronisation : Handle Sync</li>
      <li>Synchronisation périodique</li>
    </ul>

    <h3>Bonnes pratiques progressive web apps</h3>
    <ul>
      <li>Introduction PWA checklist</li>
      <li>Introduction à Lighthouse</li>
    </ul>
  </React.Fragment>
)
