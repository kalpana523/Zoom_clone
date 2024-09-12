// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6FGj7DAVWuJ3OGp40mrszBBLN_l6wpOY",
  authDomain: "my-app-70533.firebaseapp.com",
  projectId: "my-app-70533",
  storageBucket: "my-app-70533.appspot.com",
  messagingSenderId: "385211744969",
  appId: "1:385211744969:web:e321b7b0573a3a72fd0318",
  measurementId: "G-NNL17G4X32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);




 export const usersRef = collection(firebaseDB, "users");
 export const meetingsRef = collection(firebaseDB, "meetings");