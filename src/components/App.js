import logo from "../assets/images/logo.svg"
// import "../assets/styles/App.css"
import "../assets/styles/index.scss"
import Header from "./Header.js"
import HomeSlider from "./HomeSlider"
import HomeAboutUs from "./HomeAboutUs"
import HomeServices from "./HomeServices"

// import Page from "./Page"

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSlider />
      <HomeAboutUs />
      <HomeServices />
    </div>
  )
}

export default App
