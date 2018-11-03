import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from './layout'
import BannerLanding from './BannerLanding'

import FormationSection from './formation-section'
import FormationTarifs from './formation-tarifs'

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.META_TITLE}</title>
      <meta name="description" content={data.META_DESCRIPTION} />
    </Helmet>

    <BannerLanding
      title={data.NAME}
      description={data.SHORT_DESC}
      color={data.STYLE}
    />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Informations</h2>
          </header>
          {data.LONG_DESC && <p>{data.LONG_DESC}</p>}
          <data.Information />
          <Link to="#contact" className="button">
            Demander une convention de stage
          </Link>
        </div>
      </section>
      <section id="two" className="spotlights">
        <FormationSection
          title="Le programme"
          information={
            <React.Fragment>
              <data.Information title="Informations" />
              <FormationTarifs tarifs={data.tarifs} />
            </React.Fragment>
          }
          pic={data.IMAGE}
          description={
            <React.Fragment>
              <data.Programme />
              <ul className="actions">
                <li>
                  <Link to="#contact" className="button">
                    Demander une convention de stage
                  </Link>
                </li>
              </ul>
            </React.Fragment>
          }
        />
        <FormationSection
          description={<FormationTarifs tarifs={data.tarifs} />}
        />
      </section>
    </div>
  </Layout>
)
