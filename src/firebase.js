// firebase v8 
// import firebase from 'firebase/compat/app';
// import "firebase/compat/auth"
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';
// firebase v9 modular
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

//firebase config
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
  };
  
    // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    // autentication firebase
  const auth = getAuth(app);
    // db connect
  const dbFirebase = getFirestore(app);
  // autenticar con google
  const googleAuthProvider = new GoogleAuthProvider();
   
// v8 firebase
//   // connect sotrage firebase
//   const storageFirebase = firebase.storage();
//   // para autenticar con google provider
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// // auth con facebook
// const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  export {
    auth,
    dbFirebase,
    googleAuthProvider
  }
