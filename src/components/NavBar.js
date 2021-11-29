import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from './Image/logo.png'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
          <Navbar.Brand href="#home">
              <img src={logo} className="logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar
