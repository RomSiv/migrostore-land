import React, { useState } from "react";
import s from "./MessageForm.module.css";
import logo from "../../images/image11.svg";
import Modal from "../Modal/Modal";

export default function MessageForm() {

  const [modalActive, setModalAktive] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;
    const new_message = {
      id: Date.now(),
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(new_message);
    e.target.reset();
  };

  return (
      <div className={s.container}>
         <Modal active={modalActive} setActive={setModalAktive}/>
        <img src={logo} alt="migro store" />
        <div>
          <h3>
            Feel free to contact us any time. We wiil get back contact to you as
            soon as we can!
          </h3>
          <form
           onSubmit={submit}
           >
            <div>
              <p>Name</p>
              <input type="text" placeholder="Your name" name="name" />
            </div>
            <div>
              <p>Email</p>
              <input type="text" placeholder="Your email" name="email" />
            </div>
            <div>
              <p>Message</p>
              <input type="text" placeholder="Your message" name="message" />
            </div>
            <button onClick={() => setModalAktive(true)}>Send message</button>
          </form>
        </div>
      </div>
  );
}
