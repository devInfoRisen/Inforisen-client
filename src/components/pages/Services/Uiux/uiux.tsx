import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import image1 from "@/assets/uiux.png"

const services = [
  { id: "01", name: "UX UI Design", slug: "ux-ui-design" },
  { id: "02", name: "UX Consulting", slug: "ux-consulting" },
  { id: "03", name: "UX Audit", slug: "ux-audit" },
  { id: "04", name: "UX Research", slug: "ux-research" },
  { id: "05", name: "Usability Testing", slug: "usability-testing" },
  { id: "06", name: "Wireframe & Prototyping", slug: "wireframe-prototyping" },
  { id: "07", name: "Design System", slug: "design-system" },
]

export function UIUXDesignSection() {
  return (
    <section className="py-16  ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image Placeholder */}
           <div className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={image1}
                alt="Modern office workspace with colorful wall art"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl font-bold text-black  mb-4">UI/UX Design</h2>
            <p className="text-base leading-relaxed mb-8">
              At Inforisen, we believe everyone should have a great user experience, whether at work or in their free
              time. We create memorable products for businesses and consumers, and we provide easy-to-use design systems
              for smooth product updates.
            </p>

            {/* Services List */}
            <div className="space-y-0">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between py-4 border-b border-border hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className=" text-sm font-medium">[{service.id}]</span>
                    <span className=" font-medium text-base">{service.name}</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#4361EE] flex items-center justify-center group-hover:bg-[#3651DE] transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
