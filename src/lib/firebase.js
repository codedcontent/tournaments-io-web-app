// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2-5kGi9pJ-4e838AiTlbI2wH0fzt_oGw",
  authDomain: "tournaments-io.firebaseapp.com",
  projectId: "tournaments-io",
  storageBucket: "tournaments-io.appspot.com",
  messagingSenderId: "342426965587",
  appId: "1:342426965587:web:0c92e0236560c02db218a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;
export { db };
