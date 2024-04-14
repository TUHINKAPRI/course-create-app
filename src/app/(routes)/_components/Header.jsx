"use client";
import qs from "query-string";
import React, { useEffect, useState } from "react";
import { Search, BellDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
function Header() {
  const router=useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    const query = qs.stringifyUrl({
      url: window.location.pathname,
      query: data,
    });
    router.push(query, { scroll: false });
    
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="flex justify-between p-4 my-4 rounded-md bg-white">
        <div className="flex border gap-2 p-2 rounded-md">
          <Search className="h-5 w-5 md:w-5 " />
          <input
            type="text"
            {...register("search")}
            placeholder="Search..."
            className="outline-none w-[150px] md:w-full"
          />
        </div>
        <div className="flex items-center gap-">
          <Button>Search</Button>
          {/* <BellDot className="text-gray-500 "/> */}
        </div>
      </div>
    </form>
  );
}

export default Header;
