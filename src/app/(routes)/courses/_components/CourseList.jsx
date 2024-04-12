import { useFetchCategories, useGetAllCourses } from "@/hooks/course_hook";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseCard from "./CourseCard";
import { Search, BellDot } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

function CourseList() {
  const { data: course, isLoading: course_loading } = useGetAllCourses();
  const { data: categories, isLoading: categories_loading } =
    useFetchCategories();
  return (
    <div className="p-5 bg-white rounded-lg mt-4">
      <div className="flex justify-between">
        <h className="text-[20px] text-primary fond-blod">All Courses</h>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
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
        {course_loading ? (
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
            {course?.data?.course?.length > 0 ? (
              <>
                {course?.data?.course?.map((course, index) => (
                  <>
                    <CourseCard key={index} course={course} />
                  </>
                ))}
              </>
            ) : (
              <div>No data Found for this category</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CourseList;
