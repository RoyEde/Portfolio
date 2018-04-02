import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const navigation = ['Home', 'Projects', 'About', 'Contact']

const NavLink = ({changePage, mobile, selected, where}) => (
  <Link
    className={`page-link ${mobile ? 'mobile-page' : 'page'}`}
    onClick={changePage}
    to={`/${where !== 'Home' ? where.toLowerCase() : ''}`}
  >
    {where}
  </Link>
)

const NavMenu = ({changePage, mobile, page, status}) => (
  <menu className={`menu ${mobile ? `mobile-menu ${status !== null ? (status ? 'open' : 'closed') : ''}` : 'common-menu'}`}>
    {
      navigation.map((v, i) =>
        <NavLink
          changePage={() => changePage(i)}
          key={v}
          mobile={mobile}
          selected={page === i}
          where={v}
        />
      )
    }
  </menu>
)

const Nav = ({changePage, mobile, page, status}) => (
  <nav
    className={`nav ${mobile ? 'mobile-nav' : 'common-nav'}`}
  >
    <NavMenu
      changePage={(v) => changePage(v)}
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
