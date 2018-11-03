import React from 'react'
import { Link } from 'gatsby'
import image from '../assets/images/logo-java.jpg'

export const IMAGE = image
export const STYLE = 'style5'
export const NAME = 'Java initiation'
export const SHORT_DESC =
  'Java - Objet - Jee - JSF - Hibernate - maven - jenkins- spring - jpa - Jboss - dev web services Java'
export const LONG_DESC =
  'Java - Objet - Jee - JSF - Hibernate - maven - jenkins- spring - jpa - Jboss - dev web services Java'
export const META_TITLE = 'Floria-consulting - Formation Symfony 2 / 3 / 4'
export const META_DESCRIPTION = 'Formation floria consulting Symfony 2 / 3 / 4'

export const Information = () => (
  <React.Fragment>
    <p>
      Le langage Java est un langage de programmation informatique orienté objet
      créé par Sun Microsystems et présenté officiellement le 23 mai 1995. Le
      langage Java a la particularité principale que les logiciels écrits avec
      ce dernier sont très facilement portables sur plusieurs systèmes
      d'exploitation tels que UNIX, Windows, Mac OS ou GNU/Linux avec peu ou pas
      de modifications. C'est la plate-forme qui garantit la portabilité des
      applications développées en Java.
      <br />
      <br />
      Cette formation permet de maîtriser les bases du langage Java et la mise
      en oeuvre des principes de la programmation orientée objet afin de
      réaliser des projets concrets en Java.
      <br />
      <br />A la fin de la formation vous saurez développer ou modifier des
      applications en utilisant le langage Java et l'environnement de
      développement Eclipse. Vous connaitrez les particularités du langage pour
      écrire du code fiable et efficace. Vous saurez également parfaitement
      utiliser la documentation "Javadoc".
    </p>
    <ul>
      <li>
        <u>Durée :</u> <b>5 jours</b>
      </li>
      <li>
        <u>Tarifs inter-entreprises :</u> à partir de <b>1600€</b> (HT) par
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
        <b>1600€</b> HT par stagiaire
      </React.Fragment>
    ),
  },
  {
    label: 'Indépendants',
    description: (
      <React.Fragment>
        <b>1000€</b> HT par stagiaire
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
    <h3>Les avantages de Java</h3>

    <ul>
      <li>Raison d'existence de la plateforme Java</li>
      <li>Indépendance</li>
      <li>Lourd vs centralisé</li>
      <li>Présentation des plateformes Java: JSE, JEE, JME</li>
      <li>La JRE, le JDK</li>
      <li>Les outils de développement : Eclipse, Netbeans</li>
      <li>Les outils de développement : Eclipse, Netbeans</li>
    </ul>

    <h3>Structure d'un programme Java </h3>
    <ul>
      <li>Compilation</li>
      <li>Vue d'ensemble de bibliothèques de classes</li>
    </ul>

    <h3>Java au quotidien</h3>
    <ul>
      <li>La JRE, la JDK</li>
      <li>Les outils de développement: Eclipse, NetBeans</li>
      <li>
        Exercice pratique: Installation et premiers essais avec les différentes
        perspectives et fenêtres d'Eclipse
      </li>
    </ul>

    <h3>Outils de développement Java </h3>
    <ul>
      <li>Java Development Kit (JDK)</li>
      <li>Compilateur (javac)</li>
      <li>Utilitaire Javadoc</li>
      <li>Archive Java (JAR)</li>
    </ul>

    <h3>STRUCTURE DU LANGAGE JAVA </h3>
    <ul>
      <li>La syntaxe du langage </li>
      <li>Déclaration et initialisation des variables</li>
      <li>Déclarations et expressions</li>
      <li>Déclaration et utilisation des tableaux</li>
      <li>Transtypage</li>
      <li>Conditions</li>
      <li>Boucles</li>
      <li>
        Exercice pratique: Création d'un algorithme de calcul de total à payer
        en fonction d'un tableau de factures.
      </li>
    </ul>

    <h3>Le paradigme objet </h3>
    <ul>
      <li>Rappels sur la programmation orienté objet</li>
      <li>Encapsulation, héritage et le polymorphisme</li>
      <li>Analyse et conception objet</li>
      <li>Conception d'une application objet</li>
      <li>
        Exercice pratique: Modélisation d'un système de facturation: Gestion des
        contacts, des entreprises, des commandes et des factures.
      </li>
    </ul>

    <h3>Fonctionnalités orientées objet de Java </h3>
    <ul>
      <li>Instance</li>
      <li>Agrégation et composition</li>
      <li>Héritage</li>
      <li>Classes abstraites et interfaces</li>
      <li>Surcharge et polymorphisme</li>
      <li>
        Exercice pratique: Développement de la modélisation du système de
        facturation fait le premier jour. Mise en place de l'algorithme de
        calcul du montant dû par client, par fournisseur.
      </li>
    </ul>

    <h3>Gérer les erreurs avec les exceptions</h3>
    <ul>
      <li>Try / Catch</li>
      <li>Throw / Throws</li>
      <li>Créer ses propres exceptions</li>
      <li>
        Les exceptions Java: Exemple des classes Java d'écriture dans un
        fichier.
      </li>
      <li>
        Exercice pratique: L'utilisateur devra pouvoir saisir dans la console de
        nouvelles factures. si le informations saisies sont invalides, gérer les
        bonnes exceptions. Les informations saisies devront ensuite être écrites
        dans un fichier et gérer les exceptions possiblement levées.
      </li>
    </ul>

    <h3>Utiliser les collections en Java</h3>
    <ul>
      <li>Présentation des collections</li>
      <li>Listes, piles, files, ...</li>
      <li>Itérer sur des collections</li>
      <li>Choisir la bonne collection en fonction du besoin</li>
    </ul>

    <h3>Nouveautés Java 7 et 8</h3>
    <ul>
      <li>Les annotations</li>
      <li>Généricité</li>
      <li>Autoboxing</li>
      <li>Imports statiques</li>
      <li>Enum</li>
      <li>Propriétés : la fin de la douleur des getters/setters !</li>
    </ul>

    <h3>Accéder à une base de données relationnelle avec JDBC</h3>
    <ul>
      <li>Architecture et types de pilotes JDBC</li>
      <li>
        Charger le pilote et récupérer une connexion à la base de données,
      </li>
      <li>Exécuter des requêtes SQL,</li>
      <li>Requêtes paramétrées,</li>
      <li>Exploitation des résultats,</li>
      <li>Notion de persistance objet</li>
      <li>
        Exercice pratique: Améliorer le programme de gestion des factures en
        récupérant/ajoutant les informations d'une base de données
        relationnelle.
      </li>
    </ul>

    <h3>Interfaces graphiques avec Java (GUI)</h3>
    <ul>
      <li>Présentation de AWT</li>
      <li>Widgets, Layouts, Evènements en AWT</li>
      <li>Présentation de Swing</li>
      <li>Widgets, Layouts, Evènements en Swing</li>
      <li>Mixer une application AWT/Swing ?</li>
    </ul>
  </React.Fragment>
)
