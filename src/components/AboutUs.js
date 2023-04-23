import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import AliceCarousel from "react-alice-carousel"
import cocoImage from "../assets/images/coco.png"
import darkRedAppleImage from "../assets/images/dark-red-apple.jpg"

function AboutUs() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={12} xs={12} className="text-center">
            {" "}
            <h1>Learn More About us</h1>
          </Col>
          <Col lg={8} xs={12} className=" mx-auto mt-5">
            <p>Welcome to Digital Marketing App, where we specialize in giving you the best online presence. </p>
            <p>Our company was founded in 2023 with a vision to provide innovative solutions that improve the lives of our customers, while upholding our commitment to ethical and sustainable business practices. </p>
            <p>We aim to exceed expectations through exceptional customer service and continuous improvement, and to create a positive impact on our communities and the world at large. We are passionate about helping small and larger companies to find their target audience and give them the best digital experience. </p>
            <p>At Digital Marketing App, we pride ourselves on providing the best solution for your business to be seen and we take pride to do this through the best customer service. Our team is made up of dedicated professionals who have SEO and Web programming skills, and we are committed to delivering the digital marketing strategies you need to grow.</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <h2 className="text-center">Our Team</h2>
          <AliceCarousel
            className="mt-4"
            mouseTracking
            responsive={{
              0: { items: 1 },
              769: { items: 2, itemsFit: "contain" },
              1024: {
                items: 3,
                itemsFit: "contain",
              },
            }}
            touchMoveDefaultEvents={false}
            disableButtonsControls
            disableDotsControls
          >
            <div className="text-center">
              <div className="overflow-hidden dma-team__image mb-5 mx-auto">
                <img src={darkRedAppleImage} />
                <p className="d-flex justify-content-center align-items-center">
                  <a>Learn More</a>
                </p>
              </div>
              <div>
                <h4 className="mb-3">Dark Red Apple</h4>
                <p>React JS, Javascript, Wordpress, SEO, postgres, HTML/CSS </p>
              </div>
            </div>
            <div className="text-center">
              <div className="overflow-hidden dma-team__image mb-5 mx-auto">
                <img />
                <p className="d-flex justify-content-center align-items-center">
                  <a>Learn More</a>
                </p>
              </div>
              <div>
                <h4 className="mb-3">Ali</h4>
                <p>React JS, .Net </p>
              </div>
            </div>
            <div className="text-center">
              <div className="overflow-hidden dma-team__image mb-5 mx-auto">
                <img src={cocoImage} />
                <p className="d-flex justify-content-center align-items-center">
                  <a>Learn More</a>
                </p>
              </div>
              <div>
                <h4 className="mb-3">Coco</h4>
                <p>Web Design, Content Creator </p>
              </div>
            </div>
          </AliceCarousel>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
