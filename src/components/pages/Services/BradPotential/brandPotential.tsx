import { Button } from '@/components/ui/MyButton/MyButton'
import Image from 'next/image'
import React from 'react'
import image1 from '@/assets/core.png'

export default function brandPotential() {
  return (
    <div className='py-20 '>
        <div className='container mx-auto'>
             <div className="bg-[#0d0d0d] rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row px-8 py-8 md:px-16 md:py-12 ">
            {/* Left Content */}
            <div className="flex flex-col justify-center md:w-1/2">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Enhance Your Brand
                <br />
                Potential <span className="italic font-serif font-normal">With Us!</span>
              </h3>
              <p className="text-gray-200 text-[18px] md:text-[24px] mb-8">
                Find the customized
                <br />
                solution for you
              </p>
              <div>
                <Button variant="primary" iconType="arrow-up-right">
                  Book a Call
                
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 relative min-h-[250px] md:min-h-[300px]">
              <Image src={image1} alt="Abstract marble art" fill className="object-cover" />
            </div>
          </div>
        </div>

        </div>
      
    </div>
  )
}
