"use client";

import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { user_signup } from "@/hooks/auth_hook";
function Signup() {

  const { mutate,isSuccess, status } = user_signup();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [active, setActive] = useState("Student");
  const formSubmitHnadler = async (data, e) => {
    e.preventDefault();
    mutate(data);
  };
  if(isSuccess){
    redirect('/sign-in')
  }
  useEffect(() => {
    register("accountType", { required: true });
    setValue("accountType", active ? active : "Student");
  }, [active]);
  return (
    <section className=" mt-4 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-2 md:space-y-2 sm:p-6  ">
            <div className=" flex justify-center ">
              <Image src="/logo1.png" width={200} height={200} alt="banner" />
            </div>

            <form
              className="space-y-2 md:space-y-1"
              onSubmit={handleSubmit(formSubmitHnadler)}
            >
              {/* name */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                  required=""
                />
              </div>
              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  id="password"
                  placeholder="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/* password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  password
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              {/* confirm-password */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", { required: true })}
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              {/* account type */}
              <div className="py-2">
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Account type
                </label>
                <div className="grid grid-cols-2 gap-1 bg-white">
                  <Button
                    type="button"
                    className={`bg-white border col-span-1 focus:bg-primary hover:text-white  focus:text-white ${
                      active == "Student"
                        ? "bg-primary text-white"
                        : "bg-white text-black"
                    }  "
                 `}
                    onClick={() => {
                      setActive("Student");
                    }}
                  >
                    Student
                  </Button>
                  <Button
                    type="button"
                    className={`bg-white border focus:bg-primary hover:text-white focus:text-white ${
                      active == "Instructor"
                        ? "bg-primary text-white"
                        : "bg-white text-black"
                    }  "
                 `}
                    onClick={() => {
                      setActive("Instructor");
                    }}
                  >
                    Instructor
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={status === "pending" ? true : false}
                className="w-full  text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <Loader2
                  className={`mr-2 h-4 w-4 animate-spin ${
                    status === "pending" ? "block" : "invisible"
                  } `}
                />{" "}
                Sign-up
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  <span className="text-primary text-semibold">Login here</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
