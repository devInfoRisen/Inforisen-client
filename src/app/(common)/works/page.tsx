
import MarqueeNav from '@/components/pages/home/MarqueNav/MarqueNav'
import { NewsletterCta } from '@/components/pages/home/NewsLetter/NewsLetter'
import { PortfolioGrid } from '@/components/pages/portfolio/PortfolioGrid/PortfolioGrid'
import PortfolioHero from '@/components/pages/portfolio/PortfolioHero/PortfolioHero'
import BrandPotential from '@/components/pages/Services/BradPotential/brandPotential'

import React from 'react'

export default function page() {
  return (
    <div>
      <PortfolioHero/>
      <MarqueeNav/>
      <PortfolioGrid/>
   
     <BrandPotential/>
            <NewsletterCta/>
    </div>
  )
}
