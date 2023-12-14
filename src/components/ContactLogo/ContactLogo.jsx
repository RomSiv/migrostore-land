import React from 'react'
import  logo  from '../../images/Illustration.svg'
import s from './ContactLogo.module.css'

export default function ContactLogo() {
  return (
    <div className={s.container}>
      <img src={logo} alt="migrostore" />
    </div>
  )
}
