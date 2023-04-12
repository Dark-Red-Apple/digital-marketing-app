// import logo from "../assets/images/logo.svg";
// import "../assets/styles/App.css"
import "../assets/styles/index.scss"
import HomeSlider from "./HomeSlider"
import HomeAboutUs from "./HomeAboutUs"
import Testimonials from "./Testimonials"
import HomeServices from "./HomeServices"

// import Page from "./Page"

function HomePage() {
  return (
    <div className="dma-app">
      <HomeSlider />
      <HomeAboutUs />
      <HomeServices />
      <Testimonials />
    </div>
  )
}

export default HomePage
