// import { useEffect } from "react"
import Modal from "./Modal"
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import Login from "./Login"
import Register from "./Register"
import { NavLink } from "react-router-dom"

function HeaderUser() {
  // const navigate = useNavigate()
  const [modalType, setModalType] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  // const history = useHistory()

  function loginModal() {
    setIsOpen(!isOpen)
    // alert("jhbj")
    setModalType("login")
    // updateUrl("/login")
    // navigate(`?modal=${modalType}`, { replace: true })
  }
  function registerModal() {
    setModalType("register")
    // updateUrl("/register")

    // navigate({ modal: modalType }, "")
  }

  return (
    <>
      {/* <div> */}
      <NavLink
        // to={`${location.pathname}/login`}
        className="dma-btn--yellow"
        onClick={loginModal}
      >
        <FontAwesomeIcon icon={icon({ name: "user" })} />
      </NavLink>
      {/* </div> */}

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setModalType={setModalType} modalType={modalType}>
        <Container className="h-100 d-flex align-items-center">
          {modalType == "login" && (
            <>
              {" "}
              <Login />{" "}
              <p className="mt-4">
                Dont have an account?{" "}
                <a onClick={registerModal} className="dma-sec-color-link dma-link">
                  Create one
                </a>{" "}
              </p>
            </>
          )}
          {modalType == "register" && <Register />}
          {/* <Routes>
            <Route path={"(*)/register"} element={<Register />}></Route>
            <Route path={'(*)/login'} element={<Login />}></Route>
          </Routes> */}
        </Container>
      </Modal>
    </>
  )
}
export default HeaderUser
