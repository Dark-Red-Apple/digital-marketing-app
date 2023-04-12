// import Container from "react-bootstrap/Container"
// import Nav from "react-bootstrap/Nav"
// import Navbar from "react-bootstrap/Navbar"
// import NavDropdown from "react-bootstrap/NavDropdown"
import { Navbar, Nav, Container } from "react-bootstrap"
// import "bootstrap/dist/css/bootstrap.css"
import React from "react"

export default function Navigation() {
  return (
    <Navbar expand="sm" collapseOnSelect>
      {/* <Container> */}
      {/* <Navbar.Brand href="/">Digital Marketing App</Navbar.Brand> */}
      <Navbar.Toggle ari-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav-links">
          <Nav.Link className="btn btn--yellow" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="btn btn--yellow" href="/blog">
            Blog
          </Nav.Link>
          <Nav.Link className="btn btn--yellow" href="/about-us">
            About us
          </Nav.Link>
          <Nav.Link className="btn btn__yellow" href="/Contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  )
}
