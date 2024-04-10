"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { nav, sidebarNav } from "@/constants/navlink";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathname = usePathname();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [path, setPath] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const users = localStorage.getItem("user");
    setUser(JSON.parse(users));
    setToken(JSON.parse(token));
    setPath(pathname);
  }, [pathname]);
  return (
    <header className="header  bg-white  sticky py-1 md:py-0 top-0 shadow-md grid grid-cols-3 items-center justify-between px-8 py-02">
      {/* logo */}
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              {" "}
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="w-[250px]">
            <SheetHeader>
              <div className="">
                <SheetTitle className="text-">Study Sphere</SheetTitle>
                <hr className="w-full mt-3" />
              </div>
              <nav className=" text  col-auto ">
                <ul className="flex flex-col items-start">
                  {nav?.map((item, index) => (
                    <SheetClose asChild key={index}>
                      <Link
                        href={item.path}
                        className={`p-1 border-2 ${
                          path === item.path ? "text-primary" : ""
                        } border-primary border-opacity-0  hover:text-primary duration-200 cursor-pointer active`}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                  <hr className="w-full my-1" />

                  {sidebarNav?.map((item, index) => (
                    <SheetClose asChild>
                      <Link
                        href={`${item.path}`}
                        key={index}
                        className={`p-1 border-2 ${
                          path === item.path ? "text-primary" : ""
                        } border-primary border-opacity-0  hover:text-primary duration-200 cursor-pointer active`}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}

                  <hr className="w-full my-1" />
                </ul>
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <h1 className="col-span-1  ">
        <Link href="/">
          <Image src="/logo1.png" height={80} width={170} alt="logo" />
        </Link>
      </h1>
      {/* navigation */}
      <nav className=" text mx-5 col-auto hidden md:block">
        <ul className="flex items-center">
          {nav.map((item, index) => (
            <li
              className="p-4 border-b-2 border-primary border-opacity-0 hover:border-opacity-100 hover:text-primary duration-200 cursor-pointer active"
              key={index}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className=" col-span-1 mx-5 flex justify-end">
        <div className="flex items-center gap-4">
          {token ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Image
                    className="relative cursor-pointer  inline-block h-11 w-11 rounded-full object-cover object-center"
                    alt="Image placeholder"
                    height={40}
                    width={40}
                    src={user?.profile_image}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mr-5">
                  <DropdownMenuLabel>wellcome {user?.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={"buttom"}
                    // onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                      <Link href="/">profile</Link>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                      Right
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href="/sign-in">
              <Button className="hidden md:block">Get Started</Button>
              <button
                className="
              border-0
              bg-primary
              text-white
              rounded-md
              w-9
              h-9
              duration-300
              block md:hidden
              hover:opacity-75

            "
                type="button"
              >
                <MoveRight className="mx-1" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
