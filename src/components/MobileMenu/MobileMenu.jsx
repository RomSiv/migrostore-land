import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./MobileMenu.module.css";
import DownloadButtons from "../DownloadButtons/DownloadButtons";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const mobileMenuElem = document.getElementById("mobile_menu");

export default function MobileMenu({ setMobileMenuOpen }) {
  const onClose = () => setMobileMenuOpen(false);

  const { pageToTop } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageToTop]);

  return createPortal(
    <div className={s.menu}>
      <div className={s.container}>
        <div className={s.links}>
          <Link to="/">
            <p onClick={onClose}>Home</p>
          </Link>
          <Link to="contact">
            <p onClick={onClose}>Contact us</p>
          </Link>
          <Link to="privacy">
            <p onClick={onClose} className={s.mob_btn}>
              Privacy policy
            </p>
          </Link>
          <Link to="agreement">
            <p onClick={onClose} className={s.mob_btn}>
              Terms & Conditions
            </p>
          </Link>
        </div>
      </div>
      <div className={s.stores_btn}>
        <DownloadButtons />
      </div>
    </div>,
    mobileMenuElem
  );
}
