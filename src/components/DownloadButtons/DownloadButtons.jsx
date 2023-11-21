import React from 'react'
import apple_logo from "../../images/Vector.svg";
import google_logo from "../../images/Vector-2.svg";
import s from './DownloadButtons.module.css'

export default function DownloadButtons() {
  return (
    <div className={s.container_btn}>
    <a href="https://apps.apple.com/uz/app/migrostore/id1663022722">
      <div className={s.apple_store_btn}>
        <img src={apple_logo} alt="apple store" />
        <div className={s.btn_container}>
          <p className={s.download}>Download on the</p>
          <p className={s.store}>App Store</p>
        </div>
      </div>
    </a>
    <a href="https://play.google.com/store/apps/details?id=com.migrostore.migrostore_cv&pli=1">
      <div className={s.google_pay_btn}>
        <img src={google_logo} alt="apple store" />
        <div className={s.btn_container}>
          <p className={s.download}>Download on the</p>
          <p className={s.store}>Google Play</p>
        </div>
      </div>
    </a>
  </div>
  )
}
