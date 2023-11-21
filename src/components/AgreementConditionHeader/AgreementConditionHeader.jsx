import React from "react";
import s from "./AgreementConditionHeader.module.css";
import logo from "../../images/image12.svg";

export default function AgreementConditionHeader() {
  return (
    <div className={s.container}>
      <h2>
        Ogólne warunki Umowy świadczenia usług drogą elektroniczną w ramach
        serwisów należących do Migrostore Sp. z o. o.
      </h2>
      <img src={logo} alt="logo" />
    </div>
  );
}
