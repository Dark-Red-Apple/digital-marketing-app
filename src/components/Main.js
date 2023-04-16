import Header from "./Header"
import Footer from "./Footer"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from "./HomePage"
import ContactUs from "./ContactUs"
import BlogCategory from "./BlogCategory"
import AboutUs from "./AboutUs"
import Services from "./Services"
// import Navigation2 from "./Navigation2"

function Main() {
  return (
    <>
      {/* <Navigation2 /> */}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<BlogCategory />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default Main
