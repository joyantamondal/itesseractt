import React from "react";
import {  Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
  <Container>
  <Navbar.Brand href="#home">iTesseract</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Home</Nav.Link>
      <Nav.Link href="#deets">Solutions</Nav.Link>
      <Nav.Link href="#deets">Courses</Nav.Link>
      <Nav.Link href="#deets">Instructors</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default NavBar;
