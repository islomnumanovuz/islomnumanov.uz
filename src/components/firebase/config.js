import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAW8HE-4OuzaF6XAgejS381RLoTjgdNUVI",
  authDomain: "portfolio-website-b0e9e.firebaseapp.com",
  projectId: "portfolio-website-b0e9e",
  storageBucket: "portfolio-website-b0e9e.appspot.com",
  messagingSenderId: "1022158197771",
  appId: "1:1022158197771:web:972a36ea34ecce5b93630e",
  measurementId: "G-M1997YLYWL",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
