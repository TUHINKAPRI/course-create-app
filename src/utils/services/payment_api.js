import { axiosInstance } from "./helper"


export const CREATE_PAYMENT=async(data)=>{
  console.log(data)
return axiosInstance.post('/payment/capture-payments',data)
}