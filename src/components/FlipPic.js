import React from 'react';
import './FlipPic.css';
import FatBikePic from '../images/fatbike.jpg'
import BikePic from '../images/Bike.jpg';

function FlipPic() {
  return (
    <div className="flipContainer">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className = 'myImage' src={BikePic} alt="Front Image" />
          </div>
          <div className="flip-card-back">
            <img className = 'myImage'src={FatBikePic} alt="Back Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipPic;