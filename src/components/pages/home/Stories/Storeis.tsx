"use client";

import { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import arrow from "@/assets/logo/arrow.png";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "@/assets/card1.png";
import SectionHeader from "@/components/shared/SectionTopHeader/SectionTopHeader";

const stories = [
  {
    id: 1,
    name: "Jonathan Doe",
    title: "Oval CEO",
    company: "edvive",
    image: image1,
    video: "/video1.mp4",
  },
  {
    id: 2,
    name: "Jonathan Doe",
    title: "Oval CEO",
    company: "edvive",
    image: image1,
   video: "/video1.mp4",
  },
  {
    id: 3,
    name: "Jonathan Doe",
    title: "Oval CEO",
    company: "edvive",
    image: image1,
   video: "/video1.mp4",
  },
  {
    id: 4,
    name: "Jonathan Doe",
    title: "Oval CEO",
    company: "edvive",
    image: image1,
   video: "/video1.mp4",
  },
  {
    id: 5,
    name: "Jonathan Doe",
    title: "Oval CEO",
    company: "edvive",
    image: image1,
   video: "/video1.mp4",
  },
  {
    id: 6,
    name: "Jonathan Doe",
    title: "Oval CEO",
    company: "edvive",
    image: image1,
    video: "/video1.mp4",
  },
  {
    id: 7,
    name: "Jonathan Doe",
    title: "Oval CEO",
    company: "edvive",
    image: image1,
   video: "/video1.mp4",
  },
  // ... other items
];

function NextArrow({ onClick }: { onClick?: React.MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-0 right-0 translate-x-0 -translate-y-1/2 z-30 bg-black/60 backdrop-blur-md border border-white/20 text-white p-3 rounded-full shadow-lg hover:bg-black/80 transition-all duration-200"
      aria-label="Next slide"
    >
      <ChevronRight size={24} />
    </button>
  );
}

function PrevArrow({ onClick }: { onClick?: React.MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-0 right-16 translate-x-0 -translate-y-1/2 z-30 bg-black/60 backdrop-blur-md border border-white/20 text-white p-3 rounded-full shadow-lg hover:bg-black/80 transition-all duration-200"
      aria-label="Previous slide"
    >
      <ChevronLeft size={24} />
    </button>
  );
}

export default function SuccessStories() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16  grid grid-cols-1">
      <div className="container mx-auto">
        {/* Header */}
        <SectionHeader
  label="CLIENT STORIES"
  title="Success Stories"
  titleSecondLine="That"
  italicTitle="Insprise us"
  arrowSrc={arrow}
  arrowTop="-10%"
  arrowLeft="18%"
/>

        {/* Slider Container – arrows positioned relative to this */}
        <div className="relative pb-4">
          <Slider {...settings}>
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story }: { story: (typeof stories)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="">
      <div
        className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image / Video */}
        <div className="absolute inset-0">
          {isHovered ? (
            <video
              src={story.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={story.image}
              alt={story.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          )}
        </div>

        {/* Play Icon – shown only when not hovered */}
        {!isHovered && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-16 h-16 md:w-10 md:h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/40 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white/40">
              <Play className="text-white fill-white ml-1" size={20} />
            </div>
          </div>
        )}

        {/* Text Overlay – shown only when not hovered */}
        {!isHovered && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
            <div className="bg-white/15 backdrop-blur-md  p-2 border border-white/20">
              <h3 className="text-white  text-[12px] md:text-[14px] tracking-tight">
                {story.name}
              </h3>
              <p className="text-gray-200 text-[12px] mt-0.5">
                {story.title}
              </p>
              <p className="text-gray-300/90 text-[12px]  font-medium ">
                {story.company}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}