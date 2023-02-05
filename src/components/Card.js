import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithubSquare } from 'react-icons/fa';
import { BsFileX } from 'react-icons/bs';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

function MyCard({ projects }) {
    const style = {
        iframe: {
            overflow: "hidden"
        },
    }
    return (

        <Container style={style.background} className='m-auto mt-3' >
            <Row>
                <Col className="mb-3">
                    <Card xl={3} lg={4} md={6} sm={12}>
                        <iframe style={style.iframe} src={projects.details.url}></iframe>
                        <Card.Body>
                            <Card.Title>{projects.name}</Card.Title>
                            <Card.Text>
                                {projects.details.description}
                            </Card.Text>
                            <a className='' target='_blank' href={projects.details.repo}>
                                <FaGithubSquare size={40} />
                            </a>
                            <a target="_blank" href={projects.details.url}>
                                <Button variant="primary">Visit Site</Button>
                            </a>
                        </Card.Body>

                    </Card>
                </Col>

            </Row>
        </Container>
    )
}

// <Container  className = 'd-flex flex-wrap col-xl-3 col-lg-4 col-md-6 col-sm-12 m-auto mt-3' > 
//     <Card style={{ width: '18rem' }} className="col-xl-3 col-lg-4 col-md-6 col-sm-12" >
//         <div >
//             <iframe style={style.iframe} src={projects.details.url}></iframe>

//             <Card.Body>
//                 <Card.Title>{projects.name}</Card.Title>
//                 <Card.Text>
//                     {projects.details.description}
//                 </Card.Text>
//                 <a className='' target='_blank' href={projects.details.repo}> <FaGithubSquare size={40} /> </a>
//                 <a target="_blank" href={projects.details.url}>
//                     <Button variant="primary">Visit Site</Button>
//                 </a>

//             </Card.Body>
//         </div>
//     </Card>
// </Container>


// )
//};




export default MyCard

//xl={3} lg={4} md={6} sm={12}>