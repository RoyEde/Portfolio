import React from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'
import Nav from './nav'
import MenuButton from './menu-button'

import icon from '../../img/icon.png'
import { animations, colors, screen } from '../../styles/'

const Logo = styled.img.attrs({alt: 'Logo', src: icon})`
height: 2.9rem;
width: 2.9rem;
@media screen and (min-width: ${screen.mobile}) {
  &:hover {
    animation: ${animations.shake} 1.4s ease infinite;
  }
}
`

const Progress = styled.progress`
-moz-appearance: none;
-webkit-appearance: none;
appareance: none;
background-color: transparent;
border: none;
height: .3rem;
width: 100vw;
z-index: 4;
&::-moz-progress-bar {
  background-color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
}
&::-webkit-progress-bar {
  background-color: ${colors.background};
}
&::-webkit-progress-value {
  background-color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
  border-radius: 2px;
}
`

const ButtonContainer = styled.div`
align-items: center;
display: flex;
float: right;
height: 100%;
margin-right: 4vw;
`

const HeaderBar = styled.div`
background: ${colors.background};
box-shadow: ${({mobile}) => mobile ? '0px .05rem .1rem' : '0px .15rem .2rem'} #000000;
display: inline-block;
height: 3rem;
width: 100vw;
z-index: 3;
`

const Header = styled.header`
display: flex;
flex-direction: column;
height: ${({menu}) => menu ? '90vh' : '3.6rem'};
overflow: hidden;
position: fixed;
transition: height 1s;
width: 100%;
z-index: 3;
`

export default ({handleMenu, menuOpen, mobile, pageHeight, progress}) => (
  <Header menu={menuOpen}>
    <Progress
      max={pageHeight}
      mobile={mobile}
      value={progress}
    />
    <HeaderBar mobile={mobile}>
      <Link
        to='/'
      >
        <Logo />
      </Link>
      {mobile &&
        (
          <ButtonContainer>
            <MenuButton
              handleClick={() => handleMenu(!menuOpen)}
              open={menuOpen}
            />
          </ButtonContainer>
        )
      }
      {!mobile &&
        (
          <Nav
            mobile={mobile}
          />
        )
      }
    </HeaderBar>
    {mobile &&
      (
        <Nav
          mobile={mobile}
          status={menuOpen}
        />
      )
    }
  </Header>
)
