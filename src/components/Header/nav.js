import React from 'react'
import { CustomPage } from '../General'
import PropTypes from 'prop-types'

const pages = ['Home', 'Projects', 'About', 'Contact']

const NavLink = ({mobile, selected, where}) => (
  <CustomPage
    content={where}
    customClass={`page ${mobile ? 'mobile' : 'common'} ${selected ? 'selected' : ''}`}
    page={where}
  />
)

const NavMenu = ({mobile, page, status}) => (
  <menu className={`menu ${mobile ? `mobile ${status ? 'open' : ''}` : 'common'}`}>
    {
      pages.map(name =>
        <NavLink
          key={name}
          mobile={mobile}
          selected={page === name}
          where={name}
        />
      )
    }
  </menu>
)

const Nav = ({mobile, page, status}) => (
  <nav
    className={`nav ${mobile ? `mobile ${status ? 'open' : ''}` : 'common'}`}
  >
    <NavMenu
      mobile={mobile}
      page={page}
      status={status}
    />
  </nav>
)

NavLink.propTypes = {
  changePage: PropTypes.func,
  mobile: PropTypes.bool,
  selected: PropTypes.bool,
  where: PropTypes.string
}

export default Nav
