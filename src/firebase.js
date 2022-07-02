// import firebase from 'firebase';
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBahTzVNwfzuNFOw7I7YNzB-TE4RkbpHZU",
    authDomain: "twitter-clone-7ba61.firebaseapp.com",
    projectId: "twitter-clone-7ba61",
    storageBucket: "twitter-clone-7ba61.appspot.com",
    messagingSenderId: "1008961455572",
    appId: "1:1008961455572:web:953723b40adc37916f4241",
    measurementId: "G-ZK7VS4N45R"
  };

  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  // const db = firebaseApp.firestore();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;

