(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,l,t){"use strict";t.r(l);var a=t(0),n=t.n(a),r=t(153),i=t(156);l.default=function(e){return n.a.createElement(r.a,{data:i})}},150:function(e,l,t){"use strict";var a=t(0),n=t.n(a);l.a=function(e){return n.a.createElement("section",{id:"banner",className:e.color?e.color:"style2"},n.a.createElement("div",{className:"inner"},n.a.createElement("header",{className:"major"},n.a.createElement("h1",null,e.title||"Landing")),n.a.createElement("div",{className:"content"},e.description)))}},151:function(e,l,t){"use strict";var a=t(0),n=t.n(a),r=t(149);l.a=function(e){var l=e.url,t=e.pic,a=e.title,i=e.description,c=e.information,m=e.size;return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:m||null},l&&t&&n.a.createElement(r.Link,{to:l,className:"image"},n.a.createElement("img",{src:t,alt:a}),c&&n.a.createElement("div",{className:"information"},c)),!l&&t&&n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:t,alt:a}),c&&n.a.createElement("div",{className:"information"},c)),!l&&!t&&n.a.createElement("div",{className:"image"},c&&n.a.createElement("div",{className:"information"},c)),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"inner"},a&&n.a.createElement("header",{className:"major"},n.a.createElement("h3",null,a)),"string"==typeof i?n.a.createElement("p",null,i):n.a.createElement(n.a.Fragment,null,i),l&&n.a.createElement("ul",{className:"actions"},n.a.createElement("li",null,n.a.createElement(r.Link,{to:l,className:"button"},"Learn more")))))))}},153:function(e,l,t){"use strict";var a=t(0),n=t.n(a),r=t(149),i=t(154),c=t.n(i),m=t(152),s=t(150),u=t(151),o=(t(33),t(48),function(e){var l=e.label,t=e.description;return n.a.createElement("tr",null,n.a.createElement("td",null,l," : "),n.a.createElement("td",null,t))}),E=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:"major"},n.a.createElement("h3",null,"Tarifs")),n.a.createElement("div",{className:"table-wrapper"},n.a.createElement("table",{className:"alt"},n.a.createElement("tbody",null,e.tarifs.map(function(e,l){return n.a.createElement(o,Object.assign({key:l},e))})))))};l.a=function(e){var l=e.data;return n.a.createElement(m.a,null,n.a.createElement(c.a,null,n.a.createElement("title",null,l.META_TITLE),n.a.createElement("meta",{name:"description",content:l.META_DESCRIPTION})),n.a.createElement(s.a,{title:l.NAME,description:l.SHORT_DESC,color:l.STYLE}),n.a.createElement("div",{id:"main"},n.a.createElement("section",{id:"one"},n.a.createElement("div",{className:"inner"},n.a.createElement("header",{className:"major"},n.a.createElement("h2",null,"Informations")),l.LONG_DESC&&n.a.createElement("p",null,l.LONG_DESC),n.a.createElement(l.Information,null),n.a.createElement(r.Link,{to:"#contact",className:"button"},"Demander une convention de stage"))),n.a.createElement("section",{id:"two",className:"spotlights"},n.a.createElement(u.a,{title:"Le programme",information:n.a.createElement(n.a.Fragment,null,n.a.createElement(l.Information,{title:"Informations"}),n.a.createElement(E,{tarifs:l.tarifs})),pic:l.IMAGE,description:n.a.createElement(n.a.Fragment,null,n.a.createElement(l.Programme,null),n.a.createElement("ul",{className:"actions"},n.a.createElement("li",null,n.a.createElement(r.Link,{to:"#contact",className:"button"},"Demander une convention de stage"))))}),n.a.createElement(u.a,{description:n.a.createElement(E,{tarifs:l.tarifs})}))))}},156:function(e,l,t){"use strict";t.r(l),t.d(l,"IMAGE",function(){return c}),t.d(l,"STYLE",function(){return m}),t.d(l,"NAME",function(){return s}),t.d(l,"SHORT_DESC",function(){return u}),t.d(l,"LONG_DESC",function(){return o}),t.d(l,"META_TITLE",function(){return E}),t.d(l,"META_DESCRIPTION",function(){return d}),t.d(l,"Information",function(){return p}),t.d(l,"tarifs",function(){return L}),t.d(l,"Programme",function(){return T});var a=t(0),n=t.n(a),r=t(149),i=t(157),c=t.n(i).a,m="style3",s="HTML5 / CSS",u="Les bases développement sur le web",o="Les bases développement sur le web",E="Floria-consulting - Formation HTML5 / CSS",d="Formation floria consulting HTML5 / CSS",p=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"La formation HTML 5 conviendra à tous les débutants dans le domaine du développement web. Vous apprendrez les fondamentaux de la création de page web multimédia."),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("u",null,"Durée :")," ",n.a.createElement("b",null,"3 jours")),n.a.createElement("li",null,n.a.createElement("u",null,"Tarifs inter-entreprises :")," à partir de ",n.a.createElement("b",null,"900€")," (HT) par stagiaire")),n.a.createElement("p",null,"Cette formation est disponible partout en france."))},L=[{label:"1 à 2 stagiaires",description:n.a.createElement(n.a.Fragment,null,n.a.createElement("b",null,"1200€")," HT par stagiaire")},{label:"3 à 5 stagiaires",description:n.a.createElement(n.a.Fragment,null,n.a.createElement("b",null,"1000€")," HT par stagiaire")},{label:"Plus de 6 stagiaires",description:n.a.createElement(n.a.Fragment,null,n.a.createElement("b",null,"900€")," HT par stagiaire")},{label:"Indépendants",description:n.a.createElement(n.a.Fragment,null,n.a.createElement("b",null,"600€")," HT par stagiaire")},{label:"Intra-entreprise",description:n.a.createElement(r.Link,{to:"#contact"},"Demander une convention")}],T=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",null,n.a.createElement("h3",null,"INTRODUCTION À HTML 5 ET CSS3"),n.a.createElement("li",null,"Contexte : fonctionnement d’un site internet"),n.a.createElement("li",null,"Histoire du HTML"),n.a.createElement("li",null,"Organismes de normalisation : WHATWG et W3C"),n.a.createElement("li",null,"La nouvelle vision HTML 5"),n.a.createElement("li",null,"Roadmap HTML 5"),n.a.createElement("h3",null,"UTILISER LE HTML 5 AUJOURD'HUI"),n.a.createElement("li",null,"Savoir quand choisir le HTML 5"),n.a.createElement("li",null,"Utiliser le HTML 5 avec des navigateurs qui ne le supportent pas")),n.a.createElement("ul",null,n.a.createElement("h3",null,"BALISAGE HTML 5"),n.a.createElement("li",null,'Structure d\'une page : disparition des notions "en ligne" et "bloc"'),n.a.createElement("li",null,"Doctype, NameSpace, Encoding"),n.a.createElement("li",null,"Les nouveaux éléments : section, article, aside, nav, ... pour en-têtes , pied de pages, etc."),n.a.createElement("li",null,"Les indispensables balises telles que menu, command, details, summary"),n.a.createElement("li",null,"Elements sémantiques"),n.a.createElement("li",null,"Les micro data"),n.a.createElement("li",null,"Dates et temps"),n.a.createElement("li",null,"Les éléments obsolètes : center, font, frame, acronym, ...")),n.a.createElement("ul",null,n.a.createElement("h3",null,"HTML 5 et CSS"),n.a.createElement("li",null,"Compatibilité entre navigateurs"),n.a.createElement("li",null,"Optimisation des balises pour les moteurs de recherche (SEO)")),n.a.createElement("ul",null,n.a.createElement("h3",null,"LES FORMULAIRES HTML 5"),n.a.createElement("li",null,"Balise form"),n.a.createElement("li",null,"Créer et utiliser des formulaires HTML 5"),n.a.createElement("li",null,"Gestion des dates, des emails, .."),n.a.createElement("li",null,"Les validations de formulaire en HTML5"),n.a.createElement("li",null,"Auto focus")),n.a.createElement("ul",null,n.a.createElement("h3",null,"AUDIO ET VIDEO EN HTML 5"),n.a.createElement("li",null,"Les éléments audio et video"),n.a.createElement("li",null,"Les conteneurs"),n.a.createElement("li",null,"Contrôler la vidéo, l'audio avec l'API HTML5"),n.a.createElement("li",null,"Support et formats (codecs WebM, MP4, H.264, Ogg Theora, MP3, AAC, Vorbis)"),n.a.createElement("li",null,"Gérer plusieurs sources vidéos/audios"),n.a.createElement("li",null,"Streaming"),n.a.createElement("li",null,"Ajouter des sous-titres à une vidéo HTML5")),n.a.createElement("ul",null,n.a.createElement("h3",null,"VUE D'ENSEMBLE DES APIS POUR HTML 5"),n.a.createElement("li",null,"Les APIs HTML 5"),n.a.createElement("li",null,"Gestion des fichiers"),n.a.createElement("li",null,"Audio et Vidéo"),n.a.createElement("li",null,"Site web hors ligne"),n.a.createElement("li",null,"Drag & Drop"),n.a.createElement("li",null,"Extension de HTMLDocument"),n.a.createElement("li",null,"Extension de HTML Element"),n.a.createElement("li",null,"Historiques de pages")),n.a.createElement("ul",null,n.a.createElement("h3",null,"DESSINER EN HTML 5"),n.a.createElement("li",null,"Dessiner en JavaScript"),n.a.createElement("li",null,"Canvas vs SVG"),n.a.createElement("li",null,"Contexte"),n.a.createElement("li",null,"Accessibilité"),n.a.createElement("li",null,"Quid des designers actuels ?")),n.a.createElement("ul",null,n.a.createElement("h3",null,"LA COMMUNICATION EN HTML 5"),n.a.createElement("li",null,"Les événements"),n.a.createElement("li",null,"Envoi de messages entre documents"),n.a.createElement("li",null,"Envoi de messages par canaux"),n.a.createElement("li",null,"Le push serveur")),n.a.createElement("ul",null,n.a.createElement("h3",null,"Web Sockets"),n.a.createElement("li",null,"Présentation de node.js"),n.a.createElement("li",null,"Les Web Workers pour le multi-tâches")),n.a.createElement("ul",null,n.a.createElement("h3",null,"LA GÉO-LOCALISATION AVEC HTML 5"),n.a.createElement("li",null,"Vue d'ensemble"),n.a.createElement("li",null,"La vie privée de l'utilisateur"),n.a.createElement("li",null,"Géolocaliser ses utilisateurs sur Google Maps")),n.a.createElement("ul",null,n.a.createElement("h3",null,"STOCKAGE AVEC HTML 5"),n.a.createElement("li",null,"Stockage local"),n.a.createElement("li",null,"Stockage en session"),n.a.createElement("li",null,"Bases de données SQL Web")),n.a.createElement("ul",null,n.a.createElement("h3",null,"CSS3 : STANDARDISER DES PROPRIÉTÉS"),n.a.createElement("li",null,"Vue d'ensemble : se passer d'images, éviter les astuces"),n.a.createElement("li",null,"Coins arrondis"),n.a.createElement("li",null,"Ombres portés"),n.a.createElement("li",null,"Transparence"),n.a.createElement("li",null,"Mise en page et positionnement"),n.a.createElement("li",null,"Autres nouveautés")),n.a.createElement("ul",null,n.a.createElement("h3",null,"CSS3 : MISE EN PAGE ET POSITIONNEMENT"),n.a.createElement("li",null,"Vue d'ensemble : clarifier le code, éviter la multiplication de imbriquées"),n.a.createElement("li",null,"Niveau de présentation"),n.a.createElement("li",null,"Mise en page par patron"),n.a.createElement("li",null,"Mise en page multi-colonnes"),n.a.createElement("li",null,"Mise en page par boite horizontales ou verticales"),n.a.createElement("li",null,"Positionnement par grille"),n.a.createElement("li",null,"Autres nouveautés")),n.a.createElement("ul",null,n.a.createElement("h3",null,"CSS3 : ANIMATION"),n.a.createElement("li",null,"Transformations (2D et 3D)"),n.a.createElement("li",null,"Transitions")))}},157:function(e,l,t){e.exports=t.p+"static/logo-2582748_1280-37f6a7ceda4508f4c155150c5afb8607.png"}}]);
//# sourceMappingURL=component---src-pages-formations-html-5-js-6e5175b26c39e45ab901.js.map