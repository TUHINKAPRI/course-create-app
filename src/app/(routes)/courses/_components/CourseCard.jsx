import React from "react";
import Image from "next/image";
import Link from 'next/link'
function CourseCard({ course }) {
  return (
    <Link href={`/courses/${course?._id}`}>
      <div className="border rounded-xl hover:shadow-md cursor-pointer hover:shadow-purple-300">
      <Image
        src={course?.thumbnail}
        height={150}
        width={500}
        alt="Banner Image"
        className="rounded-t-xl h-[150px] w-[500px] "
      />
      <div className="flex flex-col gap-1 p-2">
        <h className="font-medium">{course?.courseName.slice(0,23)} ...</h>
        <h2 className="text-[12px] text-gray-400 ">
          {course?.instructor?.name}
         
        </h2>
        <div className="flex items-center gap-2">
          <Image
            src="/education.png"
            height={20}
            width={20}
            alt="Banner Image"
          />
          <h2 className="text-[12px] text-gray-400"> Click To View </h2>

        </div>
          <div>
            
          </div>
      </div>
    </div>
    </Link>
  );
}

export default CourseCard;
