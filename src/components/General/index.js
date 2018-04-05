import React from 'react'
import Link from 'gatsby-link'

const CustomLink = ({content, customClass, link}) => (
  <a
    className={customClass}
    href={link}
    rel='noopener noreferrer'
    target='_blank'
  >
    {content}
  </a>
)

const CustomPage = ({content, customClass, page}) => (
  <Link
    className={customClass}
    to={`/${page !== 'Home' ? page.toLowerCase() : ''}`}
  >
    {content}
  </Link>
)

const Highlight = ({mobile, text, inView}) => (
  <span
    className={`highlight ${mobile ? 'secondary' : 'primary'}`}
    // className={inView ? `highlight ${mobile ? 'secondary' : 'primary'}` : ''}
  >
    {text}
  </span>
)

const Icon = ({link, mobile, src}) => (
  <CustomLink
    content={(
      <img className={`icon ${mobile ? 'mobile' : 'common'}`} src={src} />
    )}
    link={link}
    mobile={mobile}
    styleClass='link img'
  />
)

export { CustomLink, CustomPage, Highlight, Icon }
