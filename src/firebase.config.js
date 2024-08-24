// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG6Vd3iRYhdGlSFILjKEGWx2Ipt8mnCpU",
  authDomain: "kmitlabotp.firebaseapp.com",
  projectId: "kmitlabotp",
  storageBucket: "kmitlabotp.appspot.com",
  messagingSenderId: "241870350135",
  appId: "1:241870350135:web:9dad20df77a20b1515dcb2",
  measurementId: "G-EFX2J0ZSVT"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
