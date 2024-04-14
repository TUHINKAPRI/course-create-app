"use client";
import qs from "query-string";
import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";
import SideBanner from "./_components/SideBanner";
import Header from "../_components/Header";
import { useGetAllCourses } from "@/hooks/course_hook";
import Loading from "@/components/Loading";
import { useDispatch } from "react-redux";
import { allCourses } from "@/utils/redux/slices/courseSlice";
function Course() {
  const dispatch=useDispatch()
  const qury = qs.parse(window.location.search);
  const {
    data: course,
    isLoading,
    status,
    refetch,
  } = useGetAllCourses(qury);
  if (status === "success") {
    dispatch(allCourses(course?.data?.course));
  }

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      <div className=" col-span-1 sm:col-span-2 md:col-span-3">
        <WelcomeBanner />
        <Header refetch={refetch} />
        <CourseList  refetch={refetch} />
      </div>
      <div className="p-5 bg-white rounded-xl">
        <div className="block sm:hidden">
          <h2 className="font-semibold my-4 text-center pb-4 ">Exclusive</h2>
        </div>
        <SideBanner />
      </div>
    </div>
  );
}

export default Course;
