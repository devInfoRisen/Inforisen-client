/* eslint-disable react/no-unescaped-entities */

"use client"

import type React from "react"


import Marquee from "react-fast-marquee"


import Image from "next/image"



const avatars = [
  "/ceo-pic.webp",
  "/ceo-pic.webp",
  "/ceo-pic.webp",
  "/ceo-pic.webp",
  
]



export function ServiceMarquee() {




  return (
    <section className=" container mx-auto py-14 md:py-20 grid grid-cols-1 ">
      {/* Blue banner with avatars and marquee */}
      <div className="bg-gradient-to-r from-[#1066D4] to-[#0E3B76] rounded-[30px]  py-3 px-4 flex items-center gap-4 overflow-hidden">
        {/* Fixed avatars section */}
      <div className="flex items-center flex-shrink-0">
  <div className="flex -space-x-2">
    {avatars.slice(0, 4).map((avatar, index) => (
      <div
        key={index}
        className="w-10 h-10 rounded-full bg-gray-300 border-2 border-[#3b5bdb] overflow-hidden relative"
      >
        <Image
          src={avatar || "/placeholder.svg"}
          alt={`Team member ${index + 1}`}
          fill
          className="object-cover"
        />
      </div>
    ))}

    {/* 20+ circle */}
    <div className="w-10 h-10 rounded-full bg-white border-2 border-[#3b5bdb] text-[#3b5bdb] text-sm font-semibold flex items-center justify-center">
      20+
    </div>
  </div>
</div>


        {/* Marquee text */}
        <div className="flex-1 overflow-hidden">
          <Marquee speed={50} gradient={false} className="overflow-hidden">
            <span className="text-white text-sm md:text-base mx-8">
              We're a passionate team of UI/UX designers dedicated to creating intuitive digital experiences. with years
              of experience.
            </span>
            <span className="text-white text-sm md:text-base mx-8">
              We're a passionate team of UI/UX designers dedicated to creating intuitive digital experiences. with years
              of experience.
            </span>
          </Marquee>
        </div>
      </div>

     
    </section>
  )
}
