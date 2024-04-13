"use client";

import Loading from "@/components/Loading";
import { useAllUserCourse } from "@/hooks/course_hook";
import { useSelector } from "react-redux";
import DashboardHeader from "./_components/DashboardHeader";
import Link from "next/link";
import DashboardAnalysis from "./_components/DashboardAnalysis";
function Dashboard() {
  // const { data, isLoading, isError } = useAllUserCourse();
  const { isLogin,user } = useSelector((state) => state.user);
  console.log(user);
  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <div>
      {isLogin ? (
        <>
          <div className="p-4">
            <DashboardHeader user={user} />
            <DashboardAnalysis/>
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex h-[400px] justify-center flex-col  items-center ">
            <p className="font-semibold my-4"> You Need To Login First</p>
            <Link
              href="/sign-in"
              className="border hover:bg-purple-950 transition ease-in-out px-6 py-2 bg-primary text-white  rounded-md "
            >
              Sign-in
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
