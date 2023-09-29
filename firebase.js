// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOF9Jb01AbBRFOz-MU34g9fJupxch2riM",
  authDomain: "laundry-application-d14d1.firebaseapp.com",
  projectId: "laundry-application-d14d1",
  storageBucket: "laundry-application-d14d1.appspot.com",
  messagingSenderId: "855711696596",
  appId: "1:855711696596:web:236a5f58b98a9fed9b1d41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
