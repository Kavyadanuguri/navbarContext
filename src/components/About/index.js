// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBgCon = !isDarkTheme
        ? 'above-bg-container'
        : 'above-bg-container1'
      const aboutImg = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

      const text = !isDarkTheme ? 'above-h1' : 'above-h11'

      return (
        <>
          <Navbar />
          <div className={aboutBgCon}>
            <img className="above-img" alt="about" src={aboutImg} />
            <h1 className={text}>Above</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
