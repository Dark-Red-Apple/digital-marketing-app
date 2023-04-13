import { useState } from "react"
// import { Container } from "react-bootstrap"
import NavAnimation from "./NavAnimation"
import { Container, Row, Col } from "react-bootstrap"
import servicesTechnology from "../assets/images/services-technology.jpg"

export default function Header() {
  return (
    <header className="dma-header">
      <Container className="p-lg-3">
        <Row>
          <Col xs={8} sm={6} md={6} lg={4}>
            <div className="dma-header__logo dma-btn dma-btn--yellow">
              <i></i>
              <a href="./">Digital Trend</a>
            </div>
          </Col>
          <Col lg={8} className="d-none d-lg-block">
            <div className="dma-header__menu">
              <nav className="dma-nav-links">
                <li className="dma-btn dma-btn--yellow">
                  <a>Home</a>
                </li>
                <li className="dma-btn dma-btn--yellow">
                  <a>Blog</a>
                </li>
                <li className="dma-btn dma-btn--yellow">
                  <a>About us</a>
                </li>
                <li>
                  <a className="dma-btn dma-btn__yellow">Contact</a>
                </li>
              </nav>
            </div>
          </Col>
          <Col xs={4} sm={6} md={6} className="d-lg-none position-relative dma-header-mobile__menu">
            <NavAnimation>
              <nav className="dma-nav-links">
                <li className="dma-btn dma-btn--yellow">
                  <a>Home</a>
                </li>
                <li className="dma-btn dma-btn--yellow">
                  <a>Blog</a>
                </li>
                <li className="dma-btn dma-btn--yellow">
                  <a>About us</a>
                </li>
                <li>
                  <a className="dma-btn dma-btn__yellow">Contact</a>
                </li>
              </nav>
              <div className="dma-header-mobile__menu__promotion-images">
                <img src={servicesTechnology} />
              </div>
            </NavAnimation>
          </Col>
        </Row>
      </Container>
    </header>
  )
}
