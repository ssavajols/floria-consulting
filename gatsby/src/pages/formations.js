import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import FormationSection from '../components/formation-section'
import * as formationDataHtml5 from '../data/html5'
import * as formationDataAngular from '../data/angular'

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
          url="formations/react-js"
          pic={pic08}
          title="React.JS"
          description="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
        magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
        urna. Maecenas massa sed magna lacinia magna pellentesque lorem
        ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
        Vivamus et sagittis tempus."
        />
        <FormationSection
          url="formations/progressive-web-app"
          pic={pic09}
          title="Progressive Web App"
          description="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
        magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
        urna. Maecenas massa sed magna lacinia magna pellentesque lorem
        ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
        Vivamus et sagittis tempus."
        />
        <FormationSection
          size="small"
          url="formations/html5"
          pic={formationDataHtml5.IMAGE}
          title={formationDataHtml5.NAME}
          description={formationDataHtml5.SHORT_DESC}
        />
        <FormationSection
          size="small"
          url="formations/symfony"
          pic={pic08}
          title="Symfony 2 / 3 / 4"
          description="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis Vivamus et sagittis tempus."
        />
        <FormationSection
          size="small"
          url="formations/java-frameworks"
          pic={pic08}
          title="Java et frameworks"
          description="Nullam et orci eu lorem consequat tincidunt vivamus et sagittis Vivamus et sagittis tempus."
        />
        <FormationSection
          size="small"
          url="formations/angular"
          pic={formationDataAngular.IMAGE}
          title={formationDataAngular.NAME}
          description={formationDataAngular.SHORT_DESC}
        />
      </section>
    </div>
  </Layout>
)

export default Landing
