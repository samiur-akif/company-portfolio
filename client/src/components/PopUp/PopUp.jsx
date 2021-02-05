import React, { useState } from 'react'

import { Modal } from 'react-bootstrap';


const PopOver = ({heading, description, buttonText, buttonLink, onClose}) => {
    const [show, setShow] = useState(true);
  
    const handleClose = () => {
        setShow(false);
        onClose();
    }
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{heading}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{fontSize: '16px', marginTop: '20px', marginBottom: '30px'}}>{description}</Modal.Body>
          <a className="btn btn-primary" href={buttonLink}>{buttonText}</a>
        </Modal>
      </>
    );
  }
  
  export default PopOver
