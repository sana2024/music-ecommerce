import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function TheNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* as={Link} means use react-router's Link component under the hood */}
        <Navbar.Brand as={Link} to="/">
          TapeCity
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Products"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/categories/*">
                Cassette
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/*">
                CD
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/*">
                Vinyl
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/categories">
                All Categories
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/About">
             About
            </Nav.Link>

             
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/login">
              login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
