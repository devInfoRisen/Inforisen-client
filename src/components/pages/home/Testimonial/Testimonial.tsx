
"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

import { Swiper, SwiperSlide } from "swiper/react"

import { EffectCards, Navigation } from "swiper/modules"
import "swiper/css/effect-cards"


import "swiper/css"

import image2 from "@/assets/testimonial.png"

/* ------------------ DATA ------------------ */

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
  {
    id: 5,
    quote:
      "Their creative vision and technical skills are remarkable. They understood our brand perfectly and delivered a website that truly represents who we are.",
    subQuote:
      "The team went above and beyond to ensure every detail was perfect.",
    name: "Nabil Hasan",
    title: "Brand Manager",
    company: "elevate",
    image: image2,
  },
 
]

/* ------------------ CARD ------------------ */

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
          <svg
            className="w-12 h-12 text-gray-600 mb-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
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
              <h4 className="font-semibold text-gray-900">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonial.title}
              </p>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              {testimonial.company}
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-80 sm:h-72 md:h-full">

          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

/* ------------------ MAIN COMPONENT ------------------ */

export function Testimonials() {
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)

  return (
    <section className="bg-[#f5f5f0] py-16 overflow-hidden grid grid-cols-1">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Clients Love to
          </h2>
          <p className="text-4xl md:text-5xl font-playfair text-gray-900 mt-2">
            Recommend us
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-8 grid grid-cols-1">
          {/* Decorative arrow */}
          {/* <div className="absolute -left-8 sm:-left-4 top-0 hidden sm:block">
            <Image
              src={image1}
              alt="Arrow"
              className="max-w-[160px] md:max-w-[200px] object-contain"
            />
          </div> */}

          {/* Navigation */}
          <button
            ref={prevRef}
            className="absolute left-2 sm:left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-blue-600" />
          </button>

          <button
            ref={nextRef}
            className="absolute right-2 sm:right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100"
          >
            <ChevronRight className="w-5 h-5 text-blue-600" />
          </button>

          {/* Swiper */}
          <div className="relative h-[720px] sm:h-[700px] md:h-[380px] mx-4 sm:mx-8 md:mx-20">
          <Swiper
  modules={[Navigation, EffectCards]}
  effect="cards"
  grabCursor={true}
  slidesPerView={1}
  centeredSlides={true}
  initialSlide={Math.floor(testimonials.length / 2)}

  cardsEffect={{
    slideShadows: false,
  }}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  onBeforeInit={(swiper) => {
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    swiper.params.navigation.prevEl = prevRef.current
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    swiper.params.navigation.nextEl = nextRef.current
  }}
  className="h-full"
>
  {testimonials.map((item) => (
    <SwiperSlide
      key={item.id}
      className="h-full rounded-2xl overflow-hidden"
    >
      <TestimonialCard testimonial={item} className="h-full" />
    </SwiperSlide>
  ))}
</Swiper>


          </div>
        </div>
      </div>
    </section>
  )
}
