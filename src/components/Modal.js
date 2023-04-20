import { useState } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { Row, Col } from "react-bootstrap"

export default function Modal({ isOpen, setIsOpen, children }) {
  const variants = {
    open: { opacity: 1, transform: "scale(1)" },
    hidden: { opacity: 0, transform: "scale(0.3)" },
  }
  return (
    <motion.section className="dma-modal p-lg-5 p-1" initial={{ opacity: 0 }} animate={isOpen ? "open" : "hidden"} variants={variants}>
      <div className="dma-modal__content p-lg-5 p-1">
        <div className="dma-modal__close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
          <FontAwesomeIcon icon={icon({ name: "times" })} />
        </div>
        {children}
      </div>
    </motion.section>
  )
}
