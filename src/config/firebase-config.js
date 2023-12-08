import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfQq9BSeh9tDZa1Xd6J3izEHJYMeN8lbA",
  authDomain: "test-project-fc67f.firebaseapp.com",
  projectId: "test-project-fc67f",
  storageBucket: "test-project-fc67f.appspot.com",
  messagingSenderId: "579241006251",
  appId: "1:579241006251:web:c8cb3e0ad93ba6c297d3ee"
};

const app = initializeApp(firebaseConfig);
export default getFirestore()