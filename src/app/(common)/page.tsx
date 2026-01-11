import AboutSection from "@/components/pages/home/AboutSection/AboutSection";
import CardSection from "@/components/pages/home/CardSection/CardSection";
import MarqueeNav from "@/components/pages/home/MarqueNav/MarqueNav";
import Story from "@/components/pages/home/Stories/Storeis";


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
    </>
  );
};

export default HompPage;
