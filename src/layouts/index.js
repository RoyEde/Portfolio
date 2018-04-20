import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'

import favicon from '../img/favicon.png'

import './index.css'
import { screen } from './../styles/'

import styled from 'styled-components'

const Container = styled.div`
.layout {
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  max-width: 85vw;
  padding-top: 4rem;
  z-index: 1;
  @media screen and (min-width: ${screen.mobile}) {
    max-width: 82vw;
  }
}
`

class TemplateWrapper extends React.Component {
  constructor () {
    super()

    this.state = {
      menuOpen: false,
      mobile: false,
      pageHeight: 0,
      progress: 0
    }
  }

  componentDidMount () {
    window.addEventListener('resize', () => this.resize())
    window.addEventListener('scroll', () => this.checkProgress())
    this.resize()
  }

  checkProgress () {
    this.setState({
      pageHeight: document.body.scrollHeight - window.innerHeight,
      progress: window.scrollY
    })
  }

  handleMenu (open) {
    this.setState({menuOpen: open})
  }

  resize () {
    const landscape = window.innerWidth <= 768
    this.setState({
      mobile: landscape,
      menuOpen: landscape ? this.state.menuOpen : false,
      pageHeight: document.body.scrollHeight - window.innerHeight
    })
  }

  render () {
    const mobile = this.state.mobile
    const progress = Math.round(this.state.progress + window.innerHeight)
    const props = this.props
    const location = props.location.pathname !== '/Portfolio/'
      ? props.location.pathname.replace(/\/Portfolio\//g, '') : 'Home'

    return (
      <Container>
        <Helmet
          title={`Roy Eden Frontend Dev - ${location} -`}
          meta={[
            { name: 'description', content: `Roy Eden's Portfolio Page` },
            { name: 'keywords', content: '' }
          ]}
          link={[
            {rel: 'shortcut icon', type: 'image/png', href: favicon}
          ]}
        />
        <Header
          handleMenu={(open) => this.handleMenu(open)}
          menuOpen={this.state.menuOpen}
          mobile={mobile}
          page={location}
          pageHeight={this.state.pageHeight}
          progress={this.state.progress}
        />
        <main className='layout'>
          {this.props.children({...props, mobile, progress})}
        </main>
        <Footer mobile={mobile} />
      </Container>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
