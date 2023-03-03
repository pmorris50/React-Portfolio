import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { FaGithubSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { FcIphone, FcDownload } from 'react-icons/fc';
import {MdOutlineEmail} from 'react-icons/md';
import MyResume from '../images/Resume.pdf'


const Footer = () => (
  <div className ='mb-5 fbody'>
  <Navbar bg="dark" variant="dark" fixed="bottom" className ='mt-1'>
    <Container>
      <Row className='justify-content-center'>
        <Col md={12} className=''>
          <Nav className="mr-auto" >
            <IconContext.Provider value={{ color: '#C0C0C0', size: 28 }}>
              <div className='d-flex justify-content-center'>
                  <Nav.Link target="_blank" href="https://github.com/pmorris50"> <FaGithubSquare /></Nav.Link>
                  <Nav.Link target="_blank" href="https://www.linkedin.com/in/patrick-morris-b656b8197/"><BsLinkedin /></Nav.Link>
                  <Nav.Link href="tel: +1-940-367-7687"><FcIphone /></Nav.Link>
                  <Nav.Link target="_blank" href="mailto: patrickmorris532@gmail.com"> <MdOutlineEmail /></Nav.Link>
                  <Nav.Link target="_blank" href={MyResume} download> <FcDownload/></Nav.Link>
               </div>

            </IconContext.Provider>

          </Nav>
        </Col>
      </Row>
    </Container>
  </Navbar>
  </div>
);

export default Footer;

//make sure to test change links to github and linkedin 