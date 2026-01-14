import LegalPage from '@/components/pages/term/LegalPage/LegalPage'
import TermHero from '@/components/pages/term/TermHero/TermHero'
import { TermNewsLetter } from '@/components/pages/term/TermNewsLetter/TermsNewsLetter'
import React from 'react'

export default function page() {
  return (
    <div>
      <TermHero/>
      <LegalPage/>
      <TermNewsLetter/>
    </div>
  )
}
