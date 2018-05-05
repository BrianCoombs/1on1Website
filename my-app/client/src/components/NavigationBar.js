import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button } from 'react-bootstrap';

class NavigationBar extends Component {

  render() {
    const navbarInstance = (
      <Navbar fixedTop inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home1">1on1 Tutoring</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#schedule">
              Schedule
            </NavItem>
            <NavItem eventKey={2} href="#aboutus">
              About
            </NavItem>
            <NavItem eventKey={3} href="#ourstory">
              Our Story
            </NavItem>
            <NavItem eventKey={3} href="#tutors">
              Our Tutors
            </NavItem>
            <NavItem eventKey={3} href="#testimonials">
              Testimonials
            </NavItem>
            <NavItem eventKey={3} href="#philanthropy">
              Philanthropy
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://manager.1on1tutoring.org/client/auth">
              Client Login
            </NavItem>
            <NavItem eventKey={2} href="https://manager.1on1tutoring.org/tutor/auth">
              Tutor Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );

    return (
      <div>
        {navbarInstance}
      </div>
    );
  }
}

export default NavigationBar;
