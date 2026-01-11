// components/MarqueeNav.tsx
"use client";

import React from "react";

const items = [
  "Branding", "Social Media", "Video Production", "Digital Products",
  "Website", "Saas", "Branding", "Social Media", "Branding", "Social Media"
];

export default function MarqueeNav() {
  return (
    <div className="overflow-hidden grid grid-cols-1 bg-gradient-to-r from-[#1066D4] to-[#0E3B76]">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.concat(items).map((item, idx) => (
          <span
            key={idx}
            className="text-white px-6 py-4 text-sm md:text-base cursor-pointer"
          >
            {item} <span className="hidden md:inline">·</span>
          </span>
        ))}
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
