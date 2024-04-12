import { axiosInstance } from "./helper"


//students apis 
export const GET_ALL_USER_DETAILS=async()=>{
  return  await axiosInstance.get('/course/get-all-student-course')
}