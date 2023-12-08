import React from "react";
import s from "./ContactForm.module.css";
import  db  from "../../config/firebase-config";
import { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";




const ContactForm = () => {
   
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const messageCollectionRef = collection(db, "contactdata");

//   const handleSubmit = async () => {

//     const docRef = doc(db, 'test', 'test');
//     const payload = {
//         name: name.value,
//         email: email.value,
//         message: message.value
//     }
//     await setDoc(docRef, payload)

const handleSubmit = (e) => {
    e.preventDefault();
    const docRef = doc(db, 'test', 'test')
    const { name, email, message } = e.target;
    const payload = {
      id: Date.now(),
      name: name.value,
      email: email.value,
      message: message.value,
    };
setDoc(docRef, payload);
    e.target.reset();
  };

  return (
    <div className={s.container}>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Send message</button>
      </form>
    </div>
  );
 

}

export default ContactForm;

