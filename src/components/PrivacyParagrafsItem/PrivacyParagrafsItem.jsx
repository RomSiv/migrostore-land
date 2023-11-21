import React from 'react'
import PrivacyParagrafsDescription from '../PrivacyParagrafsDescription/PrivacyParagrafsDescription'
import { privacy_date }  from '../../data/privacy_data'
import s from './PrivacyParagrafsItem.module.css'

export default function PrivacyParagrafsItem({ title, title2, description }) {
  return (
    <div className={s.item}>
        <h2 className={s.first_header}>{title}</h2>
        <h2>{title2}</h2>
        <ul>
        {
            description.map(el => <li key={privacy_date.id}><PrivacyParagrafsDescription  description={el} /></li>)
        }
        </ul>
    </div>
  )
}
