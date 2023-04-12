// import Container from "react-bootstrap/Container"
// import Nav from "react-bootstrap/Nav"
// import Navbar from "react-bootstrap/Navbar"
// import NavDropdown from "react-bootstrap/NavDropdown"
import { Navbar, Nav, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import React from "react"

export default function Navigation() {
  return (
    <Navbar expand="sm" collapseOnSelect fixed="top">
      <Container>
        {/* <Navbar.Brand href="/">
          {" "}
          <div className="header__logo btn btn--yellow">
            <i></i>
            <a href="./">Digital Trend</a>
          </div>
        </Navbar.Brand> */}
        <Navbar.Toggle ari-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
