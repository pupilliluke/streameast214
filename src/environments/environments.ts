export const environment = {
    production: false
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDelDU5ESmNxBfjgO5QQS9O3_nj-M5KT5c",
  authDomain: "streameast-app.firebaseapp.com",
  databaseURL: "https://streameast-app-default-rtdb.firebaseio.com",
  projectId: "streameast-app",
  storageBucket: "streameast-app.appspot.com",
  messagingSenderId: "532058365537",
  appId: "1:532058365537:web:3da81391dd4e2da31c9420",
  measurementId: "G-1NNXFWDC37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);