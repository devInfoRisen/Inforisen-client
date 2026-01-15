"use client"

import Image, { StaticImageData } from "next/image"
import React from "react"

// Import your images
import projectImage1 from "@/assets/project1.png"
import projectImage2 from "@/assets/project2.png"
import projectImage3 from "@/assets/project3.png"


interface ProjectImagesProps {
  slug: string
}

// Slug-based data
const projectData: Record<
  string,
  { description: string; images: (string | StaticImageData)[] }
> = {
  "growfollows-website": {
    description:
      "Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable. Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable. Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable. Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable.",
    images: [projectImage1, projectImage2, projectImage3],
  },
  "transparent-communication-app": {
    description: "Description for Transparent Communication App project.",
    images: [projectImage1, projectImage2, projectImage3],
  },
  "explore-education-platform": {
    description: "Description for Explore Education Platform project.",
    images: [projectImage1, projectImage2, projectImage3],
  },
}

export default function ProjectImages({ slug }: ProjectImagesProps) {
  const data = projectData[slug] ?? projectData["growfollows-website"]

  return (
    <div className="bg-gradient-to-t  from-[#0E3B76] to-[#0A0A0A] py-16 ">
    <section className="flex flex-col gap-8 container mx-auto ">
      {/* Description */}
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl md:text-5xl text-white  font-playfari font-normal"> Styleguide &
           <span className="font-semibold"> Description</span>
        </h2>
        <p className=" text-gray-300">{data.description}</p>
      </div>

      {/* Images Row */}
   {/* Images Row */}
{/* Images Row */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  {data.images.slice(0, 3).map((img, idx) => (
    <div
      key={idx}
      className={`
        relative w-full rounded-xl overflow-hidden shadow-lg
        ${idx === 0 ? "md:col-span-4 h-[400px] md:h-[550px]  aspect-square" : "md:col-span-2 h-[400px] md:h-[500px] aspect-[3/4]"}
      `}
    >
      <Image src={img} alt={`Project image ${idx + 1}`} fill className="object-cover" />
    </div>
  ))}
</div>


    </section>
    </div>
  )
}
