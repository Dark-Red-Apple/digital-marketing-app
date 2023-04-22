import { useEffect } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { Row, Col } from "react-bootstrap"
import { useLocation } from "react-router-dom"

export default function Modal({ isOpen, setIsOpen, setModalType, modalType, children }) {
  const location = useLocation()

  function updateUrl(url) {
    window.history.pushState(null, null, url)
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
    if (modalType == "login" || modalType == "register") {
      updateUrl(`/${modalType}`)
    } else {
      updateUrl(location.pathname)
    }
  }, [modalType])

  return (
    <motion.section className="dma-modal p-lg-5 p-1" initial={{ opacity: 0 }} animate={isOpen ? "open" : "hidden"} variants={variants}>
      <motion.div className="dma-modal__content p-lg-5 p-1" animate={isOpen ? "open" : "hidden"} variants={scaleVariants}>
        <div className="dma-modal__close" onClick={closeModal}>
          <FontAwesomeIcon icon={icon({ name: "times" })} />
        </div>
        {children}
      </motion.div>
    </motion.section>
  )
}
