"use client";
import React from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription";
import { redirect, useParams } from "next/navigation";
import { useFetchSignleCourse, useVerifyPayment } from "@/hooks/course_hook";
import CourseEnrollSection from "./_components/CourseEnrollSection";
import CourseContent from "./_components/CourseContent";
import AdditionalDeatils from "./_components/AdditionalDeatils";
import Image from "next/image";
import Loading from "@/components/Loading";
function Course_preview() {
  const p = useParams();
  const { data, isLoading } = useFetchSignleCourse(p.courseId[0]);
  const {
    mutate: mutates,
    data: payment_data,
    status: statuss,
    isSuccess,
  } = useVerifyPayment();
  console.log(statuss, isSuccess);
  if (isSuccess) {
    redirect("/dashboard/enrolled-course");
  }
  if (statuss === "pending") {
    return <Loading />;
  }
  if (isLoading) {
    return <Loading />;
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
        <CourseEnrollSection course={data?.data?.course} mutates={mutates} />
        <AdditionalDeatils course={data?.data?.course} />
      </div>
    </div>
  );
}

export default Course_preview;
