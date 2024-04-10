import {
  GET_ALL_CATEGORIES,
  GET_ALL_COURSES,
  GET_SINGLE_COURSE,
} from "@/utils/services/course_api";
import { CREATE_PAYMENT } from "@/utils/services/payment_api";
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
export const useCreatePayment = (succesHandler) => {
  return useMutation({
    mutationFn: CREATE_PAYMENT,
    cacheTime:0,
    onSuccess: (data) => {
      succesHandler(data)
      return data;
    },
    onError: (error) => {
      console.log(error);
      if (error?.response?.data?.success === false) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
};
