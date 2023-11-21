import React from "react";
import s from "./OurTeam.module.css";
import denis from "../../images/Rectangle 48.svg";
import mariia from "../../images/Rectangle 48-2.svg";

export default function OurTeam() {
  return (
    <div className={s.container}>
      <h2>OUR TEAM</h2>
      <div className={s.container_mini}>
        <div className={s.about_denis}>
          <img className={s.denis} src={denis} alt="denis" />
          <div className={s.distruction}>
            <p className={s.job_title}>Project Coordinator</p>
            <p className={s.name}>Denis Rabota</p>
            <img className={s.denis_1280px} src={denis} alt="denis" />
            <p className={s.about}>
              We are striving to deliver as much features as possible in our
              product to make immigrants life easier in Poland, so that
              everybody would feel a support and seamless process of living
              abroad.
            </p>
          </div>
        </div>
        <div className={s.about_maria}>
          <div className={s.distruction}>
            <p className={s.job_title}>Managing director</p>
            <p className={s.name}>Mariia Ivchenko</p>
            <img className={s.maria_1280px} src={mariia} alt="maria" />
            <p className={s.about}>
              Inspired by the pain point of the refugees and immigrants in
              Poland, we are here to help people and simplify dependent flows
              and processed of being immigrant.
            </p>
          </div>
          <img className={s.maria} src={mariia} alt="maria" />
        </div>
      </div>
    </div>
  );
}
