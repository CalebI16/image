// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcJSdwpSglWtF7XE1fR9bdN6iJhLUIakM",
  authDomain: "imageserv-8ef9f.firebaseapp.com",
  projectId: "imageserv-8ef9f",
  storageBucket: "imageserv-8ef9f.appspot.com",
  messagingSenderId: "507641218761",
  appId: "1:507641218761:web:8a453ca2fa8f8b2975ef18",
  measurementId: "G-L12490WVY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);