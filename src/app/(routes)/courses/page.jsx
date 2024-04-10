"use client";

import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";
import SideBanner from "./_components/SideBanner";
import Header from "../_components/Header";

function Course() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      <div className=" col-span-1 sm:col-span-2 md:col-span-3">
        <WelcomeBanner />
        <Header />
        <CourseList />
      </div>
      <div className="p-5 bg-white rounded-xl">
        <SideBanner />
      </div>
    </div>
  );
}

export default Course;
