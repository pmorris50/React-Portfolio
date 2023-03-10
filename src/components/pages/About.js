import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './About.css';



function About() {
  const [screenSize, setScreenSize] = useState('');
  const [selectedSection, setSelectedSection] = useState("Family");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setScreenSize('small');
      } else {
        setScreenSize('large');
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (screenSize === 'large') {
        const items = document.querySelectorAll(".ponyRideItem");
        items.forEach((item) => {
          item.removeEventListener("click", handleClick);
        });
        const prevButton = document.querySelector(".ponyPrevious");
        prevButton.removeEventListener("click", handlePrevious);
        const nextButton = document.querySelector(".ponyNext");
        nextButton.removeEventListener("click", handleNext);
      }
    };
  }, [screenSize]);

  function handleClick(e) {

    const target = e.target;

    const sectionName = target.getAttribute('data-section');
    console.log("Section Name: ", sectionName);
    setSelectedSection(sectionName);



    const items = document.querySelectorAll(".ponyRideItem");
    
    items.forEach((item, index) => {
      if (item.querySelector("h1").textContent === sectionName) {
        item.classList.remove("hide")
        item.classList.add("ponyAnimation");
        setActiveIndex(index);
      } else {
        item.classList.add("hide");
      }
    });
  }

  function handleNext() {
    const ponyNext = document.querySelector('.ponyNext');
    ponyNext.classList.add("animation");
    ponyNext.addEventListener('animationend', () =>{
      ponyNext.classList.remove("animation");
    });
    const items = document.querySelectorAll(".ponyRideItem");
    if (activeIndex < items.length - 1) {
      items[activeIndex].classList.add("hide");
      items[activeIndex].classList.remove("ponyAnimation");
      items[activeIndex + 1].classList.remove("hide");
      items[activeIndex+1].classList.add("ponyAnimation");
      // items[activeIndex +1].classList.add("ponyAnimation");
      // items[activeIndex -1].classList.remove("ponyAnimation");
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
    const ponyNext = document.querySelector('.ponyPrevious');
    ponyNext.classList.add("prevAnimation");
    ponyNext.addEventListener('animationend', () =>{
      ponyNext.classList.remove("prevAnimation");
    });
    
    const items = document.querySelectorAll(".ponyRideItem");
    if (activeIndex > 0) {
      items[activeIndex].classList.add("hide");
      items[activeIndex].classList.remove("ponyAnimation");
      items[activeIndex - 1].classList.remove("hide");
      items[activeIndex -1].classList.add("ponyAnimation");
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
          <div className="ponyRideItem family ponyAnimation">
            <h1>Family</h1>
          </div>
          <div className="ponyRideItem hobbies hide ponyAnimation">
            <h1>Hobbies</h1>
          </div>
          <div className="ponyRideItem work hide ponyAnimation">
            <h1>Work</h1>
          </div>
          <button className="ponyPrevious" onClick={handlePrevious}>Previous</button>
          <button className="ponyNext" onClick={handleNext}>Next</button>

          <div className='aboutNav'>
            {screenSize === 'large' ? (
              <div className='bigControls'>
                <a
                  className={`aboutSection ${selectedSection === 'Family' ? 'selected' : ''
                    } customNavLink flipIt`}
                  onClick={handleClick}
                  data-section="Family"
                >
                  Family
                </a>
                <a
                  className={`aboutSection ${selectedSection === 'Hobbies' ? 'selected' : ''
                    } customNavLink flipIt`}
                  onClick={handleClick}
                  data-section="Hobbies"
                >
                  Hobbies
                </a>
                <a
                  className={`aboutSection ${selectedSection === 'Work' ? 'selected' : ''
                    } customNavLink flipIt`}
                  onClick={handleClick}
                  data-section="Work"
                >
                  Work
                </a>
              </div>
            ) : (
              <div className="littleControls">
                <div className ="lilControlLink">
                  <a
                    className={`aboutSection ${selectedSection === 'Family' ? 'selected' : ''
                      }  circle`}
                    onClick={handleClick}
                    data-section="Family"
                  >
                    
                  </a>
               </div>
               <div className ="lilControlLink">
                  <a
                    className={`aboutSection ${selectedSection === 'Hobbies' ? 'selected' : ''
                      }   circle`}
                    onClick={handleClick}
                    data-section="Hobbies"
                  >
                    
                  </a>
               </div>
                <div className ="lilControlLink">
                  <a
               className={`aboutSection ${selectedSection === 'Work' ? 'selected' : ''
                      }   circle`}
                    onClick={handleClick}
                    data-section="Work"
                  >
                    
                  </a>
               </div>

              </div>
            )}

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
