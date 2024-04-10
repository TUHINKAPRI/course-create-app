import React from "react";
import VideoPlayer from "./VideoPlayer";
import { Badge } from "@/components/ui/badge";

function CourseVideoDescription({ course }) {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">{course?.courseName}</h2>
      <div className="mb-4 mt-2 flex gap-3" >
        <Badge variant="secondary" className="bg-primary text-white">
          Best seller
        </Badge>
        <h2 className="text-[14px] text-gray-500">
         created by_ {course?.instructor?.name}
        </h2>
      </div>

      {course && <VideoPlayer url={"/banner.mp4"} />}
      <h2 className="mt-5 font-semibold text-[17px]">About this course</h2>
      <div className="text-[13px]  p-2">{course?.description}</div>
    </div>
  );
}

export default CourseVideoDescription;
