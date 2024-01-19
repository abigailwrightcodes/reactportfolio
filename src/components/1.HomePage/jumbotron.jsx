import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import './jumbo.css'



function HomeJumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid home-jumbo vh-100">
      <div className="logoContainer">
        <img className="logoImg" src="./src/components/images/logo-main.png"/>
        
        
      </div>
      <div className="container">
        <h1 className="display-4 jumbo-main-txt">Welcome to Abigail Wright Codes</h1>
        <p className="lead">
          A creative frontend web developer.
        
        </p>
      </div>
    </div>
  );
}

export default HomeJumbotron;
