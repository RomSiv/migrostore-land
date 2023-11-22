import React from "react";
import "./Model.css";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

const modalElement = document.getElementById('modal')

export default function Modal({ active, setActive }) {
return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <h2>Thank you!</h2>
        <p>One of our agents will get back to you as soon as possible.</p>
        <p> Normally it takes us 24 business hours. Keep in touch!</p>
        <Link to="/">
          <button>Back to home</button>
        </Link>
      </div>
    </div>
  );
}
