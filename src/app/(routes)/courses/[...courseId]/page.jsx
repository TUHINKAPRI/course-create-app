"use client";
import React, { useEffect } from "react";

import CourseVideoDescription from "./_components/CourseVideoDescription";
import { useParams } from "next/navigation";
import { useFetchSignleCourse } from "@/hooks/course_hook";
import CourseEnrollSection from "./_components/CourseEnrollSection";
import CourseContent from "./_components/CourseContent";
import AdditionalDeatils from "./_components/AdditionalDeatils";
import Image from "next/image";
function Course_preview() {
  const p = useParams();
  const { data, isLoading } = useFetchSignleCourse(p.courseId[0]);

  if (isLoading) {
    return (
      <div className="w-full   h-screen flex justify-center items-center ">
        <div class="border-gray-300 h-14 w-14 animate-spin rounded-full border-8 border-t-blue-600" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      <div className="col-span-2 bg-white p-4">
        <CourseVideoDescription course={data?.data?.course} />
        <CourseContent course={data?.data?.course} />
      </div>
      <div>
        <Image
          src={data?.data?.course?.thumbnail}
          alt="banner"
          width={300}
          height={300}
          className="rounded-md hidden md:block mb-4 h-[230px] w-[300px]"
        />
        <CourseEnrollSection course={data?.data?.course} />
        <AdditionalDeatils course={data?.data?.course} />
      </div>
    </div>
  );
}

export default Course_preview;
