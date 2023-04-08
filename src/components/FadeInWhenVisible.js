import { useRef } from "react"
import { motion, useScroll } from "framer-motion"

function FadeInWhenVisible({ children, scrollRef, transitionDelay }) {
  const { scrollYProgress } = useScroll()
  // const scrollRef = useRef(null)

  return (
    // <div ref={scrollRef} style={{}}>
    //   <motion.div initial={{ opacity: 0, transform: "translate(0, -500px)" }} whileInView={{ opacity: 1, transform: "translate(0, 0)" }} transition={{ duration: 5 }} viewport={{ once: true, root: scrollRef }} style={{ width: "500px", height: "500px", background: "black" }} />
    // </div>
    // <div ref={scrollRef} style={{ overflow: "hidden" }}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, root: scrollRef }}
      transition={{ duration: 0.7, delay: transitionDelay }}
      variants={{
        visible: { opacity: 1, transform: "translate(0, 0)" },
        hidden: { opacity: 0, transform: "translate(0, 100px)" },
      }}
      // style={{ width: "500px", height: "500px", background: "black" }}
    >
      {children}
    </motion.div>
    // </div>
  )
}

export default FadeInWhenVisible
