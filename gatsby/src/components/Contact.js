import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form
          method="post"
          action="https://formspree.io/contact@floria-consulting.com"
        >
          <div className="field half first">
            <label htmlFor="name">Nom</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="mailto:contact@floria-consulting.com">
              contact@floria-consulting.com
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Téléphone</h3>
            <span>+33 6 29 07 54 26</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Adresse</h3>
            <span>
              22 rue du marais
              <br />
              60 130 SAINT JUST EN CHAUSSEE
              <br />
              FRANCE
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
