"use client"

import PrimaryButton from "@/components/ui/MyButton/PrimaryButton"
import Link from "next/link"
import Image from "next/image"
import { ArrowUp } from "lucide-react"
import imageGrowfollows from "@/assets/portfoliodetail1.png"
import imageTransparent from "@/assets/portfoliodetail1.png"
import imageEducation from "@/assets/portfoliodetail1.png"

interface PortfolioDetailHeroProps {
  slug: string
}

// Placeholder data for each project slug
const portfolioHeroData: Record<string, any> = {
  "growfollows-website": {
    title: "GrowFollows Website",
    subtitle: "Design.",
    company: "GrowFollows",
    category: "Website Design",
    duration: "3 Months",
    liveUrl: "https://www.growfollows.com",
    image: imageGrowfollows,
  },
  "transparent-communication-app": {
    title: "Transparent Communication App",
    subtitle: "UI/UX Design",
    company: "Transparent Co",
    category: "Mobile App",
    duration: "2 Months",
    liveUrl: "https://www.transparent.com",
    image: imageTransparent,
  },
  "explore-education-platform": {
    title: "Explore Education Platform",
    subtitle: "Web Development",
    company: "Explore Edu",
    category: "Website",
    duration: "4 Months",
    liveUrl: "https://www.explore-edu.com",
    image: imageEducation,
  },
}

export default function PortfolioDetailHero({ slug }: PortfolioDetailHeroProps) {
  const heroData = portfolioHeroData[slug] ?? portfolioHeroData["growfollows-website"]

  return (
    <header className="relative overflow-visible bg-gradient-to-b from-[#f8f8f8] to-[#f0f0f0] lg:mb-[600px]">
      
      {/* Left Rounded Colors Bubble */}
      <div className="absolute left-0 top-10 w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[380px] lg:h-[380px] rounded-full blur-[100px] bg-gradient-to-b from-[#EFA6C1] to-[#F4BDFF] z-0" />
      <div className="absolute left-0 bottom-10 w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[380px] lg:h-[380px] rounded-full blur-[100px] bg-gradient-to-b from-[#EFA6C1] to-[#F4BDFF] z-0 hidden md:block" />

      {/* Right Rounded Colors Bubble */}
      <div className="absolute right-[-20px] top-10 w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[380px] lg:h-[380px] rounded-full blur-[100px] bg-gradient-to-b from-[#1EB9A280] to-[#617BFC80] z-0 hidden md:block" />
      <div className="absolute right-0 bottom-10 w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[380px] lg:h-[380px] rounded-full blur-[100px] bg-gradient-to-b from-[#1EB9A280] to-[#617BFC80] z-0" />

      {/* Left Side Shades */}
      {[0, 80, 160, 240, 320, 400].map((left, i) => (
        <div
          key={i}
          className="absolute top-0 h-full w-[40px] md:w-[60px] lg:w-[80px] border border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10"
          style={{ left }}
        />
      ))}

      {/* Right Side Shades */}
      {[0, 80, 160, 240, 320, 400].map((right, i) => (
        <div
          key={i}
          className="absolute top-0 h-full w-[40px] md:w-[60px] lg:w-[80px] border border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10"
          style={{ right }}
        />
      ))}

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[800px] px-4">
        {/* Heading */}
        <h1 className="mb-24 text-center text-5xl font-medium leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
          {heroData.title}{' '}
          <span className="font-playfair italic">{heroData.subtitle}</span>
        </h1>

        {/* Company Info */}
        <div className="flex flex-row items-center justify-around w-full max-w-4xl text-center gap-4">
          <p className="text-sm text-gray-500">
            Company <br />
            <span className=" text-lg text-gray-700 font-semibold">{heroData.company}</span>
          </p>
          <p className="text-sm text-gray-500">
            Category <br />
            <span className="font-semibold text-lg text-gray-700">{heroData.category}</span>
          </p>
          <p className="text-sm text-gray-500">
            Duration <br />
            <span className="font-semibold text-lg text-gray-700">{heroData.duration}</span>
          </p>
          <p className="text-sm text-gray-500 text-center">
            Live View <br />
            <a 
              href={heroData.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-sm"
            >
              <span className="flex items-center justify-center gap-1 font-semibold text-lg text-gray-700">
                {heroData.company} <ArrowUp size={16} />
              </span>
            </a>
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div
        className="
          hidden lg:block
          relative
          lg:absolute
          lg:left-1/2
          lg:top-full
          lg:-translate-x-1/2
          lg:-translate-y-1/3
          z-50
          w-full
          max-w-6xl
          px-4
          h-[620px]
          container 
          mx-auto
        "
      >
        <Image
          src={heroData.image}
          alt={`Portfolio preview for ${slug}`}
          fill
          priority
        />
      </div>
    </header>
  )
}
