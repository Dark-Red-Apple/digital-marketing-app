import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"

function HomeSlide({ source, address, linkContent, children }) {
  const handleDragStart = (e) => e.preventDefault()
  return (
    <div className="dma-home-slide dma-project-info">
      <img src={source} onDragStart={handleDragStart} role="presentation" />
      <div>
        <div>
          <small style={{ display: "block" }} className="">
            {children}
          </small>
          <h3 className="mt-2">
            <a className="dma-green-link">{linkContent}</a>
          </h3>
        </div>
        <a className="dma-arrow-link">
          {" "}
          <FontAwesomeIcon icon={icon({ name: "angle-right" })} />
        </a>
      </div>
    </div>
  )
}

export default HomeSlide
