import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export const MenuLink = props => (
  <li>
    <Link
      onClick={props.onToggleMenu}
      to={props.to}
      className={props.className}
    >
      {props.label}
    </Link>
  </li>
)

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <MenuLink to="/" label="Accueil" {...props} />
        <MenuLink to="#contact" label="Nous contacter" {...props} />
        {/* <MenuLink to="/generic" label="Generic" {...props} />
        <MenuLink to="/elements" label="Elements" {...props} /> */}
      </ul>
      <ul className="actions vertical">
        <MenuLink
          to="/formations"
          className="button special fit"
          label="Voir les formations"
        />
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
