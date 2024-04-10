import React from "react";
import SideNav from "./_components/SideNav";


function layout({ children }) {
  return (
    <div>
      <div className="w-64 hidden fixed md:block border">
        <SideNav />
      </div>
      <div className="md:ml-64">
     
       {children}
      </div>
    </div>
  );
}

export default layout;
