import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIrGPFW9whbJyUAn3LnvZMYFKs_Si-Q_k",
  authDomain: "contact-message-78d5d.firebaseapp.com",
  projectId: "contact-message-78d5d",
  storageBucket: "contact-message-78d5d.appspot.com",
  messagingSenderId: "1097377454238",
  appId: "1:1097377454238:web:84ecf69d2c33f28b66038f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
