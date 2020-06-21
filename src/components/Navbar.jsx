import React from "react";
import NavDiv from "./styles/navbar";
import { FiMenu } from "react-icons/fi";
import { Navbar, Nav } from "react-bootstrap";

export default ({ changeState }) => {
  return (
    <NavDiv>
      <Navbar sticky="top" expand="md">
        <Navbar.Brand href="/" className="pl-md-5">
          Naemo
        </Navbar.Brand>
        <span className="d-block d-md-none" onClick={changeState}>
          <FiMenu />
        </span>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="px-md-4">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="px-md-4">
              About Us
            </Nav.Link>
            <Nav.Link href="/contact" className="px-md-4">
              Contact
            </Nav.Link>
            <Nav.Link href="/afriskaut" className="px-md-4 text-primary">
              Get Demo
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavDiv>
  );
};
