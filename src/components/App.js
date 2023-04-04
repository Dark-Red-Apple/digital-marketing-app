import logo from "../assets/images/logo.svg"
import "../assets/styles/App.css"
import "../assets/styles/index.scss"
import Header from "./Header.js"
import HomeSlider from "./HomeSlider"
// import Container from "./Container"
import Page from "./Page"

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSlider />
    </div>
  )
}

export default App
