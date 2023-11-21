import React from "react";
import s from './ContactUs.module.css'
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className={s.container}>
      <h2>In case of any questions, you can always use the contact form</h2>
      <Link to="contact">
      <button>Contact us</button>
      </Link>
    </div>
  );
}
