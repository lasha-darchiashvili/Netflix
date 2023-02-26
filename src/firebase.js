// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO8fPIDVp_wc3X45SuKunN0g5ETDzzYuE",
  authDomain: "netflix-cf94a.firebaseapp.com",
  projectId: "netflix-cf94a",
  storageBucket: "netflix-cf94a.appspot.com",
  messagingSenderId: "277080081736",
  appId: "1:277080081736:web:69775dcf84dea146795f7d",
  measurementId: "G-FJNQLF70KM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
