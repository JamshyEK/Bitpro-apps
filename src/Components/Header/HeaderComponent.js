import React, { Component } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./HeaderComponent.css";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="">
            <img
              src="assets/images/logo.png"
              width="70"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/home">
                <span id="nav-link" className="nav-link">
                  HOME
                </span>
              </NavLink>
              <NavLink to="/about">
                <span id="nav-link" className="nav-link">
                  ABOUT US
                </span>
              </NavLink>
              <NavLink to="/contact">
                <span id="nav-link" className="nav-link">
                  CONTACT US
                </span>
              </NavLink>
              <Button variant="warning" id="nav-link" size="sm">
                Try it free
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
