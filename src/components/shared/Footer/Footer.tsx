"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo/logo.png";
import footer from "@/assets/footer.png";


export function Footer() {
  const services = [
    { title: "Web Design", href: "/services#web-design" },
    { title: "Webflow", href: "/services#webflow" },
    { title: "MVP Development", href: "/services#mvp-development" },
    { title: "SaaS Design", href: "/services#saas-design" },
    { title: "MVP Web", href: "/services#mvp-web" },
    { title: "Mobile App", href: "/services#mobile-app" },
  ]

  const services2 = [
    { title: "Branding", href: "/services#branding" },
    { title: "UI/UX Design", href: "/services#ui-ux-design" },
    { title: "UI/UX Consulting", href: "/services#ui-ux-consulting" },
    { title: "Brand Identity", href: "/services#brand-identity" },
    { title: "Corporate Identity", href: "/services#corporate-identity" },
    { title: "Motion Graphics", href: "/services#motion-graphics" },
  ]

  const quickLinks = [
    { title: "Work", href: "/work" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Pricing", href: "/pricing" },
    { title: "Career", href: "/career" },
    { title: "Blog", href: "/blog" },
  ]

  const quickLinks2 = [
    { title: "Sitemap", href: "/sitemap" },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms & Condition", href: "/terms" },
  ]

  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Animated Blue Glow Orb */}
     <motion.div
  className="absolute w-[380px] h-[380px] rounded-full bg-blue-500/60 blur-[130px]"
  animate={{
    x: [600, 700, 650, 750, 600],
    y: [200, 250, 300, 220, 200],
  }}
  transition={{
    duration: 7, // faster
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "reverse",
    ease: "easeInOut",
  }}
  style={{
    background:
      "radial-gradient(circle, rgba(59,130,246,0.9) 0%, rgba(59,130,246,0.4) 40%, rgba(59,130,246,0) 75%)",
  }}
/>


      <div className="container mx-auto pt-16 pb-8 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="w-10 h-10">
               <Link href="/" className="flex items-center gap-2 w-48">
          <Image
            src={logo}
            alt="Inforisen"
            width={260}
            height={60}
            className="object-contain"
          />
        </Link>
            </div>

            <p className="text-white text-sm leading-relaxed">
              We're a passionate team of UI/UX designers
              <br />
              dedicated to creating intuitive digital experiences.
              
              With years of experience.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">PHONE:</p>
                <p className="text-white  font-medium">0987654321</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">ADDRESS:</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white font-medium">Germany:</p>
                    <p className="text-gray-400 text-sm">[Address Goes Here]</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">Bangladesh:</p>
                    <p className="text-gray-400 text-sm">[Address Goes Here]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-[16px]">SERVICES</h3>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3">
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.title}>
                    <Link href={service.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {services2.map((service) => (
                  <li key={service.title}>
                    <Link href={service.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">QUICK LINKS</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {quickLinks2.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Large Brand Name */}
        <div className="relative py-8">
           <Image
            src={footer}
            alt="Inforisen"
            width={1400}
            height={40}
            className="object-contain"
          />
       
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800/50">
          <p className="text-gray-500 text-sm">© 2026, Inforisen | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
