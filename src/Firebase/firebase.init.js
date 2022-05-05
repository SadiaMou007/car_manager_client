import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAmnSv6nvbGYE7BWJF7_9lEgLxTDmp1uM4",
  authDomain: "car-manager-9a097.firebaseapp.com",
  projectId: "car-manager-9a097",
  storageBucket: "car-manager-9a097.appspot.com",
  messagingSenderId: "593206244661",
  appId: "1:593206244661:web:3e3a672ae28e79ef06c87c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
