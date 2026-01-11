"use client";

import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { ArrowUpRight } from "lucide-react";

const ForPc = () => {
  return (
    <div className="w-full flex justify-center pt-4">
      {/* Glass Navbar */}
      <div className="container hidden lg:flex items-center justify-between px-6 py-3
        rounded-2xl
        bg-white/70 backdrop-blur-md
        shadow-lg border border-white/40
      ">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 w-48">
          <Image
            src={logo}
            alt="Inforisen"
            width={160}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8 text-sm font-bold text-gray-700">
          <NavMenu />
        </div>

        {/* Contact Button */}
      <Link href="/contact">
  <div className="group flex items-center gap-3 px-5 py-2">
    <span className="text-sm font-bold text-gray-800">
      Contact Us
    </span>

    {/* Circle stays fixed */}
    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 group-hover:bg-[#0E3B76]">
      {/* Arrow rotates */}
      <ArrowUpRight
        size={16}
        className="
          text-white
          transition-transform duration-300 ease-out
          group-hover:rotate-45
          group-active:rotate-90 
          
        "
      />
    </span>
  </div>
</Link>


      </div>
    </div>
  );
};

export default ForPc;
