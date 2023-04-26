import { useEffect, useContext } from "react"
import DispatchContext from "../DispatchContext"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { useLocation, useNavigate } from "react-router-dom"

function Modal({ isOpen, setIsOpen, setModalType, modalType, children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const appDispatch = useContext(DispatchContext)

  function updateUrl(name, url) {
    window.history.pushState(name, null, url)
  }

  function handlePopstate(e) {
    const path = window.location.pathname
    if (path === "/login" && modalType !== "login" && isOpen) {
      navigate(location.pathname)
      setModalType("login")

      setIsOpen(true)
    } else if (path === "/register" && modalType !== "register" && isOpen) {
      navigate(location.pathname)
      setModalType("register")

      setIsOpen(true)
    } else {
      setIsOpen(false)
      setModalType("")
      // appDispatch({ type: "title", value: "dfdf" })
    }

    e.stopPropagation()
    e.preventDefault()
  }
  const variants = {
    open: { opacity: 1, display: "block" },
    hidden: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  }
  const scaleVariants = {
    open: { transform: "scale(1)" },
    hidden: {
      transform: "scale(0.75)",
    },
  }
  const closeModal = () => {
    setModalType("")
    setIsOpen((isOpen) => !isOpen)
  }
  useEffect(() => {
    // alert(modalType)
    if (modalType === "login") {
      var foo = { foo: true }
      updateUrl(foo, `/${modalType}`)
      // if we don't have else it wont work properly!
    } else if (modalType === "register") {
      var boo = { boo: true }
      updateUrl(boo, `/${modalType}`)
    } else {
      var too = { too: true }
      updateUrl(too, location.pathname)
    }

    // Add event listener for popstate event
    window.addEventListener("popstate", handlePopstate)

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handlePopstate)
    }
  }, [modalType])

  return (
    <motion.section className="dma-modal p-lg-5 p-1" initial={{ opacity: 0 }} animate={isOpen ? "open" : "hidden"} variants={variants}>
      <motion.div className="dma-modal__content p-lg-5 p-1 py-5 py-md-1" animate={isOpen ? "open" : "hidden"} variants={scaleVariants}>
        <div className="dma-modal__close" onClick={closeModal}>
          <FontAwesomeIcon icon={icon({ name: "times" })} />
        </div>
        {children}
      </motion.div>
    </motion.section>
  )
}

export default Modal
