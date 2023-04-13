import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <section className="dma-footer-section ">
      <Container>
        <div className="dma-footer-section__footer-container">
          <FadeInWhenVisible>
            <div className="dma-footer-section__footer-container__top">
              <Row>
                <Col lg={4} md={4} xs={12}>
                  <div className="dma-footer-section__footer-container__top__brand">
                    <h1>
                      <span> We make creative </span>
                      <br />
                      <strong>brands</strong>
                      <span> only.</span>
                    </h1>
                  </div>
                </Col>

                <Col lg={4} md={4} xs={12}>
                  <div className="dma-footer-section__footer-container__top__contact">
                    <h4>Contact Info</h4>

                    <p>
                      {/* <i class="fa fa-phone mr-2 footer-icon"></i> */}
                      <a href="tel:+99 080 070 4224">
                        <span className="icon">
                          <FontAwesomeIcon icon={icon({ name: "phone" })} />
                        </span>

                        <span> +99 080 070 4224</span>
                      </a>
                    </p>

                    <p>
                      <a href="mailto:hello@company.com">
                        <span className="icon">
                          <FontAwesomeIcon icon={icon({ name: "envelope" })} />
                        </span>
                        <span> hello@company.com</span>
                      </a>
                    </p>
                  </div>
                </Col>

                <Col lg={4} md={4} xs={12}>
                  <div className="dma-footer-section__footer-container__top__address">
                    <h4>Our Studio</h4>
                    <p>
                      <span className="dma-icon">
                        <FontAwesomeIcon icon={icon({ name: "home" })} />
                      </span>
                      <span> Av. Lúcio Costa - Barra da </span>
                      <br />
                      Tijuca, Rio de Janeiro - RJ,
                      <br /> Brazil
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
                      <a href="https://templatemo.com">Design: TemplateMo</a>
                    </p>
                  </div>
                </Col>

                <Col lg={4} md={4} xs={12}>
                  <div className="dma-footer-section__footer-container__bottom__menu">
                    <ul>
                      <li>
                        <a href="#">Stories</a>
                      </li>
                      <li>
                        <a href="#">Work with us</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={4} md={4} xs={12}>
                  <div className="dma-footer-section__footer-container__bottom__socialnetwork">
                    <ul>
                      <li>
                        <span className="dma-icon">
                          <FontAwesomeIcon icon={faBell} />
                        </span>
                      </li>
                      <li>
                        <span className="dma-icon">
                          <FontAwesomeIcon icon={icon({ name: "envelope" })} />
                        </span>
                      </li>
                      <li>
                        <span className="dma-icon">
                          <FontAwesomeIcon icon={icon({ name: "phone" })} />
                        </span>
                      </li>
                      <li>
                        <span className="dma-icon">
                          <FontAwesomeIcon icon={icon({ name: "home" })} />
                        </span>
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
  );
}

export default Footer;
