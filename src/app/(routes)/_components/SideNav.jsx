"use client";

import React, { useEffect, useState } from "react";
import { BookOpen, BadgeIcon, GraduationCap,Gauge } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { sidebarNav } from "@/constants/navlink";
function SideNav() {
  const [path, setPath] = useState(null);


  const paths = usePathname();
  useEffect(() => {
    setPath(paths);
  }, [paths]);
  return (
    <div className="p-5 border bg-white shadow-sm h-screen">
      {/* <Image src="/logo1.png" height={80} width={170} alt="logo" /> */}
      {/* menu lists */}
      <hr className="mt-6" />
      <div className="mt-6">
        {sidebarNav.map((ele, index) => (
          <Link href={`${ele.path}`}>
            <div
              className={`group flex gap-3 mt-1 p-3 tex-[20px] text-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200  ${
                path?.includes(ele.path) && "bg-primary text-white"
              } `}
            >
         
              <ele.icon className="group-hover:animate-bounce" />
              <h2>{ele.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
