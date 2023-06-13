import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: process.env.REACT_APP_RAPID_API_KEY",
    authDomain: process.env.REACT_APP_RAPID_API_KEY,
    projectId: process.env.REACT_APP_RAPID_API_KEY",
    storageBucket: process.env.REACT_APP_RAPID_API_KEY,
    messagingSenderId: process.env.REACT_APP_RAPID_API_KEY,
    appId: process.env.REACT_APP_RAPID_API_KEY
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
 


