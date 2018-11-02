import React from 'react'
import { Link } from 'gatsby'

export default ({
  url,
  pic,
  title,
  description,
  information,
  size,
  buttonLabel,
}) => (
  <React.Fragment>
    <section className={size ? size : null}>
      {url &&
        pic && (
          <Link to={url} className="image">
            <img src={pic} alt={title} />
            {information && <div className="information">{information}</div>}
          </Link>
        )}

      {!url &&
        pic && (
          <div className="image">
            <img src={pic} alt={title} />
            {information && <div className="information">{information}</div>}
          </div>
        )}

      {!url &&
        !pic && (
          <div className="image">
            {information && <div className="information">{information}</div>}
          </div>
        )}

      <div className="content">
        <div className="inner">
          {title && (
            <header className="major">
              <h3>{title}</h3>
            </header>
          )}
          {typeof description === 'string' ? (
            <p>{description}</p>
          ) : (
            <React.Fragment>{description}</React.Fragment>
          )}
          {url && (
            <ul className="actions">
              <li>
                <Link to={url} className="button">
                  {buttonLabel || 'Voir la formation'}
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  </React.Fragment>
)
