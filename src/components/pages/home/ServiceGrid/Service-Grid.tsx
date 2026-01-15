"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import SectionHeader from "@/components/shared/SectionTopHeader/SectionTopHeader"
import arrow from "@/assets/logo/arrow.png";
import image1 from "@/assets/Rectangle 14.png";
import image2 from "@/assets/Rectangle 15.png";
import image3 from "@/assets/Rectangle 16.png";
import image4 from "@/assets/Rectangle 17.png";
import image5 from "@/assets/Rectangle 18.png";
import image6 from "@/assets/Rectangle 19.png";
import image7 from "@/assets/Rectangle 20.png";
import image8 from "@/assets/Rectangle 21.png";
import image9 from "@/assets/Rectangle 22.png";
import image10 from "@/assets/Rectangle 23.png";
import image11 from "@/assets/Rectangle 24.png";
import image12 from "@/assets/Rectangle 25.png";

const services = [
  {
    title: "UI/UX Design",
    image: image1,
    href: "/services#ui-ux-design",
  },
  {
    title: "Logo & Brand Identity",
    image: image2,
    href: "/services#logo-brand-identity",
  },
  {
    title: "Website Design & Development",
    image: image3,
    href: "/services#website-design",
  },
  {
    title: "SEO Services",
    image: image4,
    href: "/services#seo-services",
  },
  {
    title: "Software Development",
    image: image5,
    href: "/services#software-development",
  },
  {
    title: "E-Commerce Solutions",
    image: image6,
    href: "/services#e-commerce",
  },
  {
    title: "Graphic Design",
    image: image7,
    href: "/services#graphic-design",
  },
  {
    title: "SaaS Products",
    image: image8,
    href: "/services#saas-products",
  },
  {
    title: "Ai & Automation Solutions",
    image: image9,
    href: "/services#ai-automation",
  },
  {
    title: "Video Editing",
    image: image10,
    href: "/services#ai-automation",
  },
  {
    title: "Digital Marketing",
    image: image11,
    href: "/services#ai-automation",
  },
  {
    title: "DevOps",
    image: image12,
    href: "/services#ai-automation",
  },
]

export function ServicesGrid() {
  return (
    <section className=" py-16">
      <div className="container mx-auto">
        {/* Header */}
          <div className="mb-12">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Link href={service.href} key={index}>
              <motion.div
                className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background Image */}
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />

                {/* Overlay gradient for text readability */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" /> */}

                {/* Service Title */}
                <div className="absolute top-5 left-5 z-10">
                  <h3 className="text-lg md:text-[28px] font-bold text-black  max-w-[180px]">
                    {service.title}
                  </h3>
                </div>

                {/* Hover effect overlay */}
                <motion.div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
