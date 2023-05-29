// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtr5OS-SdWYdsP1lhIIhowy85rkpik-YY",
  authDomain: "appnotes-813d2.firebaseapp.com",
  projectId: "appnotes-813d2",
  storageBucket: "appnotes-813d2.appspot.com",
  messagingSenderId: "154254484123",
  appId: "1:154254484123:web:517df3c9cc174e12139c3e"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;