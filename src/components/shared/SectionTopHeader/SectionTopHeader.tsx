"use client";

import Image from "next/image";

interface SectionHeaderProps {
  label?: string;
  title: string;
  titleSecondLine?: string;
  italicTitle?: string;
  arrowSrc: any;
  arrowTop?: string;
  arrowLeft?: string;
}

export default function SectionHeader({
  label = "WORK INDUSTRY",
  title,
  titleSecondLine,
  italicTitle,
  arrowSrc,
  arrowTop = "-10%",
  arrowLeft = "22%",
}: SectionHeaderProps) {
  return (
    <div className="mb-12 relative">
      {/* Label */}
      <p className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
        <span className="text-xl text-blue-600">•</span>
        {label}
      </p>

      {/* Arrow */}
      <div
        className="mb-4 absolute transform -translate-x-1/2 flex justify-center"
        style={{ top: arrowTop, left: arrowLeft }}
      >
        <Image
          src={arrowSrc}
          alt="Section Arrow"
          className="relative max-w-[200px] object-contain"
        />
      </div>

      {/* Title */}
      <h1 className=" text-4xl md:text-5xl leading-tight">
        <span className="font-bold text-gray-900">
          {title}
          <br />
          {titleSecondLine}
        </span>
        {italicTitle && (
          <span className=" font-playfair"> {italicTitle}</span>
        )}
      </h1>
    </div>
  );
}
