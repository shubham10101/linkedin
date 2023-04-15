// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import  {getFirestore}  from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfrdax6YC_Y4Z-vUOKlyKWuiDCiEmrqKQ",
  authDomain: "linkedin-clone-56a29.firebaseapp.com",
  projectId: "linkedin-clone-56a29",
  storageBucket: "linkedin-clone-56a29.appspot.com",
  messagingSenderId: "572666587885",
  appId: "1:572666587885:web:58c1ce839d2beb35b3fae4",
  measurementId: "G-KPK6G9N5XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const analytics = getAnalytics(app);
const firestore =getFirestore(app)

export {app,auth ,firestore}