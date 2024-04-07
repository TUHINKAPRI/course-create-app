import { GET_ALL_CATEGORIES } from "@/utils/services/categories_api";
import { GET_ALL_COURSES } from "@/utils/services/course_api";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export const useGetAllCourses=()=>{
  return useQuery({ queryKey: ["all_courses"], queryFn: GET_ALL_COURSES });
}

export const useFetchCategories=()=>{
  return useQuery({ queryKey: ["fetch_categories"], queryFn:GET_ALL_CATEGORIES})
}