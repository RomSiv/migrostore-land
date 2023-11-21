import React from 'react'
import { data } from '../../data/data'
import AboutUseItem from '../AboutUseItem/AboutUseItem'
import s from './AboutUseContainer.module.css'

export default function AboutUseContainer() {
  return (
    <div className={s.container}>
        {
           data.map(el => <AboutUseItem key={el.id} {...el}/>)
        }
    </div>
  )
}
