// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF-rnyqACkgRGvye1amoFqlsmuwvXKB0k",
  authDomain: "b2b-fmcg-simulator.firebaseapp.com",
  databaseURL: "https://b2b-fmcg-simulator-default-rtdb.firebaseio.com",
  projectId: "b2b-fmcg-simulator",
  storageBucket: "b2b-fmcg-simulator.firebasestorage.app",
  messagingSenderId: "446088640799",
  appId: "1:446088640799:web:7194877a9ab16b8d13582a",
  measurementId: "G-KS0NE3HZ27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
