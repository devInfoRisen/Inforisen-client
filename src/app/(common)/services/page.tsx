import { NewsletterCta } from '@/components/pages/home/NewsLetter/NewsLetter'
import BrandPotential from '@/components/pages/Services/BradPotential/brandPotential'
import { ECommerceSolutionsSection } from '@/components/pages/Services/EcommerceSolution/EcommerceSolution'
import { GraphicDesignSection } from '@/components/pages/Services/GraphicDesignSection/GraphicDesignSection'
import { LogoBrandIdentitySection } from '@/components/pages/Services/LogoBrand/LogoBrand'
import { SaaSProductsSection } from '@/components/pages/Services/Saas/SaasSection'
import { SEOServicesSection } from '@/components/pages/Services/SeoService/SeoServiceSection'
import { ServiceHero } from '@/components/pages/Services/ServiceHero/serviceHero'
import { SoftwareDevelopmentSection } from '@/components/pages/Services/SoftwareDev/SoftwareDevSection'
import { UIUXDesignSection } from '@/components/pages/Services/Uiux/uiux'
import { WebsiteDesignDevelopmentSection } from '@/components/pages/Services/WebsiteDesignSection/WebsiteDesignSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <ServiceHero/>
      <UIUXDesignSection/>
      <LogoBrandIdentitySection/>
      <WebsiteDesignDevelopmentSection/>
      <SEOServicesSection/>
      <SoftwareDevelopmentSection/>
      <ECommerceSolutionsSection/>
      <GraphicDesignSection/>
      <SaaSProductsSection/>
      <BrandPotential/>
      <NewsletterCta/>
    </div>
  )
}
