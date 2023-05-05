import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import image1 from "../assets/images/project-image01.jpg"
import image2 from "../assets/images/project-image02.jpg"
import image3 from "../assets/images/project-image03.jpg"
import image4 from "../assets/images/project-image04.jpg"
import image5 from "../assets/images/project-image05.jpg"
import HomeSlide from "./HomeSlide"
import FadeInWhenVisible from  "./utility/FadeInWhenVisible"
import { Container, Row } from "react-bootstrap"

function HomeServices() {
  const items = [<HomeSlide source={image1} content={" lorem 1"} address={""} linkContent={"Ultimate HealthCare"} />, <HomeSlide source={image2} content={" lorem 2"} address={""} linkContent={"Ultimate HealthCare"} />, <HomeSlide source={image3} content={" lorem 3"} address={""} linkContent={"Ultimate HealthCare"} />, <HomeSlide source={image4} content={" lorem 4"} address={""} linkContent={"Ultimate HealthCare"} />, <HomeSlide source={image5} content={" lorem 5"} address={""} linkContent={"Ultimate HealthCare"} />]

  const Gallery = () => {
    return (
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={{
          0: { items: 1 },
          1024: {
            items: 2,
            itemsFit: "contain",
          },
        }}
        disableButtonsControls
        autoPlay={true}
        autoPlayInterval={4000}
        infinite={true}
        touchMoveDefaultEvents={false}
      />
    )
  }
  return (
    <section className="section dma-home-services dma-project">
      <Container fluid={true}>
        <Row>
          <FadeInWhenVisible oncePlay={false}>
            <div>
              <h2>
                Please take a look through our <br />
                <strong>Featured Digital Trends</strong>
              </h2>
            </div>
          </FadeInWhenVisible>
        </Row>

        <Row>
          <FadeInWhenVisible transitionDelay={0.1} oncePlay={false}>
            {Gallery()}
          </FadeInWhenVisible>
        </Row>
      </Container>
    </section>
  )
}

export default HomeServices
