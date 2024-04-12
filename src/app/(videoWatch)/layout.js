import React from "react";
import VideoSideBar from "./_components/VideoSideBar";

function layout({ children }) {
  return (
    <div className="grid grid-col-1  gap-3 p-4 md:grid-cols-3">
      <div className=" bg-white h-screen px-2  hidden md:col-span-1 md:block">
        <VideoSideBar />
      </div>
      <div className=" bg-white col-span-2">{children}</div>
    </div>
  );
}

export default layout;
