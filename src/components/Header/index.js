import React, { Component } from 'react'
import Link from 'gatsby-link'
import Nav from './nav'
import MenuButton from './menu-button'
import icon from '../../img/icon.png'

class Header extends Component {
  constructor () {
    super()

    this.state = {
      mobile: false,
      menuOpen: null,
      page: 0
    }
  }

  componentWillMount () {
    this.setState({menuOpen: null})
    window.addEventListener('resize', () => this.resize())
    this.resize()
  }

  resize () {
    this.setState({mobile: window.innerWidth <= 768})
  }

  handleMenu (open) {
    this.setState({menuOpen: open})
  }

  changePage (v) {
    this.setState({page: v})
    // this.handleMenu(false)
  }

  render () {
    const menuOpen = this.state.menuOpen
    const mobile = this.state.mobile
    const page = this.state.page
    return (
      <header className='header'>
        <div className='header-bar'>
          <Link
            to='/'
          >
            <img
              className='logo'
              onClick={() => this.changePage(0)}
              src={icon}
            />
          </Link>
          {mobile &&
            (
              <div className='button-container'>
                <MenuButton
                  handleClick={() => this.handleMenu(!menuOpen)}
                  open={menuOpen}
                  status={menuOpen}
                />
              </div>
            )
          }
          {!mobile &&
            (
              <Nav
                changePage={(v) => this.changePage(v)}
                mobile={mobile}
                page={page}
              />
            )
          }
        </div>
        {mobile &&
          (
            <Nav
              changePage={(v) => this.changePage(v)}
              mobile={mobile}
              page={page}
              status={menuOpen}
            />
          )
        }
      </header>
    )
  }
}

export default Header
