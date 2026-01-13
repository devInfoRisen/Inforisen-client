"use client"

import type React from "react"

import { useState } from "react"
import Marquee from "react-fast-marquee"
import { Instagram, Linkedin, Send } from "lucide-react"

import { Button } from "@/components/ui/MyButton/MyButton"

import Image from "next/image"

// Custom social icons that aren't in Lucide
const DribbbleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
)

const BehanceIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M3 12h6c1.66 0 3-1.34 3-3s-1.34-3-3-3H3v12h7c1.66 0 3-1.34 3-3s-1.34-3-3-3" />
    <path d="M15 7h6" />
    <path d="M21 12c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c1.45 0 2.72-.78 3.42-1.94" />
  </svg>
)

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M4 4l11.733 16h4.267l-11.733-16z" />
    <path d="M4 20l6.768-6.768" />
    <path d="M20 4l-6.768 6.768" />
  </svg>
)

const avatars = [
  "/ceo-pic.webp",
  "/ceo-pic.webp",
  "/ceo-pic.webp",
  "/ceo-pic.webp",
  
]

const socialLinks = [
  { icon: DribbbleIcon, href: "#", label: "Dribbble", color: "hover:text-pink-500 hover:border-pink-500" },
  { icon: BehanceIcon, href: "#", label: "Behance", color: "hover:text-blue-600 hover:border-blue-600" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600 hover:border-pink-600" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700 hover:border-blue-700" },
  { icon: XIcon, href: "#", label: "X", color: "hover:text-gray-900 hover:border-gray-900" },
  { icon: Send, href: "#", label: "Telegram", color: "hover:text-sky-500 hover:border-sky-500" },
]

export function NewsletterCta() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribe:", email)
    setEmail("")
  }

  return (
    <section className=" container mx-auto mt-12 grid grid-cols-1 ">
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

      {/* Content section */}
      <div className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Description text */}
          <p className="text-gray-700 text-base md:text-[16px] mb-8 leading-relaxed">
            Say goodbye to outdated enterprise software and welcome the smoother one. We lead you from design to product
            innovation to shape your path from idea to success
          </p>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-11 h-11 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-500 transition-all duration-300 ${social.color}`}
                >
                  <Icon />
                </a>
              )
            })}
          </div>

          {/* Email subscription form */}
          <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2 max-w-md mx-auto">
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#3b5bdb] transition-colors"
                required
              />
            </div>
            <Button variant="primary" iconType="arrow-up-right">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
