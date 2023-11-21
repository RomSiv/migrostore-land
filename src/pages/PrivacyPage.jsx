import React from 'react'
import Privacy from '../components/Privacy/Privacy'
import PrivacyParagrafs from '../components/PrivacyParagrafs/PrivacyParagrafs'
import PrivacyParagrafsContainer from '../components/PrivacyParagrafsContainer/PrivacyParagrafsContainer'

export default function PrivacyPage() {
  return (
    <div>
      <Privacy />
      {/* <PrivacyParagrafs /> */}
      <PrivacyParagrafsContainer />
    </div>
  )
}
