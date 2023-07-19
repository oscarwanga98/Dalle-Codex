// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANPjnDMznZWxOP8SKIGgPHk1IahH2IRBw",
  authDomain: "seedtonic-f929d.firebaseapp.com",
  projectId: "seedtonic-f929d",
  storageBucket: "seedtonic-f929d.appspot.com",
  messagingSenderId: "917893468351",
  appId: "1:917893468351:web:2d95d4492598d03b3bf60a",
  measurementId: "G-K37MFLPBFG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
