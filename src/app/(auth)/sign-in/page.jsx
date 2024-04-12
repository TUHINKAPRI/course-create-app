"use client";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { user_signin } from "@/hooks/auth_hook";
import { redirect } from "next/navigation";
function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isSuccess, status } = user_signin();
  const formSubmitHandler = (data, e) => {
    e.preventDefault();
    mutate(data);
  };
  if (isSuccess) {
    redirect("/dashboard");
  }
  return (
    <section className=" mt-4  mx-auto dark:bg-gray-900">
      <div className="flex flex-col w-[360px] mx-auto items-center justify-center px-6 py-8 md:mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8  ">
            <div className=" flex justify-center ">
              <Image src="/logo1.png" width={200} height={200} alt="banner" />
            </div>

            <form
              className="space-y-4 md:space-y-3"
              onSubmit={handleSubmit(formSubmitHandler)}
            >
              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  id="password"
                  placeholder="email"
                  className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

              <Button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <Loader2
                  className={`mr-2 h-4 w-4 animate-spin ${
                    status === "pending" ? "block" : "invisible"
                  } `}
                />{" "}
                sign-In
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Crteate an account?{" "}
                <Link
                  href="/sign-up"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  <span className="text-primary">create account here</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin;
