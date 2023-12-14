import React, { useState } from "react";
import s from "./MessageForm.module.css";
import logo from "../../images/Illustration.svg";
import Modal from "../Modal/Modal";
import { useForm } from "react-hook-form";

export default function MessageForm() {
  
 const [modalActive, setModalActive] = useState(false);

 const { register, handleSubmit, reset, formState: {errors, isValid} } = useForm()
 
 const nameRegister = register( 'name', {
  required: 'Required field'
 } )

 const emailRegister = register( 'email', {
  required: 'Required field',
  pattern: {
    value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    message: 'Invalid email format'
  }
 } )

 const messageRegister = register( 'message', {
  required: 'Required field'
 } )

const submit = data => {console.log(data);
reset()
}

  return (
    <div className={s.container}>
      <img
        src={logo}
        alt="migrostore"
      />
      <div>
        <h3>
          Feel free to contact us any time. We wiil get back contact to you as
          soon as we can!
        </h3>
        <form onSubmit={handleSubmit(submit)}>
          
          <label className={s.input}>
            <input className={s.test}
            {...nameRegister}                     
            />
            {errors.name && <p className={s.error}>{errors.name.message}</p>} 
            <span className={s.placeholder}>Name</span>
            <div className={s.errors}></div>
            
          </label>

          <label className={s.input}>
            <input
            {...emailRegister}
            />
            {errors.email && <p className={s.error}>{errors.email.message}</p>}
            <span className={s.placeholder}>Email</span>
            <div className={s.errors}>
            </div>
          </label>

          <label className={s.input}>
            <input
            {...messageRegister}
            />
            {errors.message && <p className={s.error}>{errors.message.message}</p>}
            <span className={s.placeholder}>Message</span>
            <div className={s.errors}>
            </div>
          </label>

          <button
            onClick={() => (isValid ? setModalActive(true) : "")}
          >
            Send message
          </button>
        </form>
      </div>
      {modalActive && <Modal />}
    </div>
  );
}