import React from 'react';
import MyResume from '../../documents/Resume.pdf';


function Resume() {
    return (
        <div>
           <iframe src ={MyResume}></iframe>
           <h1>My Resume</h1>
        </div>
    )
}

export default Resume;

