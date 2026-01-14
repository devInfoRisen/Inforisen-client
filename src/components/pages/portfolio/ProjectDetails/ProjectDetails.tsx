"use client"

import Image from "next/image"
import projectImage1 from "@/assets/portdetails1.png"
import projectImage2 from "@/assets/portdetails2.png"
import projectImage3 from "@/assets/portdetails3.png"
import projectImage4 from "@/assets/portdetails4.png"

interface ProjectDetailsProps {
  slug: string
}

const projectDetailsData: Record<string, any> = {
  "growfollows-website": {
    
    description: "Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable. Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable. Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable. Your brand is design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable.",
    problem: "Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable. Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable. Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable. Your brand is design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable.",
    solution: "Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable. Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable. Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable. Your brand is design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable.",
   
    images: [
      projectImage1,
      projectImage2,
      projectImage3,
      projectImage4,
    ]
  },
  "transparent-communication-app": {
    description: "Description for Transparent Communication App project.",
    problem: "Problems found for Transparent Communication App project.",
    solution: "Solution for Transparent Communication App project.",
    images: [projectImage1, projectImage2, projectImage3]
  },
  "explore-education-platform": {
    description: "Description for Explore Education Platform project.",
    problem: "Problems found for Explore Education Platform project.",
    solution: "Solution for Explore Education Platform project.",
    images: [projectImage1, projectImage2, projectImage3]
  }
}

export default function ProjectDetails({ slug }: ProjectDetailsProps) {
  const data = projectDetailsData[slug] ?? projectDetailsData["growfollows-website"]

  return (
    <section className="flex flex-col gap-16 max-w-6xl mx-auto py-12">
      
      {/* Project Description */}
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl md:text-5xl font-semibold">Project <span className="font-playfair font-normal">Description</span></h2>
        <p className="text-gray-700">{data.description}</p>
        <div className="relative  h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <Image src={data.images[0]} alt="Project description" fill className="object-cover" />
        </div>
      </div>

      {/* Problems Found */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold italic">Problems Found</h2>
        <p className="text-gray-700">{data.problem}</p>
        <div className="relative w-full h-[400px] md:h-[550px] rounded-xl overflow-hidden shadow-lg">
          <Image src={data.images[1]} alt="Problems found" fill className="object-cover" />
        </div>
      </div>

      {/* Our Solution */}
   <div className="flex flex-col gap-6">
  <h2 className="text-2xl md:text-3xl font-semibold italic">Our Solution</h2>
  <p className="text-gray-700">{data.solution}</p>

  <div className="flex gap-4 w-full h-[300px] md:h-[400px] aspect-[3/4] rounded-xl overflow-hidden ">
    {/* Image 1 */}
    <div className="relative w-1/2 h-full aspect-[3/4] rounded-lg overflow-hidden">
      <Image
        src={data.images[2]}
        alt="Our solution"
        fill
        className="object-cover"
      />
    </div>

    {/* Image 2 */}
    <div className="relative w-1/2 h-full aspect-[4/3] rounded-lg overflow-hidden">
      <Image
        src={data.images[3]}
        alt="Our solution"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>


    </section>
  )
}
