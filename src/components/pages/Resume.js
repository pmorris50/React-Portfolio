import React, { useState } from 'react';
import MyResume from '../../images/Resume.pdf'

function Resume() {
  const style = {
    resume: {
      position: 'absolute',
      top: '5%',
      height: '100%',
      width: '100vw',
    },
    header: {
      border: '2px solid black',
    }
  };

  return (
    <div style={style.resume}>
      <object data={MyResume} type="application/pdf" width="100%" height="100%">
        <p>Sorry, your browser does not support embedded PDFs.</p>
      </object>
    </div>
  );
};

export default Resume;



