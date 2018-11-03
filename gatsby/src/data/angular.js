import React from 'react'
import { Link } from 'gatsby'
import image from '../assets/images/angular-logo.png'

export const IMAGE = image
export const STYLE = 'style6'
export const NAME = 'Angular'
export const SHORT_DESC = 'Le framework de google'
export const LONG_DESC = 'Le framework de google'
export const META_TITLE = 'Floria-consulting - Formation Angular'
export const META_DESCRIPTION = 'Formation floria consulting Angular'

export const Information = () => (
  <React.Fragment>
    <p>
      Durant cette formation Angular, les participants découvriront le
      fonctionnement de Angular en version 2+ à travers un grand nombre
      d'exercices pratiques et la découverte des nombreux composants qui peuvent
      être intégrés simplement à une application Web.
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
    <h3>VUE D'ENSEMBLE DE ANGULARJS</h3>
    <ul>
      <li>Présentation du framework AngularJS</li>
      <li>Quel intérêt pour Google ? </li>
      <li>AngularJS est-il adapté aux sites et aux applications ?</li>
      <li>AngularJS et le responsive design</li>
      <li>
        AngularJS et les autres frameworks javascript: JQuery, mootools, ExtJS
      </li>
    </ul>

    <h3>PRINCIPES DE BASES D'ANGULARJS</h3>
    <ul>
      <li>Outils et IDE</li>
      <li>Packaging Grunt NPM</li>
      <li>WebPack</li>
      <li>Installation npm</li>
      <li>Installation Angular-cli</li>
      <li>Les expression d'AngularJS</li>
    </ul>

    <h3>DEVELOPPEMENT TYPESCRIPT ET ES6</h3>
    <ul>
      <li>Installation TypeScript</li>
      <li>Transpiler EcmaScript</li>
      <li>let, variables locales et constantes</li>
      <li>Typage et types natifs</li>
      <li>Paramètres optionels, valeurs par défaut</li>
      <li>Classes et Interfaces</li>
      <li>Gestin des modules</li>
      <li>Arrow functions</li>
      <li>Décorateurs</li>
    </ul>

    <h3>TEMPLATES</h3>
    <ul>
      <li>Interpolation / expression</li>
      <li>Binding et interactions</li>
      <li>Variables locales</li>
      <li>Symbole *, directives de structure</li>
      <li>Pipes, filtres</li>
    </ul>

    <h3>LES FORMULAIRES</h3>
    <ul>
      <li>Control et ControlGroup</li>
      <li>Validations</li>
      <li>Gestions d’erreurs</li>
      <li>Gestion des modifications</li>
      <li>Groupes de champs avec FormBuilder</li>
    </ul>

    <h3>COMPOSANTS ET SERVICES</h3>
    <ul>
      <li>Directives : selectors, inputs, outputs, cycle de vie, providers</li>
      <li>Composants : templates, styles, directives, pipes</li>
      <li>Visibilité des composants</li>
      <li>Services, injectable</li>
    </ul>

    <h3>OBSERVABLES ET SERVICES</h3>
    <ul>
      <li>Présentation</li>
      <li>Observable et rxJs</li>
      <li>EventEmitter dans Angular 2</li>
    </ul>

    <h3>ROUTING</h3>
    <ul>
      <li>Concepts de routage</li>
      <li>Router providers et config</li>
      <li>Router directves</li>
      <li>Méthodes de routage et paramètres HTTP</li>
    </ul>

    <h3>HTTP</h3>
    <ul>
      <li>HTTP providers</li>
      <li>Requêtes</li>
      <li>Transformation des données et Observables</li>
      <li>Options de requêtes</li>
      <li>Tests et requêtes HTTP</li>
    </ul>

    <h3>MIGRATION</h3>
    <ul>
      <li>Comparaison et "topographie" des concepts.</li>
      <li>Préparer la migration. Structure d'une application AngularJS 2.</li>
      <li>Les modules AngularJS 2, "core" et principaux modules.</li>
      <li>Principe de l'injection de dépendance.</li>
      <li>Classification des directives : Composant, Attribut, Structure.</li>
      <li>Les décorateurs : définition des hiérarchies.</li>
    </ul>

    <h3>INJECTION ET DEPENDANCE</h3>
    <ul>
      <li>Utiliser les annotations et décorateurs.</li>
      <li>Configuration de l'injecteur.</li>
      <li>Gestion des modules : bonnes pratiques.</li>
      <li>Création de services injectables. Classification des services.</li>
      <li>"BootStrap" d'application.</li>
    </ul>
  </React.Fragment>
)
