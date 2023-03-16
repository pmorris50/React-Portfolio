import React from 'react';
import './Rotatepics.css';
import InLaws from '../images/inLaws.jpg';
import MountainGoat from '../images/MountainGoat.jpg';
import Christmas from '../images/Christmas.JPG';
import Regi from '../images/Regi.jpg';
import Wife from '../images/Wife.jpg';
import Camper from '../images/Camper.jpg';
import Bike from '../images/Bike.jpg'

function Rotate3d() {
    return (
        <div className="componentBody">
            <div className="picContainer">
                <div className="picRide">
                    <figure class="picRide-inner">
                        <div className='size' ><img src={InLaws} alt="family"></img>
                        </div>
                        <div className='size'><img src={Wife} alt="Wife"></img>
                        </div>
                        <div className='size'> <img src={MountainGoat} alt="mountain goat"></img>
                        </div>
                        <div className='size'><img src={Christmas} alt="Christmas"></img>
                        </div>
                        <div className='size'><img src={Regi} alt="Regi"></img>
                        </div>
                        <div className='size'><img src={Camper} alt="Camper"></img>
                        </div>
                        <div className='size'><img src={Bike} alt="Bike"></img>
                        </div>
                       
                       



                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Rotate3d