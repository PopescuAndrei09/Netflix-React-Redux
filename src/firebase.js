import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyC87z9-nYbwqJva2bugkRlmcQf1Bg91eYY",
    authDomain: "netflix-clone-61fcf.firebaseapp.com",
    projectId: "netflix-clone-61fcf",
    storageBucket: "netflix-clone-61fcf.appspot.com",
    messagingSenderId: "864593941653",
    appId: "1:864593941653:web:56b8812cca8502129c379c"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
 


