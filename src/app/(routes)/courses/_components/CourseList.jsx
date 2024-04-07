import { useFetchCategories, useGetAllCourses } from "@/hooks/course_hook";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseCard from "./CourseCard";

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
                {categories?.data?.data?.map((category, index) => (
                  <SelectItem value={category?._id} key={index}>
                    {category?.name}
                  </SelectItem>
                ))}
              </>
            )}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        {course_loading ? (
          <>
            <span>Loading...</span>
          </>
        ) : (
          <>
            {course?.data?.data?.map((course, index) => (
              <>
                <CourseCard key={index} course={course} />
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default CourseList;
