import { ContactForm } from '@/components/pages/home/Contact-form/ContactForm'
import { WorkingProcess } from '@/components/pages/home/Working-Process/WorkingProcess'
import DesignImpactSection from '@/components/pages/Services/ServiceDetails/Design'

import MoreProjects from '@/components/pages/Services/ServiceDetails/MoreProject'
import { MoreService } from '@/components/pages/Services/ServiceDetails/MoreService'
import { ServiceMarquee } from '@/components/pages/Services/ServiceDetails/SerrviceMarquee'
import ServicesRowSlider from '@/components/pages/Services/ServiceDetails/ServiceDetailsGrid'

import ServiceDetailHero from '@/components/pages/Services/ServiceDetails/ServiceHero'
import { WhyService } from '@/components/pages/Services/ServiceDetails/WhyService'
import { TermNewsLetter } from '@/components/pages/term/TermNewsLetter/TermsNewsLetter'
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
      <ContactForm/>
      <ServiceMarquee/>
      <MoreProjects/>
      <div className='mt-14'>
      <TermNewsLetter/>
      </div>
   
    </div>
  )
}
