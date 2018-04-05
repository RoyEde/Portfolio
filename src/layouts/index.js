import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
// import Footer from '../components/Footer'
import favicon from '../img/favicon.png'

import './index.css'
import './styles.css'

class TemplateWrapper extends React.Component {
  constructor () {
    super()

    this.state = {
      menuOpen: false,
      mobile: false,
      page: '',
      pageHeight: 0,
      progress: 0
    }
  }

  componentDidMount () {
    window.addEventListener('resize', () => this.resize())
    window.addEventListener('scroll', () => this.checkProgress())
    this.resize()
    this.setPage(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.setPage(nextProps)
  }

  setPage (props) {
    const page = props.location.pathname.replace(/\//g, '')
    this.setState({
      page: page ? page.replace(/\b\w/g, l => l.toUpperCase()) : 'Home',
      pageHeight: 1000
    })
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
    const progress = this.state.progress
    const props = this.props
    return (
      <div>
        <Helmet
          title={`Roy Eden Frontend Dev - ${this.state.page} -`}
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
          page={this.state.page}
          pageHeight={this.state.pageHeight}
          progress={progress}
        />
        <main className='layout'>
          {this.props.children({...props, mobile, progress})}
        </main>
        {/* <Footer /> */}
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
