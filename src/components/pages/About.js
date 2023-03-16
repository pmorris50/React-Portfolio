import React, { useState, useEffect } from 'react';
import './About.css';
import Rotate3d from '../Rotatepics';
import SmallPicture from '../SmallPicture';

function About() {
  const [flipped, setFlipped] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleClick() {
    setFlipped(!flipped);
  }

  return (
    <div className={flipped ? "flip-container flipped" : "flip-container"} >
      <div className="flipper">
        <div className="front">
          <h1 className="fTitle">Family</h1>
          <div className="textContainer">
            <p className="bio">Originally from Texas, but We found our home in the Rocky Mountains after my NFL career was over in Denver. My Wife and I enjoy camping and mountain biking. The amazing scenary and mountainous playground make for days well spent in the mountians! </p>
            <div className="pictures">
              {windowWidth > 768 ? <Rotate3d /> : <SmallPicture />}
            </div>
          </div>
          <button className='btnControl toWork' onClick={handleClick}>
            <span className="btnText">
              <span className="t">T</span>
              <span className="o">O</span>
              <span className="space"> </span>
              <span className="w">W</span>
              <span className="o">O</span>
              <span className="r">R</span>
              <span className="k">K</span>
            </span>
          </button>
        </div>
        <div className="back">
          <h1 className="wTitle"> Work</h1>
          <div className="textContainer">

            <div className="listContainer past">
              <h2 className="pastheader">The Past</h2>
              <ul className="nfl list"> NFL
                <li className="nfl item" >3 year career</li>
                <li className="nfl item" >Center</li>
                <li className="nfl item" >Steelers</li>
                <li>Broncos</li>
              </ul>


              <ul className="loan list">Loan Originator
                <li className="loan item">Pulte Mortgage</li>
                <li className="loan item">1 Year</li>
              </ul>

            </div>
            <div className="listContainer future">
              <h2 className="pastheader">Moving Forward</h2>
              <ul className="nfl list"> NFL
                <li className="nfl item" >3 year career</li>
                <li className="nfl item" >Center</li>
                <li className="nfl item" >Steelers</li>
                <li>Broncos</li>
              </ul>


              <ul className="loan list">Loan Originator
                <li className="loan item">Pulte Mortgage</li>
                <li className="loan item">1 Year</li>
              </ul>

            </div>
          </div>
          <button className='btnControl toFamily' onClick={handleClick}>
            <span className="btnText">
              <span className="t">T</span>
              <span className="o">O</span>
              <span className="space"> </span>
              <span className="f">F</span>
              <span className="a">A</span>
              <span className="m">M</span>
              <span className="i">I</span>
              <span className="l">L</span>
              <span className="y">Y</span>



            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;


// function About() {
//   const [screenSize, setScreenSize] = useState('');
//   const [selectedSection, setSelectedSection] = useState("Family");
//   const [activeIndex, setActiveIndex] = useState(0);



//   function handleClick() {
//     const nextSection = selectedSection === 'Family' ? 'Work' : 'Family';
//     setSelectedSection(nextSection);
//     const toggleData = document.querySelector('.toggleData')
//     toggleData.classList.add('leaveAnimation')
//     setTimeout(() => {
//       toggleData.classList.remove('leaveAnimation');
//     }, 5000)
//     const flipPony = document.querySelector('.ponyRide')
//     flipPony.classList.add('flipPony');
//     setTimeout(() => {
//       flipPony.classList.remove('flipPony')
//     }, 5000)
//     const items = document.querySelectorAll('.ponyRideItem');
//   }
//   //   items.forEach((item, index) => {
//   //     if (item.querySelector('h1').textContent === nextSection) {
//   //       item.classList.remove('hide');
//   //       setActiveIndex(index);
//   //     } else {
//   //       item.classList.add('hide');
//   //     }
//   //   });
//   // }




//   return (
//     <div className="backgroundAbout">
//       <div className='ponyRide Myinfo'>
//         <div className="ponyRideItem family">
//           <h1 className='dataTitle'>Family</h1>
//         </div>
//         <div className="ponyRideItem work">
//           <h1 className="dataTitle">Work</h1>
//         </div>
//         <div className="btnBody">
//           <button className={`toggleData`} onClick={handleClick}>
//             <span className='text'>{selectedSection === 'Family' ? 'Work' : 'Family'}</span>

//           </button>
//         </div>


//       </div>
//     </div>
//   )

// }
// export default About

