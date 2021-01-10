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
            <Modal.Title><i>EveryLine</i> is temporarily down</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Label>Sorry! We will send you an email when it's up and running</Form.Label>
            <Form.Control className="mb-2" type="email" placeholder="Email address" />
          </Modal.Body>
        
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>

        </Modal>
      </>
    );
  
}