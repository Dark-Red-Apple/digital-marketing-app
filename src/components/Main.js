import { useEffect } from "react"
import DispatchContext from "../DispatchContext"
import { useImmerReducer } from "use-immer"
import Header from "./Header"
import Footer from "./Footer"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from "./HomePage"
import ContactUs from "./ContactUs"
import BlogCategory from "./BlogCategory"
import AboutUs from "./AboutUs"
import Services from "./Services"
import NotFound from "./NotFound"
import BlogDetail from "./BlogDetail"
import Login from "./Login"
import Register from "./Register"

function Main() {
  const initialState = {
    title: "",
    message: {
      content: "",
      type: "",
    },
  }
  const reducerFunc = (draft, action) => {
    switch (action.type) {
      case "title":
        draft.title = action.value
        return
    }
  }
  const [state, dispatch] = useImmerReducer(reducerFunc, initialState)

  useEffect(() => {
    document.title = `Market Mission - ${state.title}`
  }, [state.title])

  return (
    <DispatchContext.Provider value={dispatch}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<BlogCategory />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DispatchContext.Provider>
  )
}

export default Main
