import firebase from '../config/FirebaseConfig.js';
/**
 *  NOTES
 *  !!  Without a UI for implementing these functions some functionality might have bugs.
 *      These should be fine but I wanted to mention that just in case. !!
 * 
 *  This implementation uses a classic callback style for asynchronous
 *  firebase API calls. In order to prevent render faults, please be sure to
 *  understand how to use callbacks properly or you might have issues. I've tried
 *  to keep this API sheet as straight-forward as possible but if you have any
 *  questions shoot me a DM on discord! - Kleb
 */
export const registerNewAccount = (email, password, callback) => {
    //the callback here will be made with true if the register was successful and false if unsuccessful
    let status = firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      callback(true);
    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        }
        console.error(error);
        callback(false);
    });
}
export const getCurrentUser = (callback) => {
    callback(firebase.auth().currentUser());
}
export const login = (email, password, callback) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(callback(true)).catch((err)=>{alert(err.message)});
}
export const logout = (callback) => {
    firebase.auth()
        .signOut()
        .then(() => {console.log('User signed out!'); callback()});
}
