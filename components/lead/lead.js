import {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import styles from './lead.module.css';

export default function Lead() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button type="button" className={`btn ${styles.btnCustom}`} onClick={handleShow}>Sign up</button>

        <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>A message from the developer</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Hey there!<br/><br/>The core functionality of the platform is still being worked on but will hopefully be able to support user sign ups very soon. Thanks for stopping by!<br/><br/>-Andrew</p>
          </Modal.Body>
        
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Okay
            </Button>
          </Modal.Footer>

        </Modal>
      </>
    );
  
}