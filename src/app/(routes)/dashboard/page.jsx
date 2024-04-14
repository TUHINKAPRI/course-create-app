"use client";

import Loading from "@/components/Loading";
import { useAllUserCourse } from "@/hooks/course_hook";
import { useSelector } from "react-redux";
import DashboardHeader from "./_components/DashboardHeader";
import Link from "next/link";
import DashboardAnalysis from "./_components/DashboardAnalysis";
import { useFetchInstructorDetails } from "@/hooks/auth_hook";
import CourseCard from "../courses/_components/CourseCard";
function Dashboard() {
  const { isLogin,user } = useSelector((state) => state.user);
  const { data, isLoading, isError } = useAllUserCourse(user?.accountType==="Student"?(true):(false));
  const {data:insData,isLoading:insLoading}=useFetchInstructorDetails(user?.accountType==='Instructor'?true:false)

  console.log(insData);

  console.log(data)
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {isLogin ? (
        <>
          <div className="p-4">
            <DashboardHeader user={user} />
            <DashboardAnalysis/>
            <div className="p-3 bg-white rounded-md mt-3">
                <p className="my-2 mx-3">My course</p>
                <div className="w-[200px]">
                {
                  data?.data?.course?.map((ele,index)=>(
                   <idv className="w-[200px]" key={index}>
                   <CourseCard    course={ele}   />
                   </idv>
                  ))
                }
                </div>
            </div>
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
