"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import UserDeatilsForm from "./_components/UserDeatilsForm";

function Profile() {
  const { isLogin } = useSelector((state) => state.user);

  return (
    <div>
      {isLogin ? (
        <>
          <div>
            <UserDeatilsForm />
          </div>
        </>
      ) : (
        <>
          <div className="w-full mb-5 flex h-[300px] justify-center flex-col  items-center ">
            <p className="font-semibold my-8"> You Need To Login First</p>
            <Link
              href="/sign-in"
              className="border hover:bg-purple-950 transition ease-in-out px-6 py-2 bg-primary text-white  rounded-md "
            >
              Login
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
