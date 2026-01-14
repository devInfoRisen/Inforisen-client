import { Headset, Settings, Palette, Clock, RefreshCw, Users } from "lucide-react"

import SectionHeader from "@/components/shared/SectionTopHeader/SectionTopHeader";
import arrow from "@/assets/logo/arrow.png";

const features = [
  {
    icon: Headset,
    title: "Lifetime support",
    description:
      "With our lifetime support, you're never alone. We'll be there for you at every stage with necessary guidance and assistance whenever you need it.",
  },
  {
    icon: Settings,
    title: "Personalised plans",
    description:
      "With our lifetime support, you're never alone. We'll be there for you at every stage with necessary guidance and assistance whenever you need it.",
  },
  {
    icon: Palette,
    title: "Custom design solutions",
    description:
      "With our lifetime support, you're never alone. We'll be there for you at every stage with necessary guidance and assistance whenever you need it.",
  },
  {
    icon: Clock,
    title: "24/7 Customer support",
    description:
      "With our lifetime support, you're never alone. We'll be there for you at every stage with necessary guidance and assistance whenever you need it.",
  },
  {
    icon: RefreshCw,
    title: "Revision support",
    description:
      "With our lifetime support, you're never alone. We'll be there for you at every stage with necessary guidance and assistance whenever you need it.",
  },
  {
    icon: Users,
    title: "Satisfied clients",
    description:
      "With our lifetime support, you're never alone. We'll be there for you at every stage with necessary guidance and assistance whenever you need it.",
  },
]

export function WhyService() {
  return (
    <section className="relative min-h-[700px] overflow-hidden">
      {/* Background image - abstract 3D glass shape */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/whychoose.png')`,
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0a0a14]/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 py-16">
        {/* Header */}
<div className="mb-12 text-white [&_span]:!text-white [&_p]:!text-white">
  <SectionHeader
      
    title="Why UX UI Design Matters  "
    titleSecondLine="for"
    italicTitle="your business"
    arrowSrc={arrow}
    arrowTop="-10%"
    arrowLeft="18%"
  />
</div>




        {/* Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-gray-300" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-[24px] font-medium text-white mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
