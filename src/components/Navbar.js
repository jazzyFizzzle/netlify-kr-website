import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/youtube-symbol.svg'


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
              <Link className="navbar-item" to="/#" style={niStyle}>
                Home
              </Link>
              <Link className="navbar-item" to="/about" style={niStyle}>
                About
              </Link>
              <Link className="navbar-item" to="/past-films" style={niStyle}>
                Past Films
              </Link>
              <Link className="navbar-item" to="/current-project" style={niStyle}>
                Curent Project
              </Link>
              <Link className="navbar-item" to="/contact" style={niStyle}>
                Contact
              </Link>
              <Link className="navbar-item" to="/donate" style={niStyle}>
                Donate
              </Link>
              <div className="column is-4 social" style={{position: 'relative', top: 10}}>
                <a title="facebook" href="https://www.facebook.com/RoseProductionsFilms/?modal=admin_todo_tour">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/channel/UClZB5_q3doBaMOpeKwVtxwg?view_as=subscriber">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
