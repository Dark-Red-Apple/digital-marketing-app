import { Navbar, Nav } from "react-bootstrap"
import React from "react"

function Navigation() {
  return (
    <Navbar expand="sm" collapseOnSelect>
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
    </Navbar>
  )
}

export default Navigation
