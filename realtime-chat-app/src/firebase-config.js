// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV3b5rX4frY8ieiMe1kbn_vL0pSpukuLI",
  authDomain: "chatapp-9463c.firebaseapp.com",
  projectId: "chatapp-9463c",
  storageBucket: "chatapp-9463c.appspot.com",
  messagingSenderId: "957424382395",
  appId: "1:957424382395:web:3e9d3916b8647d37ab149e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
