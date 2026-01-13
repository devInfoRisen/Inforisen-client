"use client"

import { useEffect, useState } from "react"

export function ServiceHero() {
  const [barWidth, setBarWidth] = useState(74)
  const [gapWidth, setGapWidth] = useState(2)

  const leftBars = [
    { opacity: 0.5, color: "rgba(245,190,210,0.9)" },
    { opacity: 0.45, color: "rgba(250,185,215,0.85)" },
    { opacity: 0.5, color: "rgba(255,180,210,0.8)" },
    { opacity: 0.45, color: "rgba(250,175,205,0.75)" },
    { opacity: 0.4, color: "rgba(245,185,210,0.7)" },
    { opacity: 0.35, color: "rgba(250,190,215,0.6)" },
    { opacity: 0.3, color: "rgba(255,195,220,0.4)" },
    { opacity: 0.3, color: "rgba(255,195,220,0.3)" },
    { opacity: 0.3, color: "rgba(255,195,220,0.1)" },
 
  ]

  const rightBars = [
    { opacity: 0.5, color: "rgba(200,235,250,0.95)" },
      { opacity: 0.4, color: "rgba(195,240,250,0.9)" },
    { opacity: 0.45, color: "rgba(195,235,245,0.85)" },
    { opacity: 0.5, color: "rgba(190,230,240,0.79)" },
    { opacity: 0.45, color: "rgba(185,235,250,0.75)" },
    { opacity: 0.4, color: "rgba(195,240,250,0.7)" },
    { opacity: 0.35, color: "rgba(200,240,245,0.5)" },
    { opacity: 0.35, color: "rgba(190,240,245,0.3)" },
    { opacity: 0.35, color: "rgba(200,230,245,0.1)" },

    
 
  ]

  // Update widths on resize
  useEffect(() => {
    const updateWidths = () => {
      const w = window.innerWidth
      if (w < 768) {
        setBarWidth(40)
        setGapWidth(1)
      } else if (w < 1024) {
        setBarWidth(60)
        setGapWidth(1)
      } else {
        setBarWidth(74)
        setGapWidth(0.85)
      }
    }
    updateWidths()
    window.addEventListener("resize", updateWidths)
    return () => window.removeEventListener("resize", updateWidths)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f8f8f8] to-[#f0f0f0]">
      {/* Left Bars */}
      <div className="absolute left-0 top-0 h-full flex">
        {leftBars.map((bar, idx) => (
          <div
            key={idx}
            className="h-full"
            style={{
              width: barWidth,
              marginRight: idx < leftBars.length - 1 ? `${gapWidth}px` : '0',
              opacity: bar.opacity,
              background: bar.color,
            }}
          />
        ))}
      </div>

      {/* Right Bars (same count as left, original colors) */}
      <div className="absolute right-0 top-0 h-full flex">
        {[...rightBars].slice(0, leftBars.length).reverse().map((bar, idx) => (
          <div
            key={idx}
            className="h-full"
            style={{
              width: barWidth,
              marginLeft: idx < leftBars.length - 1 ? `${gapWidth}px` : '0',
              opacity: bar.opacity,
              background: bar.color,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mx-auto max-w-5xl px-4 text-center">
              <p className="text-sm font-semibold text-gray-600 mb-2 flex items-center justify-center gap-2">
       <div className="w-[6px] h-[6px] rounded-full bg-blue-500" />
        SERVICES
      </p>
          <h1 className="mb-6 text-5xl font-medium leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            <span className="font-playfair italic">Transforming</span> great ideas into
            <br />remarkable <span className="font-playfair italic">products.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-base text-gray-600 md:text-lg">
          Inforisen partners with ambitious business leaders to build brands that drive alignment and unlock growth from the inside out.
          </p>
          
        </div>
      </div>
    </section>
  )
}
