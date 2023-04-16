import { useState } from "react";
// import { Container } from "react-bootstrap"
import NavAnimation from "./NavAnimation";
import { Container, Row, Col } from "react-bootstrap";
import servicesTechnology from "../assets/images/services-technology.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";

export default function Header() {
  return (
    <header className="dma-header pt-2 pt-md-0">
      <Container className="p-lg-3">
        <Row>
          <Col xs={6} sm={5} md={4} lg={4}>
            <div className="dma-header__logo dma-btn dma-btn--yellow">
              <i></i>
              <FontAwesomeIcon
                icon={icon({ name: "line-chart" })}
                style={{ marginRight: "5px" }}
              />
              <a href="./">Digital Trend</a>
            </div>
          </Col>
          <Col xs={6} sm={7} md={8} lg={8} className="d-none d-lg-block">
            <div className="dma-header__menu">
              <nav className="dma-nav-links">
                <li className="dma-btn dma-btn--yellow">
                  <a href="/">Home</a>
                </li>
                <li className="dma-btn dma-btn--yellow">
                  <a href="/blog">Blog</a>
                </li>
                <li className="dma-btn dma-btn--yellow">
                  <a href="/about-us">About us</a>
                </li>
                <li className="dma-btn ">
                  <a className="dma-btn__yellow" href="/contact-us">
                    Contact
                  </a>
                </li>
              </nav>
            </div>
          </Col>
          <Col
            xs={4}
            sm={6}
            md={6}
            className="d-lg-none position-relative dma-header-mobile__menu"
          >
            <NavAnimation>
              <nav className="dma-nav-links">
                <li className="dma-btn dma-btn--yellow">
                  <a href="/">Home</a>
                </li>
                <li className="dma-btn dma-btn--yellow">
                  <a href="/blog">Blog</a>
                </li>
                <li className="dma-btn dma-btn--yellow">
                  <a href="/about-us">About us</a>
                </li>
                <li className="dma-btn dma-btn--yellow">
                  <a href="/contact-us">Contact</a>
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
  );
}
