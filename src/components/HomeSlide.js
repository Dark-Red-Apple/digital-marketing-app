import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"

export default function HomeSlide(props) {
  const handleDragStart = (e) => e.preventDefault()
  return (
    <div className="home-slide project-info">
      <img src={props.source} onDragStart={handleDragStart} role="presentation" />
      <p>
        <span>
          <small style={{ display: "block" }} className="">
            {props.content}
          </small>
          <h3>
            <a className="green-link">{props.linkContent}</a>
          </h3>
        </span>
        <a className="arrow-link">
          {" "}
          <FontAwesomeIcon icon={icon({ name: "angle-right" })} />
        </a>
      </p>
    </div>
  )
}
