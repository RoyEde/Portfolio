import React from 'react'
import Link from 'gatsby-link'
import Nav from './nav'
import MenuButton from './menu-button'
import icon from '../../img/icon.png'

const Header = ({handleMenu, menuOpen, mobile, page, pageHeight, progress}) => (
  <header className='header'>
    <progress
      className={`read-progress ${mobile ? 'mobile' : 'common'}`}
      max={pageHeight}
      value={progress}
    />
    <div className={`header-bar ${mobile ? 'mobile' : 'common'}`}>
      <Link
        to='/'
      >
        <img
          className='logo'
          src={icon}
        />
      </Link>
      {mobile &&
        (
          <div className='button-container'>
            <MenuButton
              handleClick={() => handleMenu(!menuOpen)}
              open={menuOpen}
              status={menuOpen}
            />
          </div>
        )
      }
      {!mobile &&
        (
          <Nav
            mobile={mobile}
            page={page}
          />
        )
      }
    </div>
    {mobile &&
      (
        <Nav
          mobile={mobile}
          page={page}
          status={menuOpen}
        />
      )
    }
  </header>
)

export default Header
