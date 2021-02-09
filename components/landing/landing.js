import 'bootstrap/dist/css/bootstrap.css'
import styles from './landing.module.css'

import Editor from '../editor/editor'
import About from '../about/about'

import Link from 'next/link'

// Firebase
import firebase from 'firebase/app'
import 'firebase/auth'

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

const firebaseConfig = {
  apiKey: "AIzaSyAMT69nxDgfv1Xng973utYemUSeTI3UoBo",
  authDomain: "everyline-e8c1f.firebaseapp.com",
  projectId: "everyline-e8c1f",
  storageBucket: "everyline-e8c1f.appspot.com",
  messagingSenderId: "24187514806",
  appId: "1:24187514806:web:ffc208a9c38d021f401b17",
  measurementId: "G-5Z1F45E3DG"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var provider = new firebase.auth.GoogleAuthProvider();

export default function Landing() {
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
                      Make coding videos 
                    </div>
                    
                      <button className={`btn btn-lg btn-block ${ styles.button}`} onClick={signIn}>Get started</button>
                    
                  </div>
                  <div className={`${styles.editor} col`}>
                      <Editor code={exampleCode} />
                  </div>
                </div>
              </div>
            </div>
        <About className={`${ styles.about }`}/>
      </div>
    )
}

function signIn() {
  firebase.auth().signInWithRedirect(provider)
}