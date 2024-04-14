"use client";
import qs from "query-string";

import { useFetchCategories } from "@/hooks/course_hook";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseCard from "./CourseCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

function CourseList({refetch}) {
  const {courses}=useSelector(state=>state.courses)
 const searchParams = useSearchParams();
  const router=useRouter()
  const { data: categories, isLoading: categories_loading } =
    useFetchCategories();

  const newUrl = qs.parse(searchParams);
  const handleFilter = (data) => {
    newUrl["category"] = data;
    const value = qs.stringifyUrl({
      url: window.location.pathname,
      query: newUrl,
    });
    router.push(value, { scroll: false });
    refetch();
  };
const allCourseTrigger=()=>{
  router.push(window.location.pathname)
  refetch();
}
  return (
    <div className="p-5 bg-white rounded-lg mt-4">
      <div className="flex justify-between">
        <h2 className="text-[20px] text-primary fond-blod cursor-pointer " onClick={()=>{
          allCourseTrigger()
        }}>All Courses</h2>
        <Select      
          onValueChange={(data) => {
           
            handleFilter(data);
          }}
        >
          <SelectTrigger className="w-[180px] text-black">
            <SelectValue placeholder="Filters"  />
             
     
          </SelectTrigger>
          <SelectContent>
          
            {categories_loading ? (
              <>
                <span>Loading....</span>
              </>
            ) : (
              <>
                {categories?.data?.categories?.map((category, index) => (
                  <SelectItem value={category?._id} key={index}>
                    {category?.name}
                  </SelectItem>
                ))}
              </>
            )}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        {false ? (
          <>
            {[1, 2, 3, 4, 5, 6].map((ele, index) => (
              <div
                className="w-full h-[240px]  rounded-xl bg-slate-200 p-2 m-2 animate-pulse"
                key={index}
              >
                <Skeleton className="h-[170px]  full rounded-xl" />
                <div className="space-y-2 mt-3">
                  <Skeleton className="h-4 w-full " />
                  <Skeleton className="h-4 w-full  " />
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {courses.length > 0 ? (
              <>
                {courses?.map((course, index) => (
                  <div key={index}>
                    <CourseCard key={index} course={course} />
                  </div>
                ))}
              </>
            ) : (
              <div>No data Found ... </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CourseList;
