import ContactHero from '@/components/pages/contact/ContactHero/ContactHero'
import LocationsSection from '@/components/pages/contact/OurLocation/OurLocation'

import { ContactForm } from '@/components/pages/home/Contact-form/ContactForm'
import { FaqSection } from '@/components/pages/home/FaqSection/Faq-section'
import { NewsletterCta } from '@/components/pages/home/NewsLetter/NewsLetter'
import React from 'react'

export default function page() {
  return (
    <div className='bg-[#F5F5F5]'>
        <ContactHero/>
        <div className='lg:hidden block mt-10'>
            <ContactForm/>

        </div>
        <FaqSection/>
        <LocationsSection/>
        <NewsletterCta/>
      
    </div>
  )
}
