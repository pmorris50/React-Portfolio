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

function MyCard({projects}){
    const style = {
        iframe: {
            overflow: "hidden"
        },
 

    }
    return (
        <div>
        <Container className='col-3 m-auto mt-3'>
            <Card style={{ width: '18rem' }}>
                <iframe style={style.iframe} src={projects.details.url}></iframe>

                <Card.Body>
                    <Card.Title>MySql Project</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                        <a className='' target='_blank' href={projects.details.repo}> <FaGithubSquare size={40} /> </a>
                            <a target="_blank" href={projects.details.url}>
                                <Button variant="primary">Visit Site</Button>
                            </a>
                        
                </Card.Body>
            </Card>
            </Container>
       
        </div>
    )};




export default MyCard