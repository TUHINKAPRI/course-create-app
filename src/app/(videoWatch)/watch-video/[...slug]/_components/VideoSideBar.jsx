import { useFetchVideoUrl } from "@/hooks/course_hook";
import React from "react";
import { Video } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
function VideoSideBar({ course, setVideoNoIndex, setVideoSectionIndex }) {
  const router = useRouter();
  const clickHandler = (data) => {
    setVideoNoIndex(data?.videoSubsectionId);
    setVideoSectionIndex(data?.videoSectionId);
  };
  return (
    <div>
      <h2 className="font-semibold mt-3 text-center">couser content</h2>
      <hr className="   my-3 md:my-3" />
      <div>
        <Accordion type="single" collapsible className="w-full">
          {course?.courseContent?.map((course, index) => (
            <AccordionItem value={course?._id}>
              <AccordionTrigger className="text-[15px] hover:bg-gray-200 md:p-3">
                <div className="flex justify-between  w-full ">
                  <h2>
                    {course?.sectionName?.slice(0, 30)}
                    {course?.sectionName?.length > 29 && <> ...</>}
                  </h2>
                  <p className="text-sm hidden md:block md:px-3 ">
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
                    <button
                      className="flex gap-3 font-semibold"
                      onClick={() => {
                        clickHandler({
                          videoSectionId: course?._id,
                          videoSubsectionId: sub?._id,
                        });
                      }}
                    >
                      <Video className="w-[15px]" />
                      <p>{sub?.title}</p>
                    </button>
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

export default VideoSideBar;
