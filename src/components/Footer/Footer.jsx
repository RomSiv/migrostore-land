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
            <a href="mailto:ram7siv@gmail.com">ram7siv@gmail.com</a>
          </p>
          <p>
            <a href="tel:+48798368136">+48 798 368 136</a>
          </p>
          <p>
            <a href="https://www.google.com/maps/place/Orzechowa+95,+50-540+Wroc%C5%82aw/@51.0782144,17.0418675,17z/data=!4m6!3m5!1s0x470fc2f766d0f4bb:0x7fd1e3acf2e3e4c0!8m2!3d51.0782111!4d17.0444424!16s%2Fg%2F11cs79fxbh?entry=ttu">
              Orzechowa 95, Wroclaw 54-540
            </a>
          </p>
        </div>
      </div>
      <div className={s.copyring}>
        <p>© Copyright 2022 Migrostore sp. z.o.o. </p>
      </div>
    </div>
  );
}
