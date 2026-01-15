
import AboutHero from '@/components/pages/about/AboutHero/AboutHero'
import { CoreValues } from '@/components/pages/about/CoreValue/CoreValue'
import { ExcellenceSection } from '@/components/pages/about/ExcellenceSection/ExcellenceSection'
import { OurVision } from '@/components/pages/about/OurVision/our-vision'
import { NewsletterCta } from '@/components/pages/home/NewsLetter/NewsLetter'
import React from 'react'

export default function page() {
  return (
    <div>
      <AboutHero/>
      <ExcellenceSection/>
      <OurVision/>
      <CoreValues/>
      <NewsletterCta/>
    </div>
  )
}
