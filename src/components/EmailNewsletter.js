import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import newsLetter from "../assets/images/newsletter.png"
import FadeInWhenVisible from "./FadeInWhenVisible"

function EmailNewsletter() {
  return (
    <Row className="dma-news-letter__main mt-5 p-lg-5 pt-5 justify-content-center">
      <Col xs={12} md={5}>
        <FadeInWhenVisible>
          <img src={newsLetter} alt="" />
        </FadeInWhenVisible>
      </Col>
      <Col xs={12} md={5}>
        <FadeInWhenVisible transitionDelay={0.1}>
          <h4>Email NewsLetter</h4>
        </FadeInWhenVisible>
        <FadeInWhenVisible transitionDelay={0.2}>
          <h2>Let’s stay up-to-date. We'll share you all good stuffs.</h2>
        </FadeInWhenVisible>

        <form>
          <FadeInWhenVisible transitionDelay={0.3}>
            <div className="dma-form-group mt-4">
              <input onChange type="email" placeholder="Please enter your email" />
              <small className="text-muted">We'll NOT share your email address to anyone else.</small>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible transitionDelay={0.4}>
            <div className="dma-form-group mt-4 d-flex">
              <input type="checkbox" name="monthly" />
              <label htmlFor="monthly">Please send me a monthly newspaper.</label>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible transitionDelay={0.5}>
            <button className="dma-btn dma-btn__bg-yellow">Sign up</button>
          </FadeInWhenVisible>
        </form>
      </Col>
    </Row>
  )
}

export default EmailNewsletter
