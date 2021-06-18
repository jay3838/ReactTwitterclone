import firebase from 'firebase';

const firebaseConfig = {
     apiKey: "AIzaSyD4muCJ6wQoulz3V0Qd_uD2sBf2aUZUr-M",
    authDomain: "twitterap.firebaseapp.com",
    projectId: "twitterap",
    storageBucket: "twitterap.appspot.com",
    messagingSenderId: "428145425867",
    appId: "1:428145425867:web:8a036e4919cc8cadb6ca4e",
    measurementId: "G-T11EWD4XV6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };