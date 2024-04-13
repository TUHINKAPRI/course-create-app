import { SIGN_IN, SIGN_UP } from "@/utils/services/auth_api";
import { UPDATE_PROFILE_INFO } from "@/utils/services/user_api";
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
