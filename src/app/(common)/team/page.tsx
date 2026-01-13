import { NewsletterCta } from '@/components/pages/home/NewsLetter/NewsLetter'
import BrandPotential from '@/components/pages/Services/BradPotential/brandPotential'
import TeamHero from '@/components/pages/Team/TeamHero/TeamHero'
import TeamSectionRaw from '@/components/pages/Team/TeamMemberList/TeamMemberList'
import React from 'react'

export default function page() {
  return (
    <div>
        <TeamHero/>
        <TeamSectionRaw/>
          <BrandPotential/>
                    <NewsletterCta/>
      
    </div>
  )
}
