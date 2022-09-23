import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBjNHy0ovcbLmQx1bEBUefuJ1xRFSiOu0Q",
    authDomain: "fir-33655.firebaseapp.com",
    projectId: "fir-33655",
    storageBucket: "fir-33655.appspot.com",
    messagingSenderId: "152204863281",
    appId: "1:152204863281:web:91e6adfb4de7886d37b210",
    measurementId: "G-9WC671VNB3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth};