import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import * as formationDataReact from '../data/react-js'
import * as formationDataPWA from '../data/progressive-web-app'
import * as formationDataHTML5 from '../data/html5'
import * as formationDataSymfony from '../data/symfony'
import * as formationDataJAVA from '../data/java'
import * as formationDataAngular from '../data/angular'

const HomeBox = ({ data, url }) => (
  <article style={{ backgroundImage: `url(${data.IMAGE})` }}>
    <header className="major">
      <h3>{data.NAME}</h3>
      <p>{data.SHORT_DESC}</p>
    </header>
    <Link to={url} className="link primary" />
  </article>
)

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Floria Consulting"
          meta={[
            {
              name: 'description',
              content: 'Floria consulting - formations professionnelles',
            },
            {
              name: 'keywords',
              content:
                'formation, professionnelle, IT, developpeur, javascript, react.js, angular, PHP',
            },
          ]}
        />

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <HomeBox data={formationDataReact} url="/formations/react-js" />
            <HomeBox
              data={formationDataPWA}
              url="/formations/progressive-web-app"
            />
            <HomeBox data={formationDataHTML5} url="/formations/html5" />
            <HomeBox data={formationDataSymfony} url="/formations/symfony" />
            <HomeBox
              data={formationDataJAVA}
              url="/formations/java-frameworks"
            />
            <HomeBox data={formationDataAngular} url="/formations/angular" />
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Découvrez toutes nos formations</h2>
              </header>
              <p>
                Floria-consulting propose des formations dans le domaine de l'IT
                partout en france métropolitaine.
                <br />
                Nous proposons des formations intra-entreprise et
                inter-entreprise.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/formations" className="button next">
                    Voir les formations
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
