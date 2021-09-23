import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAK0XooMeJ8wk6ow6lHgHBIhUy10hCOY38",
  authDomain: "twitterclone-ec02f.firebaseapp.com",
  projectId: "twitterclone-ec02f",
  storageBucket: "twitterclone-ec02f.appspot.com",
  messagingSenderId: "125581860320",
  appId: "1:125581860320:web:51640d69a7729be9b49f85",
  measurementId: "G-91TTEMWCL8"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
