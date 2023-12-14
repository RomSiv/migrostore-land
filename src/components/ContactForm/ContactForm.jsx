import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import s from "./ContactForm.module.css";
import Modal from "../Modal/Modal";
import { contactValidation } from "../Validation";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [modalActive, setModalActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactCollectionRef = collection(db, "contacts");
    addDoc(contactCollectionRef, {
      name: name,
      email: email,
      message: message
    });
    const isValid = await contactValidation.isValid('')
    console.log(isValid);
  };

  return (
    <div className={s.container}>
      <h3>
        Feel free to contact us any time. We will get back contact to you as
        soon as we can!
      </h3>
      <form onSubmit={handleSubmit}>
        <label className={s.input}>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <span className={s.placeholder}>Name</span>

          {/* <div className={s.errors}></div> */}
        </label>

        <label className={s.input}>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className={s.placeholder}>Email</span>

          {/* <div className={s.errors}></div> */}
        </label>

        <label className={s.input}>
          <input
            type="text"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <span className={s.placeholder}>Message</span>

          {/* <div className={s.errors}></div> */}
        </label>

        <button
          onClick={() => (!errors ? setModalActive(true) : "")}
          type="submit"
        >
          Submit
        </button>
      </form>
      {/* {modalActive && <Modal />} */}
    </div>
  );
}
