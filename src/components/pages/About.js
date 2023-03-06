import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './About.css';


function About() {
    const [selectedSection, setSelectedSection] = useState("Family");
    const [activeIndex, setActiveIndex] = useState(0);
  
    function handleClick(e) {
      const target = e.target;
      const sectionName = target.textContent;
      setSelectedSection(sectionName);
      const items = document.querySelectorAll(".ponyRideItem");
      items.forEach((item, index) => {
        if (item.querySelector("h1").textContent === sectionName) {
          item.classList.remove("hide");
          setActiveIndex(index);
        } else {
          item.classList.add("hide");
        }
      });
    }
  
    function handleNext() {
      const items = document.querySelectorAll(".ponyRideItem");
      if (activeIndex < items.length - 1) {
        items[activeIndex].classList.add("hide");
        items[activeIndex + 1].classList.remove("hide");
        setActiveIndex(activeIndex + 1);
        setSelectedSection(items[activeIndex + 1].querySelector("h1").textContent);
      } else {
        // cycle back to the first item
        items[activeIndex].classList.add("hide");
        items[0].classList.remove("hide");
        setActiveIndex(0);
        setSelectedSection(items[0].querySelector("h1").textContent);
      }
    }
  
    function handlePrevious() {
      const items = document.querySelectorAll(".ponyRideItem");
      if (activeIndex > 0) {
        items[activeIndex].classList.add("hide");
        items[activeIndex - 1].classList.remove("hide");
        setActiveIndex(activeIndex - 1);
        setSelectedSection(items[activeIndex - 1].querySelector("h1").textContent);
      } else {
        // cycle back to the last item
        items[activeIndex].classList.add("hide");
        items[items.length - 1].classList.remove("hide");
        setActiveIndex(items.length - 1);
        setSelectedSection(items[items.length - 1].querySelector("h1").textContent);
      }
    }

    return (
        <div className="backgroundAbout">
            <div className='containerAbout'>
                <div className='ponyRide Myinfo'>
                    <div className="ponyRideItem">
                        <h1>Family</h1>
                    </div>
                    <div className="ponyRideItem hide">
                        <h1>Hobbies</h1>
                    </div>
                    <div className="ponyRideItem hide">
                        <h1>Work</h1>
                    </div>
                    <button className="ponyPrevious" onClick = {handlePrevious}>Previous</button>
                    <button className="ponyNext" onClick = {handleNext}>Next</button>

                    <div className='aboutNav'>

                    <a
              className={`aboutSection ${
                selectedSection === 'Family' ? 'selected' : ''
              }`}
              onClick={handleClick}
            >
              Family
            </a>
            <a
              className={`aboutSection ${
                selectedSection === 'Hobbies' ? 'selected' : ''
              }`}
              onClick={handleClick}
            >
              Hobbies
            </a>
            <a
              className={`aboutSection ${
                selectedSection === 'Work' ? 'selected' : ''
              }`}
              onClick={handleClick}
            >
              Work
            </a>
                    </div>
                </div>


            </div>
        </div>
    )

}
export default About

// import React, { useEffect, useRef } from 'react';
// import './About.css';

// function About() {
//   const sections = useRef([]);

//   useEffect(() => {
//     document.addEventListener('wheel', handleScroll);
//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('wheel', handleScroll);
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   function scrollToSection(sectionIndex) {
//     sections.current[sectionIndex].scrollIntoView({ behavior: 'smooth' });
//   }

//   function handleScroll(e) {
//     e.preventDefault();
//     const delta = e.deltaY;
//     const activeSectionIndex = Math.floor(window.pageYOffset / window.innerHeight);
//     if (delta > 0 && activeSectionIndex < sections.current.length - 1) {
//       scrollToSection(activeSectionIndex + 1);
//     } else if (delta < 0 && activeSectionIndex > 0) {
//       scrollToSection(activeSectionIndex - 1);
//     }
//   }

//   function handleKeyDown(e) {
//     const key = e.keyCode;
//     if (key === 38) {
//       const activeSectionIndex = Math.floor(window.pageYOffset / window.innerHeight);
//       if (activeSectionIndex > 0) {
//         scrollToSection(activeSectionIndex - 1);
//       }
//     } else if (key === 40) {
//       const activeSectionIndex = Math.floor(window.pageYOffset / window.innerHeight);
//       if (activeSectionIndex < sections.current.length - 1) {
//         scrollToSection(activeSectionIndex + 1);
//       }
//     }
//   }

//   return (
//     <div className="aboutContainer">
//       <div ref={ref => (sections.current[0] = ref)} className="section football">
//         <h1>Football</h1>
//       </div>
//       <div ref={ref => (sections.current[1] = ref)} className="section outdoors">
//         <h1>Mountains</h1>
//       </div>
//       <div ref={ref => (sections.current[2] = ref)} className="section family">
//         <h1>Family</h1>
//       </div>
//       <div ref={ref => (sections.current[3] = ref)} className="section work">
//         <h1>Work</h1>
//       </div>
//     </div>
//   );
// }

// export default About;;
// function About() {
//     const style = {
//         bubble: {
//             backgroundColor: 'white',
//             padding: '20px',
//             borderRadius: '20px',
//             boxShadow: '0px 0px 10px grey',
//             maxWidth: '50%',
//             margin: '20px auto',
//             border: 'black',
//             opacity: 0.75
//         },
//         waterfall:{
//             backgroundImage: `url(${Image})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover',
//             height: '100vh'
//         }
//     }
//     return (
//         <div style ={style.waterfall}>
//             <Container fluid>
//                 <Row>
//                     <Col className ='mt-5'>
//                         <div style={style.bubble}>
//                             <p>Hello, My name is Patrick Morris, an aspiring software developer. I decided to explore software development after a short Mortgage Originator and NFL career. Originating mortgages simply did not have enough intrinsic reward for me.
//                             </p>
//                             <p>
//                                 Developing Software reminds me of the preparation, dedication, success, and failure that comes with professional sports. I truly have a passion for pushing myself and presenting the best product of my abilities. 
//                             </p>
//                             <p>
//                                 I still enjoy pushing myself physically as well. I am an avid mountain biker as I live on the front range of Colorado. 
//                             </p> 
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// export default About
