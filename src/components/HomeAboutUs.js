import { useRef } from "react"
import officeImage from "../assets/images/office.png"
import FadeInWhenVisible from "./FadeInWhenVisible"
import { Container, Row } from "react-bootstrap"

function HomeAboutUs() {
  const scrollRef = useRef(null)
  return (
    <section className="dma-home__about-us pb-0">
      <Container>
        <div className="dma-section-container dma-home__about-us__container">
          <Row>
            <FadeInWhenVisible oncePlay={false}>
              <h2>
                The best
                <strong> Digital Marketing agency </strong>
                in Halifax NS
              </h2>
            </FadeInWhenVisible>
          </Row>

          <Row>
            <FadeInWhenVisible transitionDelay={0.1} oncePlay={false}>
              <p className="">
                Total 5 HTML pages are included in this template from TemplateMo website. Please check 2<a href="blog.html">blog</a>
                pages, <a href="project-detail.html">project</a>
                page, and <a href="contact.html">contact</a>
                page.
                <br />
                <br />
                You are <strong>allowed </strong>
                to use this template for commercial or non-commercial purpose. You are NOT allowed to redistribute the template ZIP file on template collection websites.
              </p>
            </FadeInWhenVisible>
          </Row>

          <Row>
            <FadeInWhenVisible transitionDelay={0.2} oncePlay={false}>
              <div className="dma-home__about-us__container__about__image">
                <img src={officeImage} alt="office" />
              </div>
            </FadeInWhenVisible>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default HomeAboutUs
