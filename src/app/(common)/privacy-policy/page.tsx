import PrivacyHero from '@/components/pages/privacy/PrivacyHero/PrivacyHero'
import LegalPage from '@/components/pages/term/LegalPage/LegalPage'
import { TermNewsLetter } from '@/components/pages/term/TermNewsLetter/TermsNewsLetter'
import React from 'react'

export default function page() {
  return (
    <div>
        <PrivacyHero/>
        <LegalPage/>
        <TermNewsLetter/>
      
    </div>
  )
}
