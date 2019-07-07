import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    const divStyle = {
      backgroundColor: 'gray',
    };
    
    const niStyle = {
      color: 'white',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: '-1px',
      fontSize: '14px'
    };
    
    
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
        style={divStyle}
      >
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
          
            <div className="navbar-end has-text-centered">
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="#" style={niStyle}>
                About
              </Link>
              <Link className="navbar-item" to="#" style={niStyle}>
                Featured Films
              </Link>
              <Link className="navbar-item" to="#" style={niStyle}>
                Curent Project
              </Link>
              <Link className="navbar-item" to="#" style={niStyle}>
                Contact
              </Link>
              <Link className="navbar-item" to="#" style={niStyle}>
                Donate
              </Link>
            </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
