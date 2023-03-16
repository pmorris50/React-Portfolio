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
    setFlipped((prevFlipped) => !prevFlipped);
  }

  return (
    <div className={flipped ? "flip-container flipped" : "flip-container"} >
      <div className="flipper">
        <div className="front">
          <h1 className="fTitle">Family</h1>
          <div className="textContainer">
            <p className="bio"> I am originally from Texas, but after I finished my NFL career in Denver, my wife and I decided to make the Rocky Mountains our home.  My Wife and I enjoy camping, fishing and mountain biking. Physical fitness has played a huge role in my life and the steep inclines and high altitude make for tiresome days without the need for a gym membership. No matter the season, there are always fun outdoor activities to do!  </p>
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
                <li className="nfl item" >Three year career</li>
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
              <h2 className="pastheader">Today</h2>
             <p className = 'todayP'> I enjoy the problem solving naturecoding and develpment provide. Since my NFL career has been over, I have been searching for a career path that allows me to develop and hone a skill with practice. Deploying application   gives me a similar satisifaction to winning a game.  I absolutely enjoy the grind that goes into development. </p>



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



