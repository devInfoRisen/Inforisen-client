/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import SectionHeader from "@/components/shared/SectionTopHeader/SectionTopHeader"

// assets
import arrow from "@/assets/logo/arrow.png"
import image1 from "@/assets/Rectangle 14.png"
import image2 from "@/assets/Rectangle 15.png"
import image3 from "@/assets/Rectangle 16.png"
import image4 from "@/assets/Rectangle 17.png"
import image5 from "@/assets/Rectangle 18.png"

// swiper styles
import "swiper/css"

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const services = [
  { title: "Brand Identity", image: image1, href: "/services#ui-ux-design" },
  { title: "Web Design", image: image2, href: "/services#ui-ux-design" },
  { title: "UI/UX Design", image: image3, href: "/services#ui-ux-design" },
  { title: "Development", image: image4, href: "/services#ui-ux-design" },
  { title: "SEO Optimization", image: image5, href: "/services#ui-ux-design" },
]

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

export default function ServicesRowSlider() {
  const swiperRef = useRef<any>(null)

  return (
    <section className="py-20 grid grid-cols-1">
      <div className="container mx-auto">

        {/* ---------------- Header ---------------- */}
        <div className="mb-10">
          <SectionHeader
            label="OUR SERVICES"
            title="Full range of"
            titleSecondLine="digital"
            italicTitle="Services"
            arrowSrc={arrow}
            arrowTop="-8%"
            arrowLeft="17%"
          />
        </div>

        {/* ---------------- Slider Wrapper ---------------- */}
        <div className="relative">

          {/* Navigation Arrows (Top Right) */}
          <div className="absolute -top-14 right-0 z-10 flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-black hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-black hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          {/* ---------------- Slider ---------------- */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop
            speed={500}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="px-3">
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-[300px] cursor-pointer overflow-hidden rounded-2xl group"
                  >
                    {/* Image */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />

                    {/* Title */}
                    <div className="absolute top-5 left-5 z-10 max-w-[180px]">
                      <h3 className="text-lg md:text-[28px] font-bold text-black drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
