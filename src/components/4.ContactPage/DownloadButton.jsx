import React from 'react';

const DownloadButton = ({ pdfUrl, buttonText }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Abigail-Wright-CV-Test.pdf';
    link.click();
  };
  
  return (
    <button onClick={handleDownload}>
      {buttonText || 'Download CV'}
    </button>
  );
};

export default DownloadButton;