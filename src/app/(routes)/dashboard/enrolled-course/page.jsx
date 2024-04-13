"use client";
import Loading from "@/components/Loading";
import { useAllUserCourse } from "@/hooks/course_hook";
import React from "react";
import Link from "next/link";
import CourseCard from "../../courses/_components/CourseCard";
function EnrolledCourse() {
  const { data, isLoading, isError } = useAllUserCourse();
console.log(data)
  if (isLoading) {
    return <Loading />;
  }

  const course = data?.data?.course;
  return (
    <div className=" max-w-2xl  mx-auto md:max-w-4xl">
      <h1 className="text-center text-2xl py-8 font-blod">Enrolled Courses</h1>
      <div className="bg- py-4 ">
        {course?.length > 0 ? (
          <div className='flex flex-wrap justify-start gap-4  '>
            {course?.map((ele, index) => (
              <div key={index} className="w-[210px] ">
                <CourseCard course={ele} />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="w-full flex h-[300px] justify-center flex-col  items-center ">
              <p className="font-semibold my-4">
                {" "}
                You have not any enrolled courses
              </p>
              <Link
                href="/courses"
                className="border hover:bg-purple-950 transition ease-in-out px-6 py-2 bg-primary text-white  rounded-md "
              >
                Enroll Now
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default EnrolledCourse;
