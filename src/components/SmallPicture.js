import React, { useState } from 'react';
import InLaws from '../images/inLaws.jpg';
import MountainGoat from '../images/MountainGoat.jpg';
import Christmas from '../images/Christmas.JPG';
import Regi from '../images/Regi.jpg';
import Wife from '../images/Wife.jpg';
import Camper from '../images/Camper.jpg';
import Bike from '../images/Bike.jpg'
import './SmallPicture.css'

function SmallPicture() {
  const [isActive, setIsActive] = useState(false);

  function handleNextClick() {
    const items = document.querySelectorAll('.carousel-item');
    const activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
    const nextIndex = (activeIndex + 1) % items.length;
    setIsActive(!isActive);
    items.forEach(item => item.classList.remove('active'));
    items[nextIndex].classList.add('active');
  }

  function handlePreviousClick() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const activeItem = document.querySelector('.carousel-item.active');
    setIsActive(!isActive);
    // find the previous item
    let previousItem;
    if (activeItem.previousElementSibling) {
      previousItem = activeItem.previousElementSibling;
    } else {
      previousItem = carouselItems[carouselItems.length - 1];
    }

    // remove active class from all items
    carouselItems.forEach(item => item.classList.remove('active'));

    // add active class to previous item
    previousItem.classList.add('active');
  }

  return (
    <div id="carouselExampleControls setHeight" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item">
          <img src={InLaws} style = {{width: '200px', height: '200px',}} className="d-block w-100 setImage" alt="inlaws"></img>
        </div>
        <div className="carousel-item active">
          <img  src={MountainGoat} style = {{width: '200px', height: '200px',}} className="d-block w-100 setImage" alt="mountain goat"></img>
        </div>
        <div className="carousel-item">
          <img  src={Regi} style = {{width: '200px', height: '200px',}} className="d-block w-100 setImage" alt="Regi"></img>
        </div>
        <div className="carousel-item">
          <img  src={Christmas} style = {{width: '200px', height: '200px',}} className="d-block w-100 setImage" alt="Christmas"></img>
        </div>
        <div class="carousel-item">
          <img  src={Wife} style = {{width: '200px', height: '200px',}} className="d-block w-100 setImage" alt="Wife"></img>
        </div>
        <div className="carousel-item">
          <img  src={Camper} style = {{width: '200px', height: '200px',}} className="d-block w-100 setImage" alt="Camper"></img>
        </div>
        <div className="carousel-item">
          <img  src={Bike} style = {{width: '200px', height: '200px',}} className="d-block w-100 setImage" alt="Bike"></img>
        </div>
      </div>
      <button className="carousel-control-prev" onClick={handlePreviousClick} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" onClick={handleNextClick} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default SmallPicture