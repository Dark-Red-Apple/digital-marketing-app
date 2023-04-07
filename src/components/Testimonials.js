import React from "react";
import Container from "./Container";
import FemaleAvatar from "../assets/images/female-avatar.png"

export default function Testimonials() {
  return (
    <div className="testimonials-section">
      <Container>
        <div className="testimonials-section__testimonials-container">
          <div>
            <img src={FemaleAvatar} alt="" />
          </div>
          <div>
            <h4>CLIENT TESTIMONIALS</h4>
            <div className="quote"></div>
            <h2>
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
              incididunt mollit id et sit proident dolor nulla sed commodo.
            </h2>
            <p>
              <strong>Mary Zoe</strong>

              <span>/</span>

              <small>Digital Agency (CEO)</small>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
