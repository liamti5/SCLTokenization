// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref, set, push } from "firebase/database";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL6nSqG0f6a50tPqSHmv8knjFONzu4AEw",
  authDomain: "scltokenization.firebaseapp.com",
  projectId: "scltokenization",
  storageBucket: "scltokenization.appspot.com",
  messagingSenderId: "41458544642",
  appId: "1:41458544642:web:a6a0bca2e4b3a9d0f6b71b",
  measurementId: "G-9M5TEJTQSM",
  databaseURL: "https://scltokenization-default-rtdb.europe-west1.firebasedatabase.app/",  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Authentication and get a reference to the service
const auth = getAuth(app);
export { database, auth, ref, set, push };