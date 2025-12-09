// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwSWyqoinb93BnMppS-_vWI7RyURXXflY",
  authDomain: "prepwise-3315b.firebaseapp.com",
  projectId: "prepwise-3315b",
  storageBucket: "prepwise-3315b.firebasestorage.app",
  messagingSenderId: "594799878698",
  appId: "1:594799878698:web:16fae595ced50e19539953",
  measurementId: "G-PHJL760EW2"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db = getFirestore(app);