import React from "react";
import PortfolioCard from "./portfolioCard";
import projectData from "./projectData";
import { Container, Row, Col } from 'react-bootstrap';
import './portfolioPage.css'

function Portfoliopage() {

  return (
  
   
    <div className="d-flex justify-content-center align-items-center  portfolioCardContainer">
     
        <Row className="portfolioCardGridRow">
          {projectData.map((project, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="portfolioCardGridCol">
              <PortfolioCard
                title={project[0].title}
                description={project[0].description}
                imageUrl={project[0].imageUrl}
                moreInfo={project[0].moreInfo}
              />
            </Col>
          ))}
        </Row>

    </div>
  );
}

export default Portfoliopage;




