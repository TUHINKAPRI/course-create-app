import React from "react";
import { Search ,BellDot } from "lucide-react";
import { Button } from "@/components/ui/button";
function Header() {
  return (
    <div className="flex justify-between p-4 bg-white">
      <div className="flex border gap-2 p-2 rounded-md">
        <Search className="h-5 w-5 " />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-500 "/>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
