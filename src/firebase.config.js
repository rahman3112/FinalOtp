// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV879QczUI0znmeOn9Mjw4FxgsfHPsuQw",
  authDomain: "hello-3d013.firebaseapp.com",
  projectId: "hello-3d013",
  storageBucket: "hello-3d013.appspot.com",
  messagingSenderId: "29016454887",
  appId: "1:29016454887:web:55bac50dd8cd8dbb231442",
  measurementId: "G-CFP8JKDJBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
