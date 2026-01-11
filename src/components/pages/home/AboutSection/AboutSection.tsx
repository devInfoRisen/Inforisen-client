import { AboutHero } from "./AboutHero";
import { CeoMessage } from "./CeoMessage";


export default function AboutSection() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <div className="container mx-auto  py-16">
        <AboutHero />
        <CeoMessage />
      </div>
    </main>
  )
}
