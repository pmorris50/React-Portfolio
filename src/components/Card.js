import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';

function MyCard({ project }) {
  const style = {
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderRadius: '4px',
      boxShadow: '2px 5px 10px 3px rgba(0, 0, 0, 0.6)',
      marginBottom: '16px',
      padding: '16px',
      width: '100%',
      boxSizing: 'border-box',
      height: '475px',
      marginTop: '100px;',
     
      
    },
    iframe: {
      overflow: 'hidden',
      marginBottom: '16px',
      width: '100%',
      height: '200px',
      borderRadius: '4px',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    cardText: {
      fontSize: '16px',
      marginBottom: '16px',
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    button: {
      backgroundColor: 'blue',
      color: 'white',
      borderRadius: '4px',
      padding: '8px 16px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      textDecoration: 'none',
    },
    cardContainer: {
        marginTop: '80px',
      
    }
  };

  return (
    <div style = {style.cardContainer}>
    <div style={style.card}>
      <div style={style.cardTitle}>{project.name}</div>
      <iframe style={style.iframe} src={project.details.url}></iframe>
      <div style={style.cardText}>{project.details.description}</div>
      <div style={style.iconContainer}>
        <a className="" target="_blank" href={project.details.repo}>
          <FaGithubSquare size={40} />
        </a>
        <a target="_blank" href={project.details.url} style={style.button}>
          Visit Site
        </a>
      </div>
    </div>
    </div>
  );
}

export default MyCard;



// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { FaGithubSquare } from 'react-icons/fa';
// import { BsFileX } from 'react-icons/bs';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';
// import Container from 'react-bootstrap/Container';
// import Stack from 'react-bootstrap/Stack';
// import './Card.css'

// function MyCard({ projects }) {
//     const style = {
//         iframe: {
//             overflow: "hidden"
//         },
//     }
//     return (

        
           
               
//                     <Card className = "projectCard">
//                         <Card.Body>
//                             <Card.Title>{projects.name}</Card.Title>
//                         <iframe className = 'iframeLink' style={style.iframe} src={projects.details.url}></iframe>
//                             <Card.Text>
//                                 {projects.details.description}
//                             </Card.Text>
//                             <a className='' target='_blank' href={projects.details.repo}>
//                                 <FaGithubSquare size={40} />
//                             </a>
//                             <a target="_blank" href={projects.details.url}>
//                                 <Button variant="primary">Visit Site</Button>
//                             </a>
//                         </Card.Body>

//                     </Card>a
      
//     )
// }






// export default MyCard

