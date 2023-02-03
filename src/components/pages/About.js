import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../../images/background.jpg'

function About() {
    const style = {
        bubble: {
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '20px',
            boxShadow: '0px 0px 10px grey',
            maxWidth: '50%',
            margin: '20px auto',
            border: 'black',
            opacity: 0.75
        },
        waterfall:{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh'
        }
    }
    return (
        <div style ={style.waterfall}>
            <Container fluid>
                <Row>
                    <Col className ='mt-5'>
                        <div style={style.bubble}>
                            <p>Hello, My name is Patrick Morris, an aspiring software developer. I decided to explore software development after a short Mortgage Originator and NFL career. Originating mortgages simply did not have enough intrinsic reward for me.
                            </p>
                            <p>
                                Developing Software reminds me of the preparation, dedication, success, and failure that comes with professional sports. I truly have a passion for pushing myself and presenting the best product of my abilities. 
                            </p>
                            <p>
                                I still enjoy pushing myself physically as well. I am an avid mountain biker as I live on the front range of Colorado. 
                            </p> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About
