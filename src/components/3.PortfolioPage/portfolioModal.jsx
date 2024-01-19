import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './portfolioPage.css'

const CustomModal = ({ showModal, handleCloseModal, title, description, moreInfo }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal} >
      <Modal.Header closeButton className="modalBody">
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <p>hello world</p>
        <p>{moreInfo}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
       
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;