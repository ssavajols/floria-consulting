(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(153),i=n(167);t.default=function(e){return l.a.createElement(r.a,{data:i})}},150:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function(e){return l.a.createElement("section",{id:"banner",className:e.color?e.color:"style2"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h1",null,e.title||"Landing")),l.a.createElement("div",{className:"content"},e.description)))}},151:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(149);t.a=function(e){var t=e.url,n=e.pic,a=e.title,i=e.description,c=e.information,s=e.size;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:s||null},t&&n&&l.a.createElement(r.Link,{to:t,className:"image"},l.a.createElement("img",{src:n,alt:a}),c&&l.a.createElement("div",{className:"information"},c)),!t&&n&&l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:n,alt:a}),c&&l.a.createElement("div",{className:"information"},c)),!t&&!n&&l.a.createElement("div",{className:"image"},c&&l.a.createElement("div",{className:"information"},c)),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"inner"},a&&l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,a)),"string"==typeof i?l.a.createElement("p",null,i):l.a.createElement(l.a.Fragment,null,i),t&&l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.Link,{to:t,className:"button"},"Learn more")))))))}},153:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(149),i=n(154),c=n.n(i),s=n(152),o=n(150),u=n(151),m=(n(33),n(48),function(e){var t=e.label,n=e.description;return l.a.createElement("tr",null,l.a.createElement("td",null,t," : "),l.a.createElement("td",null,n))}),E=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"Tarifs")),l.a.createElement("div",{className:"table-wrapper"},l.a.createElement("table",{className:"alt"},l.a.createElement("tbody",null,e.tarifs.map(function(e,t){return l.a.createElement(m,Object.assign({key:t},e))})))))};t.a=function(e){var t=e.data;return l.a.createElement(s.a,null,l.a.createElement(c.a,null,l.a.createElement("title",null,t.META_TITLE),l.a.createElement("meta",{name:"description",content:t.META_DESCRIPTION})),l.a.createElement(o.a,{title:t.NAME,description:t.SHORT_DESC,color:t.STYLE}),l.a.createElement("div",{id:"main"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Informations")),t.LONG_DESC&&l.a.createElement("p",null,t.LONG_DESC),l.a.createElement(t.Information,null),l.a.createElement(r.Link,{to:"#contact",className:"button"},"Demander une convention de stage"))),l.a.createElement("section",{id:"two",className:"spotlights"},l.a.createElement(u.a,{title:"Le programme",information:l.a.createElement(l.a.Fragment,null,l.a.createElement(t.Information,{title:"Informations"}),l.a.createElement(E,{tarifs:t.tarifs})),pic:t.IMAGE,description:l.a.createElement(l.a.Fragment,null,l.a.createElement(t.Programme,null),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.Link,{to:"#contact",className:"button"},"Demander une convention de stage"))))}),l.a.createElement(u.a,{description:l.a.createElement(E,{tarifs:t.tarifs})}))))}},167:function(e,t,n){"use strict";n.r(t),n.d(t,"IMAGE",function(){return c}),n.d(t,"STYLE",function(){return s}),n.d(t,"NAME",function(){return o}),n.d(t,"SHORT_DESC",function(){return u}),n.d(t,"LONG_DESC",function(){return m}),n.d(t,"META_TITLE",function(){return E}),n.d(t,"META_DESCRIPTION",function(){return p}),n.d(t,"Information",function(){return d}),n.d(t,"tarifs",function(){return f}),n.d(t,"Programme",function(){return g});var a=n(0),l=n.n(a),r=n(149),i=n(168),c=n.n(i).a,s="style2",o="Progressive Web App",u="Les Progressive Web Apps, une révolution pour le web mobile",m="Les Progressive Web Apps, une révolution pour le web mobile",E="Floria-consulting - Formation Progressive Web App",p="Formation floria consulting Progressive Web App",d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"La formation Progressive Web App offre un aperçu complet des méthodes modernes de developpement web mobile first."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("u",null,"Durée :")," ",l.a.createElement("b",null,"4 jours")),l.a.createElement("li",null,l.a.createElement("u",null,"Tarifs inter-entreprises :")," à partir de ",l.a.createElement("b",null,"1100€")," (HT) par stagiaire")),l.a.createElement("p",null,"Cette formation est disponible partout en france."))},f=[{label:"1 à 2 stagiaires",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"1500€")," HT par stagiaire")},{label:"3 à 5 stagiaires",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"1300€")," HT par stagiaire")},{label:"Plus de 6 stagiaires",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"1100€")," HT par stagiaire")},{label:"Indépendants",description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"800€")," HT par stagiaire")},{label:"Intra-entreprise",description:l.a.createElement(r.Link,{to:"#contact"},"Demander une convention")}],g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Rappel des bases du développement web"),l.a.createElement("ul",null,l.a.createElement("li",null,"ES6 / ES7"),l.a.createElement("li",null,"Rest et spread"),l.a.createElement("li",null,"Template strings"),l.a.createElement("li",null,"let et const"),l.a.createElement("li",null,"Promise"),l.a.createElement("li",null,"fetch"),l.a.createElement("li",null,"async / await"),l.a.createElement("li",null,"Reactive programming avec RxJS"),l.a.createElement("li",null,"La transpilation avec babel"),l.a.createElement("li",null,"Webpack"),l.a.createElement("li",null,"React + redux"),l.a.createElement("li",null,"Les tests unitaires avec Jest"),l.a.createElement("li",null,"Node et les applications Isomorphiques")),l.a.createElement("h3",null,"Ce qu’est une progressive web app ?"),l.a.createElement("ul",null,l.a.createElement("li",null,"App vs Sites"),l.a.createElement("li",null,"Ce qu’est le web aujourd’hui"),l.a.createElement("li",null,"Introduction aux progressive web apps")),l.a.createElement("h3",null,"Ajouter le site sur l’écran d’accueil"),l.a.createElement("ul",null,l.a.createElement("li",null,"Pourquoi ajouter le site sur l’écran d’accueil ?"),l.a.createElement("li",null,"Introduction au Web App Manifest"),l.a.createElement("li",null,"Manifest Properties"),l.a.createElement("li",null,"Créer un manifest"),l.a.createElement("li",null,"Tester le manifest"),l.a.createElement("li",null,"Install Banner requirements"),l.a.createElement("li",null,"Manifest events")),l.a.createElement("h3",null,"Envoyer des push notifications"),l.a.createElement("ul",null,l.a.createElement("li",null,"Pourquoi des push notifications ?"),l.a.createElement("li",null,"Introduction aux push et aux notifications"),l.a.createElement("li",null,"Notifications non-persistentes"),l.a.createElement("li",null,"Notifications persistentes"),l.a.createElement("li",null,"Web notifications : introduction"),l.a.createElement("li",null,"Web notifications : Notification generator"),l.a.createElement("li",null,"Web notifications : Notification tags"),l.a.createElement("li",null,"Web notifications : Notification events"),l.a.createElement("li",null,"Push API : les fondamentaux"),l.a.createElement("li",null,"Configuration des push : Introductions"),l.a.createElement("li",null,"Configuration des push : Permissions"),l.a.createElement("li",null,"Configuration des push : Souscriptions"),l.a.createElement("li",null,"Envoyer des messages")),l.a.createElement("h3",null,"Synchronisation en background"),l.a.createElement("ul",null,l.a.createElement("li",null,"Pourquoi synchroniser en background ?"),l.a.createElement("li",null,"Introduction à la synchronisation en background"),l.a.createElement("li",null,"One-off Synchronisation : Enregistrement"),l.a.createElement("li",null,"One-off Synchronisation : Handle Sync"),l.a.createElement("li",null,"Synchronisation périodique")),l.a.createElement("h3",null,"Bonnes pratiques progressive web apps"),l.a.createElement("ul",null,l.a.createElement("li",null,"Introduction PWA checklist"),l.a.createElement("li",null,"Introduction à Lighthouse")))}},168:function(e,t,n){e.exports=n.p+"static/gatsby-browser-5be92e7ebeb7ee4a194b45645538320f.jpg"}}]);
//# sourceMappingURL=component---src-pages-formations-progressive-web-app-js-ef4d055fcc87277d3c27.js.map