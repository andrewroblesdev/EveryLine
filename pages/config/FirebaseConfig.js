import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAMT69nxDgfv1Xng973utYemUSeTI3UoBo",
    authDomain: "everyline-e8c1f.firebaseapp.com",
    projectId: "everyline-e8c1f",
    storageBucket: "everyline-e8c1f.appspot.com",
    messagingSenderId: "24187514806",
    appId: "1:24187514806:web:ffc208a9c38d021f401b17",
    measurementId: "G-5Z1F45E3DG"
  };
  
  try {
    firebase.initializeApp(firebaseConfig);
  } catch(err){
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)}
  }
  const fire = firebase;
  export default fire;