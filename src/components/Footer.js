import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <Navbar bg="dark" variant="dark" fixed="bottom">
    <Container>
      <Row>
        <Col md={8}>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="https://github.com/pmorris50">
              <FaGithub size={20} className="mr-2" />
              GitHub
            </Nav.Link>
          </Nav>
        </Col>
        <Col md={4}>
          <p className="text-white text-center">Copyright &copy; 2023</p>
        </Col>
      </Row>
    </Container>
  </Navbar>
);

export default Footer;

//make sure to test change links to github and linkedin 