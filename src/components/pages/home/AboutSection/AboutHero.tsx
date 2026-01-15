/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/MyButton/MyButton"

import arrowSrc from "@/assets/logo/arrow.png"
import Image from "next/image"
import Link from "next/link"


export function AboutHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-11 items-start">
      {/* Left Column - Headline */}
      <div className="relative">
        {/* About Us Label with decorative line */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="text-xs uppercase tracking-wider text-gray-400">About Us</span>
        </div>

        {/* Decorative curved dashed line */}
        <div
              className="mb-4 absolute transform -translate-x-1/2 hidden lg:flex justify-center top-[-6%] left-[30%]"
            
            >
              <Image
                src={arrowSrc}
                alt="Section Arrow"
                className="relative max-w-[200px] object-contain"
              />
            </div>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-4xl font-medium leading-tight text-white ">
          We Are <span className="italic font-playfair">Digital</span>
          <br />
          Game-Changers With
          <br />A Good Vibe Attitude.
          <br />
          Driven By <span className="italic font-playfair">Human Connection</span>
          <br />
          And A <span className="italic font-playfair">Growth Mindset</span>.
        </h1>
      </div>

      {/* Right Column - Description */}
      <div className=" lg:pt-8 text-justify">
        <p className="text-gray-400 text-[16px] leading-relaxed  mb-6">
          We're a passionate team of UI/UX designers dedicated to creating intuitive digital experiences. With years of
          experience, we blend creativity and strategy to design solutions that engage users and drive business success.
        </p>

        <p className="text-gray-400 text-[16px] leading-relaxed mb-8">
          We turn ideas into seamless, Beautiful designs. Let's build digital experiences that not only look stunning
          but also deliver real results.
        </p>
<Link href="/about-us" >
         <Button variant="primary" iconType="arrow-up-right">
  Learn More
</Button>
</Link>
      </div>
    </section>
  )
}
