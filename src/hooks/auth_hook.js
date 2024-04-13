import { SIGN_IN, SIGN_UP } from "@/utils/services/auth_api";
import {
  FETCH_INSTRUCTOR_DETAILS,
  GET_ALL_ACCOUNT_INFO,
  UPDATE_PROFILE_INFO,
  UPDATE_PROFILE_PIC,
} from "@/utils/services/user_api";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const user_signup = () => {
  return useMutation({
    mutationFn: SIGN_UP,
    onSuccess: (data) => {
      if (data?.data?.success) {
        toast.success(data?.data?.message);
      }
      return data;
      // queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
    onError: (error) => {
      if (error?.response?.data?.success === false) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
};

export const user_signin = () => {
  return useMutation({
    mutationFn: SIGN_IN,
    onSuccess: (data) => {
      if (data?.data?.success) {
        localStorage.setItem("token", JSON.stringify(data?.data?.token));
        localStorage.setItem("user", JSON.stringify(data?.data?.user));
        toast.success(data?.data?.message);
      }
      return data;
    },
    onError: (error) => {
      if (error?.response?.data?.success === false) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
};

export const useUpdateProfie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UPDATE_PROFILE_INFO,
    onSuccess: (data) => {
      if (data?.data?.success) {
        localStorage.setItem("user", JSON.stringify(data?.data?.data));
        toast.success(data?.data?.message);
        // queryClient.invalidateQueries({ queryKey: [''] })
      }
      return data;
    },
    onError: (error) => {
      if (!error?.response?.data?.success) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
};

export const useFetchUserInfo = () => {
  return useQuery({
    queryKey: ["use_info"],
    queryFn: GET_ALL_ACCOUNT_INFO,
  });
};

export const useUpdateProfilePic = () => {
  return useMutation({
    
    mutationFn: UPDATE_PROFILE_PIC,
    onSuccess: (data) => {
      localStorage.setItem("user",JSON.parse(data?.data?.data))
      toast.success(data?.data?.message);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};


export const useFetchInstructorDetails=(data)=>{
  return useQuery({
    queryFn:['getInstructorDetails'],
    queryFn:FETCH_INSTRUCTOR_DETAILS,
    enabled:data
  })
}