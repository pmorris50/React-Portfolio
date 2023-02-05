import React from 'react';
import MyResume from '../../documents/Resume.pdf';
import ProfilePic from '../../images/profile.jpg';
import Container from 'react-bootstrap/ToastContainer';

function Resume() {
    const style = {
        background:
        {
            background: '#B3B4B5'
        }
    }
    return (
        <Container>
     

        <header  style = {style.background}className="bg-gradient text-white py-5">
  <div className="container">
    <div class="row">
      <div className="col-md-3 text-left text-md-center mb-3">
        <img className="rounded-circle img-fluid" src={ProfilePic} alt="Profile Photo" />
      </div>
      <div className="col-md-9">
        <h1>Patrick Morris</h1>
        <h5>Web Developer</h5>
        <p className="border-top pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio lacus, sollicitudin in dolor at, consequat volutpat ante. Integer quis consequat turpis, quis porta orci. Proin tincidunt volutpat faucibus. Suspendisse ac nisl purus suspendisse eleifend interdum orci non pharetra. </p>
      </div>       
    </div>        
  </div>
</header>
<main class="container">
  <div class="row">
    <div class="col-md mb-5">
     <h3>Work Experience</h3>
     <ul>
       Pulte Mortgage Loan Consultant
        </ul> 
        <li>
         From December 2021 - October 2023
        </li>
        <li>
        I was actively taking loan applications and fielding a back log of 50 plus customers at all times
        </li>
    </div>
    <div class="col-md mb-5">
     <h3>Education</h3>

    </div>     
  </div>    
  <div class="row">
    <div class="col-md mb-5">
      <h3>Languages</h3>
    </div>
    
  </div>
</main>

</Container>
  )};


export default Resume;

