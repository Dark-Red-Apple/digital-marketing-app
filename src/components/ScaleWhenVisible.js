import { motion } from "framer-motion"

function ScaleWhenVisible({ children, scrollRef, transitionDelay, oncePlay }) {
  return (
    <motion.div
      initial="hidden"
      animate="hidden"
      whileInView="visible"
      viewport={{ once: true, root: scrollRef }}
      transition={{ duration: 0.7, delay: transitionDelay }}
      variants={{
        visible: { opacity: 1, transform: "scale(1)" },
        hidden: { opacity: 0, transform: "scale(0.5)" },
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScaleWhenVisible
