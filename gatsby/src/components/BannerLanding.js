import React from 'react'

const BannerLanding = props => (
  <section id="banner" className={props.color ? props.color : 'style2'}>
    <div className="inner">
      <header className="major">
        <h1>{props.title || 'Landing'}</h1>
      </header>
      <div className="content">{props.description}</div>
    </div>
  </section>
)

export default BannerLanding
