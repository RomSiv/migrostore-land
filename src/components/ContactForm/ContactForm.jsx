import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import s from "./ContactForm.module.css";
import Modal from "../Modal/Modal";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [ nameDitry, setNameDitry ] = useState(false);
  const [ emailDitry, setEmailDitry ] = useState(false);
  const [ messageDitry, setMessageDitry ] = useState(false)

  const [errors, setErrors] = useState({
    errorName: "Required field",
    errorEmail: "Required field",
    errorMessage: "Required field",
  });

  const [modalActive, setModalActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    const contactCollectionRef = collection(db, "contacts");

    try {
      const docRef = await addDoc(contactCollectionRef, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

    } catch (error) {
      console.error("не отправлено:", error);
    }
  };

  const blurHandle = (e) => {
    if(!formData.name) {
      setNameDitry(true)
    }else {
      setNameDitry(false)
    }
    if(!formData.email) {
      setEmailDitry(true)
    }else {
      setEmailDitry(false)
    }
    if(!formData.message) {
      setMessageDitry(true)
    }else {
      setMessageDitry(false)
    }
  };

  // const emailHandler = (e) => {
  //   setFormData.email(e.target.value)
  //   const testEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //  if(!testEmail.test(String(e.target.value).toLowerCase())) {
  //   setErrors.errorEmail('Invalid email format')
  //  }else{
  //   setErrors.errorEmail('')
  //  }
  // }

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
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onBlur={e => blurHandle(e)}
          />
          <span className={s.placeholder}>Name</span>

          {(nameDitry && errors.errorName) && 
            <div className={s.errors}>{errors.errorName}</div>
          }
        </label>

        <label className={s.input}>
          <input
            type="text"
            name="email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}

            // onChange={(e) => {
            //   setFormData({ ...formData, email: e.target.value });
            //   emailHandler(e);
            // }}
            
            onBlur={e => blurHandle(e)}
          />
          <span className={s.placeholder}>Email</span>
          {(emailDitry && errors.errorEmail) &&  <div className={s.errors}>{errors.errorEmail}</div>}
        </label>

        <label className={s.input}>
          <input
            type="text"
            name="message"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            onBlur={e => blurHandle(e)}
          />
          <span className={s.placeholder}>Message</span>
          {(messageDitry && errors.errorMessage) && 
            <div className={s.errors}>{errors.errorMessage}</div>
          }
        </label>

        <button
          onClick={() => (!errors.errorName ? setModalActive(true) : "")}
          type="submit"
        >
          Submit
        </button>
      </form>
      {modalActive && <Modal />}
    </div>
  );
}
