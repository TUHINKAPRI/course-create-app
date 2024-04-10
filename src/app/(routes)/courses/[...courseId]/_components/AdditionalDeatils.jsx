import React from "react";
import { Dot } from "lucide-react";
function AdditionalDeatils({ course }) {
  return (
    <div>
      <div className="bg-white mt-3 rounded-md p-3">
        <h2 className="font-bold mb-2">whatWeWillLearn</h2>
        <div className="flex flex-col gap-2">
          {course?.whatWeWillLearn?.map((ele, index) => (
            <p className="text-xs font-semibold flex gap-1" key={index}>
              <Dot />
              <span>{ele}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="bg-white mt-3 rounded-md p-3">
        <h2 className="font-bold mb-2">requirements</h2>
        <div className="flex flex-col gap-2">
          {course?.requirements?.map((ele, index) => (
            <p className=" flex gap-1 " key={index}>
              <Dot />
              <span className="text-xs font-semibold">{ele}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdditionalDeatils;
