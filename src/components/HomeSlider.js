import React from "react"
import workingGirl from "../assets/images/working-girl.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { Container, Row, Col } from "react-bootstrap"
import FadeInWhenVisible from  "./utility/FadeInWhenVisible"

function HomeSlider() {
  return (
    <div className="dma-home-slider dma-slider-main dma-slider-main__bg">
      <Container className="dma-slider-main__content-container">
        <Row>
          <Col xs={12} md={12} lg={6}>
            <div>
              <FadeInWhenVisible oncePlay={true}>
                <h1>We are ready for your digital marketing</h1>
              </FadeInWhenVisible>
              <FadeInWhenVisible transitionDelay={0.1} oncePlay={true}>
                <a className="dma-btn dma-btn__white">Let us discuss together!</a>
              </FadeInWhenVisible>
              <FadeInWhenVisible transitionDelay={0.2} oncePlay={true}>
                <strong>
                  <FontAwesomeIcon icon={icon({ name: "phone" })} style={{ marginRight: "5px" }} />
                  +99 080 070 4224
                  {/* <i className="fas fa-phone-alt"></i>+99 080 070 4224 */}
                </strong>
              </FadeInWhenVisible>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div>
              <FadeInWhenVisible transitionDelay={0.3} oncePlay={true}>
                <img src={workingGirl} alt="" />
              </FadeInWhenVisible>
            </div>
          </Col>
        </Row>
        <div className="dma-slider-main__content-container"></div>
      </Container>
    </div>
  )
}

export default HomeSlider
