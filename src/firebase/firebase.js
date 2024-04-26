// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5TLlhj0V-_oZ47lyKN_I2sGuEORxDUJo",
  authDomain: "trektrov-c76b3.firebaseapp.com",
  projectId: "trektrov-c76b3",
  storageBucket: "trektrov-c76b3.appspot.com",
  messagingSenderId: "596129653201",
  appId: "1:596129653201:web:429401a21d2901ace7c0f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth