"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Check, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/MyButton/MyButton"

interface FormData {
    fullName: string
    email: string
    whatsapp: string
    budget: string
    projectDetails: string
}

const budgetOptions = ["Less than $5k", "$5k - $10k", "$10k - $20k", "$20k - $50k", "more than $50k"]

const benefits = [
    "Claim 30 minutes of consultation",
    "We're happy to sign an NDA upon request.",
    "Get access to a team of dedicated product specialists.",
]

export function ContactForm() {
    const [selectedBudget, setSelectedBudget] = useState<string>("")

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log("Form submitted:", { ...data, budget: selectedBudget })
    }

    const handleBudgetSelect = (budget: string) => {
        setSelectedBudget(budget)
        setValue("budget", budget)
    }

    return (
        <section className="bg-[#0d0d0d] container rounded-[24px] mx-auto py-20 ">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Side */}
                    <div>
                        {/* Label */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                            <span className="text-sm tracking-wider text-gray-400 uppercase">Contact Form</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                            Enhance Your Brand
                            <br />
                            Potential <span className="italic font-serif font-normal">With Us!</span>
                        </h2>

                        {/* Benefits */}
                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-300">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center mt-0.5">
                                        <Check className="w-3 h-3 text-gray-400" />
                                    </div>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CEO Image */}
                        <div className="relative w-64 h-72 rounded-2xl overflow-hidden bg-gray-700 mb-4">
                            <Image src="/professional-ceo-portrait-man-in-suit.jpg" alt="Rakibul Hassan" fill className="object-cover" />
                        </div>

                        {/* CEO Info */}
                        <h3 className="text-xl font-semibold text-white">Rakibul Hassan</h3>
                        <p className="text-sm text-gray-500 uppercase tracking-wider">CEO, INFORISEN</p>
                    </div>

                    {/* Right Side - Form */}
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <label className="block text-white font-medium mb-3">Full Name</label>
                                <input
                                    {...register("fullName", { required: true })}
                                    placeholder="Your name"
                                    className="w-full px-5 py-4 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                                />
                            </div>

                            {/* Email & Whatsapp */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-white font-medium mb-3">Your Email</label>
                                    <input
                                        {...register("email", { required: true })}
                                        type="email"
                                        placeholder="Your email@gmail.com"
                                        className="w-full px-5 py-4 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white font-medium mb-3">Whatsapp Number</label>
                                    <input
                                        {...register("whatsapp", { required: true })}
                                        type="tel"
                                        placeholder="0987 654 321"
                                        className="w-full px-5 py-4 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Project Budget */}
                            <div>
                                <label className="block text-white font-medium mb-3">Project Budget</label>
                                <div className="flex flex-wrap gap-3">
                                    {budgetOptions.map((budget) => (
                                        <motion.button
                                            key={budget}
                                            type="button"
                                            onClick={() => handleBudgetSelect(budget)}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`px-5 py-3 rounded-lg border text-sm transition-all ${selectedBudget === budget
                                                    ? "bg-blue-600 border-blue-600 text-white"
                                                    : "bg-transparent border-gray-700 text-gray-400 hover:border-gray-500"
                                                }`}
                                        >
                                            {budget}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Project Details */}
                            <div>
                                <label className="block text-white font-medium mb-3">Project Details</label>
                                <textarea
                                    {...register("projectDetails", { required: true })}
                                    placeholder="Your name"
                                    rows={5}
                                    className="w-full px-5 py-4 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <Button variant="primary" iconType="arrow-up-right">
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
