import React from 'react';


const DownloadButton = () => {
  const handleDownload = () => {
    const link = alert('Clicked');
    // link.href = "../../images/profile.jpg";
    // link.download = 'file.pdf';
    link.click();
  };

  return (
    <div className = 'col-3'> 
    <button type="button" className="btn btn-primary" onClick={handleDownload}>
      Download
    </button>
    </div>
  );
};

export default DownloadButton;