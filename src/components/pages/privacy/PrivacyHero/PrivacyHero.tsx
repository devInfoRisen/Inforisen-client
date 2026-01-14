import { Button } from "@/components/ui/MyButton/MyButton";
import PrimaryButton from "@/components/ui/MyButton/PrimaryButton";
import Link from "next/link";

export default function PrivacyHero() {
  return (
    <header
      role="banner"
      className="relative overflow-hidden bg-gradient-to-b from-[#f8f8f8] to-[#f0f0f0]"
    >
      {/* Left Rounded Colors Bubble */}
      <div className="lg:w-[380px] lg:h-[380px] md:w-[250px] sm:w-[250px] w-[300px] md:h-[250px] sm:h-[250px] h-[300px] absolute left-0 top-10 rounded-full blur-[100px] bg-gradient-to-b from-[#EFA6C1] to-[#F4BDFF] z-0 "></div>
      <div className="lg:w-[380px] lg:h-[380px] md:w-[250px] sm:w-[250px] w-[300px] md:h-[250px] sm:h-[250px] h-[300px] absolute  left-0 bottom-10 rounded-full blur-[100px] bg-gradient-to-b from-[#EFA6C1] to-[#F4BDFF] z-0 lg:block md:block hidden"></div>

      {/* Right Rounded Colors Bubble */}
      <div className="lg:w-[380px] lg:h-[380px] md:w-[250px] sm:w-[250px] w-[300px] md:h-[250px] sm:h-[250px] h-[300px] absolute right-[-20px] top-10 rounded-full blur-[100px] bg-gradient-to-b from-[#1EB9A280] to-[#617BFC80] z-0 lg:block md:block hidden"></div>
      <div className="lg:w-[380px] lg:h-[380px] md:w-[250px] sm:w-[250px] w-[300px] md:h-[250px] sm:h-[250px] h-[300px] absolute  right-0 bottom-10 rounded-full blur-[100px] bg-gradient-to-b from-[#1EB9A280] to-[#617BFC80] z-0 "></div>

      {/* Left Side Shades */}
      <div className="h-full absolute lg:left-0 lg:w-[80px] md:w-[60px] sm:w-[40px] w-[40px] md:left-0 sm:left-0 left-0 border-1 border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10 "></div>
      <div className="h-full absolute lg:left-[80px] lg:w-[80px] md:w-[60px] sm:w-[40px] w-[40px] md:left-[60px] sm:left-[40px] left-[40px] border-1 border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10"></div>
      <div className="h-full absolute lg:left-[160px] lg:w-[80px] md:w-[60px] sm:w-[40px] w-[40px] md:left-[120px] sm:left-[80px] left-[80px] border-1 border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10"></div>
      <div className="h-full absolute lg:left-[240px] lg:w-[80px] md:w-[60px] sm:w-[40px] w-[40px] md:left-[180px] sm:left-[120px] left-[120px] border-1 border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10"></div>
      <div className="h-full absolute lg:left-[320px] lg:w-[80px] md:w-[60px] sm:w-[40px] w-[40px] md:left-[240px] sm:left-[160px] left-[160px] border-1 border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10"></div>
      <div className="h-full absolute lg:left-[400px] lg:w-[80px] md:w-[60px] sm:w-[40px] w-[40px] md:left-[300px] sm:left-[200px] left-[200px] border-1 border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10"></div>

      {/* Right Side Shade */}
      <div className="h-full absolute lg:right-0 lg:w-[80px] md:w-[60px] sm:w-[40px] w-[40px] md:right-0 sm:right-0 right-0 border-1 border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10 "></div>
      <div className="h-full absolute lg:right-[80px] lg:w-[80px] md:w-[60px] sm:w-[40px] w-[40px]  md:right-[60px] sm:right-[40px] right-[40px] border-1 border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10"></div>
      <div className="h-full absolute lg:right-[160px] lg:w-[80px] md:w-[60px] sm:w-[40px] w-[40px]  md:right-[120px] sm:right-[80px] right-[80px] border-1 border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10"></div>
      <div className="h-full absolute lg:right-[240px] lg:w-[80px] md:w-[60px] sm:w-[40px] w-[40px]  md:right-[180px] sm:right-[120px] right-[120px] border-1 border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10"></div>
      <div className="h-full absolute lg:right-[320px] lg:w-[80px] md:w-[60px] sm:w-[40px] w-[40px]  md:right-[240px] sm:right-[160px] right-[160px] border-1 border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10"></div>
      <div className="h-full absolute lg:right-[400px] lg:w-[80px] md:w-[60px] sm:w-[40px] w-[40px]  md:right-[300px] sm:right-[200px] right-[200px] border-1 border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10"></div>

      <div className="flex h-full justify-center items-center min-h-[800]">
        <div className="relative text-center z-20 h-full">
          {/* Main Heading – SEO friendly */}
          <h1 className="mb-6 text-5xl  font-medium leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            <span className="">Privacy</span>
             <span className="font-playfair italic"> Policy</span>
          </h1>

          {/* Subheading */}
               

       
        </div>
      </div>
    </header>
  );
}
