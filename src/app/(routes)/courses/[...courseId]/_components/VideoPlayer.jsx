import React from "react";

function VideoPlayer({ url }) {
  return (
    <div>
      <video
        height={250}
        width={1000}
        muted
        loop
        autoPlay
        className="rounded-sm"
      >
        <source src="/banner.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
