import React from 'react'
import LinksForDownload from '../components/LinksForDownload/LinksForDownload'
import AboutUse from '../components/AboutUse/AboutUse'
import OurTeam from '../components/OurTeam/OurTeam'
import ContactUs from '../components/ContactUs/ContactUs'
import OurPartners from '../components/OurPartners/OurPartners'

export default function MainPage() {
  return (
    <div>
      <LinksForDownload />
      <AboutUse />
      <OurTeam />
      <ContactUs />
      <OurPartners />
    </div>
  )
}
