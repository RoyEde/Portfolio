import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

import { colors, screen } from '../../styles/'

const ImgContainer = styled.a.attrs({
  rel: 'noopener noreferrer',
  target: '_blank'
})`
align-items: center;
display: flex;
height: auto;
justify-content: center;
width: auto;
z-index: 0;
`

const HighlightContainer = styled.span`
color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
transition: color 1.5s;
@media screen and (min-width: ${screen.mobile}) {
  &:hover {
    color: ${colors.secondary};
  }
}
`

const IconImg = styled.img`
border-radius: 100%;
border-style: ${({mobile}) => mobile ? 'dashed' : 'solid'};
border-width: ${({mobile}) => mobile ? '.3rem' : '.2rem'};
border-color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
height: 11rem;
margin-bottom: 3rem;
margin-top: 3rem;
transition: border .3s, height .4s, margin.4s, width .4s;
width: 11rem;
@media screen and (min-width: ${screen.mobile}) {
  &:hover {
    margin-bottom: 2rem;
    margin-top: 2rem;
    border-style: dashed;
    border-width: .3rem;
    height: 13rem;
    width: 13rem;
  }
}
`

const LinkContainer = HighlightContainer.extend`
border-bottom-width: .1rem;
border-bottom-style: solid;
border-bottom-color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
font-family: inherit;
font-size: inherit;
transition: border 1.5s, color 1.5s;
@media screen and (min-width: ${screen.mobile}) {
  &:hover {
    border-bottom-color: ${colors.secondary};
    cursor: pointer;
  }
}
`

const Page = styled(Link).attrs({
  exact: true,
  activeClassName: 'selected'
})`
font-family: 'Merriweather Sans', sans-serif;
font-size: 1.2rem;
text-align: center;
`

const Mobile = Page.extend`
color: ${colors.mobile};
padding: 5vh;
transition: background .3s, border .3s, color .4s;
width: 100vw;
border-bottom: 2px solid #ccc;
&.selected {
  background: #dddddd77;
  border-color: #aaa;
  color: ${colors.secondary};
}
`

const Common = Page.extend`
color: ${colors.ui};
margin-left: 1.5vw;
margin-right: 1.5vw;
padding-left: 1.5vw;
padding-right: 1.5vw;
transition: border .2s, color .4s;
@media screen and (min-width: ${screen.mobile}) {
  &:hover, &.selected {
    border-bottom: .1rem solid ${colors.primary};
    color: ${colors.primary};
  }
}
`

const ProjectImg = styled.img`
border: .2rem solid ${colors.secondary};
margin-bottom: 1rem;
margin-top: 2rem;
max-height: 60vh;
max-width: 70vw;
padding: 3vw;
transition: border 1.2s, filter 1.2s;
@media screen and (min-width: ${screen.mobile}) {
  border-color: #000;
  filter: grayscale(.7);
  padding: 2vw;
  &:hover{
    border-color: ${colors.primary};
    filter: none;
  }
}
`

const CustomLink = ({content, link, mobile}) =>
  <LinkContainer mobile={mobile}>
    <a
      href={link}
      rel='noopener noreferrer'
      target='_blank'
    >
      {content}
    </a>
  </LinkContainer>

const Icon = ({alt, link, mobile, src}) => (
  <ImgContainer href={link}>
    <IconImg mobile={mobile} src={src} />
  </ImgContainer>
)

const InnerLink = ({content, mobile, to}) => (
  <LinkContainer mobile={mobile}>
    <Link to={to}>{content}</Link>
  </LinkContainer>
)

const CustomPage = ({mobile, page}) => (
  mobile ? <Mobile to={page !== 'Home' ? `/${page}` : '/'}>
    {page}
  </Mobile> : <Common to={page !== 'Home' ? `/${page}` : '/'}>
    {page}
  </Common>
)

const Highlight = ({mobile, text}) => (
  <HighlightContainer
    mobile={mobile}
  >
    {text}
  </HighlightContainer>
)

const ProjectHighlight = ({alt, link, src}) => (
  <ImgContainer href={link}>
    <ProjectImg alt={alt} src={src} />
  </ImgContainer>
)

const MailForm = ({props}) => (
  <div>

  </div>
)

export {
  CustomLink,
  CustomPage,
  Highlight,
  Icon,
  ImgContainer,
  InnerLink,
  ProjectHighlight
}
