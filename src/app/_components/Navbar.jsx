"use client";
import { LogIn } from "lucide-react";
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
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { nav, sidebarNav } from "@/constants/navlink";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { log_out } from "@/utils/redux/slices/userSlice";
function Navbar() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);
  console.log(isLogin);
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState(null);
  const [path, setPath] = useState(null);
  useEffect(() => {
    const users = localStorage.getItem("user");
    setUser(JSON.parse(users));

    setPath(pathname);
  }, [pathname, isLogin]);
  console.log(user);
  return (
    <header className="header  bg-white z-40  sticky py-1 md:py-0 top-0 shadow-md grid grid-cols-3 items-center justify-between px- py-02">
      {/* logo */}
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button variant="" className="ms-3 bg-white ">
              <div className="block md:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
                <span className="sr-only">Menu</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
            </button>
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
                    <SheetClose asChild key={index}>
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
      <h1 className="col-span-1 ms-3 ">
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
      {/*  token   last profile or login section */}
      <div className=" col-span-1 mx-5 flex justify-end">
        <div className="flex items-center gap-4">
          {isLogin ? (
            <>
              <div>
                <div className="flex flex-shrink-0 items-center ml-auto">
                  <DropdownMenu className="focus-visible:ring-0 focus-visible:ring-offset-0">
                    <DropdownMenuTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0">
                      <div className="inline-flex items-center pt-1 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                        <span className="sr-only">User Menu</span>
                        <div className="hidden lg:flex lg:flex-col lg:items-end md:leading-tight">
                          <span className="font-semibold">{user?.name}</span>
                          <span className="text-sm text-gray-600">
                            {user?.accountType}
                          </span>
                        </div>
                        <span className="h-10 w-10 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                          <img
                            src={user?.profile_image}
                            alt="user profile photo"
                            className="h-full w-full object-cover"
                          />
                        </span>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="hidden sm:block h-6 w-6 text-gray-300"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>
                        <Link href="/dashboard/profile">My account</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {/* <DropdownMenuItem>
                        <Link href="/cart">Cart</Link>
                      </DropdownMenuItem> */}
                      {/* <DropdownMenuItem>
                        <Link href='/' >
                          Wishlist
                        </Link>
                      </DropdownMenuItem> */}
                      <DropdownMenuItem>
                        <Link href="/dashboard/enrolled-course">My course</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <div
                          className=""
                          onClick={() => {
                            dispatch(log_out());
                            router.refresh();
                          }}
                        >
                          Log-out
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <div className="border-l pl-1 hidden  sm:flex sm:pl-3  ml-1 sm:ml-3 space-x-1">
                    <DropdownMenu className="focus-visible:ring-0 focus-visible:ring-offset-0">
                      <DropdownMenuTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0">
                        <div className="relative  p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                          <span className="sr-only">Notifications</span>
                          <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                          <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                          <svg
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                          </svg>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          Not have any notification
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <button
                      className="relative hidden md:block p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
                      onClick={() => {
                        dispatch(log_out());
                        router.refresh();
                      }}
                    >
                      <span className="sr-only">Log out</span>
                      <svg
                        aria-hidden="true"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Link href="/sign-in">
              <Button className="hidden md:block">Get Started</Button>
              <button
                className="
              border-0
              // bg-primary
              // text-white
              rounded-md
              w-9
              h-9
              duration-300
              block md:hidden
              hover:opacity-75
              bg-white

            "
                type="button"
              >
                <LogIn className="mx-1 text-gray-600" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
