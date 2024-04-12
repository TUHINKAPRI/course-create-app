import React from "react";

function Loading() {
  return (
    <div className="w-full   h-screen flex justify-center items-center ">
      <div className="border-gray-300 h-14 w-14 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
}

export default Loading;
