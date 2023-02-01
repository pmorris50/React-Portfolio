import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = (props) => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Patrick Morris</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link onClick={() => props.handlePageChange('Home')}>Home</Nav.Link>
          <Nav.Link onClick={() => props.handlePageChange('About')}>About</Nav.Link>
          <Nav.Link onClick={() => props.handlePageChange('Contact')}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;


//customize 