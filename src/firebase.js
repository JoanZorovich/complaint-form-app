import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBx3vBQPBj-lko0v37JPTqL_dbZLyMFQ1I",
    authDomain: "complaint-form-react.firebaseapp.com",
    projectId: "complaint-form-react",
    storageBucket: "complaint-form-react.appspot.com",
    messagingSenderId: "790644512481",
    appId: "1:790644512481:web:b08857344bcf5eaff9c9a0"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = fb.firestore();
  const storage = fb.storage();
  
  export {db, storage}
