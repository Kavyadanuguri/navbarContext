// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navBgClassName = !isDarkTheme ? 'nav-container' : 'nav-bg-container'
      const text = !isDarkTheme ? 'nav-p1' : 'nav-p2'
      const websiteLogo = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
      const btnImg = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

      const displayTheme = () => {
        toggleTheme()
      }
      return (
        <>
          <nav className={navBgClassName}>
            <img alt="website logo" src={websiteLogo} className="nav-logo" />
            <ul className="nav-container1">
              <li className="list-item">
                <Link className="link" to="/">
                  <h1 className={text}>Home</h1>
                </Link>
              </li>

              <li className="list-item">
                <Link className="link" to="/about">
                  <h1 className={text}>About</h1>
                </Link>
              </li>
            </ul>
            <button
              data-testid="theme"
              className="nav-btn"
              onClick={displayTheme}
              type="button"
            >
              <img className="nav-logo" alt="theme" src={btnImg} />
            </button>
          </nav>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
