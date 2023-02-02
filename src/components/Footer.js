import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import {FaGithubSquare} from 'react-icons/fa'; 
import {BsLinkedin} from 'react-icons/bs';
import {IconContext} from 'react-icons';
import {FcIphone} from 'react-icons/fc';
// import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <Navbar bg="dark" variant="dark" fixed="bottom">
    <Container>
      <Row className = 'd-flex'>
        <Col md={12} className = 'justify-content-center'> 
          <Nav className="mr-auto">
            <IconContext.Provider className = 'text-center' value = {{color: '#C0C0C0', size: 42}}>
            <Nav.Link href="#home"> <FaGithubSquare/></Nav.Link>
            <Nav.Link href="#about"><BsLinkedin/></Nav.Link>
            <Nav.Link href="#contact"><FcIphone/></Nav.Link>
            </IconContext.Provider>
            {/* <Nav.Link href="https://github.com/pmorris50">
              <FaGithub size={20} className="mr-2" />
              GitHub
            </Nav.Link> */}
          </Nav>
        </Col>
      </Row>
      
        <Col md={4}>
          <p className="text-white text-center">Copyright &copy; 2023</p>
        </Col>
    </Container>
  </Navbar>
);

export default Footer;

//make sure to test change links to github and linkedin 