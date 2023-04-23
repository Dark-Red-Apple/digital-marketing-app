import { useContext, useEffect } from "react"
import DispatchContext from "../DispatchContext"
import { Container, Row, Col } from "react-bootstrap"
import EmailNewsletter from "./EmailNewsletter"
import FadeInWhenVisible from "./FadeInWhenVisible"
// images = []
import blogImage1 from "../assets/images/blog-header-image.jpg"
import blogImage2 from "../assets/images/blog-sidebar-image.jpg"
import blogImage3 from "../assets/images/blog-sidebar-image01.jpg"
import blogImage4 from "../assets/images/blog-sidebar-image02.jpg"

function Blog() {
  const appDispatch = useContext(DispatchContext)
  useEffect(() => appDispatch({ type: "title", value: "Blog" }))

  return (
    <>
      <section className="dma-blog">
        <Container>
          <Row className="mb-4">
            <FadeInWhenVisible>
              <div className=" py-5 text-center">
                <h1 className="mb-4">Digital Trend Blog</h1>
              </div>
            </FadeInWhenVisible>

            <Col lg={7} md={12} xs={12} className="mb-4">
              <FadeInWhenVisible transitionDelay={0.1}>
                <div className="dma-blog__header">
                  <img src={blogImage1} />
                  <div className="dma-blog__header__info">
                    <h4 className="text-uppercase text-info">Creative</h4>
                    <h3>
                      <a className="dma-btn--yellow" href="/blog/0">
                        The Key to Creative Work is Knowing When to Walk Away
                      </a>
                    </h3>
                  </div>
                </div>
              </FadeInWhenVisible>
            </Col>
            <Col lg={5} md={12} xs={12} className="mb-4">
              <div className="dma-blog__sidebar">
                <FadeInWhenVisible transitionDelay={0.2}>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={blogImage2} className="img-fluid" />
                    <div className="dma-blog__sidebar__info">
                      <h4 className="text-uppercase text-danger">Design</h4>
                      <h3 className="dma-btn dma-btn--yellow">
                        <a href="/blog/0">Why Truly Accessible Design Benefits Everyone</a>
                      </h3>
                    </div>
                  </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible transitionDelay={0.3}>
                  <div className="py-4 d-flex justify-content-center align-items-center">
                    <img src={blogImage3} className="img-fluid" />
                    <div className="dma-blog__sidebar__info">
                      <h4 className="text-uppercase text-success">Lifestyle</h4>
                      <h3 className="dma-btn dma-btn--yellow">
                        <a href="/blog/0">Be Humble About What You Know</a>
                      </h3>
                    </div>
                  </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible transitionDelay={0.4}>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={blogImage4} className="img-fluid" />
                    <div className="dma-blog__sidebar__info">
                      <h4 className="text-uppercase text-primary">Coding</h4>
                      <h3 className="dma-btn dma-btn--yellow">
                        <a href="/blog/0">The Mistakes I Made As a Coding Beginner</a>
                      </h3>
                    </div>
                  </div>
                </FadeInWhenVisible>
              </div>
            </Col>
          </Row>
          <EmailNewsletter />
        </Container>
      </section>
    </>
  )
}

export default Blog
