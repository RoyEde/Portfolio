import React from 'react'

const Footer = ({mobile}) => (
  <footer className={`${mobile ? 'mobile' : 'common'}`}>
    <span className='copryright'>©</span>
  </footer>
)

export default Footer
