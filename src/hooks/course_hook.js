import {
  GET_ALL_CATEGORIES,
  GET_ALL_COURSES,
  GET_SINGLE_COURSE,
  GET_VIDEO_URL,
} from "@/utils/services/course_api";
import toast from "react-hot-toast";
import { CREATE_PAYMENT, VERIFY_PAYMENT } from "@/utils/services/payment_api";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { GET_ALL_USER_DETAILS } from "@/utils/services/user_api";

export const useGetAllCourses = () => {
  return useQuery({ queryKey: ["all_courses"], queryFn: GET_ALL_COURSES });
};

export const useFetchCategories = () => {
  return useQuery({
    queryKey: ["fetch_categories"],
    queryFn: GET_ALL_CATEGORIES,
  });
};

export const useAllUserCourse = (data) => {
  return useQuery({
    queryKey: ["getAllCourse"],
    queryFn: GET_ALL_USER_DETAILS,
    enabled:data
  });
};

export const useFetchVideoUrl=(data)=>{
  return useQuery({
    queryKey: ["getVideoUrl"],
    queryFn:()=>GET_VIDEO_URL(data)
  })
}

export const useFetchSignleCourse = (data) => {
  return useQuery({
    queryKey: ["fetch_single_course"],
    queryFn: () => GET_SINGLE_COURSE(data),
  });
};
export const useCreatePayment = (succesHandler) => {
  return useMutation({
    mutationFn: CREATE_PAYMENT,
    cacheTime: 0,
    onSuccess: (data) => {
      succesHandler(data);
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

export const useVerifyPayment = () => {
  return useMutation({
    mutationFn: VERIFY_PAYMENT,
    cacheTime: 0,
    onSuccess: (data) => {
      console.log(data);
      if (data?.data?.success) {
        toast.success(data?.data?.message);
      }
      return data;
    },
    onError: (error) => {
      console.log(error?.response?.data?.message);
      if (error?.response?.data?.success === false) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
};
