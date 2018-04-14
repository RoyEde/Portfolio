import React from 'react'
import styled from 'styled-components'

import { ImgContainer } from '../General'

import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'
import twitter from '../../img/twitter.png'

import { colors, screen } from '../../styles'

const Footer = styled.footer`
align-items: center;
background: ${colors.background};
bottom: 0;
color: ${colors.ui};
display: flex;
height: ${({mobile}) => mobile ? '2.5rem' : '3rem'};
position: relative;
`

const Copryright = styled.span`
font-family: 'Merriweather Sans', sans-serif;
font-size: ${({mobile}) => mobile ? '.8rem' : '.9rem'};
margin-left: ${({mobile}) => mobile ? '.4rem' : '.8rem'};
width: 100%;
`

const ContactsContainer = styled.div`
display: flex;
justify-content: flex-end space-between;
margin-right: ${({mobile}) => mobile ? '.4rem' : '.8rem'};
`

const FooterImg = ImgContainer.extend`
margin-left: ${({mobile}) => mobile ? '.25rem' : '.35rem'};
margin-right: ${({mobile}) => mobile ? '.25rem' : '.35rem'};
@media screen and (min-width: ${screen.mobile}) {
  transform: translate3d(0, -2px, 0);
  &:hover {
    transform: translate3d(0, 0, 0);
  }
}
`

export default ({mobile}) => (
  <Footer mobile={mobile}>
    <Copryright mobile={mobile}>© Roy Eden - 2018</Copryright>
    <ContactsContainer>
      <FooterImg href='https://github.com/RoyEde'>
        <img src={github} alt='github' />
      </FooterImg>
      <FooterImg href='https://www.linkedin.com/in/roy-eden/'>
        <img src={linkedin} alt='linkedin' />
      </FooterImg>
      <FooterImg href='https://www.twitter.com/RoyEde'>
        <img src={twitter} alt='twitter' />
      </FooterImg>
    </ContactsContainer>
  </Footer>
)
