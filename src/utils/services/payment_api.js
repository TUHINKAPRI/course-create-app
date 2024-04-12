import { axiosInstance } from "./helper"


export const CREATE_PAYMENT=async(data)=>{
  console.log(data)
return axiosInstance.post('/payment/capture-payments',data)
}





export const VERIFY_PAYMENT=async(data)=>{
  return axiosInstance.post('/payment/verify-payments',data)
}