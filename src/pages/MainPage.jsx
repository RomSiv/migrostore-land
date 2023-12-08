import React from 'react'
import LinksForDownload from '../components/LinksForDownload/LinksForDownload'
import AboutUse from '../components/AboutUse/AboutUse'
import ContactUs from '../components/ContactUs/ContactUs'
import OurPartners from '../components/OurPartners/OurPartners'
import OurTeamContainer from '../components/OurTeamContainer/OurTeamContainer'

export default function MainPage() {
  return (
    <div>
      <LinksForDownload />
      <AboutUse />
      <OurTeamContainer />
      <ContactUs />
      <OurPartners />
    </div>
  )
}
