// import { useEffect } from "react"
import Modal from "./Modal"
import { useState } from "react"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import { NavLink } from "react-router-dom"

function HeaderUser() {
  const [modalType, setModalType] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  function loginModal() {
    setIsOpen(!isOpen)
    setModalType("login")
  }

  function registerModal() {
    setModalType("register")
  }

  return (
    <>
      <NavLink className="dma-btn--yellow" onClick={loginModal}>
        <FontAwesomeIcon icon={icon({ name: "user" })} />
      </NavLink>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setModalType={setModalType} modalType={modalType}>
        <Container className="d-flex align-items-center flex-column justify-content-center">
          {modalType == "login" && (
            <>
              <LoginForm />
              <p className="mt-4">
                Don't have an account?
                <a onClick={registerModal} className="dma-sec-color-link dma-link">
                  <span className="d-inline-block">&nbsp;Create one</span>
                </a>
              </p>
            </>
          )}
          {modalType == "register" && <RegisterForm />}
        </Container>
      </Modal>
    </>
  )
}

export default HeaderUser
