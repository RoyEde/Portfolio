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

const Menu = styled.div`
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
  transform: ${({menu}) => menu ? 'scaleY(1)' : 'scaleY(0)'};
  transform-origin: center top;
  transition: transform .3s;
}
`

const NavLink = ({mobile, selected, page}) => (
  <CustomPage mobile={mobile} page={page} />
)

const NavMenu = ({handleClick, mobile, status}) => (
  <Menu onClick={mobile ? handleClick : ''} menu={status}>
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

export default ({handleClick, mobile, status}) => (
  <Nav mobile={mobile}>
    <NavMenu
      handleClick={handleClick}
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
