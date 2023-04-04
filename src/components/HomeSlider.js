import React from "react"
import workingGirl from "../assets/images/working-girl.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import Container from "./Container"

export default function HomeSlider() {
  return (
    <div className="home-slider slider-main slider-main__bg">
      <Container>
        <div className="slider-main__content-container">
          <div>
            <h1>We are ready for your digital marketing</h1>
            <a className="btn btn__white">Let us discuss together!</a>
            <strong>
              <FontAwesomeIcon icon={icon({ name: "phone" })} style={{ marginRight: "5px" }} />
              +99 080 070 4224
              {/* <i className="fas fa-phone-alt"></i>+99 080 070 4224 */}
            </strong>
          </div>
          <div>
            <img src={workingGirl} alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}
