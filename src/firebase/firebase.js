// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTxFZiET0yW5bQVjaHb_S6_dh61CDFjQE",
  authDomain: "react-first-project-bcdd9.firebaseapp.com",
  projectId: "react-first-project-bcdd9",
  storageBucket: "react-first-project-bcdd9.appspot.com",
  messagingSenderId: "179734972436",
  appId: "1:179734972436:web:5c10a444a4fda734273f01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;