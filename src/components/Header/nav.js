import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const NavLink = ({changePage, mobile, selected, where}) => (
  <Link
    className={`page ${mobile ? 'mobile' : 'common'} ${selected ? 'selected' : ''}`}
    onClick={changePage}
    to={`/${where !== 'Home' ? where.toLowerCase() : ''}`}
  >
    {where}
  </Link>
)

const NavMenu = ({changePage, mobile, page, pages, status}) => (
  <menu className={`menu ${mobile ? `mobile ${status ? 'open' : ''}` : 'common'}`}>
    {
      pages.map((v, i) =>
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

const Nav = ({changePage, mobile, page, pages, status}) => (
  <nav
    className={`nav ${mobile ? 'mobile' : 'common'}`}
  >
    <NavMenu
      changePage={(v) => changePage(v)}
      mobile={mobile}
      page={page}
      pages={pages}
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
