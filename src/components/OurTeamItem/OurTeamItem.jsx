import React from 'react'
import s from './OurTeamItem.module.css'

export default function ourTeamItem({ image, name, job_title, distruction }) {
  return (
    <div className={s.container}>
        <img src={image} alt={name} />
        <div className={s.about}>
        <p className={s.job_title}>{job_title}</p>
        <p className={s.name}>{name}</p>
        <p className={s.distruction}>{distruction}</p>
        </div>
    </div>
  )
}
