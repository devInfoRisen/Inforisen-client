/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */

'use client';

import Image from 'next/image';
import image1 from "@/assets/design.png"
import { Button } from '@/components/ui/MyButton/MyButton';
import Link from 'next/link';

export default function DesignImpactSection() {
  return (
    <section className="lg:py-16 py-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-12  ">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 w-full   relative">
          <div className=" rounded-2xl">
            <Image
              src={image1} // Replace with actual image path
              alt="Design Impact Visual"
              width={600}
              height={400}
              className="w-full h-[600px] rounded-xl object-contain"
            />
          </div>
        </div>

        {/* Right Side - Text & Button */}
        <div className="lg:w-1/2 w-full text-justify">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Design that <br /> creates <span className="font-playfair font-normal">the impact</span>
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable. Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable. Your brand's design speaks before you do. 80% of consumers recognize a brand just by its design & color! We use color psychology to design your brand to be memorable.
          </p>
           <Link href="/contact">
          <Button iconType='arrow-up-right' >
            Create Your UX UI Design
           
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}