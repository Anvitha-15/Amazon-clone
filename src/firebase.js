import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD6Z2OLTKDkK7mNfiIZbOHA4uIUqEXlRGk",
    authDomain: "clone-8df99.firebaseapp.com",
    projectId: "clone-8df99",
    storageBucket: "clone-8df99.appspot.com",
    messagingSenderId: "819840618340",
    appId: "1:819840618340:web:f3f69da6df4901b3f43471",
    measurementId: "G-24CYR04MPN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};