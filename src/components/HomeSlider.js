import React from "react"
import workingGirl from "../assets/images/working-girl.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import Container from "./Container"
import FadeInWhenVisible from "./FadeInWhenVisible"

export default function HomeSlider() {
  return (
    <div className="home-slider slider-main slider-main__bg">
      <Container>
        <div className="slider-main__content-container">
          <div>
            <FadeInWhenVisible>
              <h1>We are ready for your digital marketing</h1>
            </FadeInWhenVisible>
            <FadeInWhenVisible transitionDelay={0.1}>
              <a className="btn btn__white">Let us discuss together!</a>
            </FadeInWhenVisible>
            <FadeInWhenVisible transitionDelay={0.2}>
              <strong>
                <FontAwesomeIcon icon={icon({ name: "phone" })} style={{ marginRight: "5px" }} />
                +99 080 070 4224
                {/* <i className="fas fa-phone-alt"></i>+99 080 070 4224 */}
              </strong>
            </FadeInWhenVisible>
          </div>
          <div>
            <FadeInWhenVisible transitionDelay={0.3}>
              <img src={workingGirl} alt="" />
            </FadeInWhenVisible>
          </div>
        </div>
      </Container>
    </div>
  )
}
