"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const menuItem = (href: string, label: string) => {
    const isActive = pathname === href;

    return (
      <Link href={href}>
        <span
          className={cn(
            "relative cursor-pointer text-sm  text-gray-800 transition-colors duration-200",
            "hover:text-blue-600",
            isActive && "text-blue-600"
          )}
        >
          {label}

          {/* underline */}
          <span
            className={cn(
              "absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 scale-x-0 transition-transform duration-300 origin-left",
              "group-hover:scale-x-100",
              isActive && "scale-x-100"
            )}
          />
        </span>
      </Link>
    );
  };

  return (
    <nav className={cn("flex items-center gap-8", className)}>
     
      {menuItem("/about-us", "About")}
      {menuItem("/services", "Services")}
      {menuItem("/works", "Works")}
      {menuItem("/team", "Team")}
    </nav>
  );
};

export default NavMenu;
