import { useContext, useEffect } from "react"
import DispatchContext from "../DispatchContext"
import { Container, Row, Col } from "react-bootstrap"
import RegisterForm from "./RegisterForm"
import FadeInWhenVisible from "./FadeInWhenVisible"

function Register() {
  const appDispatch = useContext(DispatchContext)

  useEffect(() => {
    appDispatch({ type: "title", value: "Register" })
  }, [])

  return (
    <section>
      <Container>
        <Row>
          <Col lg={6} md={7} xs={12} className="mx-auto">
            <FadeInWhenVisible>
              <RegisterForm />
            </FadeInWhenVisible>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Register
