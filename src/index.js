// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7F9NGjzeXqj9r_AlXhpmRoCHuMBYtaro",
  authDomain: "testproject-8d491.firebaseapp.com",
  projectId: "testproject-8d491",
  storageBucket: "testproject-8d491.appspot.com",
  messagingSenderId: "4599030488",
  appId: "1:4599030488:web:4629f0bfb65ff30bd46dad",
  measurementId: "G-FNCG2QQMGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)