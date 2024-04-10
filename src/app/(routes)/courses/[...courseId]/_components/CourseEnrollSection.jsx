import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
function CourseEnrollSection({ course }) {
  return (
    <div className="p-3 text-center bg-primary rounded-sm flex flex-col gap-3">
      <h2 className="text-[24px] font-bold text-white">Enroll To The Course</h2>
      <h2 className="text-white font-semibold">
        Enroll Now To Start Leaarning And Buildeing The Project
      </h2>
      <Button className="bg-white text-primary hover:bg-white hover:text-primary">
        Enroll Now Just{" "}
        <span className="mx-2">
          <Image src="/rupee.png" alt="logo" height={15} width={15} />
        </span>{" "}
        {course?.price}
      </Button>
    </div>
  );
}

export default CourseEnrollSection;
