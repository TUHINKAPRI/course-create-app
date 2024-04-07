import { axiosInstance } from "./helper"



export const GET_ALL_CATEGORIES=async()=>{
  return await axiosInstance.get('/categories')
}