// app/page.tsx
import AboutSection from "@/components/pages/home/AboutSection/AboutSection";
import CardSection from "@/components/pages/home/CardSection/CardSection";
import { ContactForm } from "@/components/pages/home/Contact-form/ContactForm";
import { FaqSection } from "@/components/pages/home/FaqSection/Faq-section";
import MarqueeNav from "@/components/pages/home/MarqueNav/MarqueNav";
import { NewsletterCta } from "@/components/pages/home/NewsLetter/NewsLetter";
import { ServicesGrid } from "@/components/pages/home/ServiceGrid/Service-Grid";
import Story from "@/components/pages/home/Stories/Storeis";
import { Testimonials } from "@/components/pages/home/Testimonial/Testimonial";
import { WhyChooseUs } from "@/components/pages/home/WhyChooseUs/WhyChooseUs";
import { WorkingProcess } from "@/components/pages/home/Working-Process/WorkingProcess";
import HeroSection2 from "@/components/pages/home/HeroSection/HeroSection2";

// Use Next.js App Router Metadata for SEO
export const metadata = {
  title: "InfoRisen – Reveal Your Advantage & Transform for Growth",
  description:
    "We create digital experiences, products, and services across the globe. Transform your business into genuine momentum.",
  robots: "index, follow",
  canonical: "https://www.inforisen.com/",
  keywords: [
    "digital transformation",
    "business growth",
    "digital experiences",
    "product design",
    "service innovation",
    "UX/UI design",
    "digital agency",
    "InfoRisen"
  ],
  openGraph: {
    title: "InfoRisen – Reveal Your Advantage & Transform for Growth",
    description:
      "We create digital experiences, products, and services across the globe. Transform your business into genuine momentum.",
    url: "https://www.inforisen.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InfoRisen – Reveal Your Advantage & Transform for Growth",
    description:
      "We create digital experiences, products, and services across the globe. Transform your business into genuine momentum.",
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection2 />

      {/* Marquee Nav */}
      <MarqueeNav />

      {/* Card Section */}
      <CardSection />

      {/* Story Section */}
      <Story />

      {/* About Section */}
      <AboutSection />

      {/* Working Process Section */}
      <WorkingProcess />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Form */}
      <ContactForm />

      {/* Newsletter Call-to-Action */}
      <NewsletterCta />
    </main>
  );
}
