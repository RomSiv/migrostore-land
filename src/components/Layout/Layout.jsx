import { Link, Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import logo from "../../images/migro_store_logo.svg";
import close_menu from "../../images/Component5.svg";
import smal_logo from "../../images/smal_logo.svg";
import burger_menu from "../../images/BurgerMenu.svg";
import Footer from "../Footer/Footer";
import { useState } from "react";
import DownloadButtons from "../DownloadButtons/DownloadButtons";
import MobileMenu from "../MobileMenu/MobileMenu";

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentImage =  mobileMenuOpen ? close_menu : burger_menu;


  return (
    <>
      <div className={s.app}>
        <header className={s.header}>
          <div className={s.header_content}>
            <img 
            className={s.logo} src={logo} alt="migrostore" />
            <img className={s.smal_logo} src={smal_logo} alt="migro_store" />
          <div 
          className={s.menu}
        > 
            <div className={s.links}>
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="contact">
                <p>Contact us</p>
              </Link>
              <Link to="#">
                <button className={s.dawnload_btn}>Download the app</button>
              </Link>
            </div>
            <div className={s.stores_btn}>
              <DownloadButtons />
            </div>

          </div>
          <img
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={s.menu_btm}
            src={currentImage}
            alt="menu"
          />
          </div>
        </header>
      </div>
      <div className={s.container}>
        <Outlet />
        <Footer />
        {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen}/>}
      </div>
    </>
  );
};

export { Layout };
