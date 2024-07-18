// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK2kXPSV8vYxJyaIlq9wLEwmOvGmLYvYE",
  authDomain: "netflix-gpt-83b60.firebaseapp.com",
  projectId: "netflix-gpt-83b60",
  storageBucket: "netflix-gpt-83b60.appspot.com",
  messagingSenderId: "215664735896",
  appId: "1:215664735896:web:208af74d28a2e3c99dc2ed",
  measurementId: "G-WQ9Z1FP9ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();