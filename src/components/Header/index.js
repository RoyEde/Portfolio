import React, { Component } from 'react'
import Link from 'gatsby-link'
import Nav from './nav'
import MenuButton from './menu-button'
import icon from '../../img/icon.png'

class Header extends Component {
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

  changePage (v) {
    this.setState({
      page: v,
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
    const menuOpen = this.state.menuOpen
    const mobile = this.state.mobile
    const page = this.state.page
    return (
      <header className='header'>
        <progress
          className={`read-progress ${mobile ? 'mobile' : 'common'}`}
          max={this.state.pageHeight}
          value={this.state.progress}
        />
        <div className={`header-bar ${mobile ? 'mobile' : 'mobile'}`}>
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
