import { WorkingProcess } from '@/components/pages/home/Working-Process/WorkingProcess'
import DesignImpactSection from '@/components/pages/Services/ServiceDetails/Design'
import { MoreService } from '@/components/pages/Services/ServiceDetails/MoreService'
import ServicesRowSlider from '@/components/pages/Services/ServiceDetails/ServiceDetailsGrid'

import ServiceDetailHero from '@/components/pages/Services/ServiceDetails/ServiceHero'
import { WhyService } from '@/components/pages/Services/ServiceDetails/WhyService'
import React from 'react'

export default function page() {
  return (
    <div >
      <ServiceDetailHero/>
      <DesignImpactSection/>
      <WorkingProcess/>
      <WhyService/>
      <MoreService/>
      <ServicesRowSlider/>
   
    </div>
  )
}
