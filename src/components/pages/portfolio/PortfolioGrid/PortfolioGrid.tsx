"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import image1 from "@/assets/portfolio1.png"
import image2 from "@/assets/portfolio2.png"

export const projectsData = [
  { id: 1, slug: "growfollows-website", title: "Growfollows Website", category: "Website Design", image: image1 },
  { id: 2, slug: "transparent-communication-app", title: "Transparent Communication", category: "Website Design", image: image2 },
  { id: 3, slug: "transparent-communication-mobile", title: "Transparent Communication", category: "Website Design", image: image1 },
  { id: 4, slug: "explore-education-platform", title: "Transparent Communication", category: "Website Design", image: image2 },
  { id: 5, slug: "explore-education-platform", title: "Transparent Communication", category: "Website Design", image: image2 },
  { id: 6, slug: "explore-education-platform", title: "Transparent Communication", category: "Website Design", image: image2 },
  { id: 7, slug: "explore-education-platform", title: "Transparent Communication", category: "Website Design", image: image2 },
  { id: 8, slug: "explore-education-platform", title: "Transparent Communication", category: "Website Design", image: image2 },
]

const ITEMS_PER_PAGE = 6

export function PortfolioGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const [rightColumnMargin, setRightColumnMargin] = useState(0)
  const leftColumnRef = useRef<HTMLDivElement>(null)

  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentProjects = projectsData.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const leftColumnProjects = currentProjects.filter((_, index) => index % 2 === 0)
  const rightColumnProjects = currentProjects.filter((_, index) => index % 2 === 1)

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  // Dynamically set right column top margin to half of first left card
  useEffect(() => {
    if (leftColumnRef.current) {
      const firstCard = leftColumnRef.current.children[0] as HTMLElement
      if (firstCard) {
        setRightColumnMargin(firstCard.offsetHeight / 2)
      }
    }
  }, [currentProjects])

  const ProjectCard = ({ project }: { project: (typeof projectsData)[0] }) => (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="flex flex-col gap-4">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] md:aspect-[4/2.25] rounded-2xl overflow-hidden bg-muted">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <span className="inline-flex w-fit px-3 py-1 text-xs font-medium text-black bg-gray-300 rounded-full border border-border">
              {project.category}
            </span>
            <h3 className="text-lg font-semibold text-black group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

           <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 group-hover:bg-[#0E3B76]">
      {/* Arrow rotates */}
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
    </Link>
  )

  return (
    <section className="w-full py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-[120px] container mx-auto">
        {/* Left Column */}
        <div ref={leftColumnRef} className="flex flex-col gap-10 lg:gap-[120px]">
          {leftColumnProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Right Column */}
        <div
          className="flex flex-col gap-10 lg:gap-[120px]"
          style={{ marginTop: rightColumnMargin }}
        >
          {rightColumnProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-16">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                currentPage === page ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  )
}
