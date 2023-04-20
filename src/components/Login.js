import React from "react"
import Modal from "./Modal"
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"

export default function Login() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* <div> */}
      <a
        className="dma-btn--yellow"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <FontAwesomeIcon icon={icon({ name: "user" })} />
      </a>
      {/* </div> */}

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Container className="h-100 d-flex align-items-center">
          <div className="dma-login text-black text-center  w-100 ">
            <h3>Please Login</h3>
            <form className="dma-login-form">
              <div className="dma-form-group mt-4 d-flex">
                <input type="email" placeholder="Email" />
              </div>
              <div className="dma-form-group mt-4 d-flex">
                <input type="password" placeholder="Password" />
              </div>
              <button className="mt-4 dma-btn dma-btn__bg-yellow">Login</button>
            </form>
          </div>
        </Container>
      </Modal>
    </>
  )
}
