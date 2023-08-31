// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZx5VvONm3QaLfCPElLFCmndCn1LFJPdY",
  authDomain: "kitchen-contact-form.firebaseapp.com",
  projectId: "kitchen-contact-form",
  storageBucket: "kitchen-contact-form.appspot.com",
  messagingSenderId: "417002627699",
  appId: "1:417002627699:web:a86c359157b0e5a45d0006",
  measurementId: "G-XFFCCCQGC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  app,
  db
}