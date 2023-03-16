import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { FaGithubSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { FcIphone, FcDownload } from 'react-icons/fc';
import {MdOutlineEmail} from 'react-icons/md';
import MyResume from '../images/Resume.pdf'
import './Footer.css';


const Footer = () => (
 
  <Navbar bg="dark" variant="dark" fixed="bottom" className ='mt-1 ml-3 fbody'>
 
      <Row className='justify-content-center'>
        <Col md={12}>
          <Nav className="mr-auto ml-5" >
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
    
  </Navbar>

);

export default Footer;

//make sure to test change links to github and linkedin 