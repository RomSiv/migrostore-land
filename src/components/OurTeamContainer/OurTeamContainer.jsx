import React from 'react'
import { data_our_team } from '../../data/data_our_team'
import s from './OurTeamContainer.module.css'
import OurTeamItem from '../OurTeamItem/OurTeamItem'

export default function OurTeamContainer() {
  return (
    <div className={s.our_team_container}>
        <h2>OUR TEAM</h2>
        <div className={s.container_mini}>
        {
            data_our_team.map(el => <OurTeamItem key={el.id} {...el}/>)
        }
        </div>
    </div>
  )
}
