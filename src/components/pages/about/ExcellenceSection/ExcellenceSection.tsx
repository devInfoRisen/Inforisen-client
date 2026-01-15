/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"

import { Button } from "@/components/ui/MyButton/MyButton"
import image1 from "@/assets/excellence0.png"
import image2 from "@/assets/excellence1.png"
import Link from "next/link"


export function ExcellenceSection() {
  return (
    <section className="bg-[#0a0a12] py-16 ">
      <div className="container mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
          <span className="italic font-normal font-serif">Redefining Excellence</span> Through
          <br />
          Innovation at Inforisen
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Large Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg">
              <Image
                src={image1}
                alt="Modern architectural columns"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-start pt-8">
            {/* Description paragraphs */}
            <div className="space-y-6 text-gray-400 text-base leading-relaxed max-w-lg">
              <p>
                We're a passionate team of UI/UX designers dedicated to creating intuitive digital experiences. With
                years of experience, we blend creativity and strategy to design solutions that engage users and drive
                business success. We're a passionate team of UI/UX designers dedicated to creating intuitive digital
                experiences. With years of experience, we blend creativity and strategy to design solutions that engage
                users and drive business success.
              </p>

              <p>
                We're a passionate team of UI/UX designers dedicated to creating intuitive digital experiences. With
                years of experience, we blend creativity and strategy to design solutions that engage users and drive
                business success.
              </p>

              <p>
                We turn ideas into seamless, Beautiful designs. Let's build digital experiences that not only look
                stunning but also deliver real results.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link href="/works">
              <Button  variant="primary"  iconType="arrow-up-right">
                Explore Projects
           
              </Button>
              </Link>

            </div>

            {/* Bottom Right Image */}
            <div className="mt-auto pt-16 flex justify-end">
              <div className="relative w-48 h-32 md:w-56 md:h-36 overflow-hidden rounded-lg">
                <Image
                  src={image2}
                  alt="Hands working on keyboard"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
