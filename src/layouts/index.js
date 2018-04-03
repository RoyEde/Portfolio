import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
// import Footer from '../components/Footer'
import favicon from '../img/favicon.png'

import './index.css'
import './styles.css'

const pages = ['Home', 'Projects', 'About', 'Contact']

class TemplateWrapper extends React.Component {
  constructor () {
    super()

    this.state = {
      menuOpen: false,
      mobile: false,
      page: 0,
      pageHeight: 0,
      progress: 0
    }
  }

  componentWillMount () {
    window.addEventListener('resize', () => this.resize())
    window.addEventListener('scroll', () => this.checkProgress())
    this.resize()
  }

  componentDidMount () {
    this.setState({pageHeight: document.body.scrollHeight - window.innerHeight})
  }

  changePage (page) {
    this.setState({
      page: page,
      pageHeight: 1000
    })
    // this.handleMenu(false)
  }

  checkProgress () {
    this.setState({
      pageHeight: document.body.scrollHeight - window.innerHeight,
      progress: window.scrollY
    })
  }

  resize () {
    const landscape = window.innerWidth <= 768
    this.setState({
      mobile: landscape,
      menuOpen: landscape ? this.state.menuOpen : false
    })
  }

  handleMenu (open) {
    this.setState({menuOpen: open})
  }

  render () {
    const mobile = this.state.mobile
    const props = this.props
    return (
      <main>
        <Helmet
          title={`Roy Eden Front End Dev -${pages[this.state.page]}-`}
          meta={[
            { name: 'description', content: `Roy Eden's Portfolio Page` },
            { name: 'keywords', content: '' }
          ]}
          link={[
            {rel: 'shortcut icon', type: 'image/png', href: favicon}
          ]}
        />
        <Header
          changePage={(page) => this.changePage(page)}
          handleMenu={(open) => this.handleMenu(open)}
          menuOpen={this.state.menuOpen}
          mobile={mobile}
          page={this.state.page}
          pageHeight={this.state.pageHeight}
          pages={pages}
          progress={this.state.progress}
        />
        <div className='layout'>
          {this.props.children({...props, mobile})}
        </div>
        {/* <Footer /> */}
      </main>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
