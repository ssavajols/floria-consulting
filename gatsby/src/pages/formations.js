import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import FormationSection from '../components/formation-section'
import * as formationDataHtml5 from '../data/html5'
import * as formationDataAngular from '../data/angular'
import * as formationDataSymfony from '../data/symfony'
import * as formationDataPWA from '../data/progressive-web-app'
import * as formationDataJAVA from '../data/java'
import * as formationDataReactJS from '../data/react-js'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Floria-consulting - les formations</title>
      <meta name="description" content="Les formations floria-consulting" />
    </Helmet>

    <BannerLanding title="Les formations" description=" " />

    <div id="main">
      <section id="two" className="spotlights">
        <FormationSection
          url="#contact"
          title="Formation personnalisée"
          description={`Floria consulting propose des formations sur les différents languages 
          de programmation, frameworks et outils dans le domaine de l'informatique. Demandez 
          votre devis gratuit selon vos besoins de formations.`}
          buttonLabel="Demander un devis"
        />
        <FormationSection
          url="formations/react-js"
          pic={formationDataReactJS.IMAGE}
          title={formationDataReactJS.NAME}
          description={formationDataReactJS.LONG_DESC}
        />
        <FormationSection
          url="formations/progressive-web-app"
          pic={formationDataPWA.IMAGE}
          title={formationDataPWA.NAME}
          description={formationDataPWA.LONG_DESC}
        />
        <FormationSection
          size="small"
          url="formations/html5"
          pic={formationDataHtml5.IMAGE}
          title={formationDataHtml5.NAME}
          description={formationDataHtml5.LONG_DESC}
        />
        <FormationSection
          size="small"
          url="formations/symfony"
          pic={formationDataSymfony.IMAGE}
          title={formationDataSymfony.NAME}
          description={formationDataSymfony.LONG_DESC}
        />
        <FormationSection
          size="small"
          url="formations/java-frameworks"
          pic={formationDataJAVA.IMAGE}
          title={formationDataJAVA.NAME}
          description={formationDataJAVA.LONG_DESC}
        />
        <FormationSection
          size="small"
          url="formations/angular"
          pic={formationDataAngular.IMAGE}
          title={formationDataAngular.NAME}
          description={formationDataAngular.LONG_DESC}
        />
      </section>
    </div>
  </Layout>
)

export default Landing
