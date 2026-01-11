"use client"

import SectionHeader from "@/components/shared/SectionTopHeader/SectionTopHeader"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import arrow from "@/assets/logo/arrow.png";

const processItems = [
  {
    id: "01",
    title: "Project Onboarding & Requirement Analysis",
    description: [
      "We're a passionate team of UI/UX designers dedicated to creating intuitive digital experiences. With years of experience, we blend creativity and strategy to design solutions that engage users and drive business success.",
      "We're a passionate team of UI/UX designers dedicated to creating intuitive digital experiences. With years of experience, we blend creativity and strategy to design solutions that engage users and drive business success.",
    ],
  },
  {
    id: "02",
    title: "Research & Information Analysis",
    description: [
      "We conduct thorough research to understand your market, competitors, and target audience. This analysis forms the foundation of our strategic approach.",
      "Our team gathers insights that drive informed decision-making throughout the project lifecycle.",
    ],
  },
  {
    id: "03",
    title: "UI/UX Design & Prototyping",
    description: [
      "We create intuitive interfaces and interactive prototypes that bring your vision to life. Our design process focuses on user experience and visual excellence.",
      "Every design decision is made with your users in mind, ensuring seamless interactions.",
    ],
  },
  {
    id: "04",
    title: "Problem Solving & Solution Strategy",
    description: [
      "We identify challenges and develop innovative solutions that address your business needs. Our strategic approach ensures sustainable results.",
      "Our team works collaboratively to overcome obstacles and deliver exceptional outcomes.",
    ],
  },
  {
    id: "05",
    title: "Development & Project Build",
    description: [
      "We transform designs into fully functional products using cutting-edge technologies. Our development process is efficient, scalable, and quality-focused.",
      "Every line of code is written with performance and maintainability in mind.",
    ],
  },
  {
    id: "06",
    title: "AI-Powered Technologies",
    description: [
      "We leverage artificial intelligence to enhance user experiences and automate complex processes. Our AI solutions are tailored to your specific needs.",
      "From machine learning to natural language processing, we integrate the latest AI capabilities.",
    ],
  },
  {
    id: "07",
    title: "Testing",
    description: [
      "We rigorously test every aspect of your product to ensure quality and reliability. Our testing process covers functionality, performance, and user experience.",
      "Quality assurance is integrated throughout the development cycle for optimal results.",
    ],
  },
]

export function WorkingProcess() {
  const [activeItem, setActiveItem] = useState<string | null>("01")

  const handleToggle = (id: string) => {
    setActiveItem(activeItem === id ? null : id)
  }

  return (
    <section className="bg-[#f5f5f0] text-[#1a1a1a] py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="md:mb-12 mb-8 ">
          <SectionHeader
            label="HOW WE WORK"
            title="Our Working"
            italicTitle="Process"
            arrowSrc={arrow}
            arrowTop="-8%"
            arrowLeft="17%"
          />
        </div>

        {/* Accordion */}
        <div className="border-t border-[#d4d4d4]">
          {processItems.map((item) => (
            <div
              key={item.id}
              className="border-b border-[#d4d4d4] cursor-pointer"
              onClick={() => handleToggle(item.id)}
              onMouseEnter={() => setActiveItem(item.id)}
            >
              <div className="py-6 flex items-start gap-6">
                <span className="text-sm text-[#666666] font-mono mt-1">
                  [{item.id}]
                </span>

                <div className="flex-1">
                  <h3 className="text-xl md:text-3xl font-medium text-[#1a1a1a]">
                    {item.title}
                  </h3>

                  {/* Smooth Description */}
                  <AnimatePresence initial={false}>
                    {activeItem === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -8 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -8 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="overflow-hidden mt-4"
                      >
                        {item.description.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-base text-[#555555] leading-relaxed mb-3 max-w-xl"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
