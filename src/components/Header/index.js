import React, { Component } from 'react'
import Link from 'gatsby-link'
import Nav from './nav'
import MenuButton from './menu-button'
import icon from '../../img/icon.png'

const Header = ({changePage, handleMenu, menuOpen, mobile, page, pages, pageHeight, progress}) => (
  <header className='header'>
    <progress
      className={`read-progress ${mobile ? 'mobile' : 'common'}`}
      max={pageHeight}
      value={progress}
    />
    <div className={`header-bar ${mobile ? 'mobile' : 'mobile'}`}>
      <Link
        to='/'
      >
        <img
          className='logo'
          onClick={() => changePage(0)}
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
            changePage={(page) => changePage(page)}
            mobile={mobile}
            page={page}
            pages={pages}
          />
        )
      }
    </div>
    {mobile &&
      (
        <Nav
          changePage={(page) => changePage(page)}
          mobile={mobile}
          page={page}
          pages={pages}
          status={menuOpen}
        />
      )
    }
  </header>
)

export default Header
