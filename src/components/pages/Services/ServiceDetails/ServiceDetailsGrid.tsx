"use client"

import Slider from "react-slick"
import { useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"

// 👉 slick styles (make sure these are imported once globally if needed)
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

/* ------------------ Mock Data ------------------ */
const services = [
  {
    title: "Brand Identity",
    description: "Build a strong, memorable brand presence.",
    image: "/images/service1.png",
  },
  {
    title: "Web Design",
    description: "Modern, conversion-focused web experiences.",
    image: "/images/service2.png",
  },
  {
    title: "UI/UX Design",
    description: "User-centered interfaces that feel intuitive.",
    image: "/images/service3.png",
  },
  {
    title: "Development",
    description: "Fast, scalable, production-ready builds.",
    image: "/images/service4.png",
  },
  {
    title: "SEO Optimization",
    description: "Rank higher and get discovered faster.",
    image: "/images/service5.png",
  },
]

/* ------------------ Card ------------------ */
function ServiceCard({ service }: { service: any }) {
  return (
    <div className="h-full rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 relative h-40 w-full overflow-hidden rounded-xl">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
      <p className="text-sm text-gray-600">{service.description}</p>
    </div>
  )
}

/* ------------------ Component ------------------ */
export default function ServicesRowSlider() {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3, // 👈 3 cards per row
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        {/* Header + Arrows */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-semibold">
            Our <span className="italic">Services</span>
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-black hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-black hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-3">
              <ServiceCard service={service} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
