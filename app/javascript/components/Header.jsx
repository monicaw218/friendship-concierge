import React from 'react';
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';

export default () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">Friendship Concierge</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
