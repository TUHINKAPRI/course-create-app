import { axiosInstance } from "./helper"


//students apis 
export const GET_ALL_USER_DETAILS=async()=>{
  return  await axiosInstance.get('/course/get-all-student-course')
}


export const UPDATE_PROFILE_INFO=async(data)=>{
return await axiosInstance.put('/profile/update-profile',data)
}


export const GET_ALL_ACCOUNT_INFO=async()=>{
  return  await axiosInstance.get('/profile/get-profile-details')
}


export const UPDATE_PROFILE_PIC=async(data)=>{
  return await axiosInstance.put('/profile/update-profile-picture',data)
}


export const FETCH_INSTRUCTOR_DETAILS=async()=>{
  return  await axiosInstance.get('/profile/instructorDashboard')
}