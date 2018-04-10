import React from 'react'
import { CustomPage } from '../General'

import styled from 'styled-components'
import PropTypes from 'prop-types'

const pages = ['Home', 'Projects', 'About', 'Contact']

const Nav = styled.nav`
height: 100%;

&.common {
  float: right;
  height: 3rem;
}

&.mobile {
  ${'' /* background-color: #00000066; */}
  float: none;
  height: auto;
  z-index: 1;
}
`

const NavLink = ({mobile, selected, page}) => (
  <CustomPage mobile={mobile} page={page} />
)

const NavMenu = ({mobile, status}) => (
  <menu className={`${mobile ? `mobile${status ? ' open' : ''}` : 'common'}`}>
    {
      pages.map(name =>
        <NavLink
          key={name}
          mobile={mobile}
          page={name}
        />
      )
    }
  </menu>
)

export default ({mobile, status}) => (
  <Nav className={mobile ? 'mobile' : 'common'}>
    <NavMenu
      mobile={mobile}
      status={status}
    />
  </Nav>
)

NavLink.propTypes = {
  changePage: PropTypes.func,
  mobile: PropTypes.bool,
  selected: PropTypes.bool,
  where: PropTypes.string
}
