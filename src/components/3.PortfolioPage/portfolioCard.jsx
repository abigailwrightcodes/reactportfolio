import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from "bootstrap";
import { Card, Button } from 'react-bootstrap';
import ProjectData from './projectData';
import CustomModal from './portfolioModal';


const PortfolioCard = ({ title, description, imageUrl, moreInfo }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Card className="cardContainer">
      {imageUrl && <Card.Img variant="top" src={imageUrl} alt={title} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{moreInfo}</Card.Text>
        <Button className='portfolio-more-button' variant="" onClick={handleShowModal}>
          Learn More
        </Button>

        {/* Use the custom modal component */}
        <CustomModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          title={title}
          description={description}
          moreInfo={moreInfo}
        />
      </Card.Body>
    </Card>
  );
};

export default PortfolioCard;