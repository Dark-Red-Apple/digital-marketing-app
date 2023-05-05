import { useContext, useEffect } from "react"
import DispatchContext from "../DispatchContext"
import { Container, Row } from "react-bootstrap"
import FadeInWhenVisible from  "./utility/FadeInWhenVisible"
import ContactUsForm from "./ContactUsForm"
import GoogleMap from "./GoogleMap"

function ContactUs() {
  const appDispatch = useContext(DispatchContext)
  useEffect(() => {
    appDispatch({ type: "title", value: "Contact Us" })
  }, [])

  return (
    <section className="dma-contactUs">
      <Container>
        <FadeInWhenVisible>
          <Row>
            <h1>
              Hey there, Let's <strong>talk</strong> about <br />
              <strong>creative</strong> projects
            </h1>
            <p>
              or email us at <a href="mailto:hello@company.com">hello@company.com</a>
            </p>
            <p>
              Please follow our{" "}
              <a rel="nofollow" href="https://templatemo.com/contact">
                contact page
              </a>{" "}
              to <strong>setup</strong> the contact form.
            </p>
          </Row>
        </FadeInWhenVisible>
        <ContactUsForm />
        <GoogleMap />
      </Container>
    </section>
  )
}

export default ContactUs
