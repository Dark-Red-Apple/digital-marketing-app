import MobileMenu from "./MobileMenu"
import { Container, Row, Col } from "react-bootstrap"
import servicesTechnology from "../assets/images/services-technology.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core"
import HeaderUser from "./HeaderUser"

function Header() {
  return (
    <header className="dma-header pt-2 pt-md-0">
      <Container className="p-lg-3">
        <Row>
          <Col xs={6} sm={5} md={4} lg={4}>
            <div className="dma-header__logo dma-btn dma-btn--yellow ">
              <i></i>
              <FontAwesomeIcon icon={icon({ name: "line-chart" })} style={{ marginRight: "5px" }} />
              <a href="/">Market Mission</a>
            </div>
          </Col>
          <Col xs={6} sm={7} md={8} lg={8} className="d-flex justify-content-end align-items-center">
            <div className="dma-header__menu d-none d-lg-block">
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
            <div className="dma-mobile-user d-flex justify-content-center align-items-center">
              <HeaderUser />
            </div>
            <div className="d-lg-none position-relative dma-header-mobile__menu">
              <MobileMenu>
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
              </MobileMenu>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
