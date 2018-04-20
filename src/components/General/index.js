import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { colors, screen } from '../../styles/'

const HighlightContainer = styled.span`
color: ${({active, mobile}) => active ? (mobile ? colors.secondary : colors.primary) : '#000'};
transition: color 1.5s;
@media screen and (min-width: ${screen.mobile}) {
  transition: color 3s;
  &:hover {
    color: ${colors.secondary};
  }
}
`

const LinkContainer = HighlightContainer.extend`
border-bottom-width: .1rem;
border-bottom-style: solid;
border-bottom-color: ${({active, mobile}) => active ? (mobile ? colors.secondary : colors.primary) : '#000'};
font-family: inherit;
font-size: inherit;
transition: border 1.5s, color 1.5s;
@media screen and (min-width: ${screen.mobile}) {
  transition: border 3s, color 3s;
  &:hover {
    border-bottom-color: ${colors.secondary};
    cursor: pointer;
  }
}
`

class CustomLink extends Component {
  constructor () {
    super()

    this.state = {
      position: 0
    }
  }

  componentDidMount () {
    this.setState({
      position: Math.floor(ReactDOM.findDOMNode(this).getBoundingClientRect().top)
    })
  }

  render () {
    return (
      <LinkContainer
        active={this.props.progress > this.state.position}
        mobile={this.props.mobile}
      >
        <a
          href={this.props.link}
          rel='noopener noreferrer'
          target='_blank'
        >
          {this.props.content}
        </a>
      </LinkContainer>
    )
  }
}

class Highlight extends Component {
  constructor () {
    super()

    this.state = {
      position: 0
    }
  }

  componentDidMount () {
    this.setState({
      position: Math.floor(ReactDOM.findDOMNode(this).getBoundingClientRect().top)
    })
  }

  render () {
    return (
      <HighlightContainer
        active={this.props.progress > this.state.position}
        mobile={this.props.mobile}
      >
        {this.props.text}
      </HighlightContainer>
    )
  }
}

class InnerLink extends Component {
  constructor () {
    super()

    this.state = {
      position: 0
    }
  }

  componentDidMount () {
    this.setState({
      position: Math.floor(ReactDOM.findDOMNode(this).getBoundingClientRect().top)
    })
  }

  render () {
    return (
      <LinkContainer
        active={this.props.progress > this.state.position}
        mobile={this.props.mobile}
      >
        <Link to={this.props.to}>{this.props.content}</Link>
      </LinkContainer>
    )
  }
}
//
// const InnerLink = ({content, mobile, to}) =>
//   <LinkContainer mobile={mobile}>
//     <Link to={to}>{content}</Link>
//   </LinkContainer>

const Page = styled(Link).attrs({
  exact: true,
  activeClassName: 'selected'
})`
font-family: 'Merriweather Sans', sans-serif;
font-size: 1.2rem;
text-align: center;
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

const Mobile = Page.extend`
color: ${colors.mobile};
padding: 5vh;
transition: background .3s, border .3s, color .4s;
width: 100vw;
border-bottom: 2px solid #ccc;
&.selected {
  background: #dddddd;
  border-color: #aaa;
  color: ${colors.secondary};
}
`

const CustomPage = ({mobile, page}) =>
  mobile ? <Mobile to={page !== 'Home' ? `/${page}` : '/'}>
    {page}
  </Mobile> : <Common to={page !== 'Home' ? `/${page}` : '/'}>
    {page}
  </Common>

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
const Icon = ({alt, link, mobile, src}) =>
  <ImgContainer href={link}>
    <IconImg mobile={mobile} src={src} />
  </ImgContainer>

const ProjectImg = styled.img`
border: .2rem solid ${colors.secondary};
margin-bottom: 1rem;
margin-top: 2rem;
max-width: 70vw;
padding: 3vw;
transition: border 1.2s, filter 1.2s;
@media screen and (min-width: ${screen.mobile}) {
  border-color: #000;
  filter: grayscale(.7);
  max-height: 76vh;
  padding: 2vw;
  &:hover{
    border-color: ${colors.primary};
    filter: none;
  }
}
`
const ProjectHighlight = ({alt, link, src}) =>
  <ImgContainer href={link}>
    <ProjectImg alt={alt} src={src} />
  </ImgContainer>

const Mail = styled.div`
display: flex;
flex-direction: column;
`

const MailInput = styled.input.attrs({type: 'text'})`
border: 2px solid #aaa;
color: #888;
font-family: sans-serif;
font-size: 1.2rem;
margin-bottom: 1rem;
margin-top: 1rem;
outline-color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
padding: .5rem;
transition: border-color 1s, color 1s, outline-color 1s;
&:focus {
  border-color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
}
@media screen and (min-width: ${screen.mobile}) {
  &:hover {
    border-color: ${colors.primary};
  }
}
&.active {
  border-color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
  color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
}
`

const MailLabel = styled.label`
color: #888;
font-family: sans-serif;
font-size: 1.2rem;
transition: color 1s;
&.active {
  color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
}
`

const MailText = styled.textarea.attrs({
  cols: 80,
  name: 'content',
  placeholder: 'Mail-body',
  rows: 10
})`
border: 2px solid #aaa;
color: #888;
font-family: sans-serif;
font-size: 1.2rem;
margin-bottom: 1rem;
margin-top: 1rem;
outline-color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
padding: .5rem;
resize: none;
transition: border-color 1s, color 1s, outline-color 1s;
&:focus {
  border-color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
}
@media screen and (min-width: ${screen.mobile}) {
  &:hover {
    border-color: ${colors.primary};
  }
}
&.active {
  border-color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
  color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
}
`

const MailSend = styled.a`
background-color: ${colors.ui};
border: 2px solid #aaa;
color: #888;
font-family: sans-serif;
font-size: 1.2rem;
padding: .5rem;
text-align: center;
transition: border-color 1s, color 1s;
&.active {
  border-color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
  color: ${({mobile}) => mobile ? colors.secondary : colors.primary};
}
&.disabled {
  pointer-events: none;
}
@media screen and (min-width: ${screen.mobile}) {
  &:hover {
    border-color: ${colors.primary};
  }
}
`

class MailForm extends React.Component {
  constructor () {
    super()

    this.state = {
      active: false,
      body: '',
      email: '',
      name: '',
      subject: ''
    }
  }

  change (event) {
    const newState = this.state
    newState[event.target.name.toLowerCase()] = event.target.value
    newState.active = newState.body.length > 0 &&
    newState.email.length > 0 &&
    newState.name.length > 0 &&
    newState.subject.length > 0
    this.setState(newState)
  }

  render () {
    const s = this.state
    return (
      <Mail>
        <MailLabel
          className={s.name ? 'active' : ''}
          for='Name'
          mobile={this.props.mobile}
        >
          Name:
        </MailLabel>
        <MailInput
          className={s.name ? 'active' : ''}
          onChange={(event) => this.change(event)}
          mobile={this.props.mobile}
          name='Name'
          placeholder='Name'
        />
        <MailLabel
          className={s.subject ? 'active' : ''}
          for='Subject'
          mobile={this.props.mobile}
        >
          Subject:
        </MailLabel>
        <MailInput
          className={s.subject ? 'active' : ''}
          onChange={(event) => this.change(event)}
          mobile={this.props.mobile}
          name='Subject'
          placeholder='Subject'
        />
        <MailLabel
          className={s.email ? 'active' : ''}
          for='Email'
          mobile={this.props.mobile}
        >
          E-mail:
        </MailLabel>
        <MailInput
          className={s.email ? 'active' : ''}
          onChange={(event) => this.change(event)}
          mobile={this.props.mobile}
          name='Email'
          placeholder='E-mail'
        />
        <MailLabel
          className={s.body ? 'active' : ''}
          for='Body'
          mobile={this.props.mobile}
        >
          Mail-body:
        </MailLabel>
        <MailText
          className={s.body ? 'active' : ''}
          onChange={(event) => this.change(event)}
          mobile={this.props.mobile}
          name='Body'
        />
        <MailSend
          className={s.active ? 'active' : 'disabled'}
          href={s.active
            ? `mailto:Roy.Ede@gmail.com?subject=${s.subject}&body=${
              s.body.split('\n').join('%0A')
            }%0Afrom%20${s.name}%20(${s.email})` : ''
          }
          mobile={this.props.mobile}
        >
          SEND
        </MailSend>
      </Mail>
    )
  }
}

export {
  CustomLink,
  CustomPage,
  Highlight,
  Icon,
  ImgContainer,
  InnerLink,
  MailForm,
  ProjectHighlight,
  ProjectImg
}
