import React from "react";
import personnel from "../../images/personnel.svg";
import poland_prize from "../../images/Poland-Prize.svg";
import accelpoint from "../../images/accelpoint.svg";
import partners from "../../images/partners.svg";
import s from "./OurPartners.module.css";

export default function OurPartners() {
  return (
    <div className={s.container}>
      <h2>OUR PARTNERS</h2>
      <div className={s.partners}>
        <img className={s.image} src={partners} alt="partners" />
      </div>

      <div className={s.separately_partners}>
        <img className={s.personnel} src={personnel} alt="personnel" />
        <img className={s.accelpoint} src={accelpoint} alt="accelpoint" />
        <img className={s.poland_prize} src={poland_prize} alt="poland_prize" />
      </div>
    </div>
  );
}
