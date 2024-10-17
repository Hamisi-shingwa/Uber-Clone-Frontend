// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAUmzgaInvGyQ8E0Z8zzOYfYrBXujFOxp0",
  authDomain: "gauthtrial-7ae8e.firebaseapp.com",
  projectId: "gauthtrial-7ae8e",
  storageBucket: "gauthtrial-7ae8e.appspot.com",
  messagingSenderId: "504645736379",
  appId: "1:504645736379:web:e72c356bc707f8d1c7169e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth(app)
export  {auth}