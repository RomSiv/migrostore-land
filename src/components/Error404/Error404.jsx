import React from "react";
import s from "./Error404.module.css";
import logo from "../../images/Persistence.svg";
import { Link } from "react-router-dom";


export default function Error404() {
  return (
    <div className={s.container}>
      <div>
        <img src={logo} alt="migrostore" />
        <div className={s.distruction}>
          <h2>404</h2>
          <h3>Something’s missing.</h3>
          <p>This page is missing or you assembled the link incorrectly.</p>
          <Link to='/'>
          <button>Back to home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
