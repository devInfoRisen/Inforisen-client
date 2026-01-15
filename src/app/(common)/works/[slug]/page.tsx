import { NewsletterCta } from "@/components/pages/home/NewsLetter/NewsLetter"
import PortfolioDetailHero from "@/components/pages/portfolio/PortfolioDetailHero/PortfolioDetailHero"
import ProjectImages from "@/components/pages/portfolio/PortfolioImages/PortfolioImages"
import ProjectImpact from "@/components/pages/portfolio/PortfolioImpact/PortfolioImpact"
import ProjectDetails from "@/components/pages/portfolio/ProjectDetails/ProjectDetails"
import RelatedProjects from "@/components/pages/portfolio/RelatedProjects/RelatedProjects"
import BrandPotential from "@/components/pages/Services/BradPotential/brandPotential"

// Use Next.js 15+ built-in types


type Props = {
  params: Promise<{ slug: string }>
  
}

export default async function Page({ params}: Props) {
  const { slug } = await params


  return (
    <div>
      <PortfolioDetailHero slug={slug} />
      <ProjectDetails slug={slug} />
      <ProjectImages slug={slug} />
      <ProjectImpact />
      <RelatedProjects />
      <BrandPotential />
      <NewsletterCta />
    </div>
  )
}

