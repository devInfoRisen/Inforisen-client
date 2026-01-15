/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

import "swiper/css"

import image1 from "@/assets/portfolio1.png"
import image2 from "@/assets/portfolio2.png"

export const projectsData = [
  { id: 1, slug: "growfollows-website", title: "Growfollows Website", category: "Website Design", image: image1 },
  { id: 2, slug: "transparent-communication-app", title: "Transparent Communication", category: "Website Design", image: image2 },
  { id: 3, slug: "transparent-communication-mobile", title: "Transparent Communication", category: "Website Design", image: image1 },
  { id: 4, slug: "explore-education-platform", title: "Explore Education Platform", category: "Website Design", image: image2 },
  { id: 5, slug: "another-project", title: "Another Project", category: "UI/UX Design", image: image1 },
]

// Custom Arrow Components (same styles)
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute top-0 right-0 z-10 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center -translate-y-1/2"
  >
    <ArrowRight className="text-gray-700" />
  </button>
)

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute top-0 right-12 z-10 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center -translate-y-1/2"
  >
    <ArrowLeft className="text-gray-700" />
  </button>
)

export default function RelatedProjects() {
  const swiperRef = useRef<any>(null)

  return (
    <section className="py-16 bg-[#EDEAE3] relative grid grid-cols-1">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-10">
          Related <span className="font-playfair font-normal">Projects</span>
        </h2>

        {/* Slider */}
        <div className="relative">
          {/* Arrows */}
          <PrevArrow onClick={() => swiperRef.current?.slidePrev()} />
          <NextArrow onClick={() => swiperRef.current?.slideNext()} />

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop
            slidesPerView={3}
            spaceBetween={0}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id} className="px-3">
                <Link href={`/works/${project.slug}`} className="group block">
                  <div className="flex flex-col gap-4">
                    {/* Image Container */}
                    <div className="relative w-full aspect-[4/3] md:aspect-[4/2.25] rounded-2xl overflow-hidden bg-muted">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Card Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-2">
                        <span className="inline-flex w-fit px-3 py-1 text-xs font-medium text-black bg-gray-300 rounded-full border border-border">
                          {project.category}
                        </span>
                        <h3 className="text-lg font-semibold text-black group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 group-hover:bg-[#0E3B76]">
                        <ArrowUpRight
                          size={16}
                          className="text-white transition-transform duration-300 ease-out group-hover:rotate-45 group-active:rotate-90"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
