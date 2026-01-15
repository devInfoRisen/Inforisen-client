"use client";

import logo from "@/assets/logo/logo.png";
import { Drawer, Space } from "antd";
import Image from "next/image";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import NavMenu from "./NavMenu";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ForMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 lg:hidden">
      {/* Logo */}
      <Link href="/">
        <div className="flex z-10 items-center h-16 w-32">
          <Image
            src={logo}
            alt="Logo"
            width={250}
            height={50}
            className="object-contain"
          />
        </div>
      </Link>

      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg hover:bg-gray-100 transition"
      >
        <IoMenu size={26} />
      </button>

      {/* Drawer */}
      <Drawer
        placement="left"
        width="85%"
        open={open}
        onClose={() => setOpen(false)}
        closeIcon={false}
        bodyStyle={{ padding: 0 }}
        extra={
          <Space>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <IoClose size={26} />
            </button>
          </Space>
        }
      >
        {/* Glass Header */}
       <div className="px-4 py-4 border-b bg-white/70 backdrop-blur-md">
  <Link href="/" className="inline-block">
    <Image
      src={logo}
      alt="Logo"
      width={140}
      height={40}
      className="object-contain cursor-pointer"
    />
  </Link>
</div>


        {/* Content */}
        <div className="px-4 py-6 space-y-6">
          {/* Main Nav */}
          <div onClick={() => setOpen(false)}>
            <NavMenu className="flex-col gap-4 text-base" />
          </div>

          {/* Contact Us Button (same as PC) */}
          <Link href="/contact" onClick={() => setOpen(false)}>
            <div className="group flex items-center justify-between px-5 py-3 bg-white rounded-xl shadow">
              <span className="text-sm font-medium text-gray-800">
                Contact Us
              </span>

              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 group-hover:bg-[#0E3B76]">
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
      </Drawer>
    </div>
  );
};

export default ForMobile;
