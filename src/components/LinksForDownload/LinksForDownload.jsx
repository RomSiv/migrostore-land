import React from "react";
import s from "./LinksForDownload.module.css";
import world_img from "../../images/world.svg";
import DownloadButtons from "../DownloadButtons/DownloadButtons";

export default function LinksForDownload() {
  return (
    <div className={s.container}>
      
      <div className={s.header_max_width_1063px}>
        <h2>Migrostore - one store shop platform for Ukrainians in Poland.</h2>
      </div>
      <div className={s.content}>
        <h2 className={s.header}>
          Migrostore - one store shop platform for Ukrainians in Poland.
        </h2>
        <img className={s.image_580px} src={world_img} alt="migrostore" />
        <img className={s.image_1063px} src={world_img} alt="migrostore" />
        <DownloadButtons />
      </div>

      <img className={s.image_1440px} src={world_img} alt="migrostore" />
    </div>
  );
}
