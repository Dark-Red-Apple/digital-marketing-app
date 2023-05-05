// import { useRef } from "react"
import { motion } from "framer-motion"

function FadeInWhenVisible({ children, scrollRef, transitionDelay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      animate="hidden"
      whileInView="visible"
      viewport={{ once: true, root: scrollRef }}
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
