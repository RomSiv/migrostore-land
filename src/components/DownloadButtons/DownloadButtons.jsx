import React from 'react'
import apple_logo from "../../images/Vector.svg";
import google_logo from "../../images/Vector-2.svg";
import apple_btn from '../../images/button_app_store_mobile.svg'
import goodle_btn from '../../images/button_google_play_mobile.svg'
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
      <img 
      className={s.mobile_btn}
      src={apple_btn} alt="apple store" />
    </a>
    <a href="https://play.google.com/store/apps/details?id=com.migrostore.migrostore_cv&pli=1">
      <div className={s.google_pay_btn}>
        <img src={google_logo} alt="apple store" />
        <div className={s.btn_container}>
          <p className={s.download}>Download on the</p>
          <p className={s.store}>Google Play</p>
        </div>
      </div>
      <img 
      className={s.mobile_btn}
      src={goodle_btn} alt="google store" />
    </a>
  </div>
  )
}
