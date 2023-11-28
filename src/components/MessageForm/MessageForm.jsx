import React, { useState } from "react";
import s from "./MessageForm.module.css";
import logo from "../../images/contakt_us_form.svg";
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
        <img src='https://migrostore.pl/build/assets/contact_image.2b603a35.svg' alt="migro store" />
        <div>
          <h3>
            Feel free to contact us any time. We wiil get back contact to you as
            soon as we can!
          </h3>
          <form
           onSubmit={submit}
           >
            <div>
              <input type="text" placeholder="Name" name="name" />
            </div>
            <div>
              <input type="text" placeholder="Email" name="email" />
            </div>
            <div>
              <input type="text" placeholder="Message" name="message" />
            </div>
            <button onClick={() => setModalAktive(true)}>Send message</button>
          </form>
        </div>
        { modalActive && <Modal />}
 
      </div>
  );
}
