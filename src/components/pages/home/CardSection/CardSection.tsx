"use client"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import arrow from "@/assets/logo/arrow.png";
import Image from "next/image";
import card1 from "@/assets/card1.png"
import card2 from "@/assets/card2.png"
import card3 from "@/assets/card3.png"
import card4 from "@/assets/card4.png"
import card5 from "@/assets/card5.png"
import card6 from "@/assets/card6.png"
import card7 from "@/assets/card7.png"
import { Button } from "@/components/ui/MyButton/MyButton";
import SectionHeader from "@/components/shared/SectionTopHeader/SectionTopHeader";

const cards = [
  {
    id: 1,
    category: "SMM PANELS",
    title: "Easy Booking for Dream Trips",
    description:
      "Triply is a hassle-free & effective tour solution for travelers. It's an all-inclusive booking and planning website that helps people make their dream trips easier.",
    bgColor: "bg-[#F4BDFF]",
    textColor: "text-gray-900",
    image: card1,
    circleColor: "#C044DA"
  },
  {
    id: 2,
    category: "DIGITAL MARKETING PLATFORMS",
    title: "Social Media Growth Tools",
    description:
      "Boost your online presence with our comprehensive social media management platform. Schedule posts, track analytics, and engage with your audience all in one place.",
    bgColor: "bg-[#FFB8B0]",
    textColor: "text-gray-900",
    image: card2,
    circleColor: "#E55040"
  },
  {
    id: 3,
    category: "CORPORATE & BUSINESS WEBSITES",
    title: "Website Builder Solutions",
    description:
      "Create professional websites without coding. Our drag-and-drop builder comes with beautiful templates and powerful features to establish your online presence.",
    bgColor: "bg-[#C2CCFF]",
    textColor: "text-gray-900",
    image: card3,
    circleColor: "#617BFC"
  },
  {
    id: 4,
    category: "E-COMMERCE PLATFORMS",
    title: "Online Store Management",
    description:
      "Launch and manage your online store effortlessly. Integrated payment processing, inventory management, and customer analytics to grow your business.",
    bgColor: "bg-[#FFE587]",
    textColor: "text-gray-900",
    image: card4,
    circleColor: "#C59A00"
  },
  {
    id: 5,
    category: "MARKETING AUTOMATION",
    title: "Customer Engagement Platform",
    description:
      "Automate your marketing campaigns and nurture leads with personalized email sequences, SMS, and push notifications to drive conversions.",
    bgColor: "bg-[#ABF5FF]",
    textColor: "text-gray-900",
    image: card5,
    circleColor: "#16AABE"
  },
  {
    id: 6,
    category: "MARKETING AUTOMATION",
    title: "Customer Engagement Platform",
    description:
      "Automate your marketing campaigns and nurture leads with personalized email sequences, SMS, and push notifications to drive conversions.",
    bgColor: "bg-[#FFC982]",
    textColor: "text-gray-900",
    image: card6,
    circleColor: "#DF7E00"
  },
  {
    id: 7,
    category: "MARKETING AUTOMATION",
    title: "Customer Engagement Platform",
    description:
      "Automate your marketing campaigns and nurture leads with personalized email sequences, SMS, and push notifications to drive conversions.",
    bgColor: "bg-[#A1FFF1]",
    textColor: "text-gray-900",
    image: card7,
    circleColor: "#1EB9A2"
  },
]

export default function CardSection() {
  return (
    <main className="min-h-screen  py-16">
      <div className="container mx-auto">
        {/* Header */}
       {/* Header */}
<SectionHeader
  label="WORK INDUSTRY"
  title="Proven Success"
  titleSecondLine="in"
  italicTitle="Every Industry"
  arrowSrc={arrow}
  arrowTop="-10%"
  arrowLeft="18%"
/>





        {/* Cards */}
        <div className="space-y-8">
          {cards.map((card, index) => (
            <div key={card.id} className={`${card.bgColor} rounded-3xl overflow-hidden shadow-lg`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Left Content */}
                <div className="p-6 md:p-12 flex flex-col justify-center">
                  <p className="text-xs font-bold text-gray-700 tracking-widest mb-4 opacity-75">{card.category}</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{card.title}</h2>
                  <p className="text-gray-800 mb-6 leading-relaxed text-sm md:text-base">{card.description}</p>
               <div className="group flex items-center gap-3  ">
    <span className="text-sm font-bold text-gray-800">
      View Details
    </span>

    {/* Circle stays fixed */}
  {/* Circle stays fixed */}
<span
  className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300"
  style={{ backgroundColor: card.circleColor }} // dynamic different color
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
</span>

  </div>
                </div>

                {/* Right Image */}
                <div className="relative hidden md:block">
                  {/* Diagonal stripes background */}
               

                  {/* Image */}
                  <div className="relative h-64 md:h-80 flex items-center justify-center p-8">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      width={600}
                      height={600}
                      
                      alt={card.title}
                      className="max-w-full max-h-full object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center">
        <Button variant="primary" iconType="arrow-up-right">
  Explore All
</Button>
</div>
      </div>
    </main>
  )
}
