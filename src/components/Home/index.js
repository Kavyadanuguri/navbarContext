// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBgCon = !isDarkTheme
        ? 'home-bg-container'
        : 'home-bg-container1'
      const homeImg = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

      const text = !isDarkTheme ? 'home-h1' : 'home-h11'
      return (
        <div>
          <Navbar />
          <div className={homeBgCon}>
            <img className="home-img" alt="home" src={homeImg} />
            <h1 className={text}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
