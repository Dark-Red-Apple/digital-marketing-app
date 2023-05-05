import { useContext, useEffect } from "react"
import "../assets/styles/index.scss"
import HomeSlider from "./HomeSliderBanner"
import HomeAboutUs from "./HomeAboutUs"
import Testimonials from "./Testimonials"
import HomeServices from "./HomeServices"
import DispatchContext from "../DispatchContext"

// import Page from "./Page"

function HomePage() {
  const appDispatch = useContext(DispatchContext)
  useEffect(() => {
    appDispatch({ type: "title", value: "Home" })
  }, [])
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
