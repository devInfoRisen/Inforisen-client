"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import image1 from "@/assets/graphic-design.png"  // ← replace with your actual graphic design mockup image

const services = [
  { id: "01", name: "UX UI Design", slug: "ux-ui-design" },
  { id: "02", name: "UX Consulting", slug: "ux-consulting" },
  { id: "03", name: "UX Audit", slug: "ux-audit" },
  { id: "04", name: "UX Research", slug: "ux-research" },
  { id: "05", name: "Usability Testing", slug: "usability-testing" },
  { id: "06", name: "Wireframe & Prototyping", slug: "wireframe-prototyping" },
  { id: "07", name: "Design System", slug: "design-system" },
]

export function GraphicDesignSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

               {/* Left Side - Image */}
          <motion.div
            className="relative"
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={image1}
                alt="Crypto wallet and finance app mockups with transaction graphs, wallet balance, and mobile interfaces"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-4">
              Graphic Design
            </h2>

            <p className="text-base leading-relaxed mb-8">
              At Inforisen, we believe everyone should have a great user experience, whether at work or in their free time. We create memorable products for businesses and consumers, and we provide easy-to-use design systems for smooth product updates.
            </p>

            {/* Services List */}
            <div className="space-y-0">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center justify-between py-4 border-b border-border hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-medium">
                        [{service.id}]
                      </span>
                      <span className="font-medium text-2xl">
                        {service.name}
                      </span>
                    </div>

                    {/* Arrow */}
                    <motion.span
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 group-hover:bg-[#0E3B76]"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowUpRight
                        size={16}
                        className="
                          text-white
                          transition-transform duration-300 ease-out
                          group-hover:rotate-45
                          group-active:rotate-90
                        "
                      />
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
       

        </div>
      </div>
    </section>
  )
}