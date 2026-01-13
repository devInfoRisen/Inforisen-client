"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/MyButton/MyButton"

interface FormData {
  fullName: string
  email: string
  whatsapp: string
  budget: string
  projectDetails: string
}

const budgetOptions = [
  "Less than $5k",
  "$5k - $10k",
  "$10k - $20k",
  "$20k - $50k",
  "More than $50k",
]

const benefits = [
  "Claim 30 minutes of consultation",
  "We're happy to sign an NDA upon request.",
  "Get access to a team of dedicated product specialists.",
]

export function ContactForm() {
  const [selectedBudget, setSelectedBudget] = useState<string>("")

  const { register, handleSubmit, setValue } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", { ...data, budget: selectedBudget })
  }

  const handleBudgetSelect = (budget: string) => {
    setSelectedBudget(budget)
    setValue("budget", budget)
  }

  return (
    <section className="bg-[#0d0d0d] container mx-auto rounded-2xl py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            {/* Label */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs tracking-wider text-gray-400 uppercase">
                Contact Form
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Enhance Your Brand
              <br />
              Potential{" "}
              <span className="italic font-serif font-normal">With Us!</span>
            </h2>

            {/* Benefits */}
            <ul className="space-y-4 mb-10 max-w-md mx-auto lg:mx-0">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-gray-400" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CEO */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-48 h-56 sm:w-64 sm:h-72 rounded-2xl overflow-hidden bg-gray-700 mb-4">
                <Image
                  src="/professional-ceo-portrait-man-in-suit.jpg"
                  alt="Rakibul Hassan"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Rakibul Hassan
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                CEO, INFORISEN
              </p>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Full Name
                </label>
                <input
                  {...register("fullName", { required: true })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
                />
              </div>

              {/* Email & Whatsapp */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    Whatsapp Number
                  </label>
                  <input
                    {...register("whatsapp", { required: true })}
                    type="tel"
                    placeholder="+880 1234 567890"
                    className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-white font-medium mb-3">
                  Project Budget
                </label>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {budgetOptions.map((budget) => (
                    <motion.button
                      key={budget}
                      type="button"
                      onClick={() => handleBudgetSelect(budget)}
                      whileTap={{ scale: 0.96 }}
                      className={`px-4 py-2 sm:px-5 sm:py-3 rounded-lg border text-xs sm:text-sm transition-all
                        ${
                          selectedBudget === budget
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "border-gray-700 text-gray-400 hover:border-gray-500"
                        }`}
                    >
                      {budget}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  {...register("projectDetails", { required: true })}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button variant="primary" iconType="arrow-up-right">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
