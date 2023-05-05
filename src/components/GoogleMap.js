import React from "react"
import { Row } from "react-bootstrap"
import ScaleWhenVisible from "./utility/ScaleWhenVisible"

function GoogleMap() {
  return (
    <Row>
      <ScaleWhenVisible>
        <iframe src="https://maps.google.com/maps?q=44.648618, -63.5859487&z=15&output=embed" width="100%" height="600px" frameBorder="0" style={{ border: 0 }}></iframe>
      </ScaleWhenVisible>
    </Row>
  )
}
export default GoogleMap
