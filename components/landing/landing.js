import {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.css'
import styles from './landing.module.css'

import Editor from '../editor/editor'
import About from '../about/about'

import Link from 'next/link'

const exampleCode = 
`// Fibonacci
function fib(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return fib(n-1) + fib(n-2);
  }
}`  

export default function Landing() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
      <div>
        <title>EveryLine</title>
            <div className={`${ styles.landing } `}>
              <div className={`container pb-5`}>
                <div className={`${ styles.title}`}>
                    <a>EveryLine</a>
                </div>
                <div className={`row`}>
                  <div className={`col`}>
                    <div className={`${ styles.description }`}>
                     Share code with friends 
                    </div>
                      <>
                        <button type="button" className={`btn btn-lg btn-block ${styles.button}`} onClick={handleShow}>Get started</button>

                        <Modal show={show} onHide={handleClose}>

                          <Modal.Header closeButton>
                            <Modal.Title>Sign in to share & explore</Modal.Title>
                          </Modal.Header>

                          <Modal.Body>
                            <p>Sign in to EveryLine to start sharing code and viewing what others have shared.</p>
                          </Modal.Body>

                          <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                              Sign in using Google account 
                            </Button>
                          </Modal.Footer>

                        </Modal>
                      </>
                  </div>
                  <div className={`${styles.editor} col`}>
                      <Editor filename={`Tab.js`} code={exampleCode} />
                  </div>
                </div>
              </div>
            </div>
      </div>
    )
}