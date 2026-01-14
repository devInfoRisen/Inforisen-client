import { CoreValues } from "@/components/pages/about/CoreValue/CoreValue"
import { NewsletterCta } from "@/components/pages/home/NewsLetter/NewsLetter"
import PortfolioDetailHero from "@/components/pages/portfolio/PortfolioDetailHero/PortfolioDetailHero"
import ProjectImages from "@/components/pages/portfolio/PortfolioImages/PortfolioImages"
import ProjectImpact from "@/components/pages/portfolio/PortfolioImpact/PortfolioImpact"
import ProjectDetails from "@/components/pages/portfolio/ProjectDetails/ProjectDetails"
import RelatedProjects from "@/components/pages/portfolio/RelatedProjects/RelatedProjects"
import BrandPotential from "@/components/pages/Services/BradPotential/brandPotential"

interface PageProps {
  params: {
    slug: string
  }
}

export default function Page({ params }: PageProps) {
  const { slug } = params

  return (
    <div>
      <PortfolioDetailHero slug={slug}  />
      <ProjectDetails slug={slug}  />
      <ProjectImages slug={slug}  />
      <ProjectImpact/>
      <RelatedProjects/>
      <BrandPotential/>
      <NewsletterCta/>
     
    </div>
  )
}
