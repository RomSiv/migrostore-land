import React from "react";
import s from "./Footer.module.css";
import logo from "../../images/migro_store_logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <img src={logo} alt="migro store." />
        <div className={s.distruction}>
          <h3>OUR COMPANY</h3>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="contact">
            <p>Contact us</p>
          </Link>
          <Link to="privacy">
            <p>Privacy policy</p>
          </Link>
          <Link to="agreement">
            <p>Terms & Conditions </p>
          </Link>
        </div>
        <div className={s.distruction}>
          <h3>OUR CONTACT</h3>
          <p>
            <a href="mailto:ram7siv@gmail.com">d.rabota@migrostore.com</a>
          </p>
          <p>
            <a href="tel:+48791490146">+48 791 490 146</a>
          </p>
          <p>         
            ul. Księcia Witolda 49, lok. 15 50-202 Wrocław
          </p>
        </div>
      </div>
      <div className={s.copyring}>
        <p>© Copyright 2022 Migrostore sp. z.o.o. </p>
      </div>
    </div>
  );
}
