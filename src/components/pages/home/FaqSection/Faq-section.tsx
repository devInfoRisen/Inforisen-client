"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import faq from "@/assets/faq.png"

import Link from "next/link"
import { Button } from "@/components/ui/MyButton/MyButton"
import Image from "next/image"

const faqs = [
  {
    question: "How can I start a project with Inforisen?",
    answer:
      "Getting started is easy! Simply reach out through our contact form or book a call. We'll discuss your project requirements, goals, and timeline to create a customized plan that fits your needs.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of digital services including UI/UX design, web development, mobile app development, branding, SEO optimization, and AI-powered solutions to help your business grow.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex application could take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing tailored to each project's needs. After understanding your requirements, we provide a transparent quote with no hidden fees. We also offer payment plans for larger projects.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We offer lifetime support and maintenance packages to ensure your digital products continue to perform optimally. Our team is always available to help with updates and improvements.",
  },
  {
    question: "Can you work with existing designs?",
    answer:
      "We can work with your existing brand guidelines, designs, or start from scratch. Our team is flexible and can adapt to your specific needs and preferences.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, industry-leading technologies including React, Next.js, Node.js, and various AI tools. We select the best tech stack for each project based on your specific requirements.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#f5f5f0] py-20 ">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side */}
          <div>
            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              <span className="italic font-playfair font-normal">Have</span> a Question?
            </h2>

            {/* Image Card */}
           <div className="relative rounded-2xl overflow-hidden h-[320px]">
  <Image
    src={faq}
    alt="Abstract marbled background"
    fill
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/20" />

  <div className="relative z-10 h-full flex flex-col justify-end p-8">
    <h3 className="text-white text-2xl md:text-3xl font-semibold mb-6 max-w-[280px]">
      Find the customized solution for you
    </h3>
    <Link href="/contact">
      <Button variant="primary" iconType="arrow-up-right">
        Book a Call
      </Button>
    </Link>
  </div>
</div>

          </div>

          {/* Right Side - FAQ Accordion */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-sm tracking-wider text-gray-600 uppercase">Frequently Asked Questions</span>
            </div>

            {/* FAQ Items */}
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 flex items-center justify-between text-left group"
                  >
                    <span className="text-base md:text-[24px] font-medium text-gray-900 pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center"
                    >
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-gray-600 leading-relaxed pr-12">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
