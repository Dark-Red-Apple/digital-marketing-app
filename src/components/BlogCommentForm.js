import React from "react"
import { Row, Col } from "react-bootstrap"
import FadeInWhenVisible from  "./utility/FadeInWhenVisible"

function BlogCommentForm() {
  return (
    <Row>
      <Col lg={7} sm={12} className="mx-auto mt-5">
        <h3>Leave a comment</h3>
        <form className="dma-blog-comment-form">
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
                <textarea className="dma-form-control" placeholder="Message"></textarea>
              </FadeInWhenVisible>
            </Col>
            <Col xs={12} lg={6} className="mx-auto">
              <FadeInWhenVisible transitionDelay={0.3}>
                <button className="dma-btn dma-btn__green dma-form-control">Submit Comment</button>
              </FadeInWhenVisible>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  )
}

export default BlogCommentForm
