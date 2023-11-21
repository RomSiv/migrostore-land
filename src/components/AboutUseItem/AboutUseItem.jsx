import React from "react";
import s from "./AboutUseItem.module.css";

export default function AboutUseItem({ image, title, distruction }) {
  return (
    <div className={s.item}>
      <img src={image} alt={title} />
      <div className={s.distruction}>
        <h3>{title}</h3>
        <p>{distruction}</p>
      </div>
    </div>
  );
}
