import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { FaGithubSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { FcIphone } from 'react-icons/fc';
import {MdOutlineEmail} from 'react-icons/md';
// import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <Navbar bg="dark" variant="dark" fixed="bottom">
    <Container>
      <Row className='justify-content-center'>
        <Col md={12} className=''>
          <Nav className="mr-auto" >
            <IconContext.Provider value={{ color: '#C0C0C0', size: 42 }}>
              <div className='d-flex justify-content-center'>
                  <Nav.Link target="_blank" href="https://github.com/pmorris50"> <FaGithubSquare /></Nav.Link>
                  <Nav.Link target="_blank" href="https://www.linkedin.com/in/patrick-morris-b656b8197/"><BsLinkedin /></Nav.Link>
                  <Nav.Link href="tel: +1-940-367-7687"><FcIphone /></Nav.Link>
                  <Nav.Link target="_blank" href="mailto: patrickmorris532@gmail.com"> <MdOutlineEmail /></Nav.Link>
               </div>

            </IconContext.Provider>

          </Nav>
        </Col>
      </Row>
    </Container>
  </Navbar>
);

export default Footer;

//make sure to test change links to github and linkedin 