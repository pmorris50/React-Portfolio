import React from 'react';
import MyResume from '../../documents/Resume.pdf';
import ProfilePic from '../../images/profile.jpg';
import Container from 'react-bootstrap/ToastContainer';

function Resume() {
    const style = {
        background:
        {
            background: '#B3B4B5'
        },
        jobtext: {
            fontSize: '20px',
            fontWeight: 'bold'
        },
        timetext: {
            textDecoration: 'underline'

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
        <p className="border-top pt-3">Thank you for visiting my Portfolio. You can take a look at my resume below and download a PDF version </p>
      </div>       
    </div>        
  </div>
</header>
<main class="container">
  <div class="row">
    <div class="col-md mb-5">
     <h3>Work Experience</h3>
     <ul style={style.jobtext}>
       Pulte Mortgage Loan Consultant
        </ul> 
        <li style = {style.timetext}>
         From December 2021 - October 2023
        </li>
        <li>
        I was actively taking loan applications and fielding a back log of 50 plus customers at all times
        </li>
        <li>
           A customer facing role where excellent customer service was the standard.
        </li>
        <ul style={style.jobtext} className = 'mt-3'>
       NFL Player
        </ul> 
        <li style ={style.timetext}>
         From May 2018 - July 2021
        </li>
        <li>
      Position: Center
        </li>
        <li>
        Duties: Full control of controlling the offensive line blocking schemes in accordance to team philosophy
        </li>
        <li>
            Quick and confident decision making is mandetory for this position
        </li>
        <li>
            Understanding team cohesiveness and dedication is more important than individual talent. 
        </li>
        <ul style={style.jobtext} className = 'mt-3'>
      KPMG Tax intern
        </ul> 
        <li style ={style.timetext}>
         From January 2017 - March 2017
        </li>
        <li>
      
        </li>
        <li>
        Duties: calculating taxable income, and filling out respective IRS forms. As well as planning taxable events
        </li>
        <li>
        Attention to detail and learning new systems and regulations were major components of this job
        </li>
        <li>
           I was on track to complete my masters in accounting at TCU and return full time but ultimately I chose to pursue a career in football
        </li>
        
    </div>
    <div class="col-md mb-5">
     <h3>Education</h3>
     <ul style={style.jobtext} className = 'mt-3'>
      TCU
        </ul> 
        <li style ={style.timetext}>
         From June 2013 - December 2017
        </li>
        <li>
      B.B.A in Accounting: Cum Laude
        </li>
        <ul style={style.jobtext} className = 'mt-3'>
      Rutgers
        </ul> 
        <li style ={style.timetext}>
         From November 2022 - February 2023
        </li>
        <li>
      Fullstack web developer bootcamp
        </li>
        <ul style={style.jobtext} className = 'mt-3'>
      Skills
        </ul> 
        <li>
        Licensed Mortgage Loan Originator NMLS #2223246 
        </li>    

     

    </div>     
  </div>    
    

</main>

</Container>
  )};


export default Resume;

