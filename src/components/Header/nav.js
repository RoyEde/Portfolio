import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CustomPage } from '../General'
import { colors, screen } from '../../styles/'

const pages = ['Home', 'Projects', 'About', 'Contact']

const Nav = styled.nav`
height: 100%;
float: ${({mobile}) => mobile ? 'none' : 'right'};
z-index: 1;
`

const Menu = styled.menu`
align-items: center;
display: flex;
justify-content: center;
margin: 0;
padding: 0;
height: 100%;

@media screen and (max-width: ${screen.mobile}) {
  background-color: ${colors.ui};
  flex-direction: column;
  height: auto;
  transform: ${({menu}) => menu ? 'translateY(0)' : 'translateY(-110vh)'};
  transform-origin: top;
  transition: transform .75s ease;
}
`

const NavLink = ({mobile, selected, page}) => (
  <CustomPage mobile={mobile} page={page} />
)

const NavMenu = ({mobile, status}) => (
  <Menu menu={status}>
    {
      pages.map(name =>
        <NavLink
          key={name}
          mobile={mobile}
          page={name}
        />
      )
    }
  </Menu>
)

export default ({mobile, status}) => (
  <Nav mobile={mobile}>
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
