import React from 'react';
import { Navbar, NavbarBrand, Collapse } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Navbar';
import './Navbar.css';




function NavigationBar(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
// const styles = {
//   taco: {
//     backgroundColor: "red",
//     color: "blue",
//     fontFamily: "cursive"
//   }
// }

//

  return (
    <Navbar collapseOnSelect className = "myNav ml-3" bg="light" expand="md">
      <Container>
        <Navbar.Brand >Patrick Morris</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => props.handlePageChange('About')}>About</Nav.Link>
            <Nav.Link onClick={() => props.handlePageChange('Contact')}>Contact</Nav.Link>
            <Nav.Link onClick={() => props.handlePageChange('Project')}>Projects</Nav.Link>
            <Nav.Link onClick={() => props.handlePageChange('Resume')}>Resume</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar;


//customize 