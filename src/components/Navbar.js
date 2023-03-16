import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

function NavigationBar(props) {
  const [activeLink, setActiveLink] = useState('About');

  const handlePageChange = (pageName) => {
    setActiveLink(pageName);
    props.handlePageChange(pageName);
  }

  return (
    <div className= "myNav">
      <a className={`navi ${activeLink === 'About' ? 'active' : ''}`} onClick={() => handlePageChange('About')}>
        <span>About</span>
      </a>
      <a className={`navi ${activeLink === 'Contact' ? 'active' : ''}`} onClick={() => handlePageChange('Contact')}>
        <span>Contact</span>
      </a>
      <a className={`navi ${activeLink === 'Project' ? 'active' : ''}`} onClick={() => handlePageChange('Project')}>
        <span>Projects</span>
      </a>
      <a className={`navi ${activeLink === 'Resume' ? 'active' : ''}`} onClick={() => handlePageChange('Resume')}>
        <span>Resume</span>
      </a>
    </div>
  )
}

export default NavigationBar;





// import React from 'react';
// import { Navbar, NavbarBrand, Collapse } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Navbar';
// import './Navbar.css';




// function NavigationBar(props) {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const toggle = () => setIsOpen(!isOpen);


//   return (
//     <Navbar collapseOnSelect className = "myNav ml-3" bg="light" expand="md">
//       <Container>
//         <Navbar.Brand >Patrick Morris</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link onClick={() => props.handlePageChange('About')}>About</Nav.Link>
//             <Nav.Link onClick={() => props.handlePageChange('Contact')}>Contact</Nav.Link>
//             <Nav.Link onClick={() => props.handlePageChange('Project')}>Projects</Nav.Link>
//             <Nav.Link onClick={() => props.handlePageChange('Resume')}>Resume</Nav.Link>
         
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

// export default NavigationBar;

