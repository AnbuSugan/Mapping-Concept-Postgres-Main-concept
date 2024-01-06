import React from "react";
import "./Header.css";
import { Navbar, Nav, NavDropdown, Container, Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark" className="sticky-top  navBg">
        <Container>
          <Navbar.Brand href="#" className="logo">
            <Row>
              <Col>
                <img
                  src="/logo1.jpg"
                  alt="Logo"
                  height="60"
                  className="d-inline-block align-top"
                />
              </Col>
              <Col>
                <div className="logoHead1">Enlight</div>
                <div className="logoHead2">Educational Institution</div>
              </Col>
            </Row>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="collapsibleNavbar" />

          <Navbar.Collapse
            id="collapsibleNavbar"
            className="justify-content-end d-xl-block"
          >
            <div className="navBar">
              <Nav className="navbar-nav fs-5">
                <Nav.Link href="Home">Home</Nav.Link>
                <Nav.Link href="Courses">Register</Nav.Link>
                <Nav.Link href="/Dashboard">Courses</Nav.Link>
                <Nav.Link href="/Cart">AddtoCart</Nav.Link>

                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="#">Gallery</NavDropdown.Item>
                  <NavDropdown.Item href="#">News</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="Signin">Login</Nav.Link>
                <Nav.Link href="Signin">Logout</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
