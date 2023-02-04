import React from 'react';
import MyCard from '../Card'



function Project(props) {

    const projects = [
        {
            name: 'Workout Generator',
            details: {
                url: 'https://bootycamp.herokuapp.com/',
                description: '',
                repo: 'https://github.com/pmorris50/Workout-Creator',
                tech: [
                    "nodeMailer",
                    "mySQL"
                ],

            }
        },
        {
            name: 'Daily Task Tracker',
            details: {
                url: '',
                description: '',
                repo: '',
                tech: '',
            }
        },
        {
            name: 'React Portfolio',
            details: {
                url: '',
                description: '',
                repo: '',
                tech: ''

            }
        }
    ];




    return (
        <div>
            <MyCard projects = {projects[0]}/>
        </div>
    )
}

export default Project


//     const style = {
//         superSize: {
//             width: '100vw',
//             height: '100vh',
//             overflow: 'hidden',
//             zindex: 1
//         },
//         webpageSize: {
//             width: '50vw',
//             height: '50vw',
//             overflow: 'hidden'
//         }
//     }

//     return (
//         <div>

//             <Carousel style={style.superSize} autoplay={false} interval={null}>
//                 <Carousel.Item>
//                     <Row>
//                         <Col xs={6}>
//                             <iframe style={style.webpageSize} src="https://bootycamp.herokuapp.com/"></iframe>
//                         </Col>
//                         <Col xs ={6}>
//                         <Carousel.Caption>
//                             <h3>First slide label</h3>
//                             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                         </Carousel.Caption>
//                         </Col>
//                     </Row>
//                 </Carousel.Item>
//                 <Carousel.Item>a
//                     <img
//                         className="d-block w-100"
//                         src="holder.js/800x400?text=Second slide&bg=282c34"
//                         alt="Second slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>Second slide label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="holder.js/800x400?text=Third slide&bg=20232a"
//                         alt="Third slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>Third slide label</h3>
//                         <p>
//                             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                         </p>
//                     </Carousel.Caption>
//                 </Carousel.Item>


//             </Carousel>

//         </div>
//     )
// };
