import React from "react";
import FemaleAvatar from "../assets/images/female-avatar.png";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { Container, Row, Col } from "react-bootstrap";

export default function Testimonials() {
  return (
    <section className="dma-testimonials-section">
      <Container>
        <Row>
          {/* <div className="dma-testimonials-section__testimonials-container"> */}
            <Col lg={6} xs={12} md={6}>
              <FadeInWhenVisible>
                <div className="dma-testimonials-section__img">
                  <img src={FemaleAvatar} alt="" />
                </div>
              </FadeInWhenVisible>
            </Col>

            <Col lg={6} xs={12} md={6}>
              <div className="dma-testimonials-section__content">
                <FadeInWhenVisible>
                  <h4>CLIENT TESTIMONIALS</h4>
                </FadeInWhenVisible>
                <FadeInWhenVisible transitionDelay={0.1}>
                  <div className="dma-quote"></div>
                </FadeInWhenVisible>
                <FadeInWhenVisible transitionDelay={0.2}>
                  <h2>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                    incididunt mollit id et sit proident dolor nulla sed
                    commodo.
                  </h2>
                </FadeInWhenVisible>
                <FadeInWhenVisible transitionDelay={0.3}>
                  <p>
                    <strong>Mary Zoe</strong>

                    <span>/</span>

                    <small>Digital Agency (CEO)</small>
                  </p>
                </FadeInWhenVisible>
              </div>
            </Col>
          {/* </div> */}
        </Row>
      </Container>
    </section>
  );
}
