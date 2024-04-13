"use client"

import React, { useEffect, useState } from "react";
import { Search, BellDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from 'next/link'

import { usePathname } from "next/navigation";
function Header() {
  const [path, setPath] = useState(null);
  const paths = usePathname();
  useEffect(() => {
    setPath(paths);
  }, [paths]);
  
  return (
    <div className="flex justify-between p-4 my-4 rounded-md bg-white">
      

      <div className="flex border gap-2 p-2 rounded-md">
        <Search className="h-5 w-5 md:w-5 " />
        <input type="text" placeholder="Search..." className="outline-none w-[150px] md:w-full" />
      </div>
      <div className="flex items-center gap-">
        <Button>Search</Button>
        {/* <BellDot className="text-gray-500 "/> */}
      </div>
    </div>
  );
}

export default Header;
