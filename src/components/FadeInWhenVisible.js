// import { useRef } from "react"
import { motion } from "framer-motion"

function FadeInWhenVisible({ children, scrollRef, transitionDelay, oncePlay }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: oncePlay, root: scrollRef }}
      transition={{ duration: 0.7, delay: transitionDelay }}
      variants={{
        visible: { opacity: 1, transform: "translateY(0)" },
        hidden: { opacity: 0, transform: "translateY(100px)" },
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisible
