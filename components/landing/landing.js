import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import styles from './landing.module.css'

import Editor from '../editor/editor'
import About from '../about/about'

import Link from 'next/link'
import Router from 'next/link'
import { useRouter } from 'next/router'

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
 
  const [state, setState] = useState({
    isLoggedIn: false
  })

  const router = useRouter()

  // See if user was previously signed in
  firebase.auth()
  .getRedirectResult()
  .then((result) => {
    if (result.credential) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // ...

      router.push('/demo')
    }
    // The signed-in user info.
    var user = result.user;

    if(user) {
      // Redirect to signed in interface
      router.push('/demo')
      
    }
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });



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

