import React from "react";
import DownloadButton from "./DownloadButton";
import './contactPage.css';

function Contactpage() {

  const pdfUrl = './src/components/images/Abigail-Wright-CV-Test.pdf';

  return (
    <div className="contact-page-container">
      <p>Contact</p>
      <DownloadButton pdfUrl={pdfUrl} buttonText="Download My CV" />
    </div>
  );
}

export default Contactpage;