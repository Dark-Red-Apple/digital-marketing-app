import { useState } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
}

const NavAnimation = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div style={{ marginLeft: "auto", width: "50px", height: "50px", color: "white", cursor: "pointer", textAlign: "center", lineHeight: "50px", fontSize: "2rem" }} onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <FontAwesomeIcon icon={icon({ name: "bars" })} style={{ marginRight: "5px" }} />
      </div>
      <motion.div style={{ top: 0, right: 0, color: "black", zIndex: "500", position: "fixed", backgroundColor: "white", height: "100vh", width: "100vw" }} animate={isOpen ? "open" : "closed"} variants={variants}>
        <div style={{ marginLeft: "auto", width: "50px", height: "50px", color: "black", cursor: "pointer", textAlign: "center", lineHeight: "50px", fontSize: "2rem" }} onClick={() => setIsOpen((isOpen) => !isOpen)}>
          <FontAwesomeIcon icon={icon({ name: "times" })} style={{ marginRight: "5px" }} />
        </div>
        {children}
        {/* {isOpen} */}
      </motion.div>
    </>
  )
}

export default NavAnimation
