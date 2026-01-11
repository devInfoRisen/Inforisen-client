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


const HompPage = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <div className="min-h-[400px]">
        it's home page
      </div>
      <MarqueeNav/>
      <CardSection/>
      <Story />
      <AboutSection/>
      <WorkingProcess/>
      <ServicesGrid/>
      <WhyChooseUs/>
      <Testimonials/>
      <FaqSection/>
      <ContactForm/>
      <NewsletterCta/>
    </>
  );
};

export default HompPage;
