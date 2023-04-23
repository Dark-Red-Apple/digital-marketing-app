import { useContext, useEffect } from "react"
import DispatchContext from "../DispatchContext"
import { Container, Row, Col } from "react-bootstrap"
import authorAvatar from "../assets/images/male-avatar.png"
import postImg from "../assets/images/blog-header-image.jpg"
import FadeInWhenVisible from "./FadeInWhenVisible"
import ScaleWhenVisible from "./ScaleWhenVisible"
import BlogCommentForm from "./BlogCommentForm"

function BlogDetail() {
  const appDispatch = useContext(DispatchContext)

  useEffect(() => {
    appDispatch({ type: "title", value: "Blog Detail" })
  }, [])

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg={8} xs={12} className=" mx-auto mt-4">
              <div className="d-flex align-items-center flex-column">
                <FadeInWhenVisible>
                  <h3 className="text-center text-info">Creative Work</h3>
                </FadeInWhenVisible>
                <FadeInWhenVisible transitionDelay={0.1}>
                  <h1 className="text-center">9 useful things to learn and practice for your digital marketing</h1>
                  <div className="dma-client-info d-flex justify-content-center align-items-center mt-3">
                    <img className="img-fluid " src={authorAvatar} />
                    <p>Sweet Candy</p>
                  </div>
                </FadeInWhenVisible>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ScaleWhenVisible>
        <div className="dma">
          <img className="img-fluid p-0 w-100" src={postImg} alt="" />
        </div>
      </ScaleWhenVisible>
      <section>
        <Container>
          <Row className="mb-5">
            <FadeInWhenVisible>
              <Col lg={8} xs={12} className=" mx-auto ">
                {/* <p> */}
                <h2>Etiam quis metus elementum, tempor risus vel, condimentum orci.</h2>
                <p>Mauris in convallis nunc, non facilisis arcu. Nunc sapien nulla, interdum at diam non, aliquam vestibulum leo. Fusce laoreet malesuada ante, consectetur consequat ante tempor et. Quisque ac risus ligula. </p>
                <p>Suspendisse bibendum tortor at est placerat auctor. Phasellus tortor est, bibendum eu ex eu, tincidunt efficitur nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p>
                  <ul className="dma-list-group-yellow py-3">
                    <li>Quisque at condimentum est. Duis sollicitudin urna id elit pulvinar placerat. Ut ac dui in ex vulputate dictum.</li>
                    <li>Mauris vitae tellus nisi. Morbi rutrum lacus sit amet volutpat viverra.</li>
                    <li>Integer maximus sem ut ipsum blandit elementum. Nullam sollicitudin accumsan commodo.</li>
                  </ul>
                </p>
                <p>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus elementum, tempor risus vel, condimentum orci.</p>
                <h2>Curabitur tempus vel libero lobortis feugiat</h2>
                <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris in convallis nunc, non facilisis arcu. Nunc sapien nulla, interdum at diam non, aliquam vestibulum leo.</p>
                <blockquote>Phasellus dapibus ex sed dolor blandit, efficitur iaculis ipsum scelerisque. Cras elementum nibh id felis sagittis, sit amet pellentesque ligula porttitor. Fusce laoreet malesuada ante, consectetur consequat ante tempor et. Quisque ac risus ligula.</blockquote>
                {/* </p> */}
              </Col>
            </FadeInWhenVisible>
          </Row>
          <BlogCommentForm />
        </Container>
      </section>
    </>
  )
}

export default BlogDetail
