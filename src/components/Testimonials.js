import React from "react"
import Container from "./Container"
import FemaleAvatar from "../assets/images/female-avatar.png"
import FadeInWhenVisible from "./FadeInWhenVisible"

export default function Testimonials() {
  return (
    <div className="dma-testimonials-section">
      <Container>
        <div className="dma-testimonials-section__testimonials-container">
          <FadeInWhenVisible>
            <div>
              <img src={FemaleAvatar} alt="" />
            </div>
          </FadeInWhenVisible>
          <div>
            <FadeInWhenVisible>
              <h4>CLIENT TESTIMONIALS</h4>
            </FadeInWhenVisible>
            <FadeInWhenVisible transitionDelay={0.1}>
              <div className="dma-quote"></div>
            </FadeInWhenVisible>
            <FadeInWhenVisible transitionDelay={0.2}>
              <h2>Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo.</h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible transitionDelay={0.3}>
              <p>
                <strong>Mary Zoe</strong>

                <span>/</span>

                <small>Digital Agency (CEO)</small>
              </p>
            </FadeInWhenVisible>
          </div>
        </div>
      </Container>
    </div>
  )
}
