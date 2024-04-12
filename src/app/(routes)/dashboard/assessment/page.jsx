import React from "react";
import Link from "next/link";
function assessment() {
  return (
    <div className="w-full flex h-[400px] justify-center flex-col  items-center ">
      <p className="font-semibold my-4">
        {" "}
        You have not any assingment right now
      </p>
      <Link
        href="/courses"
        className="border hover:bg-purple-950 transition ease-in-out px-6 py-2 bg-primary text-white  rounded-md "
      >
        All Courses
      </Link>
    </div>
  );
}

export default assessment;
