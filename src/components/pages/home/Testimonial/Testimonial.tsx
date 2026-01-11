"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import image1 from "@/assets/arrow-testimonail.png"
import image2 from "@/assets/testimonial.png"

const testimonials = [
  {
    id: 1,
    quote:
      "We're a passionate team of UI/UX designers dedicated to creating intuitive digital experiences. With years of experience, we blend creativity and strategy to design solutions that engage users and drive business success.",
    subQuote:
      "We turn ideas into seamless, Beautiful designs. Let's build digital experiences that not only look stunning but also deliver real results.",
    name: "Jonathan Doe",
    title: "Oval CEO",
    company: "edvive",
    image: image2,
  },
  {
    id: 2,
    quote:
      "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched. They transformed our vision into a stunning digital reality.",
    subQuote:
      "The results exceeded our expectations. Our user engagement increased by 200% after the redesign.",
    name: "Sarah Mitchell",
    title: "Marketing Director",
    company: "nexus",
    image: image2,
  },
  {
    id: 3,
    quote:
      "From concept to execution, they delivered exceptional work. Their innovative approach and technical expertise helped us stand out in a competitive market.",
    subQuote:
      "I highly recommend their services to anyone looking for top-tier digital solutions.",
    name: "Michael Chen",
    title: "Founder & CTO",
    company: "streamline",
    image: image2,
  },
  {
    id: 4,
    quote:
      "Their creative vision and technical skills are remarkable. They understood our brand perfectly and delivered a website that truly represents who we are.",
    subQuote:
      "The team went above and beyond to ensure every detail was perfect.",
    name: "Emily Rodriguez",
    title: "Brand Manager",
    company: "elevate",
    image: image2,
  },
]

function TestimonialCard({
  testimonial,
  className = "",
}: {
  testimonial: (typeof testimonials)[0]
  className?: string
}) {
  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      <div className="grid md:grid-cols-2 h-full">
        {/* Content */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <svg className="w-12 h-12 text-gray-600 mb-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            {testimonial.quote}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {testimonial.subQuote}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div>
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              {testimonial.company}
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-56 md:h-full">
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      let next = prev + newDirection
      if (next < 0) next = testimonials.length - 1
      if (next >= testimonials.length) next = 0
      return next
    })
  }

  const getStackIndices = () => {
    const indices = []
    for (let i = 0; i < 3; i++) {
      indices.push((currentIndex + i) % testimonials.length)
    }
    return indices
  }

  const stackIndices = getStackIndices()

  return (
    <section className="bg-[#f5f5f0] py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Clients Love to
          </h2>
          <p className="text-4xl md:text-5xl font-playfair text-gray-900 mt-2">
            Recommend us
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-8">
          {/* Decorative arrow */}
          <div className="absolute -left-8 sm:-left-4 top-0 hidden sm:block">
            <Image
              src={image1}
              alt="Section Arrow"
              className="max-w-[160px] md:max-w-[200px] object-contain"
            />
          </div>

          {/* Navigation */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 sm:left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-blue-600" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-2 sm:right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
          >
            <ChevronRight className="w-5 h-5 text-blue-600" />
          </button>

          <div className="relative h-[520px] sm:h-[480px] md:h-[380px] mx-4 sm:mx-8 md:mx-20">
            {[2, 1].map((stackPosition) => {
              const index = stackIndices[stackPosition]
              return (
                <div
                  key={`stack-${stackPosition}`}
                  className="absolute inset-0 bg-white rounded-2xl shadow-lg"
                  style={{
                    transform: `translateY(${stackPosition * 15}px) scale(${1 - stackPosition * 0.03})`,
                    zIndex: 10 - stackPosition,
                    opacity: 1 - stackPosition * 0.15,
                  }}
                />
              )
            })}

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{
                  x: direction > 0 ? 300 : -300,
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  zIndex: 15,
                }}
                exit={{
                  x: direction < 0 ? 300 : -300,
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x
                  if (swipe < -10000) paginate(1)
                  else if (swipe > 10000) paginate(-1)
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <TestimonialCard
                  testimonial={testimonials[currentIndex]}
                  className="h-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gray-900 w-6"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
