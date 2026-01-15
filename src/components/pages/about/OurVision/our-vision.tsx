/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"
import image1 from "@/assets/ourvision.png"

const stats = [
  {
    number: "250+",
    label: "Businesses Thrived",
    description: "We helped more than 250 business to reach to their business goals with our innovative solutions.",
  },
  {
    number: "250+",
    label: "Businesses Thrived",
    description: "We helped more than 250 business to reach to their business goals with our innovative solutions.",
  },
  {
    number: "250+",
    label: "Businesses Thrived",
    description: "We helped more than 250 business to reach to their business goals with our innovative solutions.",
  },
]

export function OurVision() {
  return (
    <section className=" py-16 md:py-24">
      <div className="container mx-auto">
        {/* Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="text-xs tracking-widest uppercase text-gray-600">Our Vision</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight mb-12 md:mb-16 max-w-4xl">
          We bring brand, culture and experience together to <span className="italic font-serif">create impact</span>{" "}
          within and beyond an organisation.
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={image1}
                alt="Modern office workspace with colorful wall art"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col">
            {/* Description */}
            <div className="mb-8 md:mb-12 text-[18px]">
              <p className="text-black leading-relaxed mb-4">
                Over the years, we've propelled numerous businesses to thrive, maintaining robust partnerships through
                our collaborative approach.
              </p>
              <p className="text-black leading-relaxed">
                We are proud to help businesses grow and succeed in different industries. From startups to established
                enterprises, our tailored solutions have helped them conquer challenges, reach milestones, and actualize
                their visions.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[auto_1fr] gap-x-8 md:gap-x-12 items-start border-t border-gray-300 pt-6"
                >
                  <div className="flex flex-col">
                    <span className="text-4xl md:text-5xl font-semibold text-black">{stat.number}</span>
                    <span className="text-[16px] font-medium text-black mt-1">{stat.label}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pt-2">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
