import React from "react";
import { Row, Col } from "react-bootstrap";
import FadeInWhenVisible from "./FadeInWhenVisible";

function ContactUsForm() {
  return (
    <Row>
      <Col lg={7} sm={12} className="mx-auto mt-5">
        <form className="dma-contact-us-form">
          <Row>
            <Col lg={6} md={6} xs={12}>
              <FadeInWhenVisible>
                <input className="dma-form-control" placeholder="Name" />
              </FadeInWhenVisible>
            </Col>
            <Col lg={6} md={12} xs={12}>
              <FadeInWhenVisible transitionDelay={0.1}>
                <input className="dma-form-control" placeholder="Email" />
              </FadeInWhenVisible>
            </Col>

            <Col xs={12}>
              <FadeInWhenVisible transitionDelay={0.2}>
                <textarea
                  className="dma-form-control"
                  placeholder="Message"
                ></textarea>
              </FadeInWhenVisible>
            </Col>
            <Col xs={12} lg={6} className="mx-auto">
              <FadeInWhenVisible transitionDelay={0.3}>
                <button className="dma-btn dma-btn__green dma-form-control">
                  Submit Comment
                </button>
              </FadeInWhenVisible>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
}
export default ContactUsForm;
