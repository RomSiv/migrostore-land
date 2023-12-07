import React from "react";
import s from "./ContactForm.module.css";
import { db } from "../../config/firebase-config";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

const ContactForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const messageCollectionRef = collection(db, "contactdata");

  const handleSubmit = () => {
    addDoc(messageCollectionRef, {
        name: name,
        email: email,
        message: message
    })
  };

  return (
    <div className={s.container}>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <button onClick={handleSubmit}>Send message</button>
      </form>
    </div>
  );
};

export default ContactForm;
