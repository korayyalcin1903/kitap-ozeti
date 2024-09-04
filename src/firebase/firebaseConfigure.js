// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import 'firebase/auth'
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyyNrkEJqDqz4Y4NSb0zTVAOBryohWbSw",
  authDomain: "kitap-ozeti.firebaseapp.com",
  projectId: "kitap-ozeti",
  storageBucket: "kitap-ozeti.appspot.com",
  messagingSenderId: "174588313918",
  appId: "1:174588313918:web:c7b678e4e12f98b3e3ac6f",
  measurementId: "G-DTZSSSD5NP"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp)

const auth = getAuth(firebaseApp)
const googleAuthProvider = new GoogleAuthProvider()

export {database as default, auth, googleAuthProvider}