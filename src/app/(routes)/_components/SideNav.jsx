import React from "react";
import { BookOpen, BadgeIcon, GraduationCap } from "lucide-react";
import Image from "next/image";
function SideNav() {
  const menu = [
    {
      id: 1,
      name: "All courses",
      icon: BookOpen,
    },
    {
      id: 2,
      name: "Memberships",
      icon: BadgeIcon,
    },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
    },
  ];
  return (
    <div className="p-5 border bg-white shadow-sm h-screen">
      <Image src="/logo1.png" height={80} width={170} alt="logo" />
      {/* menu lists */}
      <hr className="mt-6" />
      <div className="mt-6">
        {menu.map((ele, index) => (
          <div className=" group flex gap-3 mt-1 p-3 tex-[20px] text-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200">
            <ele.icon className="group-hover:animate-bounce" />
            <h2>{ele.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
