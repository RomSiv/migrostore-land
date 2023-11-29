import React from "react";
import s from "./Privacy.module.css";
import logo from '../../images/image12.svg'

export default function Privacy() {
  return (
    <div className={s.container}>
      <div className={s.distruction}>
        <h1>Polityka Prywatności Firmy Migrostore Sp. z o. o.</h1>
        <div className={s.mobile_header}>
          <h2>Polityka Prywatności</h2>
          <h2>Firmy</h2>
          <h2>Migrostore Sp. z o. o.</h2>
        </div>
        <p>
          Niniejsza Polityka Prywatności określa zasady przechowywania,
          przetwarzania i dostępu do informacji na stronie www oraz urządzeniach
          Użytkownika, służących do realizacji usług świadczonych drogą
          elektroniczną.
        </p>
      </div>
      <img src={logo} alt="Migrostore" />
    </div>
  );
}
