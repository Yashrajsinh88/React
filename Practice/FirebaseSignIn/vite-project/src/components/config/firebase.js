// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9EcHoSFcheVbakIPePSULVD_flCyccLA",
  authDomain: "auth-project1-56268.firebaseapp.com",
  projectId: "auth-project1-56268",
  storageBucket: "auth-project1-56268.firebasestorage.app",
  messagingSenderId: "731549241524",
  appId: "1:731549241524:web:7f47323a0c9ac29c0107e1",
  measurementId: "G-JS35D6XEEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics =getAnalytics(app);
const provider =new GoogleAuthProvider();

export {auth , provider}