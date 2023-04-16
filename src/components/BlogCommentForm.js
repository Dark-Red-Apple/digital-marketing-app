import React from "react"
import { Row, Col } from "react-bootstrap"

export default function BlogCommentForm() {
  return (
    <Row>
      <Col lg={8} sm={12} className="mx-auto">
        <h3>Leave a comment</h3>
        <form className="dma-blog-comment-form">
          <Row>
            <Col lg={6} md={6} xs={12}>
              <input className="dma-form-control" placeholder="Name" />
            </Col>
            <Col lg={6} md={12} xs={12}>
              <input className="dma-form-control" placeholder="Email" />
            </Col>
            <Col xs={12}>
              <textarea className="dma-form-control" placeholder="Message"></textarea>
            </Col>
            <Col xs={12} lg={6} className="mx-auto">
              <button className="dma-btn dma-btn__green dma-form-control">Submit Comment</button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  )
}
