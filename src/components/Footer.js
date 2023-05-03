import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import FadeInWhenVisible from "./FadeInWhenVisible"
import { Container, Row, Col } from "react-bootstrap"

function Footer() {
  return (
    <section className="dma-footer-section ">
      <Container>
        <div className="dma-footer-section__footer-container">
          <FadeInWhenVisible>
            <div className="dma-footer-section__footer-container__top">
              <Row>
                <Col lg={5} md={4} xs={12}>
                  <div className="dma-footer-section__footer-container__top__brand">
                    <h1>
                      <span> We make creative </span>
                      <br />
                      <strong>brands</strong>
                      <span> only.</span>
                    </h1>
                  </div>
                </Col>

                <Col lg={3} md={4} xs={12}>
                  <div className="mt-5 mt-md-0 dma-footer-section__footer-container__top__contact">
                    <h4>Contact Info</h4>

                    <p>
                      {/* <i class="fa fa-phone mr-2 footer-icon"></i> */}
                      <a href="tel:+99 080 070 4224">
                        <span className="dma-icon me-2 d-inline-block">
                          <FontAwesomeIcon icon={icon({ name: "phone" })} />
                        </span>

                        <span> +1 807 444 ----</span>
                      </a>
                    </p>

                    <p className="mt-2">
                      <a href="mailto:hello@company.com" className="dma-btn dma-btn--yellow">
                        <a className="dma-icon me-2 d-inline-block">
                          <FontAwesomeIcon icon={icon({ name: "envelope" })} />
                        </a>
                        <span> aziaabad@lakeheadu.ca</span>
                      </a>
                    </p>
                  </div>
                </Col>

                <Col lg={4} md={4} xs={12}>
                  <div className="mt-5 mt-md-0 dma-footer-section__footer-container__top__address">
                    <h4>Our Studio</h4>
                    <p>
                      <span className="dma-icon me-1">
                        <FontAwesomeIcon icon={icon({ name: "home" })} />
                      </span>
                      <span> Halifax, </span>
                      Nova Scotia, Canada
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible transitionDelay={0.1} oncePlay={false}>
            <div className="dma-footer-section__footer-container__bottom">
              <Row>
                <Col lg={4} md={4} xs={12}>
                  <div className="dma-footer-section__footer-container__bottom__copyright">
                    <p>
                      Copyright © 2020 Your Company
                      <br />
                      <a className="dma-btn dma-btn--yellow" href="https://github.com/Dark-Red-Apple/digital-marketing-app">
                        Implemented: Dark_Red_Apple&Ali{" "}
                      </a>
                    </p>
                  </div>
                </Col>

                <Col lg={4} md={4} xs={12}>
                  <div className="dma-footer-section__footer-container__bottom__menu">
                    <ul>
                      <li>
                        <a className="dma-btn dma-btn--yellow" href="#">
                          Stories
                        </a>
                      </li>
                      <li>
                        <a className="dma-btn dma-btn--yellow" href="#">
                          Work with us
                        </a>
                      </li>
                      <li>
                        <a className="dma-btn dma-btn--yellow" href="#">
                          Privacy
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={4} md={4} xs={12}>
                  <div className="dma-footer-section__footer-container__bottom__socialnetwork">
                    <ul>
                      <li>
                        <a className=" dma-btn dma-btn--yellow ">
                          <FontAwesomeIcon icon={faBell} />
                        </a>
                      </li>
                      <li>
                        <a className="dma-btn dma-btn--yellow ">
                          <FontAwesomeIcon icon={icon({ name: "envelope" })} />
                        </a>
                      </li>
                      <li>
                        <a className="dma-btn dma-btn--yellow ">
                          <FontAwesomeIcon icon={icon({ name: "phone" })} />
                        </a>
                      </li>
                      <li>
                        <a className="dma-btn dma-btn--yellow ">
                          <FontAwesomeIcon icon={icon({ name: "home" })} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </FadeInWhenVisible>
        </div>
      </Container>
    </section>
  )
}

export default Footer
