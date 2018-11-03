import React from 'react'
import { Link } from 'gatsby'
import image from '../assets/images/symfony2-logo.png'

export const IMAGE = image
export const STYLE = 'style4'
export const NAME = 'Symfony 2 / 3 / 4'
export const SHORT_DESC = 'Le PHP au diapason'
export const LONG_DESC = 'Le PHP au diapason'
export const META_TITLE = 'Floria-consulting - Formation Symfony 2 / 3 / 4'
export const META_DESCRIPTION = 'Formation floria consulting Symfony 2 / 3 / 4'

export const Information = () => (
  <React.Fragment>
    <p>
      Symfony est un framework PHP utilisé pour développer des applications Web
      en PHP en respectant l'architecture MVC (Modèle - Vue - Contrôleur).
      <br />
      <br />
      Durant cette formation vous découvrirez les différentes fonctionnalités du
      framework Symfony 2 comme l'architecture MVC, la gestion des formulaires,
      l'authentification, le moteur de templating Twig, la sécurité, le cache
      HTTP, les tests unitaires, la communication avec une base de données, ...
      <br />
      <br />A la fin de cette formation Symfony 2 vous maîtriserez les
      mécanismes nécessaires à la mise en oeuvre d'une application Web
      professionnelle.
    </p>
    <ul>
      <li>
        <u>Durée :</u> <b>4 jours</b>
      </li>
      <li>
        <u>Tarifs inter-entreprises :</u> à partir de <b>1400€</b> (HT) par
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
        <b>2200€</b> HT par stagiaire
      </React.Fragment>
    ),
  },
  {
    label: '3 à 5 stagiaires',
    description: (
      <React.Fragment>
        <b>1800€</b> HT par stagiaire
      </React.Fragment>
    ),
  },
  {
    label: 'Plus de 6 stagiaires',
    description: (
      <React.Fragment>
        <b>1400€</b> HT par stagiaire
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
    <h3>RAPPEL: PROGRAMMATION ORIENTÉE OBJET</h3>
    <ul>
      <li>Classes, objets, attributs et méthodes</li>
      <li>Constructeurs, destructeurs et méthodes statiques</li>
      <li>L'héritage, l'agrégation et les exceptions</li>
      <li>Visibilité et espaces de nommage</li>
    </ul>

    <h3>INTRODUCTION À SYMFONY 2</h3>
    <ul>
      <li>Présentation des frameworks PHP</li>
      <li>A propos de Symfony 2</li>
      <li>Ressources pour Symfony</li>
    </ul>

    <h3>INSTALLATION ET CONFIGURATION DE SYMFONY 2</h3>
    <ul>
      <li>Configuration d'Apache</li>
      <li>Mise en place de l'environnement de développement</li>
      <li>Installation d'une sandbox</li>
      <li>Concepts de projet, d'application et de bundle</li>
      <li>Configuration en PHP, XML et YAML</li>
    </ul>

    <h3>LES BASES DE SYMFONY 2</h3>
    <ul>
      <li>
        Concepts fondamentaux : requête et réponse HTTP, le routing, l'approche
        Modèle Vue Contrôleur (MVC)
      </li>
      <li>Conventions de codage</li>
      <li>Structure d'un projet Symfony</li>
      <li>Liste des dossiers les plus utiles</li>
    </ul>

    <h3>DÉBOGUER SON CODE</h3>
    <ul>
      <li>La barre de débogage (« Web Debug Toolbar »)</li>
      <li>Les logs</li>
      <li>Le profilage</li>
      <li>Les traces d'exception</li>
    </ul>

    <h3>APPROCHE MVC DE SYMFONY 2</h3>
    <ul>
      <li>La couche Vue : templates et helpers</li>
      <li>Twig : le moteur de template de Symfony 2</li>
      <li>Héritage de templates</li>
      <li>Inclure un template dans un autre</li>
      <li>Rendre une action depuis un template</li>
      <li>Les helpers de vue (chaînes, date, url...)</li>
      <li>La couche Contrôleur : classes de contrôleur et actions</li>
      <li>Traitement des requêtes entrantes</li>
      <li>Envoyer des données à la vue</li>
      <li>Forward et redirection</li>
      <li>Récupérer des informations de l'utilisateur</li>
      <li>Sessions et cookies</li>
      <li>La couche de Modèle : logique métier avec Doctrine 2</li>
      <li>Symfony 2 et le Mapping Objet Relationnel (ORM)</li>
      <li>Découverte de Doctrine2 : DBAL & ORM</li>
      <li>Interagir avec une base de données relationnelle</li>
      <li>Introduction à PDO (DSN, requêtes préparées, transactions...)</li>
      <li>CLI : génération du modèle et de la base de données</li>
      <li>DQL : requeter la base de données</li>
    </ul>

    <h3>CONFIGURER UNE APPLICATION SYMFONY 2</h3>
    <ul>
      <li>Comparatif des formats supportés : XML, YAML et PHP</li>
      <li>Configuration globale de l'application</li>
      <li>Configuration globale des URLs</li>
      <li>Surcharge de la configuration dans un Bundle</li>
    </ul>

    <h3>SYMFONY 2 ET LES TEMPLATES</h3>
    <ul>
      <li>Les templates et le moteur de templating Twig</li>
      <li>Héritage et inclusion de templates</li>
      <li>Inclusion d'actions</li>
      <li>
        Déclarer et inclure des slots afin de concevoir des templates modulaires
      </li>
      <li>Générer des URLs à l'aide des helpers</li>
    </ul>

    <h3>LES FORMULAIRES AVEC SYMFONY 2</h3>
    <ul>
      <li>Cheminement d'une requête HTTP avec Symfony 2</li>
      <li>Découvrir le framework de formulaires</li>
      <li>Mettre en place des formulaires simples</li>
      <li>Préremplir des formulaires</li>
      <li>Lier un formulaire à une table, à un objet</li>
      <li>Valider les champs des formulaires</li>
      <li>Récupérer les données d'un formulaire Symfony 2</li>
      <li>Prototyper et personnaliser le rendu d'un formulaire avec Twig</li>
    </ul>

    <h3>CYCLE DE VIE D’UN PROJET SOUS SYMFONY</h3>
    <ul>
      <li>
        Configuration des environnements (développement, tests, production)
      </li>
      <li>Ressources par configuration</li>
      <li>Mode debug et production</li>
      <li>Gestion du cache</li>
    </ul>

    <h3>ETENDRE SYMFONY2 ET TWIG</h3>
    <ul>
      <li>Configurer de nouveaux services</li>
      <li>Installer de nouvelles aides de vue</li>
      <li>Enrichir Twig avec des macros, fonctions et filtres</li>
      <li>Installer et activer des Bundles tiers</li>
    </ul>

    <h3>LA SÉCURITÉ DANS SYMFONY 2</h3>
    <ul>
      <li>
        Authentification et autorisations des utilisateurs : formulaire, http,
        etc.
      </li>
      <li>Les attaques XSS : risques et protections</li>
      <li>Les attaques CSRF : risques et protections</li>
      <li>Se protéger contre les injection SQL</li>
    </ul>

    <h3>LES TESTS UNITAIRES AVEC PHPUNIT</h3>
    <ul>
      <li>Comprendre les enjeux des tests unitaires</li>
      <li>Introduction et installation du framework PHPUnit 3.5</li>
      <li>Configurer et exécuter une suite de tests unitaires</li>
      <li>Générer des rapports de couverture de code</li>
    </ul>

    <h3>CE QUI NOUS ATTENDS POUR SYMFONY 3</h3>
  </React.Fragment>
)
