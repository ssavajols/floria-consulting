(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(153),i=a(166);t.default=function(e){return l.a.createElement(r.a,{data:i})}},150:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("section",{id:"banner",className:e.color?e.color:"style2"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h1",null,e.title||"Landing")),l.a.createElement("div",{className:"content"},e.description)))}},151:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(149);t.a=function(e){var t=e.url,a=e.pic,n=e.title,i=e.description,c=e.information,m=e.size,s=e.buttonLabel;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:m||null},t&&a&&l.a.createElement(r.Link,{to:t,className:"image"},l.a.createElement("img",{src:a,alt:n}),c&&l.a.createElement("div",{className:"information"},c)),!t&&a&&l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:a,alt:n}),c&&l.a.createElement("div",{className:"information"},c)),!t&&!a&&l.a.createElement("div",{className:"image"},c&&l.a.createElement("div",{className:"information"},c)),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"inner"},n&&l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,n)),"string"==typeof i?l.a.createElement("p",null,i):l.a.createElement(l.a.Fragment,null,i),t&&l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.Link,{to:t,className:"button"},s||"Voir la formation")))))))}},153:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(149),i=a(154),c=a.n(i),m=a(152),s=a(150),o=a(151),u=(a(33),a(48),function(e){var t=e.label,a=e.description;return l.a.createElement("tr",null,l.a.createElement("td",null,t," : "),l.a.createElement("td",null,a))}),E=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"Tarifs")),l.a.createElement("div",{className:"table-wrapper"},l.a.createElement("table",{className:"alt"},l.a.createElement("tbody",null,e.tarifs.map(function(e,t){return l.a.createElement(u,Object.assign({key:t},e))})))))};t.a=function(e){var t=e.data;return l.a.createElement(m.a,null,l.a.createElement(c.a,null,l.a.createElement("title",null,t.META_TITLE),l.a.createElement("meta",{name:"description",content:t.META_DESCRIPTION})),l.a.createElement(s.a,{title:t.NAME,description:t.SHORT_DESC,color:t.STYLE}),l.a.createElement("div",{id:"main"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Informations")),t.LONG_DESC&&l.a.createElement("p",null,t.LONG_DESC),l.a.createElement(t.Information,null),l.a.createElement(r.Link,{to:"#contact",className:"button"},"Demander une convention de stage"))),l.a.createElement("section",{id:"two",className:"spotlights"},l.a.createElement(o.a,{title:"Le programme",information:l.a.createElement(l.a.Fragment,null,l.a.createElement(t.Information,{title:"Informations"}),l.a.createElement(E,{tarifs:t.tarifs})),pic:t.IMAGE,description:l.a.createElement(l.a.Fragment,null,l.a.createElement(t.Programme,null),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.Link,{to:"#contact",className:"button"},"Demander une convention de stage"))))}),l.a.createElement(o.a,{description:l.a.createElement(E,{tarifs:t.tarifs})}))))}},166:function(e,t,a){"use strict";a.r(t),a.d(t,"IMAGE",function(){return c}),a.d(t,"STYLE",function(){return m}),a.d(t,"NAME",function(){return s}),a.d(t,"SHORT_DESC",function(){return o}),a.d(t,"LONG_DESC",function(){return u}),a.d(t,"META_TITLE",function(){return E}),a.d(t,"META_DESCRIPTION",function(){return d}),a.d(t,"Information",function(){return p}),a.d(t,"tarifs",function(){return f}),a.d(t,"Programme",function(){return v});var n=a(0),l=a.n(n),r=a(149),i=a(167),c=a.n(i).a,m="style1",s="React.JS",o="Le framework le plus populaire du web",u="Le framework le plus populaire du web",E="Floria-consulting - Formation React.JS",d="Formation floria consulting React.JS",p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"La formation React.JS conviendra aux novices comme aux expérimenté du développement web qui veulent découvrir React.JS et monter en compétence sur le développement front-end."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("u",null,"Durée :")," ",l.a.createElement("b",null,"3 jours")),l.a.createElement("li",null,l.a.createElement("u",null,"Tarifs inter-entreprises :")," à partir de ",l.a.createElement("b",null,"1100€")," (HT) par stagiaire")),l.a.createElement("p",null,"Cette formation est disponible partout en france."))},f=[{label:"1 à 2 stagiaires",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"1500€")," HT par stagiaire")},{label:"3 à 5 stagiaires",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"1300€")," HT par stagiaire")},{label:"Plus de 6 stagiaires",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"1100€")," HT par stagiaire")},{label:"Indépendants",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"800€")," HT par stagiaire")},{label:"Intra-entreprise",description:l.a.createElement(r.Link,{to:"#contact"},"Demander une convention")}],v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Les composants RIA"),l.a.createElement("ul",null,l.a.createElement("li",null,"Rappel des bases HTML, CSS, JS."),l.a.createElement("li",null,"Le DOM et ses interactions"),l.a.createElement("li",null,"L’éco-système des frameworks javascript, les limites des applications front-end."),l.a.createElement("li",null,"Le data-binding : virtual-dom, dirty-checking, observable objects"),l.a.createElement("li",null,"Le principe de react JS dans l’univers des frameworks JAVASCRIPT."),l.a.createElement("li",null,"Les transpileurs. Le format JSX."),l.a.createElement("li",null,"Intégration dans les outils de développements, IDE webstorm, visual code studio, atom."),l.a.createElement("li",null,"Mise en place de l’environnement de travail et travaux pratiques."),l.a.createElement("li",null,"(Initiation a JSX, mise en place d’une architecture de projet pour les TP de la formation)")),l.a.createElement("h3",null,"Le développement avec React.JS"),l.a.createElement("ul",null,l.a.createElement("li",null,"Pattern MVC et Virtual Dom."),l.a.createElement("li",null,"Prise en main du JSX. Pièges à éviter."),l.a.createElement("li",null,"Méthodes principales de l’API."),l.a.createElement("li",null,"Création de composant de vues. Cycle de vie."),l.a.createElement("li",null,"La fonction de rendu."),l.a.createElement("li",null,"Le State et les props. Gestion des états.")),l.a.createElement("h3",null,"Des composants intéractifs"),l.a.createElement("ul",null,l.a.createElement("li",null,"Gestionnaire d’évènement react.js."),l.a.createElement("li",null,"Une stratégie pour les états de composants"),l.a.createElement("li",null,"Composition de composant."),l.a.createElement("li",null,"Le component Data Flow."),l.a.createElement("li",null,"Les composants réutilisables. Les enfants et propriétés."),l.a.createElement("li",null,"La gestion des formulaires."),l.a.createElement("li",null,"Manipulation du DOM.")),l.a.createElement("h3",null,"Single page app avec reactJS et Flux"),l.a.createElement("ul",null,l.a.createElement("li",null,"Présentation du framework Flux."),l.a.createElement("li",null,"La gestion du MVC."),l.a.createElement("li",null,"Les dispatcher."),l.a.createElement("li",null,"Les stores."),l.a.createElement("li",null,"Extension react.js. Animation et data-binding.")),l.a.createElement("h3",null,"Travailler avec des applications isomorphiques"),l.a.createElement("ul",null,l.a.createElement("li",null,"Le concept d’application isomorphique."),l.a.createElement("li",null,"L’écosystème serveur."),l.a.createElement("li",null,"Initiation à NodeJS."),l.a.createElement("li",null,"Configurer node.js pour react.js."),l.a.createElement("li",null,"Utilisation des routes.")),l.a.createElement("h3",null,"Un premier pas avec React Native"),l.a.createElement("ul",null,l.a.createElement("li",null,"Les principes de fonctionnement des composants natifs."),l.a.createElement("li",null,"Présentation des composants et gestion multi-device."),l.a.createElement("li",null,"Où se situe react native par rapport aux autres outils d’applications hybride. Cordova, Phonegap, CocoonJS.")))}},167:function(e,t,a){e.exports=a.p+"static/1_okufk5mMDbTfqA5iS_rldQ-1482da0af731d6167a645cf8200e8654.png"}}]);
//# sourceMappingURL=component---src-pages-formations-react-js-js-534f91d92eb3c9918be6.js.map