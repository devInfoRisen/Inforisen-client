
import { Button } from "@/components/ui/MyButton/MyButton"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import image1 from '@/assets/core.png'

const values = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
        <path d="M16 4h4v4" />
        <path d="M20 4l-4 4" />
      </svg>
    ),
    title: "Transparent Communication",
    description:
      "With our lifetime support, you're never alone. We'll be there for you at every stage with necessary guidance and assistance whenever you need it.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <path d="M10 6.5h4" />
        <path d="M6.5 10v4" />
      </svg>
    ),
    title: "Precision Management",
    description:
      "With our lifetime support, you're never alone. We'll be there for you at every stage with necessary guidance and assistance whenever you need it.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Meticulous Detail",
    description:
      "With our lifetime support, you're never alone. We'll be there for you at every stage with necessary guidance and assistance whenever you need it.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="8" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="m4.93 19.07 1.41-1.41" />
        <path d="m17.66 6.34 1.41-1.41" />
      </svg>
    ),
    title: "Innovative Excellence",
    description:
      "With our lifetime support, you're never alone. We'll be there for you at every stage with necessary guidance and assistance whenever you need it.",
  },
]

export function CoreValues() {
  return (
    <section className=" py-20 ">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-xs font-medium tracking-wider text-gray-600">OUR CORE VALUES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="italic font-serif font-normal">Values That</span>
            <br />
            Sets Us Apart
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {values.map((value, index) => (
            <div key={index} className="bg-[#e8e8e3] rounded-2xl p-6 flex flex-col">
              <div className="text-blue-600 mb-16">{value.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-[#0d0d0d] rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row px-8 py-8 md:px-16 md:py-12 ">
            {/* Left Content */}
            <div className="flex flex-col justify-center md:w-1/2">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Enhance Your Brand
                <br />
                Potential <span className="italic font-serif font-normal">With Us!</span>
              </h3>
              <p className="text-gray-200 text-[18px] md:text-[24px] mb-8">
                Find the customized
                <br />
                solution for you
              </p>
              <div>
                <Button variant="primary" iconType="arrow-up-right">
                  Book a Call
                
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 relative min-h-[250px] md:min-h-[300px]">
              <Image src={image1} alt="Abstract marble art" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
