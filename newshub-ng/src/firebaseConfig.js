// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDbp_0Cb2A1howH0VEF_jmzf8fB5XzApq8",
    authDomain: "newshub-ng.firebaseapp.com",
    projectId: "newshub-ng",
    storageBucket: "newshub-ng.appspot.com",
    messagingSenderId: "654622305256",
    appId: "1:654622305256:web:861fac01e5a987c5f6d25d",
    measurementId: "G-T3B4R50L1F"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
