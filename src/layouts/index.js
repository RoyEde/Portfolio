import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
// import Footer from '../components/Footer'
import favicon from '../img/favicon.png'

import './index.css'
import './styles.css'

const TemplateWrapper = ({ children }) => (
  <main>
    <Helmet
      title='Roy Eden -Front End Dev-'
      meta={[
        { name: 'description', content: `Roy Eden's Portfolio Page` },
        { name: 'keywords', content: '' }
      ]}
      link={[
        {rel: 'shortcut icon', type: 'image/png', href: favicon}
      ]}
    />
    <Header />
    <div className='layout'>
      {children()}
    </div>
    {/* <Footer /> */}
  </main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
