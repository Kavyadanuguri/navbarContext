// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notBgCon = !isDarkTheme ? 'not-bg-container' : 'not-bg-container1'

      const text = !isDarkTheme ? 'not-p1' : 'not-p11'
      return (
        <>
          <Navbar />
          <div className={notBgCon}>
            <img
              className="not-img"
              alt="not found"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            />
            <h1 className="not-h1">Lost your way ? </h1>
            <p className={text}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
