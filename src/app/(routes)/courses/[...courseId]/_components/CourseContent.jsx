import React, { useState } from "react";
import { Video } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function CourseContent({ course }) {
  return (
    <div className="  mt-5 bg-white rounded-sm">
      <h2 className="font-bold">Courese Content</h2>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {course?.courseContent?.map((course, index) => (
            <AccordionItem value={course?._id}>
              <AccordionTrigger className="text-[15px] hover:bg-gray-200 p-3">
                <div className="flex justify-between  w-full ">
                  <h2>
                    {course?.sectionName?.slice(0, 30)}
                    {course?.sectionName?.length > 29 && <> ...</>}
                  </h2>
                  <p className="text-sm px-3 ">
                    {course?.subSection?.length > 0 ? (
                      <>{course?.subSection?.length} lectures </>
                    ) : (
                      <></>
                    )}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3">
                {course?.subSection?.map((sub, index) => (
                  <div
                    key={index}
                    className=" flex justify-between cursor-pointer  ms-4 items-center text-sm "
                  >
                    <div className="flex gap-3 font-semibold">
                      <Video className="w-[15px]" />
                      <p>{sub?.title}</p>
                    </div>
                    <div className="text-xs mx-5">{sub?.timeDuration}</div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default CourseContent;
