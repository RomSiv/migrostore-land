import React from "react";
import { Link } from "react-router-dom";
import s from "./MobileMenu.module.css";
import DownloadButtons from "../DownloadButtons/DownloadButtons";
import { createPortal } from "react-dom";

const mobileMenuElem = document.getElementById("mobile_menu");

export default function MobileMenu() {
  return createPortal(
    <div className={s.menu}>
      <div className={s.links}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="contact">
          <p>Contact us</p>
        </Link>
        <Link to="privacy">
          <p className={s.mob_btn}>Privacy policy</p>
        </Link>
        <Link to="privacy">
          <p className={s.mob_btn}>Terms & Conditions</p>
        </Link>
        <Link to="agreement">
          <button className={s.dawnload_btn}>Download the app</button>
        </Link>
      </div>

      <div className={s.stores_btn}>
        <DownloadButtons />
      </div>
    </div>,
    mobileMenuElem
  );
}

//TODO доделать стили модалки через портал. Сделать анимацию и решить проблемму с хедером при открытом портале.
