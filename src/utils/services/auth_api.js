import { axiosInstance } from "./helper"




export const SIGN_UP=async(data)=>{
  return await axiosInstance.post('/auth/sign-up',data)
}

export const SIGN_IN=async(data)=>{
  return await axiosInstance.post('/auth/sign-in',data)
}