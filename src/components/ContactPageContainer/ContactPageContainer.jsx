import React from 'react'
import ContactLogo from '../ContactLogo/ContactLogo'
import ContactForm from '../ContactForm/ContactForm'
import s from './ContactPageContainer.module.css'

export default function ContactPageContainer() {
  return (
    <div className={s.container}>
        <ContactLogo />
        <ContactForm />
    </div>
  )
}
