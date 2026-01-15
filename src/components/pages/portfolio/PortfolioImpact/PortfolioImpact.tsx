/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import React from 'react';
import image1 from "@/assets/impact1.png"
import image2 from "@/assets/impact2.png"

export default function ProjectImpact() {
  return (
    <section className=" py-20 ">
      <div className="container mx-auto ">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
          Project <span className='font-playfair font-normal'>Impact</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-[18px] leading-relaxed  mb-16">
          Your brand's design speaks before you do. 90% of consumers recognize a brand just by its design & color! 
          We use color psychology to design your brand to be memorable. Your brand's design speaks before you do. 
          90% of consumers recognize a brand just by its design and color! We use color psychology to design your brand 
          to be memorable.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { number: "250+", label: "Businesses Thrived" },
            { number: "250+", label: "Businesses Thrived" },
            { number: "250+", label: "Businesses Thrived" },
            { number: "250+", label: "Businesses Thrived" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main Images - Two Columns on Large Screens */}
        <div className="grid md:grid-cols-1 gap-10 max-w-6xl mx-auto mb-24 items-start">
          {/* Left Image - Mockups with phones */}
       <div className="relative w-full h-80 md:h-[450px]">
  <Image
    src={image1}
    alt="Mobile app mockups"
    fill
    className="object-cover rounded-2xl "
  />
</div>

<div className="relative w-full h-80 md:h-[450px]">
  <Image
    src={image2}
    alt="Website designs"
    fill
    className="object-cover rounded-2xl "
  />
</div>

        </div>

        {/* Thanks for Visiting */}
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-semibold text-gray-800 italic">
            Thanks for <span className='font-playfair font-normal'> Visiting</span> 
          </h3>
        </div>
      </div>
    </section>
  );
}