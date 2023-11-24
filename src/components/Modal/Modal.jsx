import React from "react";
import s from './Modal.module.css'
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

const modalElement = document.getElementById('mobile_menu')

export default function Modal() {
return createPortal (
    <div
className={s.container}>
      <div 
      className={s.modal}
       onClick={(e) => e.stopPropagation()}
      >
        <h2>Thank you!</h2>
        <p>One of our agents will get back to you as soon as possible. Normally it takes us 24 business hours. Keep in touch!</p>
        <Link to="/">
          <button>Back to home</button>
        </Link>
      </div>
    </div>, modalElement
  );
}
