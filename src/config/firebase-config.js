import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD21Y9YaxWfS4jMqAC4BEiejaN6n-FoyRY",
  authDomain: "message-migrostore.firebaseapp.com",
  projectId: "message-migrostore",
  storageBucket: "message-migrostore.appspot.com",
  messagingSenderId: "433931934810",
  appId: "1:433931934810:web:953c3f3eee6f16786a4c63"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)