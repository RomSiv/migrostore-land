import React from 'react'
import { privacy_date } from '../../data/privacy_data'
import PrivacyParagrafsItem from '../PrivacyParagrafsItem/PrivacyParagrafsItem'
import s from './PrivacyParagrafsContainer.module.css'

export default function PrivacyParagrafsContainer() {
  return (
    <div className={s.container}>
        {
            privacy_date.map(el => <PrivacyParagrafsItem key={el.id} {...el}/>)
        }
    </div>
  )
}
