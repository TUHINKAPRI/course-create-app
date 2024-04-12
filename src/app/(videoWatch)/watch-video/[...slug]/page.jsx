"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useFetchVideoUrl } from "@/hooks/course_hook";
import VideoSideBar from "./_components/VideoSideBar";
import Loading from "@/components/Loading";
import VideoPlayer from "./_components/VideoPlayer";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function WatchVideo({ params }) {
  const { slug } = params;
  const courseId = slug[0];
  const sectionId = slug[1];
  const subsectionId = slug[2];
  const { data, isLoading, isError } = useFetchVideoUrl({
    courseId,
    sectionId,
    subsectionId,
  });
  const [videoNoIndex, setVideoNoIndex] = useState(0);
  const [videoSectionIndex, setVideoSectionIndex] = useState(0);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="block flex justify-between  md:hidden p-t-4 px-4 mx-3 mt-3 bg-white    ">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="bg-primary my-2 text-white">Content</Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <SheetFooter>
              <SheetClose asChild>
                <VideoSideBar
                  course={data?.data?.course}
                  setVideoNoIndex={setVideoNoIndex}
                  setVideoSectionIndex={setVideoSectionIndex}
                />
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <Button className="bg-primary my-2 text-white">Mark As Done</Button>
      </div>

      <div className="grid grid-col-1   gap-3 p-3 md:grid-cols-3">
        <div className=" bg-white h-screen px-2  hidden md:col-span-1 md:block">
          <VideoSideBar
            course={data?.data?.course}
            setVideoNoIndex={setVideoNoIndex}
            setVideoSectionIndex={setVideoSectionIndex}
          />
        </div>

        <div className=" bg-white col-span-2">
          {data && (
            <VideoPlayer
              courseContent={data?.data?.course?.courseContent}
              subsectionId={
                videoNoIndex
                  ? videoNoIndex
                  : data?.data?.course?.courseContent[0]?.subSection[0]?._id
              }
              sectionId={
                videoSectionIndex
                  ? videoSectionIndex
                  : data?.data?.course?.courseContent[0]?._id
              }
            />
          )}
        </div>
      </div>
    </>
  );
}

export default WatchVideo;
