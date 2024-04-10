import {
  GET_ALL_CATEGORIES,
  GET_ALL_COURSES,
  GET_SINGLE_COURSE,
} from "@/utils/services/course_api";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export const useGetAllCourses = () => {
  return useQuery({ queryKey: ["all_courses"], queryFn: GET_ALL_COURSES });
};

export const useFetchCategories = () => {
  return useQuery({
    queryKey: ["fetch_categories"],
    queryFn: GET_ALL_CATEGORIES,
  });
};

export const useFetchSignleCourse = (data) => {
  return useQuery({
    queryKey: ["fetch_single_course"],
    queryFn: () => GET_SINGLE_COURSE(data),
  });
};
