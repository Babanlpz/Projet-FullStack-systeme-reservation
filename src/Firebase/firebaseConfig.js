// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDASm7nFUDPtblKHP-AhMBJiaeOIALhkZo",
  authDomain: "systeme-reservation-e4138.firebaseapp.com",
  projectId: "systeme-reservation-e4138",
  storageBucket: "systeme-reservation-e4138.appspot.com",
  messagingSenderId: "891647043697",
  appId: "1:891647043697:web:df4367a9535d9e33df53d0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
