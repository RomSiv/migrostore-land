import { Link, Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import logo from "../../images/migro_store_logo.svg";
import close_menu from "../../images/Component5.svg";
import smal_logo from "../../images/smal_logo.svg";
import burger_menu from "../../images/BurgerMenu.svg";
import Footer from "../Footer/Footer";
import { useState } from "react";
import DownloadButtons from "../DownloadButtons/DownloadButtons";

const Layout = () => {
  const [menu, setMenu] = useState(false);

  const currentImage = menu ? close_menu : burger_menu;

  return (
    <>
      <div className={s.app}>
        <header className={s.header}>
          <Link to="agreement">
            <img className={s.logo} src={logo} alt="migrostore" />
            <img className={s.smal_logo} src={smal_logo} alt="migro_store" />
          </Link>
          <div className={menu ? [s.menu, s.active].join(" ") : [s.menu]}>
            
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

          </div>
          <img
            onClick={() => setMenu(!menu)}
            className={s.menu_btm}
            src={currentImage}
            alt="menu"
          />
        </header>
      </div>
      <div className={s.container}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export { Layout };
