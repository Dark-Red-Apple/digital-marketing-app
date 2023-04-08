// import logo from "../assets/images/logo.svg";
// import "../assets/styles/App.css"
import "../assets/styles/index.scss"
import Header from "./Header.js"
import HomeSlider from "./HomeSlider"
import HomeAboutUs from "./HomeAboutUs"
import Testimonials from "./Testimonials"
import HomeServices from "./HomeServices"
import Footer from "./Footer"
import FadeInWhenVisible from "./FadeInWhenVisible"

// import Page from "./Page"

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSlider />
      {/* <FadeInWhenVisible> */}
      <HomeAboutUs />
      {/* </FadeInWhenVisible> */}

      {/* <FadeInWhenVisible /> */}
      {/* <FadeInWhenVisible> */}
      <HomeServices />
      {/* </FadeInWhenVisible> */}

      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
