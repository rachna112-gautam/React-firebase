import * as firebase from 'firebase/app';
require('firebase/auth'); 

var firebaseConfig = {
    apiKey: "AIzaSyA4IipO03mpIKiD6gKgcWGvtz9l2TAVFqE",
    authDomain: "auth-system-80b3c.firebaseapp.com",
    databaseURL: "https://auth-system-80b3c.firebaseio.com",
    projectId: "auth-system-80b3c",
    storageBucket: "auth-system-80b3c.appspot.com",
    messagingSenderId: "163011124106",
    appId: "1:163011124106:web:05eabddacadcef02e40673"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;
