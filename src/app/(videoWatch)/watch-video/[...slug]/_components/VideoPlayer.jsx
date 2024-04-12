"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
function VideoPlayer({ courseContent, subsectionId, sectionId }) {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    console.log("use effect" + subsectionId);
    let videoURL = courseContent?.filter((ele) => {
      if (ele._id === sectionId) {
        for (let eles of ele?.subSection) {
          if (eles._id === subsectionId) {
            setUrl(eles);
          }
        }
      }
    });
  }, [sectionId, subsectionId, courseContent]);
  console.log(url);
  return (
    <div className="mx-auto h-screen  md:mt-6 w-full flex-col   flex">
      <div className="m-4 flex items-center justify-between">
    
        <div className="flex items-center">
        <p>Name-</p>
        <p className="font-semibold text-sm md:px-3">{url?.title}</p>
        </div>
        <Button className="bg-primary my-2 text-white">Mark As Done</Button>
      </div>

      <div className="mx-auto mt-0 flex  px-3 ">
        {url && (
          <ReactPlayer
            url={url?.videoUrl}
            controls={true}
            width="100%"
            heigth="100%"
          />
        )}
      </div>
      <div className="px-3 mt-3">
        <h1 className="font-semitbold">Description</h1>
        <p>
          A course description is a brief overview of a course that provides
          information about the course's content, structure, and objectives. It
          also helps students understand the course's learning experience. A
          course description is used by prospective students, employers,
          accreditors, and other institutions
        </p>
      </div>
    </div>
  );
}

export default VideoPlayer;
