'use client';

import Image from 'next/image';

import image1 from "@/assets/location1.png"
import image2 from "@/assets/location2.png"

export default function LocationsSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold  text-center mb-12 md:mb-16">
          Our <span className="font-playfair font-medium">Locations</span>
        </h2>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Germany Card */}
          <div className="flex items-start space-x-6">
            <div className="w-48 h-48 rounded-lg overflow-hidden shadow-md">
              <Image
                src={image1}
                alt="Germany Location"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Germany</h3>
              <div className="text-base text-gray-700 space-y-2">
              <p><span className="font-medium">PHONE:</span> <br /> <span className='text-black font-semibold'>0987654321</span> </p>
                <p><span className="font-medium">ADDRESS:</span> <br /> <span className='text-black font-semibold'> Address Here</span></p>
              </div>
            </div>
          </div>

          {/* Bangladesh Card */}
          <div className="flex items-start space-x-6">
            <div className="w-48 h-48 rounded-lg overflow-hidden shadow-md">
              <Image
                src={image2}
                alt="Bangladesh Location"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Bangladesh</h3>
              <div className="text-base text-gray-700 space-y-2">
                <p><span className="font-medium">PHONE:</span> <br /> <span className='text-black font-semibold'>0987654321</span> </p>
                <p><span className="font-medium">ADDRESS:</span> <br /> <span className='text-black font-semibold'> Address Here</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}